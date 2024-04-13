import Header from "../Header";
import Footing from "../Footing";
import "./CatIn.css"
 import { TextInput, Select} from "flowbite-react"

const CatIn = () => {
    return ( 
        <>
        <Header/>
        <div className="bg-cat-secondary h-screen flex flex-col py-10">
            <div className="text-4xl text-cat-primary pb-3 border-b border-b-cat-primary font-main self-center my-10">
                Let's get to know your cat!

            </div>
            <div className="self-center h-fit w-3/5 flex flex-col overflow-x-auto bg-cat-primary p-10 rounded-lg">
                <table className="table border-collapse ">
                    <tbody className="p-10 min-w-[40px]">
                    <tr>
                        <td className="w-1/12 sm:shrink-0 title">Name</td>
                        <td className="w-2/6 sm:shrink-0 "><TextInput id="name" type="name" placeholder="Mocha Macias" required/></td>
                        <td className="title w-1/12">Gender</td>
                        <td className="w-2/12">
                            <Select id="gender" required>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Unknown</option>
                            </Select>
                        </td>
                        <td className="title w-2/12">Age (Years)</td>
                        <td className="w-1/12 md:w-3"><TextInput id="age" type="number" placeholder="0" required /></td>
                    </tr>
                    <tr>
                        <td colSpan={1} className="title">Breed</td>
                        <td colSpan={2} className="w-1/4"><TextInput id="name" type="name" placeholder="Mocha Macias" required/></td>
                        <td colSpan={1} className="title">Color</td>
                        <td colSpan={2} className="w-1/4"><TextInput id="name" type="name" placeholder="Mocha Macias" required/></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
        <Footing/>

        </>
     );
}
 
export default CatIn;