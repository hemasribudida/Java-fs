package org.hema;
import java.util.Scanner;
public class BiggestOfTwoNumbers {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the first num1: ");
        int num1 = sc.nextInt();
        System.out.print("Enter the second num2: ");
        int num2 = sc.nextInt();
        if(num1>num2){
            System.out.println("num1 is biggest = " +num1);

        }else if(num2>num1){
            System.out.println("The biggest number is = " +num2);
        }else{
            System.out.println("Both are equel.");
        }
    }


}
