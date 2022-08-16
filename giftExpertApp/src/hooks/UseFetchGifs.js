//crear de manera rápida un functional component "rafc"
import {getGifs} from '../helpers/getGifs'
import {useState, useEffect} from 'react'


//un hook no es mas que una función que regresa algo.
export const UseFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []);
    

    return { //cuando unas llaves se abren significa que estamos trabajando con un objeto
        images, //cuando abrimos corchetes estamos trabajando con un arreglo
        isLoading
    }
}
