import axios from "axios"
import Cookies from "js-cookie"
import { IAuthResponse } from "@/store/user/user.interface"
import { getContentType } from "@/api/api.helper"
import { saveToStorage } from "./auth.helper"
import { instance } from "@/api/api.interceptor"
import { onErrorAlert } from "@/utils/sweetAlert"
export const AuthService = {

    async main (type: 'login' | 'register', data: any) {
        
        try {
            const response = await axios<IAuthResponse>({
                url: `/auth/${type}`,
                method:'POST',
                data
            })
    
            console.log('response',response.status)
            
            if(response.data.accessToken) saveToStorage(response.data)
    
            return response.data
        } catch(e: any) {
            if (e.response) {
                onErrorAlert(e.response.data.message, 'כדאי לבדוק את הפרטים שהזנת ולנסות שוב')
            }
        }
        return false;
    }
    ,
    async getNewTokens() {
        const refreshToken = Cookies.get('refreshToken')

        const response = await axios.post<string, { data:IAuthResponse}>('/auth/login/access-token', 
        { refreshToken},
        {
            headers: getContentType()
        })

        if (response.data.accessToken) saveToStorage(response.data)

        return response
    }
    
}