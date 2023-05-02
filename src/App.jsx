import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './presentation/pages/HomePage';
import NavBar from './presentation/components/NavBar';
import { getAllNotes } from './utils/local-data'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: getAllNotes(),
    }
  }


  render() {
    return (
      <div className="bg-gray-100 min-h-screen font-sans">
        <NavBar >
          <Routes>
            <Route path="/" element={<HomePage notes={this.state.notes} />} />
          </Routes>
        </NavBar>
      </div>
    )
  }
}

export default App
