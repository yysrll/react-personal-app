import React from 'react';
import NoteList from '../components/NoteList';

function HomePage({notes, onArchive, onUnarchive, onDelete}) {
    return (
        <div className=''>
            <p className='mb-4 text-lg font-semibold text-gray-600'>
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

export default HomePage