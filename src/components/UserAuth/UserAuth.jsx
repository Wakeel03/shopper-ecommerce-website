import './UserAuth.css'
import { auth } from '../../firebase'
import { useHistory } from 'react-router-dom'

import React, { useRef } from 'react'

function UserAuth() {
    const email = useRef()
    const password = useRef()

    const history = useHistory()

    const login = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(
            email.current.value,
            password.current.value
        ).then((auth) => {
            history.push("/home")
        }).catch(error => alert(error.message))
    }

    const signUp = (e) => {
        e.preventDefault()
        auth
            .createUserWithEmailAndPassword(
                email.current.value,
                password.current.value
            )
            .then((user) => {
                console.log(user)
                history.push('/home')
            })
            .catch((error) => {
                alert(error)
            })
    }

    return (
        <div className="userAuth">
            <form>
                <label>Email</label>
                <input ref={email} type="email" placeholder="Enter your email address"/>
                <label>Password</label>
                <input ref={password} type="password" placeholder="Enter a password"/>
                <button onClick={login}>Login</button>
                <button onClick={signUp}>Sign Up</button>

            </form>
        </div>
    )
}

export default UserAuth
