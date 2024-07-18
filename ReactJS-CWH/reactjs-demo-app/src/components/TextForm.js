import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick=()=>{
    console.log("uppercase button clicked");
    let newtext=text.toUpperCase();
    setText(newtext);
  }
  const handleLoClick=()=>{
    console.log("Lowercase button clicked");
    let newtext=text.toLowerCase();
    setText(newtext);
  }

  const handleOnChnage=(event)=>{
    console.log("on change");
    setText(event.target.value);
  }
  const [text, setText] = useState("Enter the text");
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          Example textarea
        </label>
        <textarea className="form-control"  value={text} onChange={handleOnChnage} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-info mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-secondary" onClick={handleLoClick}>Convert to LowerCase</button>
    </div>

    <div className="container my-3">
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length}minutes to read</p>
    <h2>Preview Text</h2>
    <p>{text}</p>
    </div>
    </>
  );
}
