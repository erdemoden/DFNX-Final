package erdem.FinalCase.Services;

import erdem.FinalCase.Entities.Customer;
import erdem.FinalCase.Repositories.CustomerRepo;
import erdem.FinalCase.Responses.CustomerResponse;
import erdem.FinalCase.Responses.FullCustomer;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class CustomerService {
    private final CustomerRepo customerRepo;
    private final ScoreService scoreService;
    private final ModelMapper modelMapper;
    private final TwilioSmsSender smsSender;
    public FullCustomer saveCustomer(Customer customer){
        log.info(String.valueOf(customer.getDebt()));
        FullCustomer fullCustomer = new FullCustomer();
        customer = scoreService.CalculateCreditScore(customer);
       /* smsSender.sendSms(customer.getPhoneNumber(),
                "Your Credit Score is : "+customer.getCreditScore()+
                "Because Of That Your Credit Limit is : "+customer.getCreditLimit()
                );*/
        log.info(String.valueOf(customer.getDebt()));
        if(customerRepo.findByIdNo(customer.getIdNo())!=null){
            fullCustomer.setError("The User Is Exist ");
            return fullCustomer;
        }
        fullCustomer.setCustomer(customer);
        customerRepo.save(customer);
       return fullCustomer;
    }
    public FullCustomer getByTcAndBirth(String idNo, String birthday){
        Customer customer  = customerRepo.findByIdAndBirthday(idNo,birthday);
        FullCustomer fullCustomer = new FullCustomer();
        if(customer!=null){
            fullCustomer.setCustomer(customer);
            return fullCustomer;
        }
        fullCustomer.setError("We Could Not Find The Customer");
       return fullCustomer;
    }
    public FullCustomer getByTc(String tc){
        FullCustomer fullCustomer = new FullCustomer();
        Customer customer = customerRepo.findByIdNo(tc);
        if(customer!=null){
            fullCustomer.setCustomer(customer);
            return fullCustomer;
        }
            fullCustomer.setError("We Could Not Find Customer");
            return fullCustomer;

    }
    public List<CustomerResponse> getAll(){
       List<Customer> customers = customerRepo.findAll();
      return customers.stream().map(customer -> modelMapper.map(customer, CustomerResponse.class)).collect(Collectors.toList());
    }
}
