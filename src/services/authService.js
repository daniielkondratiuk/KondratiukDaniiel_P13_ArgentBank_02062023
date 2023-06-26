import axios from 'axios'

export default class AuthService {
    constructor(baseUrl = process.env.REACT_APP_API_BASE_URL) {
        this.baseUrl = baseUrl
    }

    async login(data) {
        try {
            const response = await axios.post(`${this.baseUrl}/user/login`, data)
            return response.data
        } catch (error) {
            return error.response.data
        }
    }
    async signup(data) {
        try {
            const response = await axios.post(`${this.baseUrl}/user/signup`, data)
            return response.data
        } catch (error) {
            throw new Error(error.response.data.message)
        }
    }
}
