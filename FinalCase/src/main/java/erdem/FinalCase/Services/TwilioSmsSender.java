package erdem.FinalCase.Services;

import com.twilio.rest.api.v2010.account.Message;
import com.twilio.rest.api.v2010.account.MessageCreator;
import com.twilio.type.PhoneNumber;
import erdem.FinalCase.Configurations.TwilioConfiguration;
import erdem.FinalCase.Interfaces.SmsSender;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TwilioSmsSender implements SmsSender {

    private final TwilioConfiguration twilioConfiguration;
    @Override
    public void sendSms(String phoneNumber,String message) {
        PhoneNumber to = new PhoneNumber("+90"+phoneNumber);
        PhoneNumber from = new PhoneNumber(twilioConfiguration.getTrialNumber());
       MessageCreator creator = Message.creator(to,from,message);
       creator.create();
    }
}
