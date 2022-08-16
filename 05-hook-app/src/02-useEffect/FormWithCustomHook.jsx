import React, { useEffect } from 'react'
import {useForm} from '../hooks/useForm'


export const FormWithCustomHook = () => {

    const {formState, onInputChange, username, email, password} = useForm({
        username: '',
        email: '',
        password: '',
    });

    //const {username, email, password} = formState;

    return (
        <>
            <h1>Simple Form</h1>
            <hr />
            <form>
                <input className="form-control" type="text" placeholder="Username" name="username" onChange={onInputChange} defaultValue={username} />
                <input className="form-control mt-4" type="email" placeholder="email" name="email" onChange={onInputChange} defaultValue={email} />
                <input className="form-control mt-4" type="password" placeholder="password" name="password" onChange={onInputChange} defaultValue={password} />
            </form>
            {
                (username == 'malak2' ) &&  <Message />
            }
        </>
    )
}
