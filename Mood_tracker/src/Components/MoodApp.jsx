import React from "react";
import { datalist } from "../Utils/data";
import "../Styles/styles.css";

class MoodApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moods: datalist(),
    };
  }

  render() {
    return (
      <div className="card">
        <h1>Mood Tracker</h1>
        <div>
          {this.state.moods.map((mood) => (
            <div key={mood.id}>
              <h2 className="moods">{mood.mood}</h2>
              <p>{mood.date}</p>
              <p>{mood.note}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MoodApp;