package erdem.FinalCase.Controllers;

import erdem.FinalCase.Entities.Customer;
import erdem.FinalCase.Services.CustomerService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



//import javax.validation.Valid;

@RestController
@RequestMapping("Customer")
@RequiredArgsConstructor
public class CustomerController {

    private final CustomerService customerService;

    @PostMapping("/save")
    public Customer save(@RequestBody @Valid Customer customer){
        System.out.println(customer.getName());
        return customerService.saveCustomer(customer);
    }
}
