import React from "react";
import { showFormattedDate } from "../../utils/date-formatter";
import { Link } from "react-router-dom";
import { FiArchive, FiTrash } from "react-icons/fi";
import PropTypes from "prop-types";
import parser from 'html-react-parser';


function NoteItem({note, onArchive, onUnarchive, onDelete}) {

    return (
        <div className="relative grid content-between p-4 bg-white dark:bg-gray-600 text-gray-700 dark:text-white drop-shadow-sm rounded-md border border-gray-400">
            <div className="overflow-hidden">
                <div className="flex justify-between items-start">

                    <Link to={`/note/${note.id}`}>
                        <div className="flex flex-wrap items-center mb-1 text-md font-semibold">
                            <p className="me-2">
                                {note.title}
                            </p>
                            {
                                (note.archived) &&
                                <p className="h-fit bg-green-400 p-1 rounded-md text-[8px] font-normal">
                                    Archived
                                </p>
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
                <div className="truncate text-sm text-gray-500 dark:text-gray-200">
                    {parser(note.body)}
                </div>
            </div>
            <div className="mt-4 text-xs text-gray-400 dark:text-gray-300">
                {showFormattedDate(note.createdAt)}
            </div>
        </div>
    )
}

NoteItem.propType = {
    note: PropTypes.object.isRequired, 
    onArchive: PropTypes.func.isRequired, 
    onUnarchive: PropTypes.func, 
    onDelete: PropTypes.func.isRequired
}

export default NoteItem