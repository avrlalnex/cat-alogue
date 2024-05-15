import Header from "../../Components/Header";
import Footing from "../../Components/Footing";
import "./CatIn.css";
import { useState, useEffect } from "react";
import axios from 'axios';
import { TextInput, Select, FileInput, Textarea} from "flowbite-react"

const CatIn = () => {

    const [formData, setFormData] = useState({
        CatName: '',
        CatGender: '',
        CatAge: 0,
        CatBreed: '',
        CatColor: '',
        CatPersonality: '',
        CatLikes: '',
        CatDislikes: '',
        CatImage: null,
        CatOwner: null,
        CatDescription: '',
        CatBirthday: '',
      });

    const request = {account: localStorage.getItem("username")}
    useEffect(() => {
        const fetchData = async () => {
            try {       
            const response = await axios.put('http://127.0.0.1:8000/accounts/detail', request, {
              headers: {
                'Content-Type': 'application/json'
              }
            });
            setFormData({...formData, CatOwner: response.data})

          } catch (error) {
            // Handle errors
            console.error('Error making PUT request:', error);
          }
        };
        // Call the async function inside useEffect
        fetchData();
    }, [])

    
      const handleChange = (event) => {
        setFormData({
        ...formData,
        [event.target.name] :event.target.value
      })
    }

    const handleImageChange = (event) => {
      setFormData({
        ...formData,
        CatImage: event.target.files[0]
      })
  
    };
    
      
    const handleSubmit = (event) => {
      event.preventDefault();
      
      console.log(formData)
      let form_data = new FormData();
      

      form_data.append("CatImage", formData.CatImage, formData.CatImage.name)
      form_data.append("CatName", formData.CatName)
      form_data.append("CatGender", formData.CatGender)
      form_data.append("CatAge", formData.CatAge)
      form_data.append("CatBreed", formData.CatBreed)
      form_data.append("CatColor", formData.CatColor)
      form_data.append("CatPersonality", formData.CatPersonality)
      form_data.append("CatLikes", formData.CatLikes)
      form_data.append("CatDislikes", formData.CatDislikes)
      form_data.append("CatDescription", formData.CatDescription)
      form_data.append("CatBirthday", formData.CatBirthday)
      form_data.append("CatOwner", formData.CatOwner.profile.id)
      


      //makes post request to api
      axios.post('http://127.0.0.1:8000/cats/', form_data, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      })  
      .then(response => 
        {console.log(response.data)})
      .catch(error => {
        console.log(error)         
      }
      )
    }

    return ( 
        <div className="bg-cat-secondary">
        <Header/>
        <div className="h-auto flex flex-col py-10">
            <div className="text-4xl text-cat-primary pb-3 border-b border-b-cat-primary font-main self-center my-10">
                Let&apos;s get to know your cat!
            </div>
            <form className="flex flex-col" action="" onSubmit={handleSubmit}>
            <div className="self-center w-3/5 flex flex-col overflow-x-auto bg-cat-primary p-10 rounded-lg">
                <table className="table border-collapse ">
                    <tbody className="p-10 min-w-[40px]">
                    <tr>
                        <td className="w-1/12 sm:shrink-0 title">Name</td>
                        <td colSpan={5} className="w-2/6 sm:shrink-0 "><TextInput id="name" type="name" name = "CatName" value = {formData.CatName} onChange = {handleChange} placeholder="Mocha Macias" required/></td>
                        
                        </tr>
                    <tr>
                        <td className="title">Birthdate</td>
                        <td className="w-1/6"><TextInput id="birthdate" type="date" name = "CatBirthday" value =  {formData.CatBirthday} onChange = {handleChange} required/></td>
                        <td className="title w-24 leading-tight">Age (Years)</td>
                        <td className=" md:w-3"><TextInput className="w-16" id="age" type="number" placeholder="0" name = "CatAge" value = {formData.CatAge} onChange = {handleChange} required /></td>
                        <td className="title w-1/12">Gender</td>
                        <td className="w-2/12">
                            <Select id="gender" name = "CatGender" value = {formData.CatGender} onChange = {handleChange} required>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="unknown"> Unknown</option>
                            </Select>
                        </td>
                    </tr>
                    <tr>
                        <td className="title">Breed</td>
                        <td colSpan={2} className="w-1/6"><TextInput id="breed" type="name" placeholder="Orange" name = "CatBreed" value = {formData.CatBreed} onChange = {handleChange} required/></td>
                        <td className="title">Color</td>
                        <td colSpan={2} className="w-1/6"><TextInput id="color" type="name" placeholder="Orange" name = "CatColor" value = {formData.CatColor} onChange = {handleChange} required/></td>                        
                    </tr>
                    {/* <tr>
                        <td className="title">Address</td>
                        <td colSpan={5}><TextInput id="address" type="name" onChange = {handleChange} required/></td>
                    </tr> */}
                    </tbody>
                </table>
            </div>

            <div className="self-center w-3/5 my-10 bg-cat-primary p-10 rounded-lg">
            <div className="mb-2 block title">
                Upload Picture
            </div>
            <FileInput id="file-upload"  accept="image/png, image/jpeg"  onChange = {handleImageChange}/>
            </div>

            <div className="self-center w-3/5 flex flex-col overflow-x-auto bg-cat-primary p-10 rounded-lg">
                <table className="table border-collapse ">
                    <tbody className="p-10 min-w-[40px]">
                    <tr>
                        <td className="title w-1/6">Personality</td>
                        <td ><TextInput id="personality" type="name" placeholder="Personality" name = "CatPersonality" value = {formData.CatPersonality} onChange = {handleChange} required/></td>
                    </tr>
                    <tr>
                        <td className="title">Likes</td>
                        <td ><TextInput id="likes" type="name" placeholder="Likes" name = "CatLikes" value = {formData.CatLikes} onChange = {handleChange} required/></td>
                    </tr>
                    <tr>
                        <td className="title">Dislikes</td>
                        <td ><TextInput id="dislikes" type="name" placeholder="Dislikes" name = "CatDislikes" value = {formData.CatDislikes} onChange = {handleChange} required/></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="self-center my-10 w-3/5 bg-cat-primary p-10 rounded-lg">
                <div className="mb-2 block title">
                    Description
                </div>
                <Textarea id="description" placeholder="Tell us about your furry friend! Anything special about them that you want to share?" className="p-3" required rows={4} name = "CatDescription" value = {formData.CatDescription} onChange = {handleChange} />
            </div>
            <button type="submit" className="self-center px-10 py-3 text-lg bg-cat-primary font-main text-white rounded-full">Submit</button>
            
            </form>
        </div>
        <Footing/>

        </div>
     );
}
 
export default CatIn;