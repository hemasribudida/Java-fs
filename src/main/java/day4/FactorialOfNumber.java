package day4;
import java.util.Scanner;
public class FactorialOfNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number: ");
        int num = sc.nextInt();
        int fact =1;
        for (int i=2;i<=num;i++){
            fact *= i;
        }
        System.out.println("FACTORIAL OF "+ num + "is:" +fact);
    }



}
