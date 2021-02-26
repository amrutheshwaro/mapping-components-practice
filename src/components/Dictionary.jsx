import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

var createCard = function (props) {
  return (
    <Card
      key={props.id}
      emoji={props.emoji}
      name={props.name}
      meaning={props.meaning}
    />
  );
};

var dictionary = function () {
  return <dl className="dictionary">{emojipedia.map(createCard)}</dl>;
};

export default dictionary;
