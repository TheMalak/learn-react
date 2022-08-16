import { useState } from "react";

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

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

    return {
        ...formState, //desectructuracion del formstate
        formState,
        onInputChange
    };
}
