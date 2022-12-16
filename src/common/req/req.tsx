import React from "react";
import axios, {AxiosResponse} from "axios";
import qs from "qs";


const instance = axios.create({
    // 设置超时时间,单位毫秒
    timeout: 5000 //即1秒
})
const _post = (api: string, data: any, headers = {}) => {
    return new Promise<AxiosResponse<Uint8Array>>((resolve, reject) => {
        instance.post<Uint8Array, AxiosResponse<Uint8Array>, Uint8Array>(api, data, {
            headers,
            responseType: 'arraybuffer'
        })
            .then(res => {
                resolve(res)
            })
            .catch(error => {
                reject(error)
            })
    })
}

const post = (api: string, data: any, headers: any = {}) => {
    headers['Content-Type'] = 'application/x-www-form-urlencoded'
    return _post(api, qs.stringify(data), headers)
}
const postJson = (api: string, data: any, headers: any = {}) => {
    headers['Content-Type'] = 'application/json;charset=utf-8'
    return _post(api, JSON.stringify(data), headers)
}

const postFormData = (api: string, data: any, headers: any = {}) => {
    headers['Content-Type'] = 'multipart/form-data'
    return _post(api, data, headers)
}

export const PostProto = (api: string, protoName: string, data: any, headers: any = {}) => {
    headers['Proto'] = protoName
    return _post(api, data, headers)
}

export default {PostProto}