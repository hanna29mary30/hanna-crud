import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Messagebox from "./Messagebox";
import Edit from "./Edit"
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
function Addtable({details}){

const[custdata,setdata] = React.useState(details)
const[search,setSearch] = useState(custdata);
const[value,setupdatedrow]=useState();
const[data,setadddata]=useState();
const keys= Object.keys(details[0])

//  const Search = (event) = {
//   setSearch(custdata.filter(f => f.first_name.includes(event.target.value)))
// }
 
 const Addrow = () => {
  const data = { id:custdata.length +1,
  email: "",
  first_name:"",
  last_name:"",
  ip:"",
  latitude:"",
  longitude:""}
  Swal.fire({
      title: 'Add Details',
      html: `
          <input id="newemail" class="swal2-input"  placeholder="email">
          <input id="newfirst_name" class="swal2-input" placeholder="first_name">
          <input id="newlast_name" class="swal2-input"  placeholder="last_name">
          <input id="newip" class="swal2-input"  placeholder="ip">
          <input id="newlatitude" class="swal2-input"  placeholder="latitude">
          <input id="newlongitude" class="swal2-input"  placeholder="longitude">
      `,
      showCancelButton: true,
      confirmButtonText: 'Save',
  }).then((result) => {
      if (result.isConfirmed) {
          
          const newemail = document.getElementById('newemail').value;
          const newfirst_name = document.getElementById('newfirst_name').value;
          const newlast_name = document.getElementById('newlast_name').value;
          const newip = document.getElementById('newip').value;
          const newlongitude = document.getElementById('newlongitude').value;
          const newlatitude = document.getElementById('newlatitude').value;
          const currentTime = new Date();
          const hours = currentTime.getHours();
          const minutes = currentTime.getMinutes();
          const seconds = currentTime.getSeconds();
          const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
          data.email =newemail;
          data.first_name=newfirst_name;
          data.last_name=newlast_name;
          data.ip=newip;
          data.latitude=newlatitude;
          data.longitude=newlongitude;
          data.created_at=formattedTime;
          const newdata = [...custdata, data];
          setdata(newdata);
          
          
          }
  });
}
  
 function deleterow(id) {
    const updatedData = custdata.filter(item=>(item.id!=id));
    setdata(updatedData);
    console.log(updatedData);
    // <Messagebox name = "Row Deleted"/> 
  }
  

const Updaterow = (data) => {
  const email = data.email;
  const first_name = data.first_name;
  const last_name = data.last_name;
  const ip = data.ip;
  const  latitude = data.latitude;
  const longitude = data.longitude;
  Swal.fire({
      title: 'Update Details',
      html: `
          <input id="newemail" class="swal2-input" value="${email}" placeholder="email">
          <input id="newfirst_name" class="swal2-input" value="${first_name}" placeholder="first_name">
          <input id="newlast_name" class="swal2-input" value="${last_name}" placeholder="last_name">
          <input id="newip" class="swal2-input" value="${ip}" placeholder="ip">
          <input id="newlatitude" class="swal2-input" value="${latitude}" placeholder="latitude">
          <input id="newlongitude" class="swal2-input" value="${longitude}" placeholder="longitude">
      `,
      showCancelButton: true,
      confirmButtonText: 'Save',
  }).then((result) => {
      if (result.isConfirmed) {
          
          const newemail = document.getElementById('newemail').value;
          const newfirst_name = document.getElementById('newfirst_name').value;
          const newlast_name = document.getElementById('newlast_name').value;
          const newip = document.getElementById('newip').value;
          const newlongitude = document.getElementById('newlongitude').value;
          const newlatitude = document.getElementById('newlatitude').value;
          const currentTime = new Date();
          const hours = currentTime.getHours();
          const minutes = currentTime.getMinutes();
          const seconds = currentTime.getSeconds();
          const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
          data.email =newemail;
          data.first_name=newfirst_name;
          data.last_name=newlast_name;
          data.ip=newip;
          data.latitude=newlatitude;
          data.longitude=newlongitude;
          data.updated_at=formattedTime;
          setupdatedrow(data)
          
          
          }
  });
}

return(
  
    <div className="table-responsive p-2 border">
      {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Customer Details Management</a>
    <div class="ml-auto"> 
      <form class="form-inline">
        <input class="form-control mr-4" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success mr-2" type="submit" onClick={()=>Search()}>Search</button>
      </form>
    </div>
  </nav> */}


      
      <h3 className="text-center">Customer Details</h3>
      <button type="button" className="btn btn-primary m-3 p-2" onClick={() => Addrow()}>Add New Customers</button>
      <table className="table table-bordered table-hover table-striped">
        <thead className="table table-dark">
        <tr>
             { keys.map((k) => (
              <th key={k}>{k}</th>
            ))}
          </tr>
        </thead> 
        <tbody>
       
         {
           custdata.map((item,index)=>
           <tr key={item.id}>
             {
               keys.map((k,index)=>
                 <td key={index}>{item[k]}</td>)
              }
               
          <td>
            
           <button type="index" id= {index} className="btn btn-primary" onClick={() =>Updaterow(item)}>Edit</button> 
          </td>
          
          <td> <button type="button" id = {index} className="btn btn-danger" onClick={() => deleterow(index+1)}>Delete</button></td>
          
          </tr>)
          
         }
      </tbody>
      </table>
      </div>
  );
}
export default Addtable;