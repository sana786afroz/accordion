import React, { useState } from "react";
import Accor2 from "./Accor2";
import { QuesAns } from "./const";
export default function Accor1() {
  const [isdata, setIsData] = useState(QuesAns);
  return (
    <>
      <section>
        <h1 style={{ backgroundColor: "green" }}>React Basic Questions</h1>
        {isdata.map((element) => {
          const { id } = element;
          return <Accor2 key={id} {...element} />;
        })}
      </section>
    </>
  );
}
