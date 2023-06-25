import { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";

export interface AuthInputTypes extends 
InputHTMLAttributes<HTMLInputElement> {
    placeholder: string
    error?: string
}