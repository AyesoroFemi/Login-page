import './App.css';
import { Routes,  Route } from "react-router-dom";
// import NavBar from './components/NavBar';
import Tasks from './components/Task';

function App() {

  
  return (
    <div>
       <Routes>
        <Route path='/' element={<Tasks />} />
      </Routes>
      {/* <Tasks /> */}
    </div>
  );
}

export default App;
