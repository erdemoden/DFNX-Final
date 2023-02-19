package erdem.FinalCase.Services;

import erdem.FinalCase.Entities.Customer;
import org.springframework.stereotype.Service;

@Service
public class ScoreService {
    private int maxCredit = 2000;
    public int CalculateCreditScore(Customer customer){
        int salary = customer.getMonthlySalary();
        int deposit = customer.getDeposit();
        int deptToIncomeRatio = (deposit*100)/salary;
        int ratioLeft = 100-deptToIncomeRatio;
        if(ratioLeft>0) {
            int creditScore = (maxCredit * ratioLeft) / 100;
            return creditScore;
        }
        return 0;
    }
}
