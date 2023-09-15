import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Messagebox from "./Messagebox";
import Pagination from './Pagination';
import Swal from "sweetalert2";


function Addtable({details}){
const[custdata,setdata] = React.useState(details)
const[CurrentPage,setCurrentPage] = useState(1);
const[searchval,setSearchval] = useState();
const[search,setSearch] = useState(custdata);
const[value,setupdatedrow]=useState();
const recordPerPage = 8;
const lastIndex = CurrentPage * recordPerPage;
const firstIndex = lastIndex - recordPerPage;
const records = custdata.slice(firstIndex,lastIndex);
const pages = Math.ceil(custdata.length/recordPerPage);
const numbers = [...Array(pages+1).keys()].slice(1)
const keys= Object.keys(details[0])



  const Search=(val)=>{
    setSearchval(val);
    if(val != ""){
     console.log(searchval)
      const searcheddata = custdata.filter(f => f.first_name.toLowerCase().includes(searchval))
      console.log(searcheddata)
     setSearch(searcheddata)
     setdata(search)
    }
    else{
    
    // setSearch(details)
    setdata(details)
    }
    
  }

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
          Swal.fire({
            title: 'Success',
            text: 'Customer has been added',
            icon: 'success',
        });
          const newdata = [...custdata, data];
          setdata(newdata);
          }
  });
}
  
 function deleterow(id) { 
  Swal.fire({
    title: 'Are you sure?',
    icon:"error",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  const updatedData = custdata.filter(item=>(item.id!=id));
    setdata(updatedData);
  })
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
          Swal.fire({
            title: 'Success',
            text: 'Data has been updated!',
            icon: 'success',
        });
          setupdatedrow(data)
          
          
          }
  });
}

return(
  
    <div className="table-responsive">
   <div className="mr-auto">
    <nav className="navbar navbar-expand-lg navbar-light bg-dark justify-content-between">
    <a className="navbar-brand text-light" href="#">Customer Details Management</a>
  <div> 
      <input className="form-control" value={searchval} id="searchinput" type="search " placeholder="Search using first name" aria-label="Search"  onChange={(e)=>Search(e.target.value)} />
  </div>
  </nav> 
</div>

      <div className="table-resposive p-3 m-2">
      <h3 className="text-center">Customer Details</h3>
      <button type="button" className="btn btn-primary m-3 p-2" onClick={() => Addrow()}>Add New Customers</button>
      <table className="table table-bordered table-hover table-striped ">
        <thead className="table table-dark">
        <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>IP</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th colSpan={2}>Actions</th>
        </tr>
        </thead> 
        <tbody>
       
         {
           records.map((item,index)=>
           <tr key={item.id}>
             {
               keys.map((k,index)=>
                 <td key={index}>{item[k]}</td>)
              }
               
          <td>
            <button type="index" id= {index } className="btn btn-primary" onClick={() =>Updaterow(item)}>Edit</button> 
          </td>
          
          <td> <button type="button" id = {index} className="btn btn-danger" onClick={() => deleterow(item.id)}>Delete</button></td>
          
          </tr>)
          
         }
      </tbody> 
      </table>
    <div className="d-flex justify-content-center">
      <Pagination
      currentPage={CurrentPage}
      totalPages={pages}
      onPageChange={changeCPage}
    />
    </div>
  </div>
   </div>   
  
  );

  function changeCPage(id) {
    setCurrentPage(id);
  }
}
export default Addtable;