import './App.css'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import EditPerson from './pages/EditPerson'
import CreatePerson from './pages/CreatePerson'

function App() {
  return(
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/createPerson' element={<CreatePerson />} />
      <Route path='/editPerson/:id' element={<EditPerson />} />
    </Routes>
  )
}

export default App
