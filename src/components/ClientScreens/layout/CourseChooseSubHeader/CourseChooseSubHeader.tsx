import { useCourses } from '@/hooks/useCourses';
import React, { useCallback, useEffect, useState } from 'react';
import ReactSelect from 'react-select';
import CourseCard from './CourseCard';
import { useActions } from '@/hooks/useActions';
import { useRouter } from 'next/router';
const CourseChooseSubHeader = () => {
  const router = useRouter()
  const {first, second, third, fourth, fifth} = router.query;

  const [ch, setCh] = useState<{ value: number; label: string; } | null>(null);
  const [ch2, setCh2] = useState<{ value: number; label: string; } | null>(null);
  const [ch3, setCh3] = useState<{ value: number; label: string; } | null>(null);
  const [ch4, setCh4] = useState<{ value: number; label: string; } | null>(null);

  const {
    courses,
    selectedFirstCourse,
    selectedSecondCourse,
    selectedThirdCourse,
    selectedForthCourse,
    selectedFifthCourse,
  } = useCourses();
  const {
    chooseFirstCourse,
    chooseSecondCourse,
    chooseThirdCourse,
    chooseForthCourse,
    chooseFifthCourse,
    closeChooseThirdCourse,
    closeChooseForthCourse,
    closeChooseFifthCourse,
  } = useActions();


  const handleUpdateSelect = useCallback(() => {
    let findFirst;
    let findSecond;
    let findThird;
    let findFourth;
    let findFifth;

    if (first) {
      findFirst = courses?.find((item) => item.id === +first);
      console.log('findFirst',findFirst)
      chooseFirstCourse(findFirst?.children)
      if(findFirst){
        chooseFirstCourse(findFirst);
      }
    }
    if(findFirst && second) {
      findSecond = findFirst?.children?.find((item) => item.id === +second);
      chooseSecondCourse(findSecond);
      if (findSecond?.id && findSecond?.name) {
        setCh({ value: findSecond.id, label: findSecond.name });
      }
    }

  
    if(findFirst &&  findSecond && third) {
      findThird = findSecond?.children?.find((item) => item.id === +third);
      chooseThirdCourse(findThird);
      if (findThird?.id && findThird?.name) {
        setCh2({ value: findThird.id, label: findThird.name });
      }
    }

    if(findFirst &&  findSecond && findThird && fourth) {
      findFourth = findThird?.children?.find((item) => item.id === +fourth);
      chooseForthCourse(findFourth);
      if (findFourth?.id && findFourth?.name) {
        setCh3({ value: findFourth.id, label: findFourth.name });
      }
    }
    if(findFirst &&  findSecond && findThird && findFourth && fifth) {
      findFifth = findFourth?.children?.find((item) => item.id === +fifth);
      chooseFifthCourse(findFifth);
      if (findFifth?.id && findFifth?.name) {
        setCh4({ value: findFifth.id, label: findFifth.name });
      }
    }
  


  },[first, second, third, fourth, fifth, courses, chooseFirstCourse, chooseSecondCourse, chooseThirdCourse, chooseForthCourse, chooseFifthCourse])


  const handleChoose = (lvl: number, id: number | undefined) => {
    if (lvl === 2) {
      const find = selectedFirstCourse?.children?.find((item) => item.id === id);
      chooseSecondCourse(find);
      closeChooseThirdCourse();
      closeChooseForthCourse();
      closeChooseFifthCourse();
      setCh2(null)
      setCh3(null)
      setCh4(null)
      router.push(`/client/${first}/${id}`)
    } else if (lvl === 3) {
      const find = selectedSecondCourse?.children?.find((item) => item.id === id);
      chooseThirdCourse(find);
      closeChooseForthCourse();
      closeChooseFifthCourse();
      setCh3(null)
      setCh4(null)
      router.push(`/client/${first}/${second}/${id}`)
    } else if (lvl === 4) {
      const find = selectedThirdCourse?.children?.find((item) => item.id === id);
      chooseForthCourse(find);
      closeChooseFifthCourse();
      setCh4(null)
      router.push(`/client/${first}/${second}/${third}/${id}`)
    } else if (lvl === 5) {
      const find = selectedForthCourse?.children?.find((item) => item.id === id);
      chooseFifthCourse(find);
      router.push(`/client/${first}/${second}/${third}/${fourth}/${id}`)
    }
  };

  useEffect(() => {
    handleUpdateSelect()
  },[handleUpdateSelect])

  return (
    <div className="fixed w-full flex gap-12 items-center" style={{ background: '#F0FBFF', top: '70px', height: '80px', zIndex: 100000000 }}>
      <div className="w-52 mr-12">
        
        <ReactSelect
          options={selectedFirstCourse?.children?.map((item) => ({ value: item.id, label: item.name }))}
          onChange={(item) => {handleChoose(2, item?.value); setCh(item)}}
          value={ch}
          placeholder="בחר פרק"
        />
      </div>
      <div className="w-52">
        <ReactSelect
          options={selectedSecondCourse?.children?.map((item) => ({ value: item.id, label: item.name }))}
          onChange={(item) => {handleChoose(3, item?.value); setCh2(item)}}
          value={ch2}
          placeholder="בחר יחידה"
        />
      </div>
      <div className="w-52">
        <ReactSelect
          options={selectedThirdCourse?.children?.map((item) => ({ value: item.id, label: item.name }))}
          onChange={(item) => {handleChoose(4, item?.value); setCh3(item)}}
          value={ch3}
          placeholder="בחר נושא"
        />
      </div>
      <div className="w-52">
        <ReactSelect
          options={selectedForthCourse?.children?.map((item) => ({ value: item.id, label: item.name }))}
          onChange={(item) => {handleChoose(5, item?.value); setCh4(item)}}
          value={ch4}
          placeholder="בחר תרגיל"
        />
      </div>
    </div>
  );
};

export default CourseChooseSubHeader;
