import React from 'react';
import { Routes, Route, useNavigate, useSearchParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { addNote, archiveNote, deleteNote, getAllNotes, getArchivedNotes, unarchiveNote } from '../../utils/local-data'
import HomePage from './HomePage';
import ArchivePage from './ArchivePage';
import AddNotePage from './AddNotePage';
import DetailNote from './DetailNote';
import NotFoundPage from './NotFoundPage';
import PropTypes from "prop-types";
import RouteMiddleware from '../../middleware/RouteMiddleware';

function DashboardWrapper() {
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
    <Dashboard 
      addNote={onAddNoteHandler} 
      deleteNote={onDeleteNoteHalndler}
      archiveNote={onArchiveNoteHandler}
      unarchiveNote={onUnarchiveNotehandler}
      defaultKeyword={search}
      keywordChange={changeSearchParams}
    />
  )
}

class Dashboard extends React.Component {
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
        archivedNotes: getArchivedNotes(),
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
    return (
      <div className="bg-gray-100 min-h-screen font-sans">
        <NavBar >
          <Routes>
            <Route path="/" element={
              <RouteMiddleware middleware="auth">
                <HomePage />
              </RouteMiddleware>
            } />
            <Route path="/archived" element={
              <RouteMiddleware middleware="auth">
                <ArchivePage 
                  notes={this.state.archivedNotes} 
                  onDelete={this.onDeleteNoteHandler} 
                  onArchive={this.onArchiveNoteHandler}
                  onUnarchive={this.onUnarchiveNoteHandler}
                />
              </RouteMiddleware>
            } />
            <Route path="/add" element={
              <RouteMiddleware middleware="auth">
                <AddNotePage />
              </RouteMiddleware>
            } />
            <Route path="/note/:id" element={
              <RouteMiddleware middleware="auth">
                <DetailNote 
                  onDelete={this.onDeleteNoteHandler}
                  onArchive={this.onArchiveNoteHandler}
                  onUnarchive={this.onUnarchiveNoteHandler}
                />
              </RouteMiddleware>
            } />
            <Route path='*' element={
              <RouteMiddleware middleware="auth">
                <NotFoundPage />
              </RouteMiddleware>
            } />
          </Routes>
        </NavBar>
      </div>
    )
  }
}

Dashboard.propTypes = {
  addNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
  archiveNote: PropTypes.func.isRequired,
  unarchiveNote: PropTypes.func.isRequired,
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
}

export default DashboardWrapper
