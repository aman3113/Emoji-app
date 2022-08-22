import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "😇": "innocent"
};

let emojiDisplay = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("Translation appears here");

  function changeHandler(event) {
    var inputEmoji = event.target.value;
    let meaning = emojiDictionary[inputEmoji];

    if (meaning === undefined) {
      meaning = "we don't have this emoji in data base";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }
  return (
    <div className="App">
      <h1>Let's Find Your Emoji</h1>
      <input onChange={changeHandler} placeholder={"Search emoji here"} />
      <h2>{meaning}</h2>
      <h3> {emoji}</h3>
      {emojiDisplay.map((emoji) => (
        <span onClick={() => emojiClickHandler(emoji)}>{emoji}</span>
      ))}
    </div>
  );
}
