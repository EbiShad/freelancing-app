import http from "./httpServices";

export function changeProposalStatusApi({proposalId,...rest}){
   return http.patch(`/proposal/${proposalId}`,rest).then((res) => res.data.data)
}

export function getProposalApi(){
   return http.get("/proposal/list").then((res) => res.data.data)
}


export function creatProposalApi(data){
   return http.post("proposal/add" , data).then((res) => res.data.data)
}