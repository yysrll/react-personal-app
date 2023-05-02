import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './presentation/pages/HomePage';
import NavBar from './presentation/components/NavBar';
import { addNote, archiveNote, deleteNote, getAllNotes, getArchivedNotes, unarchiveNote } from './utils/local-data'
import ArchivePage from './presentation/pages/ArchivePage';
import AddNotePage from './presentation/pages/AddNotePage';
import DetailNote from './presentation/pages/DetailNote';
import PropTypes from "prop-types";

function AppWrapper() {
  const navigate = useNavigate()

  function onAddNoteHandler(title, body) {
    addNote(title, body)
    navigate("/")
  }

  function onDeleteNoteHalndler(id) {
    deleteNote(id)
  }

  function onArchiveNoteHandler(id) {
    archiveNote(id)
  }

  function onUnarchiveNotehandler(id) {
    unarchiveNote(id)
  }

  return (
    <App 
      addNote={onAddNoteHandler} 
      deleteNote={onDeleteNoteHalndler}
      archiveNote={onArchiveNoteHandler}
      unarchiveNote={onUnarchiveNotehandler}
    />
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: getAllNotes(),
      archivedNotes: getArchivedNotes(),
    }

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this)
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this)
    this.onUnarchiveNoteHandler = this.onUnarchiveNoteHandler.bind(this)
  }

  onAddNoteHandler(title, body) {
    this.props.addNote(title, body)
    this.setState((prevState) => {
      return {
        ...prevState,
        notes: getAllNotes(),
      }
    })
  }

  onDeleteNoteHandler(id) {
    this.props.deleteNote(id)
    this.setState((prevState) => {
      return {
        ...prevState,
        notes: getAllNotes(),
      }
    })
  }

  onArchiveNoteHandler(id) {
    this.props.archiveNote(id)
    this.setState(() => {
      return {
        notes: getAllNotes(),
        archivedNotes: getArchivedNotes(),
      }
    })
  }

  onUnarchiveNoteHandler(id) {
    this.props.unarchiveNote(id)
    this.setState(() => {
      return {
        notes: getAllNotes(),
        archivedNotes: getArchivedNotes(),
      }
    })
  }


  render() {
    return (
      <div className="bg-gray-100 min-h-screen font-sans">
        <NavBar >
          <Routes>
            <Route path="/" element={
              <HomePage 
                notes={this.state.notes} 
                onDelete={this.onDeleteNoteHandler} 
                onArchive={this.onArchiveNoteHandler}
                onUnarchive={this.onUnarchiveNoteHandler}
              />
            } />
            <Route path="/archived" element={<ArchivePage notes={this.state.archivedNotes} />} />
            <Route path="/add" element={<AddNotePage addNote={this.onAddNoteHandler} />} />
            <Route path="/note/:id" element={
              <DetailNote 
                onDelete={this.onDeleteNoteHandler}
                onArchive={this.onArchiveNoteHandler}
                onUnarchive={this.onUnarchiveNoteHandler}
              />
            } />
          </Routes>
        </NavBar>
      </div>
    )
  }
}

App.propTypes = {
  addNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
  archiveNote: PropTypes.func.isRequired,
  unarchiveNote: PropTypes.func.isRequired,
}

export default AppWrapper
