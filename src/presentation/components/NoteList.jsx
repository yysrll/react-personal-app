import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";

function NoteList({notes, onArchive, onUnarchive, onDelete}) {
    return (
        <>
            {
                notes.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {
                            notes.map(note => (
                                <NoteItem
                                    key={note.id}
                                    note={note}
                                    onArchive={onArchive}
                                    onUnarchive={onUnarchive}
                                    onDelete={onDelete}
                                />
                            ))
                        }
                    </div>
                ) : (
                    <div className="text-gray-700">
                        There is no data yet.
                    </div>
                )
            }
        </>
    )
}

NoteList.propType = {
    notes: PropTypes.array.isRequired, 
    onArchive: PropTypes.func, 
    onUnarchive: PropTypes.func.isRequired, 
    onDelete: PropTypes.func.isRequired
}

export default NoteList