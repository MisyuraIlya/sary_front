import { createAsyncThunk } from "@reduxjs/toolkit";
import { CourseService } from "@/services/courses/courses";
import { IUser } from "@/types/user.interface";
import { CoursesResponse } from "./courses.interface";
import { ICourse } from "@/types/course.interface";

export const getCoursesPerStudent = createAsyncThunk<
    CoursesResponse[],
    IUser

>("courses/curserPerStudent/:id", async (data, thunkApi) => {
  try {
    const response = await CourseService.getCoursesPerStudent(data.id);
    return response;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

