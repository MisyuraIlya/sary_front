
export interface ICourse {
    orden: number;
    id: number;
    name: string;
    grade: string;
    image: string;
    color: string;
    published: boolean;
    level: number;
    totalChildren?: number;
    children?: ICourse[];
    bgColor?: string;
  }

export interface CoursesPerUserResponse {
    id: number
    course: ICourse
}