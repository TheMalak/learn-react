import { useState } from 'react';
import { GifGrid, AddCategory } from './components';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(
        []
    );

    function onAddCategory(newCategory) {
       if(categories.includes(newCategory)) return;
       setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GiftExpert App</h1>
            <AddCategory onNewCategory={(event) => onAddCategory(event)}/>
                {
                    categories.map((category, i) => (
                        <GifGrid key={category} category={category}/>
                    ))
                }
        </>
    )
};