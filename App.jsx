import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListCourse from './components/ListCourse'
import Calculation from './components/Calculation'
import UserInfo from './components/UserInfo'
import ColorBox from './components/ColorBox'
import Demo123 from './components/Demo123'
import AccountList from './components/AccountList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* <ListCourse></ListCourse> */}
        {/* <Calculation></Calculation> */}
        {/* <UserInfo></UserInfo> */}
        {/* <ColorBox></ColorBox> */}
        <AccountList></AccountList>
    </>
  )
}

export default App
