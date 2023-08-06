# togglepassword
React code example on how to toggle password visibility using useRef hook
**Introduction**
One way to manipulate [Document Object Model ](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)(DOM)  without triggering a re-render of the component in React is to use [useRef hook](https://www.w3schools.com/react/react_useref.asp). In this article, I will useRef hook to toggle password input visibility.

This article is for React beginner developers with a basic understanding of the React library. The reader will learn how to toggle password field visibility using useRef.
**Outline**

- useRef Concept 
- Usage of useRef
- Toggle password using useRef
- Conclusion

**useRef Concept**
[React documentation ](https://react.dev/reference/react/useRef#useref) defines useRef as a hook that lets you reference a value not needed for rendering. It is a built-in hook use for accessing the DOM. It does not trigger a re-render of the component. UseRef is a top level componenet. You access the value held by useRef using its current property. 

**Usage of useRef**

```
  
import React,{useRef} from 'react';

function TogglePassword(){
    
    const inputRef= useRef(initialValue)

}
```
In the above code example, I imported useRef from React and initialized it with an initial value. The value can be string, int, or object. To access the useRef value, I used its current property as shown below.
```
const refValue= inputRef.current

```
**Toggle password using useRef**
I used uesRef to access the DOM to achieve the toggle password effect. In line 4 of the code example below, I set the initial value of useRef to null.
```
1 import React,{useRef,useState} from 'react';
2 import {FaEyeSlash,FaEye} from  'react-icons/fa'


3 function TogglePassword(){
    
4    const inputref= useRef(null)
5    const [iconState,setIcon]=useState(false) 
6    const handleClick=()=>{
7       const inputattr=inputref.current.getAttribute('type')
8        inputattr==="password" ? inputref.current.setAttribute('type', 'text'): inputref.current.setAttribute('type', 'password')
9        iconState ? setIcon(false) : setIcon(true)
        
    
    }
 10   let icon;
 11  if(iconState){
        icon=<FaEyeSlash />
    }
  12  else{
        icon=<FaEye />   
    }
13return(

  <>
  14<div>
  15  <p>Email</p>
  16 <input  type='text' id="email" />
  17 </div>
  18 <div>
 19 <p>Password</p>
 20   <input ref={inputref} type='password' id="pwd" />
    
 21   <span onClick={handleClick}>{icon}</span>

    
 22   </div>
 
    </>
    
    
    
)
}

24 export default TogglePassword;
```
In line 5, I initialized the iconState to false using useState hook to track password visibility. I created the handleClick function in line 6 to toggle password visibility by listening to a click event on the eye icon. In the JSX of the TogglePassword component, line 20, I used inputRef to hold the reference to the password input. In line 7, I used inputRef.current property to access the input type attribute. If the input type attribute was password, I set the type to 'text' and vice-versa using the ternary operator in line 8. In line 9, I toggled iconState to true or false. Line 10, I declared a variable icon and was assigned an eye component or eye slash component depending on the iconState.

**Conclusion**
In the article, I demonstrated the usage of useRef and showed how it can access the DOM. Now, the readers should have gained a better understanding of useRef and how to use it to access the DOM.

Find this article educative, comment, like, and share. 
