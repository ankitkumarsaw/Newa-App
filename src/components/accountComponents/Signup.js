import React, { useState } from 'react';


export default function Login(props) {
    const[already, setAlready] = useState("")
    const[warning, setWarning] = useState({
        borderColor: "black",
        padding: "5px 10px",
        margin: "20px 50px",
        fontSize: "24px",
        
    })
    const[warning2, setWarning2] = useState({
        borderColor: "black",
        padding: "5px 10px",
        margin: "20px 50px",
        fontSize: "24px",
        
    })
    const[number, setNumber] = useState("")
    const[password, setPassword] = useState("")
    console.log(number)
    const dS = JSON.parse(localStorage.getItem("data"))
    let dataStored;
    console.log(number)
    if(dS === null) {
       dataStored = [];
        console.log("gg")
    }else{
        dataStored = dS
    }
    
    const data = {
        Number: number,
        Password: password
    }
    const [display, setDisplay] = useState({
        display: 'none'
    })
    const[start, setStart]= useState(1)
if(start === 1){
 const interval = setInterval(() => {
    clearInterval(interval)
            setDisplay({
                display: 'block'   
            })
            
        }, 4000);
        setStart(2)
        console.log(start)
    }

const closePopup = () => {
    if(dS === null){
        dataStored.push(data)
        localStorage.setItem("data", JSON.stringify(dataStored))   
        setDisplay({
            display: 'none'
        })
    }else{
    dS.forEach((_,index) =>{
const dataStored = dS[index];
if(dataStored.Number !== number){
    if(number.length !== 10 ){
        setWarning({
            border: '3px solid red',
            padding: "5px 10px",
            margin: "20px 50px",
            fontSize: "24px",
            
        })
      }else if(password.length < 8 ){
          setWarning2({
            border: '3px solid red',
              padding: "5px 10px",
              margin: "20px 50px",
              fontSize: "24px",
              
          })
      }
      else{
          dataStored.push(data)
          localStorage.setItem("data", JSON.stringify(dataStored))   
          setDisplay({
              display: 'none'
          })
      }
    }else{
        setAlready("Already Registered")
    }
    })
    
}
   
}
    return <div style={props.display} className="modal" tabIndex="-1" >
        <div style={display}>
        <div className="modal-dialog " >
            <div className="modal-content bg-dark" style={{"width": "550px", "height": "550px","marginTop": "100px"}}>
                <div className="modal-header" >
                    <h1 className="modal-title " style={{"color": "white"}}  id="exampleModalLabel">SignUp</h1>
                   
                </div>
                <div className="modal-body"  style={{"margin":"2opx 40px"}}>
                    <div className="d-flex flex-column justify-content-center">
                        <input  type="number" style={warning} placeholder="Phone no."  onChange={(e) => setNumber(e.target.value)} />
                        <input type="password" style={warning2} placeholder="Password.. contain 8 digit"  onChange={(e) => setPassword(e.target.value)}/></div>
                        <div className="d-flex flex-column justify-content-center">
                            <button type="button" style={{"margin": "20px 50px"}} className="btn btn-primary" onClick={closePopup}>Sign Up</button>
                            <p style={{"color": "white"}}>{already}</p>
                        </div>
                </div>
                <div className="modal-body">
                    <h4 style={{"color": "white"}}>Already had aaccount?</h4>
                    <button type="button"  className="btn btn-primary"onClick={props.logIn}>Log In</button>
                </div>
            </div>
        </div>
        </div>
    </div>;
}
