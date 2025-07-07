package day3;
import java.util.Scanner;
public class MultiplicationOfTable {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter table number: ");
        int number = sc.nextInt();

        for(int i =number  ;i<=10;i++){
            System.out.println(number +"*"  +i+ "=" +(number*i) );
        }

    }
}
