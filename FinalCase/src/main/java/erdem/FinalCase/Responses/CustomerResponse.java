package erdem.FinalCase.Responses;

import lombok.Builder;
import lombok.Data;

@Data
public class CustomerResponse {
    private String name;
    private String surname;
    private int creditScore;
}
