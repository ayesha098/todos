import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Alltask from './components/Alltask';
import ImpTask from './components/ImpTask';
import CompTasks from './components/CompTasks';
import UnCompTasks from './components/UnCompTasks ';
import Nav from './components/Nav'
import Rightbar from './components/Rightbar'
function App() {
 
  return (
  <>
    <BrowserRouter>
        <div className='row  align-items-start g-0'>
          <div className='col-3'>
            <Nav />
          </div>
          <div className='col-6'>
            <Routes>
              <Route path="/" element={<Alltask />} />
              <Route path="/important-tasks" element={<ImpTask />} />
              <Route path="/completed-tasks" element={<CompTasks />} />
              <Route path="/uncompleted-tasks" element={<UnCompTasks />} />
            </Routes>
          </div>
          <div className='col-3'>
            <Rightbar />
          </div>
        </div>
      </BrowserRouter>

   
  </>
  
  );
}

export default App;
