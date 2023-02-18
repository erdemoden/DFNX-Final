package erdem.FinalCase.Repositories;

import erdem.FinalCase.Entities.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CustomerRepo extends MongoRepository<Customer,String> {

}
