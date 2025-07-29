import React, { useState, useEffect } from 'react';
import type { ChangeEvent } from 'react';
import Nav from '../components/nav';


const Admincrud: React.FC = () => {
type Services ={
   name:string;
   desc:string;
};
const [services, setServices] = useState<Services[]>(() => {
  const storedData = localStorage.getItem("services");
  return storedData ? JSON.parse(storedData) : [];
});

const [servicesname , setServicesName]=useState<string>("");
const [description , setDescription]=useState<string>("");
const [editingingindex, setEditingIndex]=useState<number|null>(null);

useEffect(() => {
  localStorage.setItem("services", JSON.stringify(services));
}, [services]);


   const newServices : Services = {
   name:servicesname.trim(),
   desc:description.trim()
};
 
   

const HandelAddOrUpdate = () => { 
    if(editingingindex!==null)
    {
         const updatedServices=[...services];
         updatedServices[editingingindex]=newServices;
         setServices(updatedServices);
         setEditingIndex(null)
    }else{
          setServices ([...services,newServices]);
    }
    setServicesName('');
    setDescription('');

};
 const HandelEdit = (index:number) =>{
     const selectedService = services[index];
     setServicesName(selectedService.name);
     setDescription(selectedService.desc);
     setEditingIndex(index);

 };
 const HandelDelete = (index:number) =>{
       const updatedServices = services.filter((_, i) => i !== index);
        setServices(updatedServices);

      if(editingingindex===index)
      {
        setServicesName('');
        setDescription('');
        setEditingIndex(null);
      }

 };

 const HandelChange = (setter:React.Dispatch<React.SetStateAction<string>>)  =>
 (e:ChangeEvent<HTMLInputElement>) =>{
    setter(e.target.value);
 };


    return (
        <>
            <Nav/>
            <div className="w-[94%] mx-auto my-8 p-6 bg-veryPaleRed  rounded-full">
             <h2 className=" border-pink-600 font-sans font-bold"> Manage IT Services</h2>
             <div className="flex flex-col md:flex-row  gap-4 mb-6 mt-2">
                <input className="p-2 border border-gray-300 rounded-md w-full "
                type="text"
                placeholder="Name of Service"
                value={servicesname}
                onChange={HandelChange(setServicesName)}
                

                />
                 <input className="p-2 border border-gray-300 rounded-md w-full"
                type="text"
                placeholder="Description of Service"
                value={description}
                onChange={HandelChange(setDescription)}
                />
                <button className="bg-brightRed text-white px-6 py-2 rounded-full hover:bg-brightRedLight"
                onClick={HandelAddOrUpdate}
                >
                {editingingindex !== null ? 'Update' : 'Add'}
                </button>
             </div>
             {/* for items  */}
             <div>
               {services.length===0?
                 (<p>No services yet</p>)://1st expression
                 ( //second expression
                    <ul>
                    {services.map((services,index)=>
                      <li className="bg-white p-4 rounded-md shadow flex flex-col md:flex-row md:justify-between md:items-center gap-2 border border-brightRedSupLight"
                        key={index}>
                        <div>
                            <p className="font-extrabold mb-2 text-darkBlue ">
                               {services.name}
                            </p>
                            <p className="mt-1 font-medium text-gray-950">
                                {services.desc}
                            </p>
                        </div>
                        <div className="flex justify-between gap-2">
                            <button className="bg-brightRed text-white px-6 py-2 rounded-md hover:bg-brightRedLight"
                              onClick={()=>HandelEdit(index)}
                            >
                              Edit  
                            </button>
                            <button className="bg-brightRed text-white px-6 py-2 rounded-md hover:bg-brightRedLight"
                             onClick={()=>HandelDelete(index)}
                            >
                              Delete
                            </button>
                        </div>
                      </li> )}
                    </ul>)}
             </div>
          </div>
        </>
    )
}
export default Admincrud