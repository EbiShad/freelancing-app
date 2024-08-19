import axios from "axios";

const BASR_URL = "http://localhost:5000/api"

const app = axios.create({
    baseURL:BASR_URL,
    withCredentials:true
})


app.interceptors.request.use(
    (res) => res,
    (err) => Promise.reject(err)
)



app.interceptors.response.use(
    (res) => res,
    async (err) => {
        const originaiConfig = err.config

        if (err.response.status === 401 && !originaiConfig._retry) {
            originaiConfig._retry = true;
           try {
            const {data} = await  axios.get(`${BASR_URL}/user/refresh-token`, {withCredentials:true})

            if(data) return app(originaiConfig)

           } catch (error) {
            Promise.reject(error)
           }
        }
        Promise.reject(err)
    }
)


const http = {
    get:app.get,
    post:app.post,
    delete:app.delete,
    patch:app.patch,
    put:app.put
}

export default http