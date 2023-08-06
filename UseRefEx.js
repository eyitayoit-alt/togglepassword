import React,{useRef,useState} from 'react';
import {FaEyeSlash,FaEye} from  'react-icons/fa'


function TogglePassword(){
    
    const inputref= useRef(null)
    const [iconState,setIcon]=useState(false) 
    const handleClick=()=>{
        const inputattr=inputref.current.getAttribute('type')
        inputattr==="password"?inputref.current.setAttribute('type','text'):inputref.current.setAttribute('type','password')
        iconState ?setIcon(false):setIcon(true)
        
    
    }
    let icon;
    if(iconState){
        icon=<FaEyeSlash />
    }
    else{
        icon=<FaEye />   
    }
return(

  <>
  <div>
    <p>Email</p>
  <input  type='text' id="email" />
  </div>
  <div>
  <p>Password</p>
    <input ref={inputref} type='password' id="pwd" />
    
    <span onClick={handleClick}>{icon}</span>

    
    </div>
 
    </>
    
    
    
)
}

export default TogglePassword;
