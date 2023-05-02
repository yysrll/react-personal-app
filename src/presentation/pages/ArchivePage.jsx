import React from 'react';
import NoteList from '../components/NoteList';

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

export default ArchivePage