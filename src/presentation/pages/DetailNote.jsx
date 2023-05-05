import React, { useEffect, useState } from "react";
import { archiveNote, getNote, unarchiveNote } from "../../utils/network-data";
import { useParams } from "react-router-dom";
import { showFormattedDate } from "../../utils/date-formatter";
import PrimaryButton from "../components/PrimaryButton";
import { FiArchive, FiTrash } from "react-icons/fi";
import LoadingIndicator from "../components/LoadingIndicator";
import { Toaster, toast } from "react-hot-toast";
import parser from 'html-react-parser';

function DetailNote() {
    const { id } = useParams()

    const [note, setNote] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [isArchive, setIsArchive] = useState(false)


    useEffect(() => {
        setIsLoading(true)
        setNote(null)

        getNote(id)
            .then((res) => {
                if (!res.error) {
                    console.log(res.data)
                    setNote(res.data)
                    setIsArchive(res.data.archived)
                    toast("Success fetch data")
                } else {
                    setIsError(true)
                    setNote(null)
                    toast("Failed to fetch note")
                }
            })
            .catch((error) => {
                toast(error)
                setIsError(true)
            })
            .finally(() => {
                setIsLoading(false)
                setIsError(false)
            })
    }, [id])

    const onArchive = () => {
        archiveNote(id)
            .then((res) => {
                setIsArchive(!res.error)
                if (!res.error) {
                    toast("Success to archive note")
                } else {
                    setIsError(true)
                    toast("Failed to archive note")
                }
            })
            .catch((error) => {
                setIsError(true)
                toast(error)
            })
            .finally(() => {
                setIsError(false)
            })
    }

    const onUnarchive = () => {
        unarchiveNote(id)
        .then((res) => {
            setIsArchive(res.error)
            if (!res.error) {
                toast("Success to unarchive note")
            } else {
                setIsError(true)
                toast("Failed to unarchive note")
            }
        })
        .catch((error) => {
            setIsError(true)
            toast(error)
        })
        .finally(() => {
            setIsError(false)
        })
    }

    
    

    return (
        <>  
            {
                isLoading && (
                    <div className='w-fit flex bg-primary text-white p-4 rounded-lg'> 
                    <LoadingIndicator />
                    Loading...
                    </div>
                )
            }
            {
                isError && (
                    <p>Failed to get data, please try again!</p>
                ) 
            }
            {
                !note && !isLoading && (
                    <p>Note is not found!</p>
                )
            }
            {
                ((note !== null) && !isLoading && !isError)
                 && (
                    <>
                    <div className="flex justify-end mb-4">
                        {isArchive ? (
                            <PrimaryButton className="border bg-green-500 hover:bg-green-700 me-4"
                                onClick={onUnarchive}
                            >
                                <div className="flex items-center text-white px-4">
                                    <FiArchive className="me-2" />
                                    Unarchive
                                </div>
                            </PrimaryButton>
                        ) : (
                            <PrimaryButton className="border border-gray-500 dark:border-white bg-transparent hover:bg-gray-300 me-4"
                                onClick={onArchive}
                            >
                                <div className="flex items-center text-gray-500 dark:text-white px-4">
                                    <FiArchive className="me-2" />
                                    Archive
                                </div>
                            </PrimaryButton>
                        )}
                        <PrimaryButton
                            className="bg-red-500 hover:bg-red-700"
                            onClick={() => { } }
                        >
                            <div className="flex items-center px-4">
                                <FiTrash className="me-2" />
                                Delete
                            </div>
                        </PrimaryButton>
                    </div>
                    <div className="grid content-between p-4 bg-white dark:bg-gray-600 text-gray-700 dark:text-white drop-shadow-sm rounded-md border border-gray-400">
                        <div className="mb-1 text-md font-semibold">
                            {note.title}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-200">
                            {parser(note.body)}
                        </div>
                        <div className="mt-4 text-xs text-gray-400 dark:text-gray-100">
                            {showFormattedDate(note.createdAt)}
                        </div>
                    </div>
                    </>
                )
            }
            <Toaster 
                toastOptions={{
                    style: {
                        background: isError ? '#ef4444' : '#22c55e',
                        color: '#fff',
                    },
                }}
            />
        </>
    )
}

export default DetailNote