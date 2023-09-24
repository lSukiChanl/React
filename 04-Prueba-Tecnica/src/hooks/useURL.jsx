import { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { GenerarIMGAFetch, GenerarIMGPromise, GenerarIMGAxios } from '../services/GenerarIMG'

/// Custom Hook ///
export function useURL({ Fact }){
    const [Url, setUrl] = useState()
  
    useEffect(() => {
      if(!Fact) return
      GenerarIMGAxios(Fact.split(' ').slice(0,3).join(' ')).then(setUrl)
    }, [Fact])
  
    return Url
} // <--- Regresa la URL de la Imagen