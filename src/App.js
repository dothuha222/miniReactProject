import './App.css';
import { Routes, Route } from 'react-router-dom';
import Users from './User/Users';
import CreateUsers from './User/CreateUsers';
import UpdateUsers from './User/UpdateUsers';
function App() {
  
  return(
    <Routes>
      <Route path="/" element = {<Users/>}></Route>
      <Route path="/create" element = {<CreateUsers/>}></Route>
      <Route path="/update/:id" element = {<UpdateUsers/>}></Route>
    </Routes>
  )
}
export default App;
