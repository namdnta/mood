import React from "react";
import MoodList from "./MoodList";
import MoodInput from "./MoodInput";
import { datalist } from '../Utils/data';

class MoodApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moods: datalist(), // ← set initial data dari data.js
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
            <MoodList key={mood.id} mood={mood} onDelete={this.handleDeleteMood} />
          ))}
        </div>
      </div>
    );
  }
}

export default MoodApp;