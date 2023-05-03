import React from 'react';
import NoteList from '../components/NoteList';
import PropTypes from "prop-types";

function ArchivePage({notes, onArchive, onUnarchive, onDelete}) {
    return (
        <div className=''>
            <p className='mb-4 text-lg font-semibold text-gray-600'>
                Your Archive Notes
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

ArchivePage.propTypes = {
    notes: PropTypes.array.isRequired,
    onArchive: PropTypes.func.isRequired,
    onUnarchive: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default ArchivePage