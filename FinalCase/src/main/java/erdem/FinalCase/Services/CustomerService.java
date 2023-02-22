package erdem.FinalCase.Services;

import erdem.FinalCase.Entities.Customer;
import erdem.FinalCase.Repositories.CustomerRepo;
import erdem.FinalCase.Responses.CustomerResponse;
import erdem.FinalCase.Responses.FullCustomer;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CustomerService {
    private final CustomerRepo customerRepo;
    private final ScoreService scoreService;
    private final ModelMapper modelMapper;
    private final TwilioSmsSender smsSender;
    public FullCustomer saveCustomer(Customer customer){
        FullCustomer fullCustomer = new FullCustomer();
        customer = scoreService.CalculateCreditScore(customer);
       /* smsSender.sendSms(customer.getPhoneNumber(),
                "Your Credit Score is : "+customer.getCreditScore()+
                "Because Of That Your Credit Limit is : "+customer.getCreditLimit()
                );*/
        if(customerRepo.findByIdNo(customer.getIdNo())!=null){
            fullCustomer.setError("The User Is Exist ");
            return fullCustomer;
        }
        fullCustomer.setCustomer(customer);
        customerRepo.save(customer);
       return fullCustomer;
    }
    public Customer getCustomer(String idNo){
        return customerRepo.findByIdNo(idNo);
    }

    public List<CustomerResponse> getAll(){
       List<Customer> customers = customerRepo.findAll();
      return customers.stream().map(customer -> modelMapper.map(customer, CustomerResponse.class)).collect(Collectors.toList());
    }
}
