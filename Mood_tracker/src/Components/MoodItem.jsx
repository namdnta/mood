import React from "react";
import MoodItemBody from "./ItemBody";
import Deletebutton from "./deletebutton";
import ItemImage from "./ItemImage";

function MoodItem({ mood, onDelete }) {
  return (
    <div className="mood-item">
      <ItemImage image={mood.image} />
      <MoodItemBody item={mood} />
      <Deletebutton id={mood.id} onDelete={onDelete} />
    </div>
  );
}

export default MoodItem;