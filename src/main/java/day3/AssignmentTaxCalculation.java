package day3;
import org.w3c.dom.ls.LSOutput;

import java.util.Scanner;
public class AssignmentTaxCalculation {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the income: ");
        double income = sc.nextInt();
        double tax = 0;

        if(income <50000){
            tax =0;
        }else if(income >= 50000 && income  < 100000){
            tax = income * 0.05;
        }else if(income >=100000 && income < 200000){
            tax= income* 0.10;
        }else if(income >=200000 && income < 300000){
            tax = income * 0.20;
        }else {
            tax = income * 0.30;
        }
        System.out.println("the tax is :" +tax);
    }
}
