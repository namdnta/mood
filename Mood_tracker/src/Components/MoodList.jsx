import React from "react";
import Deletebutton from "./deletebutton";

function MoodList({ mood, onDelete }) {
  return (
    <div className="mood-item">
      <div className="mood-content">
        <h3 className="mood-title">{mood.mood}</h3>
        <p className="mood-date">{new Date(mood.date).toLocaleDateString()}</p>
        <p className="mood-note">{mood.note}</p>
      </div>
      <Deletebutton id={mood.id} onDelete={onDelete} />
    </div>
  );
}

export default MoodList;