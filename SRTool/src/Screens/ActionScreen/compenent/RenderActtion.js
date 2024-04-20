import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import CostumeBtn from "../../../Component/CostumeBtn";
import PreviousAct from "./PreviousAct";

const RenderActtion = () => {
  const [srtQues, setSrtQues] = useState("what kind of violation you suspect?");
  const [isSubmit, setIsSubmit] = useState(false);
  const [answer, setAnswer] = useState([]);

  const [val, setVal] = useState([]);
  const [previousAction, setPreviousAction] = useState([]);
  useEffect(() => {}, [val, previousAction]);
  console.log("previousAction", answer);

  console.log("previousAction", previousAction);

  //   <CostumeBtn
  //   key={index}
  //   title={plcy.policies}
  //   txtHover={"#fff"}
  //   bckColor={"#fff"}
  //   hoverColor={"black"}
  //   txtColor={"black"}
  //   onPress={() => setIShow(plcy.policies)}
  // />

  const policiesBooks = [
    {
      name: "BullyingAndHarassment",
      policies: "BullyingAndHarassment",
      policyHeader: "BullyingAndHarassment",
      subLine: "policyB",
      srtQuestions: "what part of the policy you think it violate ?",
      container: [
        {
          name: "policyB",
          tile: "policyB",
          srtQuestions: "what policy line would be fitting for this content ?",
          container: [
            {
              name: "policyC",
              tile: "policyC",
              submit: true,
            },
          ],
        },
      ],
    },
    {
      name: "policy",
      policies: "policyA",
      policyHeader: "BullyingAndHarassment",
      subLine: "policyB",
      container: [
        {
          name: "policyB",
          tile: "policyB",
          container: [
            {
              name: "policyC",

              tile: "policyC",
              container: [
                {
                  name: "policyD",

                  tile: "policyD",
                  submit: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "policy",
      policies: "policyA",
      policyHeader: "BullyingAndHarassment",
      subLine: "policyB",
      container: [
        {
          name: "policyB",
          tile: "policyB",
          container: [
            {
              name: "policyC",

              tile: "policyC",
              container: [
                {
                  name: "policyD",

                  tile: "policyD",
                  submit: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  return (
    <View
      style={{
        width: "20%",
        height: "100%",
        borderColor: "black",
        borderWidth: 1,
        flexDirection: "column",
      }}
    >
      {srtQues ? (
        <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
          {srtQues}
        </Text>
      ) : null}
      <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
        action will show here
      </Text>
      {previousAction.length > 0 ? (
        <PreviousAct previousAction={previousAction} />
      ) : null}
      {isSubmit ? (
        <>
          <Text>submit</Text>
          <CostumeBtn
            title={"back"}
            txtHover={"#fff"}
            bckColor={"#fff"}
            hoverColor={"black"}
            txtColor={"black"}
            onPress={() => {
              setVal([]);

              setPreviousAction([]);
              setIsSubmit(false);
            }}
          />
        </>
      ) : (
        <>
          {val.length > 0 ? (
            <>
              {val.map((vl, index) => (
                <>
                  <CostumeBtn
                    key={index}
                    title={vl.name}
                    txtHover={"#fff"}
                    bckColor={"#fff"}
                    hoverColor={"black"}
                    txtColor={"black"}
                    onPress={() => {
                      if (vl.srtQuestions) {
                        setAnswer((prev) => [
                          ...prev,
                          { question: srtQues, answer: `Yes, ${vl.name}` },
                        ]);
                        setSrtQues(vl.srtQuestions);
                      }
                      if (vl.submit) {
                        setIsSubmit(true);
                        setSrtQues("");
                        setPreviousAction((prev) => [
                          ...prev,
                          [
                            {
                              name: vl.name,
                              policies: vl.policies,
                              srtQuestions: vl.srtQuestions,
                            },
                          ],
                        ]);
                      }
                      if (vl.container && vl.container.length > 0) {
                        setVal(vl.container);
                        setPreviousAction((prev) => [
                          ...prev,
                          [
                            {
                              name: vl.name,
                              policies: vl.policies,
                              srtQuestions: vl.srtQuestions,
                            },
                          ],
                        ]);

                        if (!vl.srtQuestions) {
                          setSrtQues();
                        }
                      }
                    }}
                  />
                  <CostumeBtn
                    title={"back"}
                    txtHover={"#fff"}
                    bckColor={"#fff"}
                    hoverColor={"black"}
                    txtColor={"black"}
                    onPress={() => {
                      setPreviousAction([]);
                      setIsSubmit(false);
                      setVal([]);
                    }}
                  />
                </>
              ))}
            </>
          ) : (
            <>
              {policiesBooks.map((plcy, index) => (
                <>
                  <CostumeBtn
                    key={index}
                    title={plcy.name}
                    txtHover={"#fff"}
                    bckColor={"#fff"}
                    hoverColor={"black"}
                    txtColor={"black"}
                    onPress={() => {
                      if (plcy.srtQuestions) {
                        setAnswer((prev) => [
                          ...prev,
                          { question: srtQues, answer: `Yes, ${plcy.name}` },
                        ]);
                        setSrtQues(plcy.srtQuestions);
                      }
                      if (plcy.container.length > 0) {
                        setVal(plcy.container);
                        setPreviousAction((prev) => [
                          ...prev,
                          [
                            {
                              name: plcy.name,
                              policies: plcy.policies,
                              srtQuestions: plcy.srtQuestions,
                            },
                          ],
                        ]);
                      }
                    }}
                  />
                </>
              ))}
            </>
          )}
        </>
      )}
      <View
        style={{
          width: "100%",
          height: "auto",
          flexDirection: "column",
          marginVertical: 20,
        }}
      >
        <View
          style={{
            width: "60%",
            height: "auto",
            alignSelf: "center",
          }}
        ></View>
      </View>
    </View>
  );
};
export default RenderActtion;
