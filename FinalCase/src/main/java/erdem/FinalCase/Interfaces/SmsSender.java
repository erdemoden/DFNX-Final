package erdem.FinalCase.Interfaces;

import erdem.FinalCase.Requests.SmsRequest;

public interface SmsSender {
    void sendSms(String phoneNumber,String message);
}
