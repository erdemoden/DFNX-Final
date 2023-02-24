package erdem.FinalCase.Services;

import erdem.FinalCase.Entities.Customer;
import org.springframework.stereotype.Service;

@Service
public class ScoreService {
    private int maxCredit = 2000;
    private int creditLimitMultiplication = 4;
    public Customer CalculateCreditScore(Customer customer){
        int salary = customer.getMonthlySalary();
        int dept= customer.getDebt();
        int deptToIncomeRatio = (dept*100)/salary;
        int deposit = customer.getDeposit();
        int ratioLeft = 100-deptToIncomeRatio;
        int creditScore = (maxCredit * ratioLeft) / 100;
        if(ratioLeft>0) {

            if(creditScore>=500 && creditScore<1000 && customer.getMonthlySalary()<5000){
                int limit = 10000+calculatePercentage(10,deposit);
                customer.setCreditLimit(limit);
                customer.setCreditScore(creditScore);
                customer.setAccepted(true);
            }

            if(creditScore>=500 && creditScore<1000 && customer.getMonthlySalary()>=5000 && customer.getMonthlySalary()<=10000){
                int limit = 20000+calculatePercentage(20,deposit);
                customer.setCreditLimit(limit);
                customer.setCreditScore(creditScore);
                customer.setAccepted(true);
            }

            if(creditScore>=500 && creditScore<1000 && customer.getMonthlySalary()>10000){
                int limit = customer.getMonthlySalary()*creditLimitMultiplication/2+calculatePercentage(25,deposit);
                customer.setCreditLimit(limit);
                customer.setCreditScore(creditScore);
                customer.setAccepted(true);
            }

            if(creditScore>=1000){
                int limit = customer.getMonthlySalary()*creditLimitMultiplication+calculatePercentage(50,deposit);
                customer.setCreditLimit(limit);
                customer.setCreditScore(creditScore);
                customer.setAccepted(true);
            }
            return customer;
        }
        customer.setCreditScore(creditScore);
        customer.setCreditLimit(0);
        return customer;
    }
    public int calculatePercentage(int percentage,int deposit){
        return (deposit*percentage)/100;
    }
}
