import Cookies from 'js-cookie'
import { ITokens } from '@/store/user/user.interface'
import { IAuthResponse } from '@/store/user/user.interface'

export const getAccessToken = () => {
    const accessToken = Cookies.get('accessTolen')
    return accessToken || null
}

export const saveTokensStorage = (data: ITokens) => {
    Cookies.set('accessToken', data.accessToken)
    Cookies.set('refreshToken', data.refreshToken)
}

export const getUserFromStorage = () => {
    return JSON.parse(localStorage.getItem('user') || '{}')
}
 
export const removeFromStorage = () => {
    Cookies.remove('accessToken')
    Cookies.remove('refreshToken')
    localStorage.removeItem('user')
}

export const saveToStorage = (data: IAuthResponse) => {
    saveTokensStorage(data)
    localStorage.setItem('user', JSON.stringify(data.user))
}