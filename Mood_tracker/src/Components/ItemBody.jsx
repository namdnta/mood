function MoodItemBody({ item }) {
  return (
    <div className="item-body">
      <p className="item-text">{item.text}</p>
      <div className="item-mood">
        <span className="mood-label">Mood:</span>
        <span className={`mood-icon mood-${item.mood.toLowerCase()}`}>{item.mood}</span>
      </div>
      <div className="item-date">
        <span className="date-label">Date:</span>
        <span className="date-value">{new Date(item.date).toLocaleDateString()}</span>
      </div>
    </div>
  );
}

export default MoodItemBody;