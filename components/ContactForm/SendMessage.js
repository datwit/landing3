import axios from 'axios'

const baseURL = "http://localhost:8081"

export async function sendMessage (messageData) {
    try {
        const response = await axios({
            url: baseURL,
            method: 'POST',
            data: messageData,
        })
        return response
    } catch (e) {
        console.log(e);        
    }
}