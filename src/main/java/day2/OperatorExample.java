package day2;

public class OperatorExample {
    public static void main(String[] args) {
        //assingnmentOperator
        int num1 = 23;
        int num2 = 45;
        int sum = num1+num2;

        //Arthmeticoperations
        int quotient = num1/num2;
        int remainder = num1%num2;
        int multiplication = num1*num2;
        int difference = num1 - num2;

        System.out.println("Sum of " + num1 + " and " + num2 + " is: " + sum);
        System.out.println("Difference of " + num1 + " and " + num2 + " is: " + difference);
        System.out.println("Product of " + num1 + " and " + num2 + " is: " + multiplication);
        System.out.println("Quotient of " + num1 + " and " + num2 + " is: " + quotient);
        System.out.println("Remainder of " + num1 + " and " + num2 + " is: " + remainder);

    }

}
