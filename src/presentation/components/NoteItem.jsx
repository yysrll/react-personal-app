import React from "react";
import { showFormattedDate } from "../../utils/date-formatter";
import { Link } from "react-router-dom";

function NoteItem({note}) {
    return (
        <Link to={`/note/${note.id}`}>
            <div className="grid content-between p-4 bg-white text-gray-700 drop-shadow-sm rounded-md border border-gray-400">
                <div className="overflow-hidden">
                    <div className="mb-1 text-md font-semibold">
                        {note.title}
                    </div>
                    <div className="truncate text-sm text-gray-500">
                        {note.body}
                    </div>
                </div>
                <div className="mt-4 text-xs text-gray-400">
                    {showFormattedDate(note.createdAt)}
                </div>
            </div>
        </Link>
    )
}

export default NoteItem