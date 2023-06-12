
export interface ICourse {
    id: number
    name: string
    grade: string
    orden: number
    image: string
    color: string
    published: boolean
    level:number
    totalChildren?: number
    children?:ICourse[]
}