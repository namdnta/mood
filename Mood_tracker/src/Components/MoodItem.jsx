import React from "react";
import MoodItemBody from "./ItemBody";
import Deletebutton from "./deletebutton";



function MoodItem({ mood, onDelete }) {
  return (
    <div className="mood-item">

      <MoodItemBody item={mood} />
      <Deletebutton id={mood.id} onDelete={onDelete} />
    </div>
  );
}

export default MoodItem;