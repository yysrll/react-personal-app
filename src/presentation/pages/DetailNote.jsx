import React from "react";
import { getNote } from "../../utils/local-data";
import { useParams } from "react-router-dom";
import { showFormattedDate } from "../../utils/date-formatter";
import PrimaryButton from "../components/PrimaryButton";
import { FiArchive, FiTrash } from "react-icons/fi";

function DetailNoteWrapper() {
    const { id } = useParams()
    return (
        <DetailNote id={id} />
    )
}

class DetailNote extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            note: getNote(props.id)
        }
    }

    render() {
        if (this.state.note === undefined) {
            return <p>Note is not found!</p>;
        }
        return (
            <>
                <div className="flex justify-end mb-4">
                    <PrimaryButton className="border border-gray-500 bg-transparent me-4">
                        {
                            (this.state.note.archived) ? 
                                <div className="flex items-center text-gray-700 px-4">
                                    <FiArchive className="me-2" />
                                    Add to note
                                </div>
                            :
                                <div className="flex items-center text-gray-700 px-4">
                                    <FiArchive className="me-2" />
                                    Archive
                                </div>
                        }
                    </PrimaryButton>
                    <PrimaryButton className="bg-red-500 hover:bg-red-700">
                        <div className="flex items-center px-4">
                            <FiTrash className="me-2" />
                            Delete
                        </div>
                    </PrimaryButton>
                </div>
                <div className="grid content-between p-4 bg-white text-gray-700 drop-shadow-sm rounded-md border border-gray-400">
                    <div className="mb-1 text-md font-semibold">
                        {this.state.note.title}
                    </div>
                    <div className="text-sm text-gray-500">
                        {this.state.note.body}
                    </div>
                    <div className="mt-4 text-xs text-gray-400">
                        {showFormattedDate(this.state.note.createdAt)}
                    </div>
                </div>
            </>
        )
    }
}

export default DetailNoteWrapper