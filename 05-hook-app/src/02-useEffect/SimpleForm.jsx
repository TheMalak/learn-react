import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'malak',
        email: 'malak@gmail.com',
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => { //destructuración y asignación
        //console.log(event.target.name);
        //console.log(event.target.value);
        const { name, value } = target;
        //console.log({name, value});
        setFormState({
            ...formState,
            [name]: value //al colocar los corchetes podemos hacer que una llave tome el valo de una variable.
        });
    }


    useEffect( //el use effect es disparado cuando algo cambia dentro del estado de la aplicacion.
        () => {
            //console.log('use effect se ha disparado');
        },
        [] //por cualquier cosa
    )

    useEffect( //el use effect es disparado cuando algo cambia dentro del estado de la aplicacion.
        () => {
            //console.log('use effect se ha disparado');
        },
        [formState] //por funciones
    )

    useEffect( //el use effect es disparado cuando algo cambia dentro del estado de la aplicacion.
        () => {
            //console.log('emailChanged');
        },
        [email] //por variables.
    )

    return (
        <>
            <h1>Simple Form</h1>
            <hr />
            <form>
                <input className="form-control" type="text" placeholder="Username" name="username" onChange={onInputChange} defaultValue={username} />
                <input className="form-control mt-4" type="email" placeholder="email" name="email" onChange={onInputChange} defaultValue={email} />
            </form>
            {
                (username == 'malak2' ) &&  <Message />
            }
        </>
    )
}
