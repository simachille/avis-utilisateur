import React from 'react';
import TaskBody from '../TaskBody/TaskBody';
import TaskFooter from '../TaskFooter/TaskFooter';
import TaskHeader from '../TaskHeader/TaskHeader';
// Composant
function Task (props) {
  return (
    <div className='border border-green-700 bg-white p-4 text-black mx-4'>
        <TaskHeader title={props.task.title}/>
        <TaskBody  body={props.task.body}/>
        <TaskFooter id={props.task.id} ti={props.task.ti} tr={props.task.tr} onTRChange={props.onTRChange}/>
    </div>
  )
}

export default Task;