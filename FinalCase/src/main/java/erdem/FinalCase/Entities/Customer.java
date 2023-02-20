package erdem.FinalCase.Entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.format.annotation.DateTimeFormat;


import java.util.Date;

@Data
@Document(collection = "Customer")
public class Customer {
    @Field("id")
    @Id
    private String id;

    @NotNull(message = "You Should Enter Your Name")
    private String name;
    @NotNull(message = "You Should Enter Your Surname")
    private String surname;
    @NotNull(message = "You Should Enter Your Monthly Salary")
    private int monthlySalary;
    @NotNull(message = "You Should Enter Your Phone Number")
    @Size(max = 10,min = 10,message = "You Should Enter 10 digit Phone Number")
    private String phoneNumber;
    @NotNull(message = "You Should Enter Your Birthday")
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    @JsonFormat(shape = JsonFormat.Shape.STRING,pattern = "dd/MM/yyyy")
    private Date birthday;
    @NotNull(message = "You Should Enter Your Identification Number")
    @Size(min=11,max = 11,message = "You Should Enter 11 Digits For Identification Number")
    private String idNo;
    private int deposit;
    private int debt;
    private int creditScore;
    private boolean accepted = false;
    private int creditLimit;
}
