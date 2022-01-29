import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, addHobby, deleteHobby } from './components/userReducer';

const App = () => {
  const hobbies = ['soccer', 'coding', 'basketball'];
  const [hobby, setHobby] = useState('');
  // dispatch used to dispatch actions
  const dispatch = useDispatch();
  // useSelector used in order to fetch reducer values
  const userDetails = useSelector((state)=>state.user.value);
  console.log(userDetails);

  const handleHobby = (e)=>{
    e.preventDefault();
    if(!hobby) return;
    try{
      if(!checkHobby(hobby)){
        dispatch(addHobby({newHobby: hobby, newHobbyId: new Date()}));
      }else{
        console.log('Write another hobby fucker')
      }
    }catch{
      throw new Error;
    }
  }

  const checkHobby = (hobby)=>{
    const existHobby = userDetails.hobbies?.find((userHobby)=>userHobby === hobby);
    if(existHobby){
      return true;
    }
    return false;
  }

  const deleteHobbyHandler = (hobbyId)=>{
    dispatch(deleteHobby(hobbyId));
  }
  
  return <div style={{display:'flex', justifyContent:'center',
  alignItems:'center', flexDirection:'column'}}>
      <h5>{userDetails.name}</h5>
      <h5>{userDetails.age}</h5>
      <ul>
        {userDetails.hobbies?.map((singleHobby, index)=>{
          return (
            <div key={index}>
              <li >{singleHobby.hobby}</li>
              <button onClick={()=>deleteHobbyHandler(singleHobby.id)}>Delete Me</button>
            </div>   
          )
        })}
      </ul>
     

      <br/>
      <input placeholder='Enter a hobby' onChange={(e)=>setHobby(e.target.value)}></input>
      <button onClick={handleHobby} style={{marginTop:10}}>Submit Hobby</button>
  </div>
};

export default App;
