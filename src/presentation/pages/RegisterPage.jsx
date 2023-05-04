import React from "react";
import TextField from '../components/TextFieldMdi';
import PrimaryButton from "../components/PrimaryButton";
import TextFieldPassword from "../components/TextFieldPassword";
import { Link } from "react-router-dom";
import AuthenticationLayout from "../layouts/AuthenticationLayout";

function RegisterPage() {
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [confirmPassword, setConfirmPassword] = React.useState("")

    return (
        <AuthenticationLayout>
            <div className="text-3xl font-medium">
                Register Now
            </div>
            <div className="text-sm font-light text-secondary-gray">
                Create an account for use more features from note dicoding
            </div>
            <TextField
                label="Name"
                value={name}
                onChange={setName}
            />
            <TextField
                label="Email"
                value={email}
                onChange={setEmail}
            />
            <TextFieldPassword
                label="Password"
                value={password}
                onChange={setPassword}
            />
            <TextFieldPassword
                label="Confirm Password"
                value={confirmPassword}
                onChange={setConfirmPassword}
            />
            <PrimaryButton className="w-full mt-8">
                Create an Account
            </PrimaryButton>
            <div className="flex justify-center mt-6">
                Already have an account?
                <Link to="/login">
                    <p className="ms-2 text-primary">
                        Login here
                    </p>
                </Link>
            </div>
        </AuthenticationLayout>
    )
}

export default RegisterPage