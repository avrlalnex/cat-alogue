import Header from "../Header";
import Footing from "../Footing";
import "./CatIn.css";
import { useState } from "react";
import axios from 'axios';
import { TextInput, Select, FileInput, Textarea} from "flowbite-react"

const CatIn = () => {

    const [formData, setFormData] = useState({
        catName: '',
        catGender: '',
        catAge: 0,
        catBreed: '',
        catColor: '',
        catPersonality: '',
        catLikes: '',
        catDislikes: '',
        catImage: null
      });

    const [Image, setCatImage] = useState(null)

      
      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
      
        })
      }

      const handleImageChange = (event) => {
        console.log("hello")
        setCatImage(event.target.files[0]);
      };
    
      
      const handleSubmit = (event) => {
        event.preventDefault();
        setFormData(
          {...formData,
          catImage: Image
          }
        )

        console.log(formData);
        //makes post request to api
        axios.post('http://127.0.0.1:8000/cats/', formData),{
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        
        .then(response => 
          {console.log(response)})
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
                        <td colSpan={5} className="w-2/6 sm:shrink-0 "><TextInput id="name" type="name" name = "catName" value = {formData.catName} onChange = {handleChange} placeholder="Mocha Macias" required/></td>
                        
                        </tr>
                    <tr>
                        <td className="title">Birthdate</td>
                        <td className="w-1/6"><TextInput id="birthdate" type="date" required/></td>
                        <td className="title w-24 leading-tight">Age (Years)</td>
                        <td className=" md:w-3"><TextInput className="w-16" id="age" type="number" placeholder="0" name = "catAge" value = {formData.catAge} onChange = {handleChange} required /></td>
                        <td className="title w-1/12">Gender</td>
                        <td className="w-2/12">
                            <Select id="gender" name = "catGender" value = {formData.catGender} onChange = {handleChange} required>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="unknown"> Unknown</option>
                            </Select>
                        </td>
                    </tr>
                    <tr>
                        <td className="title">Breed</td>
                        <td colSpan={2} className="w-1/6"><TextInput id="breed" type="name" placeholder="Orange" name = "catBreed" value = {formData.catBreed} onChange = {handleChange} required/></td>
                        <td className="title">Color</td>
                        <td colSpan={2} className="w-1/6"><TextInput id="color" type="name" placeholder="Orange" name = "catColor" value = {formData.catColor} onChange = {handleChange} required/></td>                        
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
            <FileInput id="file-upload"  onChange = {handleImageChange} />
            </div>

            <div className="self-center w-3/5 flex flex-col overflow-x-auto bg-cat-primary p-10 rounded-lg">
                <table className="table border-collapse ">
                    <tbody className="p-10 min-w-[40px]">
                    <tr>
                        <td className="title w-1/6">Personality</td>
                        <td ><TextInput id="personality" type="name" placeholder="Personality" name = "catPersonality" value = {formData.catPersonality} onChange = {handleChange} required/></td>
                    </tr>
                    <tr>
                        <td className="title">Likes</td>
                        <td ><TextInput id="likes" type="name" placeholder="Likes" name = "catLikes" value = {formData.catLikes} onChange = {handleChange} required/></td>
                    </tr>
                    <tr>
                        <td className="title">Dislikes</td>
                        <td ><TextInput id="dislikes" type="name" placeholder="Dislikes" name = "catDislikes" value = {formData.catDislikes} onChange = {handleChange} required/></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="self-center my-10 w-3/5 bg-cat-primary p-10 rounded-lg">
                <div className="mb-2 block title">
                    Description
                </div>
                <Textarea id="description" placeholder="Tell us about your furry friend! Anything special about them that you want to share?" className="p-3" required rows={4} name = "catDescription" value = {formData.catDescription} onChange = {handleChange} />
            </div>
            <button type="submit" className="self-center px-10 py-3 text-lg bg-cat-primary font-main text-white rounded-full">Submit</button>
            
            </form>
        </div>
        <Footing/>

        </div>
     );
}
 
export default CatIn;