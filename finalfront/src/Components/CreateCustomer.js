import "../CSS/CreateCustomer.css";
import swal from "sweetalert";
import { CreateCustomers } from "../Services/CreateCustomers";
import { useState } from "react";
import UpdateCustomer from "./UpdateCustomer";
import React from 'react';
import GetCustomer from "./GetCustomer";
const CreateCustomer = ()=>{
  const [page,setPage] = useState(0);
  const [myparams,setMyParams] = useState({}); 
const updatePage = (page)=>{
  setPage(page);
}
const updateMyParams = (params)=>{
  setMyParams(params);
}
  const saveClicked = async ()=>{
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let idNo = document.getElementById("tcno").value;
    let phoneNumber = document.getElementById("phonenumber").value;
    let deposit = document.getElementById("deposit").value;
    let debt = document.getElementById("debt").value;
    let monthlySalary = document.getElementById("monthlysalary").value;
    let birthday = document.getElementById("birthday").value;
    const params = {
      name:name,
      surname:surname,
      monthlySalary:parseInt(monthlySalary),
      phoneNumber:phoneNumber,
      birthday:birthday.toString(),
      idNo:idNo,
      deposit:parseInt(deposit),
      debt:parseInt(debt),
    }
    if(name.trim().length===0||surname.trim().length===0||idNo.trim().length===0||phoneNumber.trim().length===0||monthlySalary.trim().length===0||birthday.length===0){
      swal({
        title: "You Should Fill Some Fields",
        text: "You Should Fill All Fields Except Debt And Deposit Fields",
        icon: "error",
        button: "Close This Alert",
  })
    }
    //(!isNaN(tcno) && tcno.trim().length>0)||(!isNaN(phonenumber)&&phonenumber.trim().length>0)||(!isNaN(deposit)&&deposit.trim().length>0)||(!isNaN(debt)&&debt.trim().length>0)||(!isNaN(monthlysalary)&&monthlysalary.trim().length>0)
    else if((isNaN(idNo) && idNo.trim().length>0)||(isNaN(phoneNumber)&&phoneNumber.trim().length>0)||(isNaN(deposit)&&deposit.trim().length>0)||(isNaN(debt)&&debt.trim().length>0)||(isNaN(monthlySalary)&&monthlySalary.trim().length>0)){
      swal({
            title: "Some Fields Should Be Just Number",
            text: "Please Check TC No,PhoneNumber,Deposit,Debt And MonthlySalary These Fields Should Be Just Number",
            icon: "error",
            button: "Close This Alert",
      })
    }
    else{
        let response = await CreateCustomers("http://localhost:8080/Customer/save",params);
        if(response.error){
          swal({
            title: "Something Went Wrong",
            text: response.error,
            icon: "error",
            button: "Close This Alert",
          })
        }
        else{
          updateMyParams(response.customer)
          updatePage(1);
        }
    }
  }
  const getClicked = async()=>{
    updatePage(2);
  }
    return(
      <React.Fragment>
        <div className="back" style={{display: page == 0 ? "block":"none"}}>
          <h1 className="title"> Create Customer </h1>
          <input type="text" name="Name" placeholder="Name" className="formelements" id="name"></input>
          <input type="text" name="Surname" placeholder="Surname"className="formelements" id="surname"></input>
          <input type="text" name="TC No" placeholder="TC NO"className="formelements" id="tcno"></input>
          <input type="text" name="Phone Number" placeholder="Phone Number"className="formelements" id="phonenumber"></input>
          <input type="text" name="Deposit" placeholder="Deposit"className="formelements" id="deposit"></input>
          <input type="text" name="Debt" placeholder="Debt"className="formelements" id="debt"></input>
          <input type="text" name="Monthly Salary" placeholder="Monthly Salary"className="formelements" id="monthlysalary"></input>
          <label for="birthday" className="formelements label">Birthday:</label>
          <input type="date" name="Birthday" className="formelements" id="birthday"></input>
          <div className="buttons">
          <button className="btn btn-success leftbut" onClick={saveClicked}>Save</button>
          <button className="btn btn-primary rightbut" onClick={getClicked}>Get Customer</button>
          </div>
        </div>
        <div style={{display: page == 1 ? "block":"none"}}>
        <UpdateCustomer params={myparams} func={updatePage} updateMyParams = {updateMyParams}/>
        </div>
        <div style={{display: page == 2 ? "block":"none"}}>
          <GetCustomer func={updatePage}  params={updateMyParams}/>
        </div>
        </React.Fragment>
      
    );
}
export default CreateCustomer;