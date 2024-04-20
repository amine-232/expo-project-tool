import React from "react";

const UidGenerator = async () => {
  const randomString = Math.random().toString(36).substring(2, 10);
  const timestamp = new Date().getTime();
  const uid = `${randomString}${timestamp}`;
  return uid;
};

export default UidGenerator;
