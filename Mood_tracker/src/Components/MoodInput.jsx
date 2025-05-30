import React from "react";

class MoodInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mood: "",
      note: "",
      date: new Date().toISOString().split("T")[0],
      image: null,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleImageChange = (event) => {
    this.setState({ image: URL.createObjectURL(event.target.files[0]) });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAddMood(this.state);
    this.setState({ mood: "", note: "", date: new Date().toISOString().split("T")[0], image: null });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="mood-input-form">
        <input type="text" name="mood" placeholder="Your mood" value={this.state.mood} onChange={this.handleChange} required />
        <textarea name="note" placeholder="Additional notes" value={this.state.note} onChange={this.handleChange}></textarea>
        <input type="date" name="date" value={this.state.date} onChange={this.handleChange} />
        <input type="file" accept="image/*" onChange={this.handleImageChange} />
        <button type="submit">Add Mood</button>
      </form>
    );
  }
}