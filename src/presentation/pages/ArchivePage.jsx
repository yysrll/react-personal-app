import React, { useEffect, useState } from 'react';
import NoteList from '../components/NoteList';
import { archiveNote, deleteNote, getArchivedNotes, unarchiveNote } from '../../utils/network-data';
import { Toaster, toast } from 'react-hot-toast';
import LoadingIndicator from '../components/LoadingIndicator';

function ArchivePage() {
    const [notes, setNotes] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        getNotes()
    }, [])

    const getNotes = () => {
        setIsLoading(true)
        getArchivedNotes()
            .then((res) => {
                if (!res.error) {
                    console.log(res.data)
                    setNotes(res.data)
                    toast("Success fetch data")
                } else {
                    setIsError(true)
                    toast("Failed fetch data")
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
    }


    const onArchive = (id) => {
        archiveNote(id)
            .then((res) => {
                if (!res.error) {
                    toast("Success to archive note")
                    getNotes()
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

    const onUnarchive = (id) => {
        unarchiveNote(id)
        .then((res) => {
            if (!res.error) {
                toast("Success to unarchive note")
                getNotes()
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


    const onDelete = (id) => {
        deleteNote(id)
        .then((res) => {
            if (!res.error) {
                toast("Success to delete note")
                getNotes()
            } else {
                setIsError(true)
                toast("Failed to delete note")
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
        <div className=''>
            <p className='mb-4 text-lg font-semibold text-gray-600 dark:text-white'>
                Your Archive Notes
            </p>
            {
                isLoading ? 
                    <div className='w-fit flex bg-primary text-white p-4 rounded-lg'> 
                    <LoadingIndicator />
                    Loading...
                    </div>
                :
                <>
                    <NoteList 
                        notes={notes} 
                        onArchive={onArchive}
                        onUnarchive={onUnarchive}
                        onDelete={onDelete}
                    />
                    <Toaster 
                        toastOptions={{
                            style: {
                                background: isError ? '#ef4444' : '#22c55e',
                                color: '#fff',
                            },
                        }}
                    />
                </>
            }
        </div>
    )
}

export default ArchivePage