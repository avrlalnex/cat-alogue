import logo from '../../assets/catalogue.png';
import React, {useState} from 'react';
import axios from 'axios';


const SignUpForm = () => {

  const [formData, setFormData] = useState({
    username: '',
    email_address: '',
    password: '',
    facebookAccount: '',
    address: '',
  });
  
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
  
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:" , formData )

    //makes post request to api
    axios.post('http://127.0.0.1:8000/accounts/', formData)
    .then(response => {console.log("success", response.data); window.location.href = 'http://localhost:5173/login';})
    .catch(error => {console.log(error)})
  }
  
  

  return (
    <div className="flex justify-center items-center min-h-screen pb-12 bg-cat-primary">
      <div className="flex flex-col items-center">
      <img src={logo} alt="Catalogue Logo" className='mb-4 w-[30rem] h-[15rem]'/>


        <div className="bg-white p-8 border rounded-3xl shadow-lg">
          <form action="" onSubmit = {handleSubmit}>
            <div className="flex justify-center mb-6">
              <h1 className="text-2xl text-cat-primary font-bold font-lilita text-center">
                Sign Up
              </h1>
            </div>

            <div className="flex justify-center mb-4">
              <div className="w-84">
                <input role='input' type='text'placeholder='Username' className="w-96 px-4 py-2 border rounded-full border-cat-primary focus:outline-none focus:border-cat-primary" name = "username" value = {formData.username} onChange = {handleChange} required/>
              </div>
            </div>

            <div className="flex justify-center mb-4">
              <div className="w-84">
                <input role='input' type='text'placeholder='Email Address' className="w-96 px-4 py-2 border rounded-full border-cat-primary focus:outline-none focus:border-cat-primary" name = "email_address" value = {formData.email_address} onChange = {handleChange} required/>
              </div>
            </div>

            <div className="flex justify-center mb-4">
              <div className="w-84">
                <input role='input' type='text'placeholder='Facebook Link' className="w-96 px-4 py-2 border rounded-full border-cat-primary focus:outline-none focus:border-cat-primary" name = "facebookAccount" value = {formData.facebookAccount} onChange = {handleChange} required/>
              </div>
            </div>

            <div className="flex justify-center mb-4">
              <div className="w-84">
                <input role='input' type='text'placeholder='Home Address' className="w-96 px-4 py-2 border rounded-full border-cat-primary focus:outline-none focus:border-cat-primary" name = "address" value = {formData.address} onChange = {handleChange} required/>
              </div>
            </div>

            <div className="flex justify-center mb-6">
              <div className="w-84">
                <input role='input' type='password' placeholder='Password' className="w-96 px-4 py-2 border rounded-full border-cat-primary focus:outline-none focus:border-cat-primary" name = "password" value = {formData.password} onChange = {handleChange} required/>
              </div>
            </div>



            <div className="flex justify-center mb-6">
              <button role='input' type='submit' className="px-4 py-2 text-white bg-cat-primary rounded-full hover:bg-cat-primary font-bold font-lilita focus:outline-none focus:ring w-32">Sign Up</button>
            </div>
          </form>
        </div>
        <div className="text-center mt-12">
          <p className="text-sm font-bold text-white"> Already have an account?</p>
          <a href="/login"><button type='button' className="px-4 py-2 text-cat-primary bg-white border border-cat-primary rounded-full hover:bg-orange-100 font-bold font-lilita focus:outline-none focus:ring w-32 mt-2">Sign in</button></a>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;