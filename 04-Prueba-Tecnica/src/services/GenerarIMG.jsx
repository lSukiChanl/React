import axios from 'axios'
import { ApiCat, ApiCatIMG } from './EndPoints'

export const GenerarIMGAFetch = (ThreeWord) => {
    return fetch(ApiCatIMG + ThreeWord + '?json=true')
    .then(response => response.json())
    .then(data => {
        const { url } = data
        return ApiCat + url
    })
}

export const GenerarIMGPromise = async (ThreeWord) => {
    const response = await fetch(ApiCatIMG + ThreeWord + '?json=true')
    const data = await response.json()
    const { url } = data
    return ApiCat + url
}

export const GenerarIMGAxios = (ThreeWord) => {
    return axios.get(ApiCatIMG + ThreeWord + '?json=true').then(response => {
        const {url} = response.data
        return ApiCat + url
    }).catch(error => {
        return error
    })
}