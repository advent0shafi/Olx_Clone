import React, { Fragment,useState,useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './Create.css';
import Header from '../Header/Header';
import { AuthContext, FirebaseContext } from '../../store/FirebaseContext';

const Create = () => {
const history = useHistory();
const {firebase} = useContext(FirebaseContext);
const {user} = useContext(AuthContext);

const [name,setName] = useState('');
const [category,setCategory] = useState('');
const [price,setPrice] = useState('');
const [image,setImage] = useState('');

const handleSubmit = () => {
  if (user) {
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ ref }) => {
      ref.getDownloadURL().then((url) => {
        const currentDate = new Date();
        firebase.firestore().collection('products').add({
          name,
          category,
          price,
          url,
          userId: user.uid,
          createdAt: currentDate.toDateString() // Use new Date().toDateString()
        });
        history.push('/');
      });
    });
  }else{
    alert('please login');
  };
};






  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              onChange={(e)=>setName(e.target.value)}
              id="fname"
              name="Name"
              
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              onChange={(e)=>setCategory(e.target.value)}
              name="category"
            
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" onChange={(e)=>setPrice(e.target.value)} id="fname" name="Price" />
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src={image?URL.createObjectURL(image):""}></img>
      
            <br />
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>

        </div>
      </card>
    </Fragment>
  );
};

export default Create;
