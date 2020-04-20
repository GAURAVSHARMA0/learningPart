import React from "react";

function HeadingLin(props) {
  return <h1 style={{ margin: "5px" }}>{props.aa}</h1>;
}

export default function Functional_com(props) {
  let aa = props.obj.map(a => {
    return (
      <>
        <div style={{ display: "inline-flex" }}>
          <HeadingLin aa={a.name} />
          <HeadingLin aa={a.age} />
        </div>
        <br />
      </>
    );
  });

  return (
    <div>
      <p>This is my house y&apos;all!</p>
      <div>{aa}</div>
    </div>
  );
}

//export default Functional_com;
