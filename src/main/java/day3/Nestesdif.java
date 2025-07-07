package day3;
import java.util.Scanner;
public class Nestesdif {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the Bill amount: ");
        double billAmount =sc.nextDouble();
        System.out.println("Enter the membership type (Gold/Silver/Bronze): ");
        String MemberShipType = sc.next().toLowerCase();

        System.out.println("Enter the payment method cash/card ");
        String paymentMethod = sc.next().toLowerCase();
        double discount = 0;
        if(MemberShipType.equals("gold")){

            if(paymentMethod.equals("card")){
                discount = billAmount*0.20;
            }else{
                discount = billAmount*0.15;
            }
        } else if (MemberShipType.equals("silver") || MemberShipType.equals("bronze")) {
            discount = billAmount * 0.10;

        }else {
            System.out.println("your not eligible for any discount. ");
        }

        double finalAmount = billAmount - discount;
        System.out.println("Bill amount is: " + billAmount);
        System.out.println("Discount amount is: " + discount);
        System.out.println("Net amount is: " + finalAmount);
        sc.close();


    }
}
