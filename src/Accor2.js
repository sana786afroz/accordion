import React, { useState } from "react";

export default function Accor2({ ques, ans }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div onClick={() => setShow(!show)}>
        <p style={{ fontSize: "3rem", backgroundColor: "purple" }}>
          {show ? "-" : "+"}
        </p>
        <h1 style={{ border: "2px solid ", backgroundColor: "lightgrey" }}>
          {ques}
        </h1>
      </div>
      {show && (
        <h1 style={{ border: "2px solid ", backgroundColor: "lightgrey" }}>
          {ans}
        </h1>
      )}
    </>
  );
}
