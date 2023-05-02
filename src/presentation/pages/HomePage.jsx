import React from 'react';
import NoteList from '../components/NoteList';

function HomePage({notes}) {
    return (
        <div className=''>
            <p className='mb-4 text-lg font-semibold text-gray-600'>
                Your Notes
            </p>
            <NoteList notes={notes} />
        </div>
    )
}

export default HomePage