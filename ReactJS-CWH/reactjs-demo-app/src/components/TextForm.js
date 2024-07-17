import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick=()=>{
    console.log("uppercase button clicked");
    let newtext=text.toUpperCase();
    setText(newtext);
  }

  const handleOnChnage=(event)=>{
    console.log("on change");
    setText(event.target.value);
  }
  const [text, setText] = useState("Enter the text");
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          Example textarea
        </label>
        <textarea className="form-control"  value={text} onChange={handleOnChnage} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
    </div>
  );
}
