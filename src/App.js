//import img from './Controlling-in-Management.jpg';

//import { useState } from "react";
import './App.css';
import { useState } from "react";
import FormInput from  "./components/FormInput" ;
//import { Grid } from '@material-ui/core';
const App = () => {

  //const usernameRef = useRef()
  const [values, setValues]= useState({
    username:"",
    email:"",
    fullname:"",
    
  });
 /* 1) Event title
2) Organizer name
3) Venue
4) Date (text format)
5) Description (text format)
6) Participants limit (int format)
7) Timings (Text format)
8) Organizer Email-id (text format)
9) Accommodation (text - values it can take are yes/no)
Then finally have a button that reads 'Create event'*/
  const inputs = [
    {
      id:1,
      name:"Event Title",
      type:"text",
      placeholder:"Event Title",
      errorMessage:"",

      label:"Event Title",
      required:true,
      
    },
    {
      id:2,
      name:"Organizer Name",
      type:"text",
      placeholder:"Organizer Name",
      errorMessage:"",

      label:"Organizer Name",
      required:true,
      
    },
    {
      id:3,
      name:"Venue",
      type:"text",
      placeholder:"Venue",
      errorMessage:"",
      required:true,

      label:"Venue",
      
    },
    {
      id:4,
      name:"Date",
      type:"date",
      placeholder:"Date",
      required:true,
      errorMessage:"",

      label:"Date"
    },
    
     
    {
      id:6,
      name:"Participants",
      type:"number",
      placeholder:"Participants",
      errorMessage:"",
      required:true,
      label:"Participants"
    },
    {
      id:7,
      name:"Timings",
      type:"text",
      placeholder:"Timings",
      errorMessage:"",
      label:"Timings",
      required:true
    },
   
    {
      id:8,
      name:"Email-id",
      type:"email",
      placeholder:"Email-id",
      errorMessage:"Enter a valid email adress",
      label:"Email-id",
      required:true

    },
    {
      id: 9,
      name: "Accommodation",
      type: "radio",
      label: "Accommodation",
      required:true,
      options: [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" }
      ]
    },
    {
      id:5,
      name:"Description",
      type:"textarea",
      placeholder:"Description",
      errorMessage:"",

      label:"Description",
      required:true
      
    }
    
    
  ];
  
  
  
  const handleSubmit=(e)=>{
    e.preventDefault()
   
    
  };
  const onChange = (e) =>{
    setValues({...values,[e.target.name]: e.target.value });
  }
  
  console.log(values);
  return <div className="app">
    
    <img 
        className="app__logo"
        src={require('./Inquiry_Management-removebg.png')} 
        alt="img" 
/>
    
    <form onSubmit={handleSubmit}>
      <h1>Event Details</h1>
      
      {inputs.map((input) => (
        <FormInput 
        key={input.id}
        {...input}
        
        options={input.options}
        value={values[input.name]}
        onChange={onChange}
        />
        
      ))
     
      }
       
      
      
      
      <button>Create Event</button>
      

    </form>
    
  </div>
}
export default App;