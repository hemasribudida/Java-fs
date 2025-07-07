package org.hema;
import java.util.Scanner;
class EmiCalculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter the principal : ");
        double principal  = sc.nextDouble();

        System.out.println("Enter the annual interest in year(%) : ");
        double annualRate = sc.nextDouble();

        System.out.println("Enter the loan duration in year : ");
        int year = sc.nextInt();

        double emi = calculateEmi(principal ,annualRate , year);
        System.out.printf("Your EMI is: ₹%.2f\n", emi);


    }

    public static double calculateEmi(double principal ,double annualRate , int year){
        double monthlyRate  = annualRate/(12*100);
        int months = year *12;

        double emi = (principal* monthlyRate * Math.pow(1+annualRate,months)/Math.pow(1+ monthlyRate,months) -1 );
        return emi;
    }
}
