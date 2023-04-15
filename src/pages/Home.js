import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logoutInitiate } from '../redux/actions';

function Home() {
  const {currentUser} = useSelector((state) => state.user)
  const dispatch = useDispatch();
  const handleAuth = () =>{
    if(currentUser){
      dispatch(logoutInitiate()); 
    }
  }
  return (
    <div style={{textAlign:"center"}}>
        <h1> Hello World</h1>
        <br />
        <button className='btn btn-danger'onClick={handleAuth}>
        Logout
        </button>
    </div>
  )
}

export default Home