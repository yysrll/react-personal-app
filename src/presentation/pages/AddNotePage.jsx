import React from 'react';
import TextField from '../components/TextField';
import TextAreaField from '../components/TextAreaField';
import PrimaryButton from '../components/PrimaryButton';


class AddNotePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
        this.onDescriptionChangeEventHandler = this.onDescriptionChangeEventHandler.bind(this)
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
    }

    onTitleChangeEventHandler(event) {
        this.setState((prevState) => {
            return {
              ...prevState,
              title: event.target.value,
            }
          });
    }

    onDescriptionChangeEventHandler(event) {
        this.setState((prevState) => {
            return {
              ...prevState,
              body: event.target.value,
            }
          });
    }

    onSubmitEventHandler(event) {
        event.preventDefault()
        this.props.addNote(this.state)
    }

    render() {
        return (
            <div className=''>
                <p className='mb-4 text-lg font-semibold text-gray-600'>
                    Add Note
                </p>
                    <TextField 
                        label="Title" 
                        type="text" 
                        placeholder="Enter your note title" 
                        value={this.state.title}
                        onChange={this.onTitleChangeEventHandler}
                    />
                    <TextAreaField 
                        label="Description"
                        placeholder="Enter your note description" 
                        value={this.state.body}
                        onChange={this.onDescriptionChangeEventHandler}
                    />
                    <div className="mt-10"></div>
                    <PrimaryButton 
                        className="w-full"
                        type="submit"
                        onClick={this.onSubmitEventHandler}
                    >
                        Create Note
                    </PrimaryButton>
            </div>
        )
    }
}

export default AddNotePage