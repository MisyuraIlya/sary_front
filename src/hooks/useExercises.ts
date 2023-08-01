import { useTypedSelector } from "./useTypedSelector";

export const useExercises = () => useTypedSelector((state) => state.exercises)