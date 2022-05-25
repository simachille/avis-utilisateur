import React, {useState} from 'react'

function TaskFooter({onTRChange, id, ti, tr: initialTR}) {
  // HOOK 
  const [displayForm, setDisplayForm]= useState(false);
  const [tr, setTr]= useState(initialTR);

  const updateTR = (event) => {
    const nTR = event.target.value;
    setTr(nTR);
    setDisplayForm(!displayForm);
    onTRChange({id, tr: nTR})
  }

  const toggleForm = () => {
    setDisplayForm(!displayForm);
  }

  return (
    <div className='flex justify-between border border-red-500'>
      <p>TI: <span>{ti}</span></p>
      {displayForm ? 
        <input type="number" name="tr" onBlur={updateTR}/> : 
        <button className=' border border-pink-500' onClick={toggleForm}>TR: <span>{tr}</span></button>
      }
      
    </div>
  )
}

export default TaskFooter