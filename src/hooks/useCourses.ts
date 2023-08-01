import { useTypedSelector } from "./useTypedSelector";

export const useCourses = () => useTypedSelector((state) => state.courses)