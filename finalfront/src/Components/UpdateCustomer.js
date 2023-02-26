import "../CSS/CreateCustomer.css";
import { useEffect,useState } from "react";
import { deleteCustomerByTc, getCustomerById, updateCustomerByTc } from "../Services/CreateCustomers";
import swal from "sweetalert";
import { Bounce } from "react-reveal";
const UpdateCustomer = (props)=>{
    const [phoneNumber,setPhoneNumber] = useState("");
    const [name,setName] = useState("");
    const [surname,setSurname] = useState("");
    const [idNo,setIdNo] = useState("");
    const [deposit,setDeposit] = useState("");
    const [debt,setDebt] = useState("");
    const [monthlySalary,setMonthlySalary] = useState("");
    const [birthday,setBirthday] = useState("");
    const updateClicked = async ()=>{
        if(!name||!surname||!birthday||!monthlySalary){
            swal({
                title: "Something Went Wrong",
                text: "You Should Not Left Name Surname Birthday And MonthlySalary Fields Empty",
                icon: "error",
                button: "Close This Alert",
              })
        }
        else{
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
        const response = await updateCustomerByTc("http://localhost:8080/Customer/update?tc=",idNo,params);
        if(response.error){
            swal({
                title: "Something Went Wrong",
                text: response.error,
                icon: "error",
                button: "Close This Alert",
              })
        }
        else{
            swal({
                title: "Success",
                text: "User Successfully Updated",
                icon: "success",
                button: "Close This Alert",
              })
            props.updateMyParams(response.customer);
        }
        props.func(1); 
    }
}
    const deleteClicked = async ()=>{
        const response = await deleteCustomerByTc("http://localhost:8080/Customer/delete?tc=",idNo);
        if(response.error){
            swal({
                title: "Something Went Wrong",
                text: response.error,
                icon: "error",
                button: "Close This Alert",
              })
        }
        else{
            swal({
                title: "Deleted Successfully",
                text: response.success,
                icon: "success",
                button: "Close This Alert",
              });
        }
        props.func(0);
    }
    const mainClicked = async()=>{
        props.updateMyParams(props.params);
        props.func(0);
    }
    const beforeLoad = ()=>{
        setPhoneNumber(props.params.phoneNumber);
        setName(props.params.name);
        setSurname(props.params.surname);
        setBirthday(props.params.birthday);
        setDebt(props.params.debt);
        setMonthlySalary(props.params.monthlySalary);
        setIdNo(props.params.idNo);
        setDeposit(props.params.deposit);
    }
    useEffect(() =>{
        beforeLoad();
        
      },[props.params]);
    return(
        <Bounce left>
        <div className="bigback">
          <h1 className="title"> Update Customer </h1>
          <input type="text" name="Name" placeholder="Name" className="formelements" id="name3" value={name} onChange={(e)=>setName(e.target.value)}></input>
          <input type="text" name="Surname" placeholder="Surname"className="formelements" id="surname3" value={surname} onChange={(e)=>setSurname(e.target.value)}></input>
          <input type="text" name="TC No" placeholder="TC NO"className="formelements" id="tcno3" value={idNo}></input>
          <input type="text" name="Phone Number" placeholder="Phone Number"className="formelements" id="phonenumber3" value= {phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}></input>
          <input type="text" name="Deposit" placeholder="Deposit"className="formelements" id="deposit3" value={deposit} onChange={(e)=>setDeposit(e.target.value)}></input>
          <input type="text" name="Debt" placeholder="Debt"className="formelements" id="debt3" value={debt} onChange={(e)=>setDebt(e.target.value)}></input>
          <input type="text" name="Monthly Salary" placeholder="Monthly Salary"className="formelements" id="monthlysalary3" value={monthlySalary} onChange={(e)=>setMonthlySalary(e.target.value)}></input>
          <label for="birthday" className="formelements label">Birthday:</label>
          <input type="date" name="Birthday" className="formelements" id="birthday3" value={birthday} onChange={(e)=>setBirthday(e.target.value)} onClick={(e)=>e.preventDefault()}></input>
          <p className="formElements label2"> Credit Limit : {props.params.creditLimit}</p>
          <p className="formElements label2">Credit Score : {props.params.creditScore}</p>
          <div className="buttons">
          <button className="btn btn-success leftbut" onClick={updateClicked}>Update</button>
          <button className="btn btn-danger rightbut" onClick={deleteClicked}>Delete</button>
          <button className="btn btn-primary middlebut"onClick={mainClicked}>Main Menu</button> 
          </div>
       </div>
       </Bounce>
    );

}



export default UpdateCustomer;