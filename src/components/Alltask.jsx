import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar,faStar } from "@fortawesome/free-solid-svg-icons";

function Alltask() {
  const [task, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4200/api/task/allTasks");
        setTasks(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='bgMain'>
      <h1 className='ps-4 fs-4 text-light py-4 pb-4'>All tasks({task.length})</h1>
      {/* <ul>
        {task.map((t, index) => (
          <li key={t._id} className={`bgcolor my-2 mx-auto ps-4 py-3 d-flex allList rounded ${index === 0 ? 'firstChildStyle' : ''
            }`}>
         
            <div className='col-9'>
  <h1 className="fw-bold mb-1 fs-5 text-light">{t.task}</h1>
  <p className="fw-normal mb-1">{t.disc}</p>
  <p className="fw-normal mb-1">
    {t.imp === 'important' && <FontAwesomeIcon icon={faCalendar} className="pt-1 pe-2" />}
    {new Date(t.date).toLocaleDateString('en-US')}
  </p>
</div>

<div className='col-3 align-items-center'>
  <div className=''>
    <p className="fw-normal mb-1">     
    {t.imp === 'important' && <FontAwesomeIcon icon={faStar} className="pt-1 pe-2" style={{color:'#E73C7E'}} />}
</p>
    <button className={`mx-3 py-2 px-2 rounded-pill ${t.comp === 'uncomplete' ? 'bUn' : 'bCom'}`}>{t.comp}</button>
  </div>
</div>

          </li>
        ))}
      </ul> */}


    </div>
  );
}

export default Alltask;
