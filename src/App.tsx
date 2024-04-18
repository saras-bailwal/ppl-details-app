import { useState } from 'react'
import './App.css'
import ListinPage from './components/ListingPage/ListingPage';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListinPage/>
      
    </>
  )
}

export default App
