import React,{ useState} from 'react';

export default function Signup(props) {
    const [display, setDisplay] = useState({
        display: 'block'
        
    })
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
    const storedData = JSON.parse(localStorage.getItem("data"));
    const closePopup = () => {
       storedData.forEach((_,index) =>{
        const store = storedData[index];
        if(store.Number != number){
            setWarning({
                border: '3px solid red',
                padding: "5px 10px",
                margin: "20px 50px",
                fontSize: "24px",
                
            })
        }else if(store.Password != password){
setWarning2({
    border: '3px solid red',
    padding: "5px 10px",
    margin: "20px 50px",
    fontSize: "24px",
    
})
        }
        else{
            setDisplay({
                display : "none"
            })
        }
       })


    }
  return <div style={props.display1} className="modal" tabIndex="-1">
       <div style={display}>
        <div className="modal-dialog" >
            <div className="modal-content bg-dark"  style={{"width": "550px", "height": "550px","marginTop": "100px"}}>
                <div className="modal-header">
                    <h1 className="modal-title" style={{"color": "white"}} id="exampleModalLabel">LogIn</h1>
                    
                </div>
                <div className="modal-body">
                    <div className="d-flex flex-column justify-content-center">
                        <input type="number" style={warning} placeholder="Phone no..."  onChange={(e) => setNumber(e.target.value)} />
                        <input type="password" style={warning2} placeholder="Password..."  onChange={(e) => setPassword(e.target.value)}/></div>
                        <div className="d-flex flex-column justify-content-center">
                            <button type="button" style={{"margin": "20px 50px"}} className="btn btn-primary" onClick={closePopup}>Login Up</button>
                        </div>
                </div>
                <div className="modal-body">
                    <h4 style={{"color": "white"}}>Not Created Account ?</h4>
                    <button type="button" className="btn btn-primary"onClick={props.signUp}>Sign Up</button>
                </div>
            </div>
        </div>
        </div>
  </div>;
}
