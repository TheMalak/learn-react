import {useState} from 'react'


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('One Punch');

    function onSubmit(event) {
       event.preventDefault();

        if(inputValue.trim().length > 0)
            // setCategories((categories) => [...categories, inputValue]);
            onNewCategory(inputValue.trim())
        else
            alert("ingrese un dato para continuar");
        setInputValue('');
    }

    function onInputChange(event) {
        setInputValue(event.target.value);
    }

    return (
        <>
            <form onSubmit={(event) => onSubmit(event)}>
                <input id="categories-input" type="text" placeholder="Buscar Gifs" onChange={(event) => onInputChange(event)} value={inputValue} />
            </form>
        </>
    )
};