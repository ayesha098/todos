import React from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose} from "@fortawesome/free-solid-svg-icons";
function Form({close}) {
  
  const submit =(e)=>{
          e.preventDefault();
    const data ={
      tasks: e.target.tasks.value.trim(), 
      date: e.target.date.value.trim(),
      disc: e.target.disc.value.trim(),
      imp: e.target.imp.value.trim()
      }
      console.log(data)

      axios.post("http://localhost:4200/api/task/add", data,{headers:{
        "Content-Type":'application/json'
      }})
      .then(() => {
        e.target.reset()
        console.log(data)
      

      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <>
          <div className="popup-overlay bgcolor rounded  text-white position-fixed">
          <div className="popup">
         
            <div className="popup-content">
              <div className='fs-4 d-flex justify-content-between'>
                 <p className='fw-bold'>Add Task</p>
              <FontAwesomeIcon icon={faClose} onClick={close} className='mt-1'/>
              </div>
             
            <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label fs-5">Task</label>
            <input type="text" className="form-control" name='tasks'  required/>
          </div>
          <div className="mb-3">
            <label for="message-text" className="col-form-label fs-5">Due Date</label>
            <input type="date" className="form-control" name='date'  required/>
          </div>
           <div className="mb-3">
            <label for="message-text" className="col-form-label">Details</label>
            <textarea  className="form-control"  name='disc' />
          </div>
          <div className="form-check form-switch  fs-5 mb-3">
  <input className="form-check-input ch" type="checkbox" name='imp' value="important" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlForfor="flexSwitchCheckDefault">Important</label>
</div>

    <button className='rounded py-2 btnSubmit border-0  px-5 fs-5 fw-bold' type='submit'>Submit</button>
        </form>
      
           
            </div>
          </div>
        </div>
     
    
    </>
  )
}

export default Form
