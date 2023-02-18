package erdem.FinalCase.Services;

import erdem.FinalCase.Entities.Customer;
import erdem.FinalCase.Repositories.CustomerRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomerService {

    private final CustomerRepo customerRepo;

    public Customer saveCustomer(Customer customer){
       return customerRepo.save(customer);
    }
}
