import React, { useState } from "react";
import TextField from '../components/TextFieldMdi';
import PrimaryButton from "../components/PrimaryButton";
import TextFieldPassword from "../components/TextFieldPassword";
import { Link, useNavigate } from "react-router-dom";
import AuthenticationLayout from "../layouts/AuthenticationLayout";
import toast, { Toaster } from 'react-hot-toast';
import { register } from "../../utils/network-data";
import LoadingIndicator from "../components/LoadingIndicator";

function RegisterPage() {
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    const onRegister = (e) =>{
        e.preventDefault()

        setLoading(true)

        register({ name, email, password })
            .then((res) => {
                setIsError(res.error)
                if (!res.error) {
                    navigate('/login')
                }
                toast(res.message)
            })
            .catch((e) => {
                setIsError(true)
                toast(e.message)
            })
            .finally(() => {
                setLoading(false)
                setIsError(false)
            })
    };

    return (
        <AuthenticationLayout>
            <div className="text-3xl font-medium dark:text-white">
                Register Now
            </div>
            <div className="text-sm font-light text-secondary-gray dark:text-gray-300">
                Create an account for use more features from note dicoding
            </div>
            <form onSubmit={!loading && onRegister}>
                <TextField
                    label="Name"
                    value={name}
                    onChange={setName}
                    isRequired={true}
                />
                <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={setEmail}
                    isRequired={true}
                />
                <TextFieldPassword
                    label="Password"
                    value={password}
                    onChange={setPassword}
                    isRequired={true}
                />
                <TextFieldPassword
                    label="Confirm Password"
                    value={confirmPassword}
                    onChange={setConfirmPassword}
                    isRequired={true}
                />
                {
                    
                    (password !== confirmPassword) &&
                    (confirmPassword !== "")
                     && (
                        <p className="text-xs text-red-500">Your confirmation password do not match</p>
                    )
                }
                <PrimaryButton 
                    type="submit"
                    className="w-full mt-8" >
                        <div className="flex justify-center items-center">
                            { loading && <LoadingIndicator /> }
                            Create an Account
                        </div>
                </PrimaryButton>
            </form>
            <div className="flex justify-center mt-6 dark:text-gray-400">
                Already have an account?
                <Link to="/login">
                    <p className="ms-2 text-primary dark:text-white">
                        Login here
                    </p>
                </Link>
            </div>
            <Toaster 
                toastOptions={{
                    style: {
                        background: isError ? '#ef4444' : '#22c55e',
                        color: '#fff',
                    },
                }}
            />
        </AuthenticationLayout>
    )
}

export default RegisterPage