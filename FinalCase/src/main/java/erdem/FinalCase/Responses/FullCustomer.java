package erdem.FinalCase.Responses;

import erdem.FinalCase.Entities.Customer;
import lombok.Data;

@Data
public class FullCustomer {
    private Customer customer;
    private String error;
}
