import React from "react";
import { getNote } from "../../utils/local-data";
import { useNavigate, useParams } from "react-router-dom";
import { showFormattedDate } from "../../utils/date-formatter";
import PrimaryButton from "../components/PrimaryButton";
import { FiArchive, FiTrash } from "react-icons/fi";
import PropTypes from "prop-types";

function DetailNoteWrapper({onDelete, onArchive, onUnarchive}) {
    const { id } = useParams()
    const navigate = useNavigate()

    function onDeleteItem(id) {
        onDelete(id)
        navigate("/")
    }

    function onArchiveItem(id) {
        onArchive(id)
    }

    function onUnarchiveItem(id) {
        onUnarchive(id)
    }

    return (
        <DetailNote 
            id={id} 
            onDelete={onDeleteItem} 
            onArchive={onArchiveItem} 
            onUnarchive={onUnarchiveItem}
        />
    )
}

class DetailNote extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            note: getNote(props.id)
        }

        this.onArchiveClickHandler = this.onArchiveClickHandler.bind(this)
    }

    onArchiveClickHandler() {
        if (this.state.note.archived) {
            this.props.onUnarchive(this.state.note.id)
        } else {
            this.props.onArchive(this.state.note.id)
        }
        this.setState(() => {
            return {
              note: getNote(this.props.id),
            }
        })
    }

    render() {
        if (this.state.note === undefined) {
            return <p>Note is not found!</p>;
        }
        return (
            <>
                <div className="flex justify-end mb-4">
                    {
                        this.state.note.archived ? (
                            <PrimaryButton className="border border-green-500 bg-green-300 hover:bg-green-500 me-4"
                            onClick={this.onArchiveClickHandler}
                            >
                                <div className="flex items-center text-gray-700 px-4">
                                    <FiArchive className="me-2" />
                                    Unarchive
                                </div>
                            </PrimaryButton>
                        ) : (
                            <PrimaryButton className="border border-gray-500 bg-transparent hover:bg-gray-300 me-4"
                            onClick={this.onArchiveClickHandler}
                            >
                                <div className="flex items-center text-gray-700 px-4">
                                    <FiArchive className="me-2" />
                                    Archive
                                </div>
                            </PrimaryButton>
                        )
                    }
                    <PrimaryButton 
                        className="bg-red-500 hover:bg-red-700"
                        onClick={() => this.props.onDelete(this.state.note.id)}
                    >
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

DetailNoteWrapper.propTypes = {
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
    onUnarchive: PropTypes.func.isRequired
}

DetailNote.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
    onUnarchive: PropTypes.func.isRequired
}

export default DetailNoteWrapper