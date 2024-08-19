import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateMessage from './components/CreateMessage';
import ViewMessages from './components/Message';
function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<CreateMessage />}></Route>
        <Route path='/message' element={<ViewMessages />}></Route>
      </Routes>
    </Router>
  )
}

export default App
