package erdem.FinalCase.Services;

import erdem.FinalCase.Entities.Customer;
import erdem.FinalCase.Repositories.CustomerRepo;
import erdem.FinalCase.Responses.CustomerResponse;
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
    public Customer saveCustomer(Customer customer){
        int creditScore = scoreService.CalculateCreditScore(customer);
        customer.setCreditScore(creditScore);
       return customerRepo.save(customer);
    }
    public Customer getCustomer(String idNo){
        return customerRepo.findByIdNo(idNo);
    }

    public List<CustomerResponse> getAll(){
       List<Customer> customers = customerRepo.findAll();
      return customers.stream().map(customer -> modelMapper.map(customer, CustomerResponse.class)).collect(Collectors.toList());
    }
}
