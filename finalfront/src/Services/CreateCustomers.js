export const CreateCustomers = async(url,params)=>{
   const response =  await fetch(url,{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
          },
          credentials:'include',
          body:JSON.stringify({name:params.name,surname:params.surname,monthlySalary:params.monthlySalary,phoneNumber:params.phoneNumber,birthday:params.birthday,idNo:params.idNo,deposit:params.deposit,debt:params.debt})
    });
    return await response.json();
} 

export const getCustomerByTcAndBirth = async (url,idNo,birthday)=>{
  const response = await fetch(url+idNo+"&birthday="+birthday,{
    method:"GET",
    headers:{
      'Content-Type': 'application/json'
    },
    credentials:'include'
  });
  return await response.json();
}
export const updateCustomerByTc = async(url,tc,params)=>{
  const response = await fetch(url+tc,{
    method:"POST",
    headers:{
      'Content-Type': 'application/json'
    },
    credentials:'include',
          body:JSON.stringify({name:params.name,surname:params.surname,monthlySalary:params.monthlySalary,phoneNumber:params.phoneNumber,birthday:params.birthday,idNo:params.idNo,deposit:params.deposit,debt:params.debt})
  });
  return await response.json();
}
export const deleteCustomerByTc = async(url,tc)=>{
  const response = await fetch(url+tc,{
    method:"GET",
    headers:{
      'Content-Type': 'application/json'
    },
    credentials:'include'
  });
  return await response.json();
}
