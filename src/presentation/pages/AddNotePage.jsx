import React, { useState } from 'react';
import TextField from '../components/TextFieldMdi';
import TextAreaField from '../components/TextAreaField';
import PrimaryButton from '../components/PrimaryButton';
import { addNote } from '../../utils/network-data';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import LoadingIndicator from '../components/LoadingIndicator';

function AddNotePage() {
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [loading, setLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    const onSubmitNote = (e) => {
        e.preventDefault()

        setLoading(true)
        addNote({title, body})
            .then((res) => {
                if (!res.error) {
                    navigate('/')
                    console.log(res.data)
                } else {
                    setIsError(true)
                    toast('Failed to create note')
                }
            })
            .catch((error) => {
                setIsError(true)
                toast(`Failed: ${error}`)
            })
            .finally(() => {
                setIsError(false)
                setLoading(false)
            })
    }

    return (
        <div className=''>
            <p className='mb-4 text-lg font-semibold text-gray-600 dark:text-white'>
                Add Note
            </p>
            <form onSubmit={onSubmitNote}>
                <TextField
                    className="bg-white"
                    label="Title"
                    value={title}
                    onChange={setTitle}
                    isRequired={true}
                />
                <TextAreaField 
                    className="bg-white"
                    label="Description"
                    placeholder="Enter your note description" 
                    value={body}
                    onChange={setBody}
                    isRequired={true}
                />
                <div className="mt-10"></div>
                <PrimaryButton 
                    className="w-full"
                    type="submit"
                >
                    <div className="flex justify-center items-center">
                        { loading && <LoadingIndicator /> }
                        Create Note
                    </div>
                </PrimaryButton>
            </form>
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

export default AddNotePage