// Global
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { CourseService } from '@/services/courses/courses';
import { useQuery } from '@tanstack/react-query';
import { ICourse } from '@/types/course.interface';
import { useRouter } from 'next/router';

interface CourseContextType {
  CourseMethods: {
    setChoosedLvl1: (number: number) => void
    setChoosedLvl2: (number: number) => void
    setChoosedLvl3: (number: number) => void
    setChoosedLvl4: (number: number) => void
    setChoosedLvl5: (number: number) => void
    refetchLvl1: () => void
    refetchLvl2: () => void
    refetchLvl3: () => void
    refetchLvl4: () => void
    updateFunction: (id: number, name:string, grade: string, lvl:number, published: boolean, orden:number) => void
    silentUpdate: (id: number, name:string, grade: string, lvl:number, published: boolean, orden:number) => void
    removeFunction: (id: number, lvl:number) => void
    createFunction: (name: string, level: number, parent: number | null) => void,
    setChoosedCourse: (title: string) => void
    handleUploadImage: (file: File, id: number) => void
    uploadFile: (file: File, id:number) => void
  };
  courses: ICourse[] | undefined;
  lvl1: ICourse | null | undefined
  choosedLvl1: number | null
  lvl2: ICourse | null | undefined
  choosedLvl2: number | null
  lvl3: ICourse | null | undefined
  choosedLvl3: number | null
  lvl4: ICourse | null | undefined
  choosedLvl4: number | null
  choosedCourse: string | null
  isLoadingLvl1: boolean
  loadingLvl2: boolean
  loadingLvl3: boolean
  loadingLvl4: boolean
}

const CourseContext = createContext<CourseContextType | null>(null);

// React hook
const useCourse = (): CourseContextType => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error('Can not run without "CourseProvider"');
  }
  return context;
};

interface CourseProviderProps {
    children: ReactNode;
};

  
const CourseProvider: React.FC<CourseProviderProps> = (props) => {
  // state
  const [choosedCourse, setChoosedCourse] = useState<string | null>(null)
  const [choosedLvl1, setChoosedLvl1] = useState<any>(null)
  const [choosedLvl2, setChoosedLvl2] = useState<any>(null)
  const [choosedLvl3, setChoosedLvl3] = useState<any>(null)
  const [choosedLvl4, setChoosedLvl4] = useState<any>(null)
  const [choosedLvl5, setChoosedLvl5] = useState<any>(null)
  const router = useRouter()
  // Helpers
  const {data: courses, isLoading: isLoadingCourses, isError: isErrorCourses, refetch: refetchCourses} = useQuery(['get courses'], () => CourseService.getCoursesLvl1(), { staleTime: 0, cacheTime:0 })

  const { data: lvl1, isLoading: isLoadingLvl1, isError: isErrorLvl1, refetch: refetchLvl1 } = useQuery(['get course by id', choosedLvl1],
  () => {
      if (choosedLvl1 === null) {
      return null;
      }
      return CourseService.getChildrenById(choosedLvl1);
  },
  { staleTime: 0, cacheTime:0 }
  );

  const { data: lvl2, isLoading: loadingLvl2, isError: errorLvl2, refetch: refetchLvl2 } = useQuery(['get course by id', choosedLvl2],
  () => {
      if (choosedLvl2 === null) {
      return null;
      }
      return CourseService.getChildrenById(choosedLvl2);
  },
  { staleTime: 0, cacheTime:0 }
  );

  const { data: lvl3, isLoading: loadingLvl3, isError: errorLvl3, refetch: refetchLvl3 } = useQuery(['get course by id', choosedLvl3],
  () => {
      if (choosedLvl3 === null) {
      return null;
      }
      return CourseService.getChildrenById(choosedLvl3);
  },
  { staleTime: 0, cacheTime:0 }
  );

  const { data: lvl4, isLoading: loadingLvl4, isError: errorLvl4, refetch: refetchLvl4 } = useQuery(['get course by id', choosedLvl4],
  () => {
      if (choosedLvl4 === null) {
      return null;
      }
      return CourseService.getChildrenById(choosedLvl4);
  },
  { staleTime: 0, cacheTime:0 }
  );

  const refetchingLvlFunc = (lvl: number) => {
    if(lvl == 1) {
      refetchLvl1()
    } else if (lvl == 2) {
      refetchLvl2()
    } else if (lvl == 3) {
      refetchLvl3()
    } else if (lvl == 4) {
      refetchLvl4()
    } 

    if(lvl == 0) {
      refetchLvl1()
    }
  }

  const refetchRemove = () => {
    refetchLvl1()
    refetchLvl2()
    refetchLvl3()
    refetchLvl4()
  }

  const updateFunction = async (id: number, name:string, grade: string, lvl:number, published: boolean, orden:number) => {
    await CourseService.update(id, {name,grade, published, orden})
    refetchingLvlFunc(lvl- 1)
    refetchCourses()

  }

  const silentUpdate = async (id: number, name:string, grade: string, lvl:number, published: boolean, orden:number) => {
    await CourseService.update(id, {name,grade, published, orden})
  }

  const removeFunction = async (id: number, lvl:number) => {
    await CourseService.remove(id)
    refetchRemove()
    refetchCourses()

  }

  const createFunction = async (name: string, level: number, parent: number | null ) => {
    await CourseService.create({name:name, level: level, totalChildren:1, parent: parent, published:true })
    if(parent == null) {
      refetchCourses()
    }
    refetchingLvlFunc(level - 1)
  }

  const handleUploadImage = async (file: File, id: number) => {
    const res = await CourseService.saveImage(file, id)
    if(res) {
      refetchCourses()

    }
  }

  const uploadFile = async (file: File, id: number) => {
    const res = await CourseService.savePdf(file, id)
    if(res) {
      refetchCourses()

    }
  } 

  useEffect(() => {
    const handleRouter = () => {
      const { query } = router;
      if (query.first && !query.second && !query.third && !query.fourth && !query.fifth) {
        setChoosedLvl1(query.first);
      } else if (query.first && query.second && !query.third && !query.fourth && !query.fifth) {
        setChoosedLvl1(query.first);
        setChoosedLvl2(query.second);
      } else if (query.first && query.second && query.third && !query.fourth && !query.fifth) {
        setChoosedLvl1(query.first);
        setChoosedLvl2(query.second);
        setChoosedLvl3(query.third);
      } else if (query.first && query.second && query.third && query.fourth && !query.fifth) {
        setChoosedLvl1(query.first);
        setChoosedLvl2(query.second);
        setChoosedLvl3(query.third);
        setChoosedLvl4(query.fourth);
      }
    };

    handleRouter();
  }, [router.query.first, router.query.second, router.query.third, router.query.fourth, router.query.fifth, router]);


  const CourseMethods = {
    setChoosedLvl1,
    setChoosedLvl2,
    setChoosedLvl3,
    setChoosedLvl4,
    setChoosedLvl5,
    refetchLvl1,
    refetchLvl2,
    refetchLvl3,
    refetchLvl4,
    updateFunction,
    silentUpdate,
    removeFunction,
    createFunction,
    setChoosedCourse,
    handleUploadImage,
    uploadFile
  };

  const value: CourseContextType = {
    courses,
    CourseMethods,
    lvl1,
    choosedLvl1,
    lvl2,
    choosedLvl2,
    lvl3,
    choosedLvl3,
    lvl4,
    choosedLvl4,
    choosedCourse,
    isLoadingLvl1,
    loadingLvl2,
    loadingLvl3,
    loadingLvl4

  };

  return <CourseContext.Provider value={value} {...props} />;
};

export { useCourse, CourseProvider };