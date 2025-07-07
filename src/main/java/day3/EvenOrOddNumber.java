package day3;
import java.util.Scanner;
public class EvenOrOddNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Ente the number : ");
        int number = sc.nextInt();
        if(number % 2 == 0){
            System.out.println("it is even number");

        }else {
            System.out.println("It is odd number");
        }

    }
}
