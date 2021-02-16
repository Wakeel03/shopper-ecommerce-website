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
            <h1>Shopper</h1>
            <form>
                <label>Email</label>
                <input ref={email} type="email" placeholder="Enter your email address"/>
                <label>Password</label>
                <input ref={password} type="password" placeholder="Enter a password"/>
                <button onClick={login}>Login</button>
                <div className="userAuth__signup">
                    <h2>Don't have an account?</h2>
                    <button onClick={signUp}>Sign Up</button>
                </div>

            </form>
        </div>
    )
}

export default UserAuth
