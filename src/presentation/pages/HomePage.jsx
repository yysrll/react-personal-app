import React from 'react';
import NoteList from '../components/NoteList';
import PropTypes from "prop-types";
import TextField from '../components/TextField';

function HomePage({notes, onArchive, onUnarchive, onDelete, defaultKeyword, keywordChange}) {
    return (
        <div className=''>
            <TextField 
                label='Search'
                placeholder='Search notes...'
                type='text'
                value={defaultKeyword}
                onChange={(event) => keywordChange(event.target.value)}
            />
            <p className='my-4 text-lg font-semibold text-gray-600'>
                Your Notes
            </p>
            <NoteList 
                notes={notes} 
                onArchive={onArchive}
                onUnarchive={onUnarchive}
                onDelete={onDelete}
            />
        </div>
    )
}

HomePage.propTypes = {
    notes: PropTypes.array.isRequired,
    onArchive: PropTypes.func.isRequired,
    onUnarchive: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func.isRequired
}

export default HomePage