import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from "sweetalert2";

function Messagebox({ name }) {
  console.log({name}) 
  useEffect(() => {
    showAlert(); 
  }, []);
  function showAlert() {
    Swal.fire({
      title: "Success",
      text: `${name}`, 
      icon: "success",
      confirmButtonText: "Ok"
    });
    console.log({name})
  }

  return <div>
    </div>;
}

export default Messagebox;
