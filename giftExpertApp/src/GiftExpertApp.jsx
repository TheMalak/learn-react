import { useState } from 'react';
import { GifGrid } from './GifGrid';
import { AddCategory } from './AddCategory'



export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(
        ['One Punch']
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