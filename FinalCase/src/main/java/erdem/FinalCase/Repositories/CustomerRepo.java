package erdem.FinalCase.Repositories;

import erdem.FinalCase.Entities.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface CustomerRepo extends MongoRepository<Customer,String> {

    @Query("{'name':?0 }")
    Customer findByIdNo(String idNo);
}
