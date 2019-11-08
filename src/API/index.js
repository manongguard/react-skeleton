import axios from "axios"

const config = {
    baseURL: 'http://192.168.1.4:8080',
    headers: {
        'Content-Type': 'application/json'
    }
}

export const callGetAPI = (url) => {

    return axios.get(url, config)
    // return axios.request({
    //     method: 'get',
    //     url,
    //     ...config
    // });
}

export const callPostAPI = (data) => {
    return axios.request({
        method: 'post',
        ...config,
        data
    });
}