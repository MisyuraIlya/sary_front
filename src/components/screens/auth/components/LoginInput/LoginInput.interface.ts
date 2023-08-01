import { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";

export interface LoginInputTypes extends 
InputHTMLAttributes<HTMLInputElement> {
    placeholder: string
    error?: string
    heading?: string
}