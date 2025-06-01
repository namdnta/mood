import React from "react";
import { datalist } from "../Utils/data";

class MoodApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moods: datalist(),
    };
  }

  render() {
    return (
      <div>
        <h1>Mood Tracker</h1>
        <div>
          {this.state.moods.map((mood) => (
            <div key={mood.id}>
              <h3>{mood.mood}</h3>
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