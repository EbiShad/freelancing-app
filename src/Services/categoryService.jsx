import http from "./httpServices";

export default function getCategoryApi(){
    return http.get("/category/list").then((res)=>res.data.data)
}