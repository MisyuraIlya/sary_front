import React, {FC, useEffect, useState} from 'react';
import { ISecondModuleExercises, collectionValues, collectionsCols } from '@/types/ModulesTypes.ts/SecondModule.interface';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { getDragModuleData } from '../helpers/getDragModuleData';
import { Tooltip, Typography } from "@material-tailwind/react";
import { getColumnAnswers } from '../helpers/getColumnAnswers';

type DragAndDropModuleProps = {
    item : ISecondModuleExercises;
}
const DragAndDropModule:FC<DragAndDropModuleProps> = ({item}) => {

    const data = getDragModuleData(item)
    const onDragEnd = (result: DropResult) => {
        const { source, destination } = result;
        if (!destination || (source.droppableId === destination.droppableId && source.index === destination.index)) {
            return;
        }
        const sourceColumn = data.find(column => column.title === source.droppableId);
        const destinationColumn = data.find(column => column.title === destination.droppableId);
        const draggedItem = sourceColumn?.questionIds[source.index];
        if (sourceColumn && destinationColumn && draggedItem) {
            sourceColumn.questionIds.splice(source.index, 1);
            destinationColumn.questionIds.splice(destination.index, 0, draggedItem);
        }
    };


    return (
        <div className='w-full  h-auto px-2'>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className='flex gap-5'>
                    {data?.map((column,indexx) => 
                        <div className={`${column.title === 'מחסן מילים' ? 'bg-[#E5F0FE] w-[400px]' : 'border-[3px] border-1 border-[#E5F0FE] w-[200px] min-h-[300px]'} relative`} key={indexx}>
                            <h2 className='bg-[#BACEE9] text-black font-bold py-2 px-4 text-center'>{column.title}</h2>
                            {column.title !== 'מחסן מילים' &&
                            <div className='absolute top-1 right-2'>
                                <Tooltip
                                    placement="bottom"
                                    className="border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10"
                                    content={
                                        <div className="w-30">
                                            <Typography color="black" className="font-medium">
                                                {getColumnAnswers(column.orden, item).map((item,index) => {
                                                    
                                                    return (
                                                        <div key={index}>
                                                            תשובה {index + 1}: {item}
                                                        </div>
                                                    )
                                                })}
                                            </Typography>
                                        </div>
                                    }
                                    >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        className="h-5 w-5 cursor-pointer text-blue-gray-500"
                                    >
                                        <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                        />
                                    </svg>
                                </Tooltip>
                            </div>
                            }
                            <Droppable droppableId={column.title}>
                                {(provided) => (
                                    <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className={`h-full text-center `}
                                    >
                                        <div className={`${column.title === 'מחסן מילים' ? 'grid grid-cols-12' : 'grid grid-cols-12'} `}>
                                            {column.questionIds.map((questionId, index) => {
                                                return (
                                                <Draggable key={questionId.value} draggableId={questionId.value} index={index}>
                                                    {(provided) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className={`${column.title === 'מחסן מילים' ? 'col-span-4' : 'col-span-6'}`}
                                                    >
                                                        {column.title === 'מחסן מילים' ?
                                                        <div className='bg-white m-2 text-center px-1 rounded-md w-auto fontSizeExercise'>
                                                            {questionId.value}
                                                        </div>                                                    
                                                        :
                                                        <div className=' m-2 px-2   text-center'>
                                                            <div className='border border-1 border-[#BACEE9] rounded-md'>
                                                                {questionId.value}
                                                            </div>    
                                                        </div>    
                                                        }
                                                    </div>
                                                    )}
                                                </Draggable>
                                                );
                                            })}
                                        </div>
                                    {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </div>
                    )}
                </div>
            </DragDropContext>
        </div>

    );
};

export default DragAndDropModule;