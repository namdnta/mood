import React from 'react';

class MoodInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mood: "",
      note: "",
      date: new Date().toISOString().split("T")[0],
      // image: null, // hapus ini
    };
  }

  // ... handleChange tetap
handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  });
}

  handleSubmit = (event) => {
    event.preventDefault();
    // Hapus image dari state yang dikirim
    this.props.onAddMood({
      mood: this.state.mood,
      note: this.state.note,
      date: this.state.date,
    });
    this.setState({ mood: "", note: "", date: new Date().toISOString().split("T")[0] });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="mood-input-form">
        <input type="text" name="mood" placeholder="Your mood" value={this.state.mood} onChange={this.handleChange} required />
        <textarea name="note" placeholder="Additional notes" value={this.state.note} onChange={this.handleChange}></textarea>
        <input type="date" name="date" value={this.state.date} onChange={this.handleChange} />
        <button type="submit">Add Mood</button>
      </form>
    );
  }
}

export default MoodInput;