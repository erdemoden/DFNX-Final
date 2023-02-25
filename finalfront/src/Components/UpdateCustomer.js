import "../CSS/CreateCustomer.css";
import { useEffect } from "react";
import { getCustomerById, updateCustomerByTc } from "../Services/CreateCustomers";
import swal from "sweetalert";
const UpdateCustomer = (props)=>{
    let tc = "";
    const updateClicked = async ()=>{
        let name = document.getElementById("name3").value;
        let surname = document.getElementById("surname3").value;
        let idNo = document.getElementById("tcno3").value;
        let phoneNumber = document.getElementById("phonenumber3").value;
        let deposit = document.getElementById("deposit3").value;
        let debt = document.getElementById("debt3").value;
        let monthlySalary = document.getElementById("monthlysalary3").value;
        let birthday = document.getElementById("birthday3").value;
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
        const response = await updateCustomerByTc("http://localhost:8080/Customer/update?tc=",tc,params);
        if(response.error){
            swal({
                title: "Something Went Wrong",
                text: response.error,
                icon: "error",
                button: "Close This Alert",
              })
        }
        else{
            props.updateMyParams(response.customer);
        }
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
    const beforeLoad = ()=>{
        document.getElementById("name3").value = props.params.name;
        document.getElementById("surname3").value = props.params.surname;
        document.getElementById("tcno3").value = props.params.idNo;
        document.getElementById("phonenumber3").value = props.params.phoneNumber;
        document.getElementById("deposit3").value = props.params.deposit;
        document.getElementById("debt3").value = props.params.deposit;
        document.getElementById("monthlysalary3").value = props.params.monthlySalary;
        document.getElementById("birthday3").value = props.params.birthday;
        tc = props.params.idNo;
        console.log(tc);
    }
    useEffect(() =>{
        beforeLoad();
        
      },[props.params]);
    return(
        <div className="bigback">
          <h1 className="title"> Update Customer </h1>
          <input type="text" name="Name" placeholder="Name" className="formelements" id="name3" defaultValue={props.params.name}></input>
          <input type="text" name="Surname" placeholder="Surname"className="formelements" id="surname3" defaultValue={props.params.surname}></input>
          <input type="text" name="TC No" placeholder="TC NO"className="formelements" id="tcno3" defaultValue={props.params.idNo}></input>
          <input type="text" name="Phone Number" placeholder="Phone Number"className="formelements" id="phonenumber3" defaultValue={props.params.phoneNumber}></input>
          <input type="text" name="Deposit" placeholder="Deposit"className="formelements" id="deposit3" defaultValue={props.params.deposit}></input>
          <input type="text" name="Debt" placeholder="Debt"className="formelements" id="debt3" defaultValue={props.params.debt}></input>
          <input type="text" name="Monthly Salary" placeholder="Monthly Salary"className="formelements" id="monthlysalary3" defaultValue={props.params.monthlySalary}></input>
          <label for="birthday" className="formelements label">Birthday:</label>
          <input type="date" name="Birthday" className="formelements" id="birthday3" defaultValue={props.params.birthday}></input>
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