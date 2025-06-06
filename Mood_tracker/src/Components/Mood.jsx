import React from "react";
import "../Styles/styles.css";
import MoodInput from "./MoodInput";
import MoodItem from "./MoodItem";
import { datalist } from "../Utils/data";

class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moods: datalist (),
    };
  }

  handleAddMood = (mood) => {
    const newMood = { ...mood, id: Date.now() };
    this.setState((prevState) => ({
      moods: [...prevState.moods, newMood],
    }));
  };

  handleDeleteMood = (id) => {
    this.setState((prevState) => ({
      moods: prevState.moods.filter((mood) => mood.id !== id),
    }));
  };

  render() {
    return (
      <div className="mood-app">
        <h1>Mood Tracker</h1>
        <MoodInput onAddMood={this.handleAddMood} />
        <div className="mood-list">
          {this.state.moods.map((mood) => (
            <MoodItem key={mood.id} mood={mood} onDelete={this.handleDeleteMood} />
          ))}
        </div>
      </div>
    );
  }
}

export default Mood;