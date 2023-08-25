import React,{useState,useContext} from 'react';
import {FirebaseContext} from '../../store/FirebaseContext'
import {useHistory} from 'react-router-dom'
import Logo from '../../olx-logo.png';
import './Login.css';
import Spinner from '../Spinner/Spinner';

function Login() {
  const history = useHistory();
  const [loading,setLoading] = useState(false);
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const {firebase} = useContext(FirebaseContext)

  const handleSubmit=(e)=>{
    e.preventDefault()
    setLoading(true)
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push("/")
    }).catch((error)=>{
      setLoading(false)
      alert(error.message)
    })

  }
  return (
    <div>
    {loading&&<Spinner/>}
      <div className="loginParentDiv" >
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={()=>history.push('/signup')}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
