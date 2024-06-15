import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import NavBar from './components/NavBar'
import { Home, About, Contact, Projects } from './pages'

const App = () => {
  return (
    // Main section of our page
    <main className='bg-slate-300/20 h-full'>
        <Router>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/projects' element={<Projects />} />
            </Routes>
        </Router>
    </main>
  )
}

export default App