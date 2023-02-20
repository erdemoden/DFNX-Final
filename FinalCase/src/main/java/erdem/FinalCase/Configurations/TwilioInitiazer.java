package erdem.FinalCase.Configurations;


import com.twilio.Twilio;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

@Configuration
public class TwilioInitiazer {
    private final static Logger logger = LoggerFactory.getLogger(TwilioInitiazer.class);
    private final TwilioConfiguration twilioConfiguration;
    @Autowired
    public TwilioInitiazer(TwilioConfiguration twilioConfiguration){
        this.twilioConfiguration = twilioConfiguration;
        Twilio.init(
                twilioConfiguration.getAccountSid(),
                twilioConfiguration.getAuthToken()
        );
        logger.info("Twilio initialized ... with account sid {}",twilioConfiguration.getAccountSid());
    }
}
