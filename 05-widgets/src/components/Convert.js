import React, { useState, useEffect } from "react";
import axios from "axios";

const KEY = process.env.REACT_APP_SECRET_NAME;

// convert component needs to receive language and text props
const Convert = ({ language, text }) => {
  // new state to store API result
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  // useEffect#1
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text); // update the state with text
    }, 500);

    // if the text piece of state changes before 500ms, we cancel with clean up function
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  // useEffect#2
  useEffect(() => {
    const doTranslation = async () => {
      // de structuring data from the response
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: KEY,
          },
        }
      );
      // update the translated piece of state
      setTranslated(data.data.translations[0].translatedText);
    };

    doTranslation();
  }, [language, debouncedText]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
