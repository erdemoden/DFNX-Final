package erdem.FinalCase.Controllers;

import erdem.FinalCase.Entities.Customer;
import erdem.FinalCase.Responses.CustomerResponse;
import erdem.FinalCase.Responses.DeleteResponse;
import erdem.FinalCase.Responses.FullCustomer;
import erdem.FinalCase.Services.CustomerService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("Customer")
@CrossOrigin(origins = "http://localhost:3000",allowCredentials = "true")
@RequiredArgsConstructor
public class CustomerController {

    private final CustomerService customerService;
    @PostMapping("/save")
    public FullCustomer save(@RequestBody @Valid Customer customer){
        return customerService.saveCustomer(customer);
    }
    @GetMapping("/getByTcAndBirth")
    public FullCustomer getByTcAndBirth(@RequestParam String idNo,@RequestParam String birthday){
        return customerService.getByTcAndBirth(idNo,birthday);
    }
    @GetMapping("/getByTc")
    public FullCustomer getByTc(@RequestParam String tc){
        return customerService.getByTc(tc);
    }
    @PostMapping("/update")
    public FullCustomer updateByTc(@RequestBody @Valid Customer customer,@RequestParam String tc){
        return customerService.updateCustomer(tc,customer);
    }
    @GetMapping("/delete")
    public DeleteResponse deleteByTc(@RequestParam String tc){
        return customerService.deleteCustomer(tc);
    }
    @GetMapping("/all")
    public List<CustomerResponse> getAll(){
        return customerService.getAll();
    }
}
