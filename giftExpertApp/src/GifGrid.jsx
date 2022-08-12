import { getGifs } from './helpers/getGifs'
import { useState, useEffect } from 'react'
import {GifItem} from './components/GifItem'
export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category).then(newImages => setImages(newImages));
    }, []);

    return (
        <>
            <h3>{category}</h3>
            
            <div className="card-grid">
                {
                    images.map((image, i) => (
                        <>
                            <GifItem key={image.id} {...image} />
                        </>
                    ))
                }
            </div>
            
        </>
    )
}