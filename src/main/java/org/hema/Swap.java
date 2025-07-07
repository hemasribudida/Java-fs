package org.hema;
import java.util.Scanner;
public class Swap {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = 12;
        int b= 15;
        int t;

        t=a;
        a=b;
        b=t;
        System.out.println("the swapped numbers of a and b  are: "+a+ ","+b);
    }
}
