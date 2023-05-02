import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './presentation/pages/HomePage';
import NavBar from './presentation/components/NavBar';
import { addNote, getAllNotes, getArchivedNotes } from './utils/local-data'
import ArchivePage from './presentation/pages/ArchivePage';
import AddNotePage from './presentation/pages/AddNotePage';
import DetailNote from './presentation/pages/DetailNote';

function AppWrapper() {
  const navigate = useNavigate()

  function onAddNoteHandler(title, body) {
    addNote(title, body)
    navigate("/")
  }
  return (
    <App addNote={onAddNoteHandler} />
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


  render() {
    return (
      <div className="bg-gray-100 min-h-screen font-sans">
        <NavBar >
          <Routes>
            <Route path="/" element={<HomePage notes={this.state.notes} />} />
            <Route path="/archived" element={<ArchivePage notes={this.state.archivedNotes} />} />
            <Route path="/add" element={<AddNotePage addNote={this.onAddNoteHandler} />} />
            <Route path="/note/:id" element={<DetailNote />} />
          </Routes>
        </NavBar>
      </div>
    )
  }
}

export default AppWrapper
