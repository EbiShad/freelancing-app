import http from "./httpServices";



export function getOtp(data) {
    return http.post("/user/get-otp", data).then((res)=>res.data.data)
  }
  

export function checkOtp(data){
    return http.post("/user/check-otp", data).then((res)=>res.data.data)
}

export function completeProfile(data) {
  return http.post("/user/complete-profile",data).then((res)=>res.data.data)
}

export function getUser(){
  return http.get("/user/profile").then((res)=>res.data.data)
}
export function logoutApi(){
  return http.post("/user/logout").then((res)=>res.data.data)
}