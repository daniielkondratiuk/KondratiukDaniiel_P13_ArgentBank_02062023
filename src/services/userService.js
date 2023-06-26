import axios from 'axios'
export default class userService {
    constructor(baseUrl = process.env.REACT_APP_API_BASE_URL) {
        this.baseUrl = baseUrl
    }

    async getUserData(token) {
        try {
            const response = await axios.post(`${this.baseUrl}/user/profile`, {},{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return response.data.body
        } catch (error) {
            throw new Error(error.response.data.message)
        }
    }
}
