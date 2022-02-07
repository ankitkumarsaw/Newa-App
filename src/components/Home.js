import React,{useState} from 'react';
import Signup from './accountComponents/Signup'
import Login from './accountComponents/Login'
import General from './newsComponents/General'
import Business from './newsComponents/Business'
import Entertainment from './newsComponents/Entertainment'
import Health from './newsComponents/Health'
import Science from './newsComponents/Science'
import Technology from './newsComponents/Technology'
import Sports from './newsComponents/Sports'
import {Routes, Route} from "react-router-dom";
export default function Home() {
  const[display, setDisplay] = useState({
    display: 'block'
  })
  const[display1, setDisplay1] = useState({
    display: 'none'
  })
  const logIn = () => {
setDisplay({
  display: 'none'
})
setDisplay1({
  display: 'block'
})
    
  }
  const signUp = () => {
setDisplay({
  display: 'block'
})
setDisplay1({
  display: 'none'
})
    
  }
  return <div style={{"marginTop":"100px"}}>
      <Login signUp={signUp} display1={display1}/>
      <Signup logIn={logIn} display={display}/>
      <div>
<Routes>
  <Route path="/" element={<General/>} />
  <Route path="/entertainment" element={<Entertainment/>} />
  <Route path="/health" element={<Health/>} />
  <Route path="/science" element={<Science/>} />
  <Route path="/technology" element={<Technology/>} />
  <Route path="/sports" element={<Sports/>} />
  <Route path="/business" element={<Business/>} />
</Routes>
      </div>
  </div>;
}
