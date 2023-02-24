import { getCustomerByTcAndBirth } from "../Services/CreateCustomers";


const GetCustomer = (props)=>{
    const getClicked = ()=>{
        let idNo = document.getElementById("tcno").value;
        let birthday = document.getElementById("birthday").value;
        getCustomerByTcAndBirth("http://localhost:8080/Customer/getByTcAndBirth?idNo=",idNo,birthday);
        props.func(1);
    }
    const mainClicked = ()=>{
        props.func(0);
    }

return(
    <div className="smallback">
          <h1 className="title"> GetCustomer </h1>
          <input type="text" name="TC No" placeholder="TC NO"className="formelements" id="tcno"></input>
          <label for="birthday" className="formelements label">Birthday:</label>
          <input type="date" name="Birthday" className="formelements" id="birthday"></input>
          <div className="buttons">
          <button className="btn btn-success leftbut" onClick={getClicked}>Get Customer</button>
          <button className="btn btn-primary rightbut" onClick={mainClicked}>Main Menu</button>
          </div>
        </div>
)

}
export default GetCustomer;