import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, addHobby } from './components/userReducer';

const App = () => {
  const hobbies = ['soccer', 'coding', 'basketball'];
  const [hobby, setHobby] = useState('');
  // dispatch used to dispatch actions
  const dispatch = useDispatch();
  // useSelector used in order to fetch reducer values
  const state = useSelector((state)=>state.user.value);

  const handleHobby = (e)=>{
    e.preventDefault();
    if(!hobby) return;
    try{
      dispatch(addHobby({newHobby: hobby}));
    }catch{
      throw new Error;
    }
  }
  
  return <div style={{display:'flex', justifyContent:'center',
  alignItems:'center', flexDirection:'column'}}>
      <h5>{state.name}</h5>
      <h5>{state.age}</h5>
      <ul>
        {state.hobbies?.map((singleHobby, index)=>{
          return (
              <li key={index}>{singleHobby}</li>
          )
        })}
      </ul>
     

      <br/>
      <input placeholder='Enter a hobby' onChange={(e)=>setHobby(e.target.value)}></input>
      <button onClick={handleHobby} style={{marginTop:10}}>Submit Hobby</button>
  </div>
};

export default App;
