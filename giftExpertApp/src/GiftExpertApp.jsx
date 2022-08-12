import {useState} from 'react'

export const GiftExpertApp = () => {

    const [categories, setCategories ] = useState(
        ['One Punch', 'Dragon Ball']
    );

    const onAddCategory = () => {
        const data = document.getElementById("categories-input").value;
        if(data == '') {
            alert("debe de contener información")
        } else {
            setCategories([...categories, data]);
        }
    }

    return (
       <>
            <h1>Gift Expert App</h1>
            <input id="categories-input" type="text" />
            <br /><br />
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                {
                    categories.map((category) => {
                        return <li>{category}</li>;
                    })
                }
            </ol>
       </>
    )
};