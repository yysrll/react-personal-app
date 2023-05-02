import React from "react";
import { showFormattedDate } from "../../utils/date-formatter";
import { Link } from "react-router-dom";
import { FiArchive, FiTrash } from "react-icons/fi";

function NoteItem({note, onArchive, onUnarchive, onDelete}) {

    return (
        <div className="relative grid content-between p-4 bg-white text-gray-700 drop-shadow-sm rounded-md border border-gray-400">
            <div className="overflow-hidden">
                <div className="flex justify-between items-start">

                    <Link to={`/note/${note.id}`}>
                        <div className="mb-1 text-md font-semibold">
                            {note.title}
                            {
                                (note.archived) &&
                                <span className="bg-green-400 ms-2 p-1 rounded-md text-[8px] font-normal">
                                    Archived
                                </span>
                            }
                        </div>
                    </Link>
                    <div className="flex">
                        <FiArchive 
                            className="cursor-pointer me-2"
                            onClick={() => {
                                if (note.archived) {
                                    onUnarchive(note.id)
                                } else {
                                    onArchive(note.id)
                                }
                            }}
                        />
                        <FiTrash 
                            className="cursor-pointer text-red-500"
                            onClick={() => onDelete(note.id)}
                        />
                    </div>
                </div>
                <div className="truncate text-sm text-gray-500">
                    {note.body}
                </div>
            </div>
            <div className="mt-4 text-xs text-gray-400">
                {showFormattedDate(note.createdAt)}
            </div>
        </div>
    )
}

export default NoteItem