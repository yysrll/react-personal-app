import React from 'react';
import { Routes, Route, useNavigate, useSearchParams } from 'react-router-dom';
import HomePage from './presentation/pages/HomePage';
import NavBar from './presentation/components/NavBar';
import { addNote, archiveNote, deleteNote, getAllNotes, getArchivedNotes, unarchiveNote } from './utils/local-data'
import ArchivePage from './presentation/pages/ArchivePage';
import AddNotePage from './presentation/pages/AddNotePage';
import DetailNote from './presentation/pages/DetailNote';
import PropTypes from "prop-types";
import NotFoundPage from './presentation/pages/NotFoundPage';

function AppWrapper() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') || '';
  
  function changeSearchParams(search) {
      setSearchParams({ search });
  }

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
      defaultKeyword={search}
      keywordChange={changeSearchParams}
    />
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: getAllNotes(),
      archivedNotes: getArchivedNotes(),
      keyword: props.defaultKeyword || '',
    }

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this)
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this)
    this.onUnarchiveNoteHandler = this.onUnarchiveNoteHandler.bind(this)
    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this)
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
    this.setState((prevState) => {
      return {
        ...prevState,
        notes: getAllNotes(),
        archivedNotes: getArchivedNotes(),
      }
    })
  }

  onUnarchiveNoteHandler(id) {
    this.props.unarchiveNote(id)
    this.setState((prevState) => {
      return {
        ...prevState,
        notes: getAllNotes(),
        archivedNotes: getArchivedNotes(),
      }
    })
  }

  onSearchNoteHandler(keyword) {
    this.setState((prevState) => {
      return {
        ...prevState,
        keyword: keyword,
      }
    })
    this.props.keywordChange(keyword)
  }


  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(
        this.state.keyword.toLowerCase()
      );
    });
    return (
      <div className="bg-gray-100 min-h-screen font-sans">
        <NavBar >
          <Routes>
            <Route path="/" element={
              <HomePage 
                notes={notes} 
                onDelete={this.onDeleteNoteHandler} 
                onArchive={this.onArchiveNoteHandler}
                onUnarchive={this.onUnarchiveNoteHandler}
                defaultKeyword={this.props.defaultKeyword}
                keywordChange={this.onSearchNoteHandler}
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
            <Route path='*' element={<NotFoundPage />} />
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
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
}

export default AppWrapper
