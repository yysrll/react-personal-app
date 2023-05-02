import React from 'react';
import NoteList from '../components/NoteList';
import PropTypes from "prop-types";

function ArchivePage({notes}) {
    return (
        <div className=''>
            <p className='mb-4 text-lg font-semibold text-gray-600'>
                Your Archive Notes
            </p>
            <NoteList notes={notes} />
        </div>
    )
}

ArchivePage.propTypes = {
    notes: PropTypes.array.isRequired
}

export default ArchivePage