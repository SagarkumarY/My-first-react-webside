import { useState } from "react";
import React from "react";

export default function TextForm(props) {
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success")
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success")
  };
  const handleClearText = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Text cleared ", "success");
  };

  const copyText = () => {
    // const text = document.getElementById("exampleFormControlTextarea1");
    // text.select();
    // navigator.clipboard.writeText(text.value);

    const text = document.getElementById("exampleFormControlTextarea1").value;
  navigator.clipboard.writeText(text)
  props.showAlert("Copied to Clipboard", "success")
  };


  // const extraSpace = () => {
  //   const newText = text.slice(/[ ]+/);
  //   setText(newText.join(""))
  //   props.showAlert("Extra spaces removed")
  // }
  const extraSpace = () => {
    const newText = text.replace(/[ ]+/g, " "); // Replace consecutive spaces with a single space
    setText(newText);
    props.showAlert("Extra spaces removed");
  };
  

  // const textareaRef = useRef(null);

  // const handleButtonClick = () => {
  //   const textareaValue = textareaRef.current.value;
  //   const trimmedValue = textareaValue.trim();
  //   textareaRef.current.value = trimmedValue;
  // };








  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <h1> {props.heading} -</h1>
      <div className="mb-3">
        <textarea
        //  ref={textareaRef}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="7"
          value={text}
          onChange={handleOnChange}
         
        ></textarea>
        <button
          type="button"
          className="btn btn-primary my-2 "
          onClick={handleUpClick}
        >
          {" "}
          Convert to uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-3  "
          onClick={handleLowClick}
        >
          {" "}
          Convert to Lower
        </button>
        <button
          type="button"
          className="btn btn-primary mx-3  "
          onClick={handleClearText}
        >
          {" "}
          Clear text
        </button>
        <button
          type="button"
          className="btn btn-primary mx-3  "
          onClick={extraSpace}
        >
          {" "}
         Remove extra space
        </button>

        


<button type="button" className="btn btn-primary" onClick={copyText}>Copytext</button>
      </div>

      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} Wards and {text.length} Characters
        </p>
        <h5>{0.008 * text.split(" ").length} Minutes read</h5>
        <h3>preview</h3>
        <p>{text}</p>
      </div>

     
    </>
  );
}
