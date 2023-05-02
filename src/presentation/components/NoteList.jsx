import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes}) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {                
                notes.map(note => (
                    <NoteItem 
                    key={note.id} 
                    note={note} 
                    />
                ))
            }
        </div>
    )
}

export default NoteList