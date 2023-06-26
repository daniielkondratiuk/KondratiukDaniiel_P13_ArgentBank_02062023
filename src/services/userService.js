import axios from 'axios'
export default class userService {
    constructor(token) {
        this.baseUrl = process.env.REACT_APP_API_BASE_URL
        this.token = token
    }

    async getUserData() {
        try {
            const response = await axios.post(`${this.baseUrl}/user/profile`, {},{
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            })
            return response.data.body
        } catch (error) {
            throw new Error(error.response.data.message)
        }
    }
    async editUserData(body) {
        try {
            const response = await axios.put(`${this.baseUrl}/user/profile`, body,{
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            })
            return response.data
        } catch (error) {
            throw new Error(error.response.data.message)
        }
    }
}
