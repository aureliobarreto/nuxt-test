var axios = require('axios')

// URL da API
export const baseURL = 'https://api-newsranker.onrender.com'

export const api = axios.create({
    baseURL: baseURL,
    /* other custom settings */
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
})