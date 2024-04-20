import { Dropdown } from "flowbite-react";

const Filter = (props) => {

    var title = 
        <div className="w-fit cursor-pointer text-lg rounded-full bg-white text-center flex px-5 py-2 text-cat-primary font-main">
             <div className="text-center w-32">{props.name}
             </div>

            <div className="self-end">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
            </div>

        </div>
    

    return ( 
        <>
        {parseInt(props.drop)?
        
        <Dropdown label="" size="md" dismissOnClick={false} renderTrigger={() => title}>
            <Dropdown.Item>Maine Coon</Dropdown.Item>
            <Dropdown.Item>Ragdoll</Dropdown.Item>
            <Dropdown.Item>Persian</Dropdown.Item>
            <Dropdown.Item>Orange</Dropdown.Item>
        </Dropdown> :
        <a href={props.link}><div className="w-fit cursor-pointer text-lg rounded-full bg-white text-center flex px-5 py-2 text-cat-primary font-main">
        <div className="text-center w-32">{props.name}</div>
        </div></a>
        }

{/*         
        // <div className="w-full text-lg rounded-full bg-white text-center px-5 py-2 text-cat-primary font-main">
        //     {props.name}
        // </div> */}
        </>
     );
}
 
export default Filter;