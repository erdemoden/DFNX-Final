import "../CSS/CreateCustomer.css";
import swal from "sweetalert";
const CreateCustomer = ()=>{
  const buttonClicked = ()=>{
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let tcno = document.getElementById("tcno").value;
    let phonenumber = document.getElementById("phonenumber").value;
    let deposit = document.getElementById("deposit").value;
    let debt = document.getElementById("debt").value;
    let monthlysalary = document.getElementById("monthlysalary").value;
    let birthday = document.getElementById("birthday").value;

    if(name.trim().length===0||surname.trim().length===0||tcno.trim().length===0||phonenumber.trim().length===0||monthlysalary.trim().length===0||birthday.length===0){
      swal({
        title: "You Should Fill Some Fields",
        text: "You Should Fill All Fields Except Debt And Deposit Fields",
        icon: "error",
        button: "Close This Alert",
  })
    }
    //(!isNaN(tcno) && tcno.trim().length>0)||(!isNaN(phonenumber)&&phonenumber.trim().length>0)||(!isNaN(deposit)&&deposit.trim().length>0)||(!isNaN(debt)&&debt.trim().length>0)||(!isNaN(monthlysalary)&&monthlysalary.trim().length>0)
    if((isNaN(tcno) && tcno.trim().length>0)||(isNaN(phonenumber)&&phonenumber.trim().length>0)||(isNaN(deposit)&&deposit.trim().length>0)||(isNaN(debt)&&debt.trim().length>0)||(isNaN(monthlysalary)&&monthlysalary.trim().length>0)){
      swal({
            title: "Some Fields Should Be Just Number",
            text: "Please Check TC No,PhoneNumber,Deposit,Debt And MonthlySalary These Fields Should Be Just Number",
            icon: "error",
            button: "Close This Alert",
      })
    }
  }
    return(
        <div className="back">
          <h1 className="title"> Create Customer </h1>
          <input type="text" name="Name" placeholder="Name" className="formelements" id="name"></input>
          <input type="text" name="Surname" placeholder="Surname"className="formelements" id="surname"></input>
          <input type="text" name="TC No" placeholder="TC NO"className="formelements" id="tcno"></input>
          <input type="text" name="Phone Number" placeholder="Phone Number"className="formelements" id="phonenumber"></input>
          <input type="text" name="Deposit" placeholder="Deposit"className="formelements" id="deposit"></input>
          <input type="text" name="Debt" placeholder="Debt"className="formelements"id="debt"></input>
          <input type="text" name="Monthly Salary" placeholder="Monthly Salary"className="formelements" id="monthlysalary"></input>
          <label for="birthday" className="formelements">Birthday:</label>
          <input type="date" name="Birthday" className="formelements" id="birthday"></input>
          <button className="btn btn-success formelements" onClick={buttonClicked}>Send</button>
        </div>
    );
}
export default CreateCustomer;