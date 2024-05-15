
import './LoginForm.css';
import logo from '../../assets/cat_icon.svg'; 
import React, {useState} from 'react';
import axios from 'axios';

const LoginForm = () => {

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
  
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    //makes get request to api to check credentials
    axios.post('http://127.0.0.1:8000/login/', formData)
    .then(response => {
      if(response.data == 'Account was not found' || response.data == "Wrong Password"){
        console.log("error")
      }
      else{
        localStorage.setItem("username", response.data.username)
        window.location.href = 'http://localhost:5173/cat'
      }
    }
  )
      
    .catch(error => {console.log(error)})
  }


  return (
    <div className="flex justify-center items-center min-h-screen pb-12 bg-cat-primary">
      <div className="flex flex-col items-center">
        <img src={logo} alt="Catalogue Logo" className='mb-2 w-24 h-24'/> 
        <div className="text-lg text-white font-main mb-4">cat-alogue</div> 

        <div className="bg-white p-8 border rounded-3xl shadow-lg">
          <form action="" onSubmit = {handleSubmit}>
            <div className="flex justify-center mb-6">
              <h1 className="text-2xl text-cat-primary font-main text-center">
                Sign in
              </h1>
            </div>

            <div className="flex justify-center mb-4">
              <div className="w-84">
                <input role='input' type='text' placeholder='Username' className="w-96 px-4 py-2 border rounded-full border-cat-primary focus:outline-none focus:border-cat-primary" name = "username" value = {formData.username} onChange = {handleChange} required/>
              </div>
            </div>

            <div className="flex justify-center mb-6">
              <div className="w-84">
                <input role='input' type='password' placeholder='Password' className="w-96 px-4 py-2 border rounded-full border-cat-primary focus:outline-none focus:border-cat-primary" name = "password" value = {formData.password} onChange = {handleChange} required/>
              </div>
            </div>

            <div className="flex justify-center mb-6">
              <button role='input' type='submit' className="px-4 py-2 text-white bg-cat-primary rounded-full hover:bg-cat-primary font-lilita focus:outline-none focus:ring w-32">Login</button>
            </div>
          </form>
        </div>
        <div className="text-center mt-12">
          <p className="text-sm font-bold font-main text-white">Don't have an account?</p>
          <a href="/signup"><button type='button' className="px-4 py-2 text-cat-primary bg-white border border-cat-primary rounded-full font-main focus:outline-none focus:ring w-32 mt-2">Sign up</button></a>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
