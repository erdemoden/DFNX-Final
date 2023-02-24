package erdem.FinalCase.Entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;
import org.springframework.format.annotation.DateTimeFormat;


import java.util.Date;

@Data
@Document(collection = "Customer")
public class Customer {
    @MongoId(FieldType.OBJECT_ID)
    private String id;

    @NotNull(message = "You Should Enter Your Name")
    private String name;
    @NotNull(message = "You Should Enter Your Surname")
    private String surname;
    @NotNull(message = "You Should Enter Your Monthly Salary")
    private int monthlySalary;
    @NotNull(message = "You Should Enter Your Phone Number")
    @Indexed(unique = true,sparse = true)
    @Size(max = 10,min = 10,message = "You Should Enter 10 digit Phone Number")
    private String phoneNumber;
    @NotNull(message = "You Should Enter Your Birthday")
    private String birthday;
    @NotNull(message = "You Should Enter Your Identification Number")
    @Indexed(unique = true,sparse = true)
    @Size(min=11,max = 11,message = "You Should Enter 11 Digits For Identification Number")
    private String idNo;
    private int deposit;
    private int debt;
    private int creditScore;
    private int creditLimit;
    @JsonIgnore
    private boolean accepted = false;
    @JsonIgnore
    private String error;
}
