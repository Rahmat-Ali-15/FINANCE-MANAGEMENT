import axios from "axios"

export const api = axios.create({
    baseUrl: import.meta.env.VITE_URL,
    Credential: true
})