import axios from 'axios'
import { ApiFact } from './EndPoints'

export const GenerarFactFetch = () => {
  return fetch(ApiFact)
    .then(response => response.json())
    .then(data => {
      const { fact } = data
      console.log('Fetch: ', fact)
      return fact
    })
}

export const GenerarFactPromise = async () => {
  const response = await fetch(ApiFact)
  const data = await response.json()
  const { fact } = data
  console.log('Promise: ', fact)
  return fact
}

export const GenerarFactAxios = () => {
  return axios.get(ApiFact).then(response => {
    const { fact } = response.data
    console.log('Axios: ', fact)
    return fact
  }).catch(error => {
    return error
  })
}
