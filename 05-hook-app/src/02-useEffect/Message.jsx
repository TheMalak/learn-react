import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({x:0,y:0});

    useEffect(() => {
        //console.log('Message mounted') //se dispara cuando el elemento es creado

       const onMouseMove = ({x,y}) => {
        setCoords({x:x, y:y});
       }

       window.addEventListener('mousemove', onMouseMove);

      return () => {
        console.log('Message unmounted')
        window.removeEventListener('mousemove', onMouseMove);

      } //se dispara cuando el elemento es retirado.
    }, [])
    

  return (
    <>
        <h2>El usuario ya existe dentro del sistema.</h2>
        <p>{JSON.stringify(coords)}</p>
    </>
    
  )
}
