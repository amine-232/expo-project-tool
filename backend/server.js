const express = require("express");
const dotenv = require("dotenv");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const cors = require("cors");
const firebase = require("firebase/compat/app");
require("firebase/compat/auth");
require("firebase/compat/firestore");
const {
  collection,
  getDocs,
  getFirestore,
  doc,
  getDoc,
  setDoc,
  addDoc,
} = require("firebase/firestore");
dotenv.config();

const { v4: uuidV4 } = require("uuid");
const { list } = require("firebase/storage");
const portSRT = 9001;

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
};

firebase.initializeApp(firebaseConfig);

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(
  cors({
    origin: "http://localhost:8081",
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.redirect(`${uuidV4()}`);
});

const db = getFirestore();

app.post("/get/users", async (req, res) => {
  try {
    const { userId } = req.body;

    if (userId) {
      const usersCollectionRef = collection(db, "users");

      const usersQuery = await getDocs(usersCollectionRef);

      const usersList = [];

      const usersDocs = usersQuery.docs.map(async (act) => {
        const userData = {
          id: act.id,
          userId: act.data().userId,
          lastName: act.data().lastName,
          name: act.data().name,
          email: act.data().email,
        };
        usersList.push(userData);
      });

      await Promise.all(usersDocs);

      console.log(usersList);

      res.json({ data: usersList });
    }
  } catch (err) {
    console.log("error:", err);
    res.json({ err: err });
  }
});

app.post("/get/reported/quee", async (req, res) => {
  try {
    const { userId } = req.body;

    if (userId) {
      // Reference to the top-level collection "Report"
      const reportsCollectionRef = collection(db, "Report");

      const subcollectionNames = [
        "Policynames",
        "Policynames",
        // add many as you need
      ];

      const newDocNames = [
        "comments",
        "group",
        "messages",
        "page",
        "post",
        "profile",
      ];

      // Get all documents from the "Report" collection
      const reportsQuerySnapshot = await getDocs(reportsCollectionRef);

      if (reportsQuerySnapshot.empty) {
        for (const newDocName of newDocNames) {
          for (const subcollectionName of subcollectionNames) {
            const subcollectionRef = collection(
              db,
              "Report",
              newDocName,
              subcollectionName
            );
            const id = "test-subcollection";
            const addedDoc = doc(subcollectionRef, id);
            await setDoc(addedDoc, {
              reportUserId: "reportId",
              reprotedUserid: "reprotedUserid",
              reportedContentId: "reportedContentId",
            });
          }
        }
      }

      const reportedList = {};

      for (const newDocName of newDocNames) {
        reportedList[newDocName] = [];

        for (const subcollectionName of subcollectionNames) {
          const newObj = { [subcollectionName]: [] }; // Creating the object with dynamic key
          reportedList[newDocName].push(newObj);
          const reportType = collection(
            reportsCollectionRef,
            newDocName,
            subcollectionName
          );

          const snaprpdoc = await getDocs(reportType);

          if (snaprpdoc) {
            const ContactsQueries = snaprpdoc.docs.map(async (sequenceDoc) => {
              const sequenceData = sequenceDoc.data();
              // Push sequenceData into the array corresponding to subcollectionName
              reportedList[newDocName][reportedList[newDocName].length - 1][
                subcollectionName
              ].push(sequenceData);
            });

            await Promise.all(ContactsQueries);
          }
        }
      }

      console.log("reportedList:", reportedList);

      res.json({ data: reportedList });
    }
  } catch (err) {
    console.log("error:", err);
    res.json({ err: err });
  }
});

app.get("/:room", (req, res) => {
  res.render("room", {
    roomId: req.params.room,
  });
});

io.on("connection", (socket) => {
  console.log("connection");
  socket.on("join-room", (userId, roomId) => {
    console.log("connection", userId, roomId);
    socket.join(roomId);
    socket.to(roomId).emit("user-joined", userId);

    socket.on("disconnect", () => {
      socket.to(roomId).emit("user-disconnected", userId);
    });
  });
});

server.listen(process.env.SERVER_PORT, () => {
  console.log(`server is runing on port: ${process.env.SERVER_PORT}`);
});

app.listen(portSRT, () => {
  console.log(`Tool Server Port is listening on port: ${portSRT}`);
});
