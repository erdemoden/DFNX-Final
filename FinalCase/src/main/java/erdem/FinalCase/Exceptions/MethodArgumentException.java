package erdem.FinalCase.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class MethodArgumentException {
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<CustomError> CustomError(MethodArgumentNotValidException ex){
        CustomError customError = new CustomError();
        String error = ex.getBindingResult().toString();
        customError.setError(error.substring(error.lastIndexOf("message")+7).replace("[","").replace("]",""));
        return new ResponseEntity<>(customError, HttpStatus.BAD_REQUEST);
    }
}
