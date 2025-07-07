package org.hema;
import java.util.Scanner;
public class Net_and_Average {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter person 1 weight: ");
        int a = sc.nextInt();

        System.out.println("Enter person 2 weight: ");
        int b= sc.nextInt();
        System.out.println("Enter person 3 weight: ");
        int c = sc.nextInt();

//       int Average = average(a,b,c);
//        System.out.println("the avg weight is = "+Average);

       int net_weight= Net_weight(a,b,c);
        System.out.println("the net weight is = "+net_weight);

    }
    public static void average(int a,int b,int c) {
        int Average = (a + b + c) / 3;
        System.out.println("the avg weight is = "+Average);


//        return Average;
    }
    public static int Net_weight(int a,int b,int c) {
        int net_weight = a + b + c;
        return net_weight;
    }
}
