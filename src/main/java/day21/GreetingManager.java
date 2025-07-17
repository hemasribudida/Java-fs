package day21;
interface GreetingService{
    String greet(String name);
}


interface MessageService{
    void sendMessage(String message,String to);
}

//greetingservice implementation

class BirthdayGreetingService implements GreetingService{
    public String greet(String name){
        return "Happy Birthday," +name+ "!";
    }
}

class AnniversaryGreetingService implements GreetingService{
    public String greet(String name)
    {
        return "Happy anniversary," +name+ "!";
    }
}

class NewYearGreetingService implements GreetingService {
    public String greet(String name){
        return "Happy New year , " +name + "!";
    }
}
class SessionGreetingService implements GreetingService {
    public String greet(String name){
        return "Welcome to the new session, " + name + "!";

    }
}


class EmailMessageService implements MessageService {
    public void sendMessage(String message, String to) {
        System.out.println("Email sent to " + to + ": " + message);
    }
}

class SMSMessageService implements MessageService {
    public void sendMessage(String message, String to) {
        System.out.println("SMS sent to " + to + ": " + message);
    }
}

class WhatsappMessageService implements MessageService {
    public void sendMessage(String message, String to) {
        System.out.println("WhatsApp message sent to " + to + ": " + message);
    }
}
class GreetingSender{
    public void sendGreeting(GreetingService greetingService, MessageService messageService, String name) {
        String message = greetingService.greet(name);
        messageService.sendMessage(message, name);

    }

}
public class GreetingManager {
    public static void main(String[] args) {
        GreetingSender sender = new GreetingSender();
        // Test Greetings
        GreetingService birthday = new BirthdayGreetingService();
        GreetingService anniversary = new AnniversaryGreetingService();
        GreetingService newYear = new NewYearGreetingService();
        GreetingService session = new SessionGreetingService();

        // Test Message Services
        MessageService email = new EmailMessageService();
        MessageService sms = new SMSMessageService();
        MessageService whatsapp = new WhatsappMessageService();

        // Sending greetings using different services
        sender.sendGreeting(birthday, email, "Hema");
        sender.sendGreeting(anniversary, sms, "Ravi");
        sender.sendGreeting(newYear, whatsapp, "Sneha");
        sender.sendGreeting(session, email, "Kiran");
    }
}
