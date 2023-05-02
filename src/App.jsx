import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './presentation/pages/HomePage';
import NavBar from './presentation/components/NavBar';
import { getAllNotes, getArchivedNotes } from './utils/local-data'
import ArchivePage from './presentation/pages/ArchivePage';
import AddNotePage from './presentation/pages/AddNotePage';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: getAllNotes(),
      archivedNotes: getArchivedNotes(),
    }
  }


  render() {
    return (
      <div className="bg-gray-100 min-h-screen font-sans">
        <NavBar >
          <Routes>
            <Route path="/" element={<HomePage notes={this.state.notes} />} />
            <Route path="/archived" element={<ArchivePage notes={this.state.archivedNotes} />} />
            <Route path="/add" element={<AddNotePage />} />
          </Routes>
        </NavBar>
      </div>
    )
  }
}

export default App
