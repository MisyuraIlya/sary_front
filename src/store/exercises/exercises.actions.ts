import { createAsyncThunk } from "@reduxjs/toolkit";
import { CourseService } from "@/services/courses/courses";
import { IUser } from "@/types/user.interface";
import { IFirstModule } from "@/types/ModulesTypes.ts/FirstModule.interface";
import { ICourse } from "@/types/course.interface";
import { ExercisesService } from "@/services/exercises/Exercises";

type data = {
  idExercise: number,
  idStudent: number

}
export const getExercise = createAsyncThunk<
    IFirstModule,
    data

>("exercises/:id", async (data, thunkApi) => {
  try {
    const response = await ExercisesService.ReadStudentExerciseWithAnswersPerStudent(data.idExercise, data.idStudent);
    return response;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

