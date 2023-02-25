package erdem.FinalCase.Repositories;

import erdem.FinalCase.Entities.Customer;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Date;

import static org.springframework.data.mongodb.core.query.Criteria.where;

public interface CustomerRepo extends MongoRepository<Customer,String> {

    @Query("{'idNo':?0 }")
    Customer findByIdNo(String idNo);
    @Query("{'idNo': ?0,'birthday':?1 }")
    Customer findByIdAndBirthday(String idNo, String birthday);
}
