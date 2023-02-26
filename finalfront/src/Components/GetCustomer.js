import "../CSS/CreateCustomer.css";
import swal from "sweetalert";
import React from 'react';
import { getCustomerByTcAndBirth } from "../Services/CreateCustomers";
import { Bounce } from "react-reveal";
const GetCustomer = (props)=>{
  const getClicked = async()=>{
    let tc = document.getElementById("tcno2");
    let birthday = document.getElementById("birthday2");
    let response = await getCustomerByTcAndBirth("http://localhost:8080/Customer/getByTcAndBirth?idNo=",tc.value,birthday.value);
    if(response.error){
        swal({
            title: "Something Went Wrong",
            text: response.error,
            icon: "error",
            button: "Close This Alert",
          })
    }
    else{
        props.params(response.customer);
        props.func(1);
    }
  }
  const onTcChange = (val)=>{
    document.getElementById("tcno2").value = val;
  }
  const mainClicked = ()=>{
    props.func(0);
  }
  const onBirthChange = (val)=>{
    document.getElementById("birthday2").value = val;
  }
    return(
      <Bounce left>
        <div className="smallback">
          <h1 className="title"> Create Customer </h1>
          <input type="text" name="TC No" placeholder="TC NO"className="formelements" id="tcno2" onChange={(e) =>onTcChange(e.target.value)}></input>
          <label for="birthday" className="formelements label">Birthday:</label>
          <input type="date" name="Birthday" className="formelements" id="birthday2" onChange={(e)=>onBirthChange(e.target.value)} onClick={(e)=>e.preventDefault()}></input>
          <div className="buttons">
          <button className="btn btn-success leftbut" onClick={getClicked}>Get Customer</button>
          <button className="btn btn-primary rightbut" onClick={mainClicked}>Main Menu</button>
          </div>
      </div>
      </Bounce>
    );
}
export default GetCustomer;