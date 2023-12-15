import { base_Url } from "./baseUrl"
import { commonAPI } from "./commonAPI"

//register api
export const registerAPI = async(user)=>{
    return await commonAPI('POST',`${base_Url}/user/register`,user,"")
}
//login api
export const LoginAPI = async(user)=>{
     return await commonAPI('POST',`${base_Url}/user/login`,user,"")
}
//add project 
export const Addproject= async(reqbody,reqHeader)=>{
    return await commonAPI('POST',`${base_Url}/projects/add`,reqbody,reqHeader)
}