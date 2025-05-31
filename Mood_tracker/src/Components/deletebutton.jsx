

const Deletebutton = ({ id, onDelete }) => {
    return (
        <button
        onClick={() => onDelete(id)}
        title="Delete Entry"
        className="delete-button">
            🗑️
        </button>
    )

}

export default Deletebutton;