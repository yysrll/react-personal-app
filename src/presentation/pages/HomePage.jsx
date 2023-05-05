import React, { useContext, useEffect, useState } from 'react';
import NoteList from '../components/NoteList';
import TextField from '../components/TextFieldMdi';
import UserContext from '../../contexts/UserContext';
import LoadingIndicator from '../components/LoadingIndicator'
import { archiveNote, deleteNote, getActiveNotes, unarchiveNote } from '../../utils/network-data';
import { Toaster, toast } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';

function HomePage() {
    const { user } = useContext(UserContext)

    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('search') || '';

    const [isLoading, setIsLoading] = useState(false)
    const [notes, setNotes] = useState([])
    const [filteredNotes, setFilteredNotes] = useState([])
    const [isError, setIsError] = useState(false)
    const [keyword, setKeyword] = useState(searchParams.get('search') || '')

    useEffect(() => {
        getNotes()
    }, [])

    const getNotes = () => {

        setIsLoading(true)
        getActiveNotes()
            .then((res) => {
                if (!res.error) {
                    console.log(res.data)
                    setNotes(res.data)
                    setFilteredNotes(res.data)
                    toast("Success fetch data")
                } else {
                    setIsError(true)
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
    }

    useEffect(() => {
        let temp = [...notes]
        if (search !== "") {
            temp = temp.filter((note) => {
                return note.title.toLowerCase().includes(
                  keyword.toLowerCase()
                );
            });
        }
        setFilteredNotes(temp)
    }, [keyword, search, notes])


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
            <p className='my-4 text-lg font-semibold text-gray-600 dark:text-white'>
                Welcome back, {user.name}
            </p>
            <TextField
                className="bg-white"
                label="Search"
                value={keyword}
                onChange={(search) => {
                    setKeyword(search)
                    setSearchParams({search})
                }}
            />
            <p className='my-4 text-lg font-semibold text-gray-600 dark:text-white'>
                Your Notes
            </p>
            {
                (isLoading) ?
                <div className='w-fit flex bg-primary text-white p-4 rounded-lg'> 
                    <LoadingIndicator />
                    Loading...
                </div>
                :
                <NoteList 
                    notes={filteredNotes} 
                    onArchive={onArchive}
                    onUnarchive={onUnarchive}
                    onDelete={onDelete}
                />
            }
            <Toaster 
                toastOptions={{
                    style: {
                        background: isError ? '#ef4444' : '#22c55e',
                        color: '#fff',
                    },
                }}
            />
        </div>
    )
}

export default HomePage