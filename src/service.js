import { create } from 'apisauce';
export const ip = 'http://localhost:xxxx';

const api = create({
    baseURL: ip,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 10000 // 10 seconds
})

const apiupload = create({
    baseURL: ip,
    withCredentials: true,
    headers: {
        "Content-Type": "multipart/form-data",
        'Accept': 'multipart/form-data'
    }
})

/**
 * ฟังก์ชั่นสำหรับ ยิงข้อมูล
 * @param {string} path 
 * @param {{}} obj 
 * @return {{}}
 */
export const POST = (path, obj) =>
    new Promise((resolve, reject) => {
        api.post(path, obj)
            .then(response => {
                if (response.ok) {
                    resolve(response.data)
                } else {
                    response.data ? reject(response.data) : reject({ success: false, message: response.problem })
                }
            }).catch(err => reject(err))
    })


/**
 * ฟังก์ชั่นสำหรับ ดึงข้อมูล
 * @param {string} path 
 * 
 */
export const GET = (path) =>
    new Promise((resolve, reject) => {
        api.get(path)
            .then(response => {
                if (response.ok) {
                    resolve(response.data)
                } else {
                    response.data ? reject(response.data) : reject({ success: false, message: response.problem })
                }
            }).catch(err => reject(err))
    })


export const UPLOAD = (path, formdata) =>
    new Promise((resolve, reject) => {
        apiupload.post(path, formdata)
            .then(response => {
                if (response.ok) {
                    resolve(response.data)
                } else {
                    response.data ? reject(response.data) : reject({ success: false, message: response.problem })
                }
            }).catch(err => reject(err))
    })


export const CHECK = () => {
    new Promise((resolve, reject) => {
        api.post()
            .then(response => {
                if (response.ok) {
                    resolve(response.data)
                } else {
                    response.data ? reject(response.data) : reject({ success: false, message: response.problem })
                }
            }).catch(err => reject(err))
    })
}
/* ################################################## URL ################################################## */
