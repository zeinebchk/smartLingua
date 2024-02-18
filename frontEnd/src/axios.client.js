import axios from "axios";

const axiosClient=axios.create({
    baseURL:`${import.meta.env.VITE_API_BASE_URL}/api/`,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-with':'XMLHttpRequest'
      },
      withCredentials:true,
    
})

axiosClient.interceptors.request.use((config)=>{
   const token=localStorage.getItem('ACCESS_TOKEN')
    config.headers.Authorization=`bareer ${token}`
    return config;
})

axiosClient.interceptors.request.use((response)=>{
     return response;
 },(error)=>{
    try{
        const {response}=error;
        if(response.status===401){
            localStorage.removeItem('ACCESS_TOKEN')}
    }catch(e){
       console.error(e);
    }
    throw error;
 }
 )
export default axiosClient;