import { useState, useEffect } from 'react'
import {GifItem} from './components/GifItem'
import {UseFetchGifs} from './hooks/UseFetchGifs'

export const GifGrid = ({ category }) => {

    const {images, isLoading} = UseFetchGifs(category);

    console.log(isLoading);

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