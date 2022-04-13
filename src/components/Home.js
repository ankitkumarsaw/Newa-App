import React,{useState} from 'react';
import Accounts from './accountComponents/Accounts'
import General from './newsComponents/General'
import Business from './newsComponents/Business'
import Entertainment from './newsComponents/Entertainment'
import Health from './newsComponents/Health'
import Science from './newsComponents/Science'
import Technology from './newsComponents/Technology'
import Sports from './newsComponents/Sports'
import {Routes, Route} from "react-router-dom";
export default function Home() {
const [user, setUser] = useState(null)
 
  return (<>
<p>{user}</p>
     {!user &&  <Accounts setUser={setUser}/>}
      <Routes>
        <Route path="/" element={<General/>} />
        <Route path="/entertainment" element={<Entertainment/>} />
        <Route path="/health" element={<Health/>} />
        <Route path="/science" element={<Science/>} />
        <Route path="/technology" element={<Technology/>} />
        <Route path="/sports" element={<Sports/>} />
        <Route path="/business" element={<Business/>} />
      </Routes>
  </>)
}
