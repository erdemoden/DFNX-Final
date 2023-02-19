package erdem.FinalCase.Controllers;

import erdem.FinalCase.Entities.Customer;
import erdem.FinalCase.Responses.CustomerResponse;
import erdem.FinalCase.Services.CustomerService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;


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
    @GetMapping("/getbyid")
    public Customer getById(@RequestParam String idNo){
        return customerService.getCustomer(idNo);
    }
    @GetMapping("/all")
    public List<CustomerResponse> getAll(){
        return customerService.getAll();
    }
}
