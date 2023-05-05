import React, { useContext, useState } from "react";
import TextField from '../components/TextFieldMdi';
import PrimaryButton from "../components/PrimaryButton";
import TextFieldPassword from "../components/TextFieldPassword";
import { Link, useNavigate } from "react-router-dom";
import AuthenticationLayout from "../layouts/AuthenticationLayout";
import LoadingIndicator from "../components/LoadingIndicator";
import { Toaster, toast } from "react-hot-toast";
import { getUserLogged, login, putAccessToken } from "../../utils/network-data";
import UserContext from "../../contexts/UserContext";

function LoginPage() {
    const navigate = useNavigate()
    const { setUser } = useContext(UserContext)
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    const onLogin = (e) =>{
        e.preventDefault()

        setLoading(true)

        login({ email, password })
            .then((res) => {
                setIsError(res.error)
                if (!res.error) {
                    putAccessToken(res.data.accessToken)
                    getUserLogged()
                    .then((res) => {
                        setIsError(res.error)
                        if (!res.error) {
                            setUser(res.data)
                            toast("Login success")
                            navigate('/')
                        } else {
                            setUser(null)
                            toast("Login failed")
                        }
                    })
                    .catch((e) => {
                        setIsError(true)
                        toast(e)
                    })
                } else {
                    toast("Login failed")
                    putAccessToken("")
                }
            })
            .catch((e) => {
                setIsError(true)
                toast(e.message)
                putAccessToken("")
            })
            .finally(() => {
                setLoading(false)
            })
    };

    return (
        <AuthenticationLayout>
            <div className="text-3xl font-medium">
                Welcome Back
            </div>
            <div className="text-sm font-light text-secondary-gray">
                Login to create your notes
            </div>
            <form onSubmit={onLogin}>
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
                <PrimaryButton type="submit" className="w-full mt-8">
                    <div className="flex justify-center items-center">
                        { loading && <LoadingIndicator /> }
                        Login
                    </div>
                </PrimaryButton>
            </form>
            <div className="flex justify-center mt-6">
                Belum punya akun?
                <Link to="/register">
                    <p className="ms-2 text-primary">
                        Register
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

export default LoginPage;