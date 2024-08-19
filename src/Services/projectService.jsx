import http from "./httpServices";

export function getOwnerProjectApi(){
   return http.get("/project/owner-projects").then((res) => res.data.data)
}

export function removeProjectApi(id){
return http.delete(`/project/${id}`).then((res) => res.data.data)
}


export function createProjectApi(data){
return http.post("/project/add", data).then((res) => res.data.data)
}


export function editProjectApi( {id,newProject} ){
return http.patch(`/project/update/${id}`,newProject).then((res) => res.data.data)
}

export function toggleProjectStatusApi( {id,data} ){
return http.patch(`/project/${id}`,data).then((res) => res.data.data)
}
export function getProjecApi(id ){
return http.get(`/project/${id}`).then((res) => res.data.data)
}

export function getProjectsApi(qs){
   return http.get(`/project/list${qs}`).then((res) => res.data.data)
}
