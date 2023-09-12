import React,{useState, useEffect} from "react";
import Addtable from "./Addtable";
import Customers from "./Customers.json"
function Fileimport(){
  const [Cust_details,setdetails] = useState([])
  
  useEffect(()=>{
		setdetails({Customers})
    },[])
  
  return ( 
    <div>
        
      <Addtable details={Customers}/>
      </div> 
      );
}
export default Fileimport

