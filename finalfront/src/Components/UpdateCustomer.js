import "../CSS/CreateCustomer.css";
import { useEffect } from "react";
import { getCustomerById } from "../Services/CreateCustomers";
import swal from "sweetalert";
const UpdateCustomer = (props)=>{
    const updateClicked = async ()=>{
        props.func(1); 
    }
    const deleteClicked = async ()=>{
        console.log(props.params.creditLimit);
        console.log(props.params.birthday);
        props.func(0);
    }
    const mainClicked = async()=>{
        props.func(0);
    }
   /* const beforeLoad = ()=>{
        console.log(props.creditLimit);
    }
    useEffect(() =>{
        if(props.params.creditLimit){
        beforeLoad();
        }
      },[props.params]);*/
    return(
        <div className="bigback">
          <h1 className="title"> Update Customer </h1>
          <input type="text" name="Name" placeholder="Name" className="formelements" id="name" defaultValue={props.params.name}></input>
          <input type="text" name="Surname" placeholder="Surname"className="formelements" id="surname" defaultValue={props.params.surname}></input>
          <input type="text" name="TC No" placeholder="TC NO"className="formelements" id="tcno" defaultValue={props.params.idNo}></input>
          <input type="text" name="Phone Number" placeholder="Phone Number"className="formelements" id="phonenumber" defaultValue={props.params.phoneNumber}></input>
          <input type="text" name="Deposit" placeholder="Deposit"className="formelements" id="deposit" defaultValue={props.params.deposit}></input>
          <input type="text" name="Debt" placeholder="Debt"className="formelements" id="debt" defaultValue={props.params.debt}></input>
          <input type="text" name="Monthly Salary" placeholder="Monthly Salary"className="formelements" id="monthlysalary" defaultValue={props.params.monthlySalary}></input>
          <label for="birthday" className="formelements label">Birthday:</label>
          <input type="date" name="Birthday" className="formelements" id="birthday" defaultValue={props.params.birthday}></input>
          <p className="formElements label2"> Credit Limit : {props.params.creditLimit}</p>
          <p className="formElements label2">Credit Score : {props.params.creditScore}</p>
          <div className="buttons">
          <button className="btn btn-success leftbut" onClick={updateClicked}>Update</button>
          <button className="btn btn-danger rightbut" onClick={deleteClicked}>Delete</button>
          <button className="btn btn-primary middlebut"onClick={mainClicked}>Main Menu</button> 
          </div>
       </div>
    );

}



export default UpdateCustomer;