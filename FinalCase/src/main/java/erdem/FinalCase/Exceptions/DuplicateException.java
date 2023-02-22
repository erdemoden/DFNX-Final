package erdem.FinalCase.Exceptions;

import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class DuplicateException {
@ExceptionHandler(DuplicateKeyException.class)
    public ResponseEntity<CustomError> CustomException(){
    CustomError duplicateError = new CustomError();
    duplicateError.setError("You Can Not Use Same Phone Number Or TC No Multiple Times");
    return new ResponseEntity<>(duplicateError, HttpStatus.BAD_REQUEST);
    }
}
