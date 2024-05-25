import PropTypes from "prop-types"
import { FaPlus, FaTrashAlt } from "react-icons/fa"
function Sidebar(props) {
  const noteElements = props.notes.map((note) => (
    <li
      key={note.id}
      className={`title ${
        note.id === props.currentNote.id ? "selected-note" : ""
      }`}
      onClick={() => props.setCurrentNoteId(note.id)}
    >
      {/* Populate note title with only first line of markdown file */}
      <h3 className="text-snippet">{note.body.split("\n", 1)[0]}</h3>
      <button
        className="btn-delete-note"
        title="Delete note"
        // onClick={(e) => props.deleteNote(e, note.id)}
        onClick={() => props.deleteNote(note.id)}
      >
        <span className="visually-hidden">Delete note</span>
        <FaTrashAlt aria-hidden="true" />
      </button>
    </li>
  ))

  return (
    <section className="pane sidebar">
      <div className="sidebar--header">
        <h2>Notes</h2>
        <button
          className="new-note"
          onClick={props.newNote}
        >
          <FaPlus aria-hidden="true" />
          <span className="visually-hidden">Add a new note</span>
        </button>
      </div>
      <ul className="sidebar--items">{noteElements}</ul>
    </section>
  )
}

Sidebar.propTypes = {
  notes: PropTypes.array,
  newNote: PropTypes.func,
  currentNote: PropTypes.object,
  updateNote: PropTypes.func,
  setCurrentNoteId: PropTypes.func,
  deleteNote: PropTypes.func,
}

export default Sidebar
