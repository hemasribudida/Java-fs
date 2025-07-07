package day2;
import java.util.Scanner;
public class ConvertAgeToProperAge {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter age in years: ");
        int ageInYears = sc.nextInt();

        if(ageInYears <0){
            ageInYears = Math.abs(ageInYears);
        }

        int Years = ageInYears;
        int months = ageInYears * 12;
        int days = months * 24;
        int hours = days * 60;
        int seconds = hours * 60;


        System.out.println("I leaved for ");
        System.out.println("age = " + Years);
        System.out.println("months =" +months);
        System.out.println("days =" +days);
        System.out.println("hours = " +hours);
        System.out.println("seconds = "+seconds);
        sc.close();

    }
}
