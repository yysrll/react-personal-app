import React from 'react';
import TextField from '../components/TextField';
import TextAreaField from '../components/TextAreaField';
import PrimaryButton from '../components/PrimaryButton';

function AddNotePage() {
    return (
        <div className=''>
            <p className='mb-4 text-lg font-semibold text-gray-600'>
                Add Note
            </p>
            <TextField label="Title" type="text" placeholder="Enter your note title" />
            <TextAreaField label="Description" placeholder="Enter your note description" />
            <div className="mt-10"></div>
            <PrimaryButton className="w-full">
                Create Note
            </PrimaryButton>
        </div>
    )
}

export default AddNotePage