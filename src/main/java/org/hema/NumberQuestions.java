package org.hema;

import java.util.ArrayList;
import java.util.List;

public class NumberQuestions {
    public static void main(String[] args) {

    for(int i = 10;i<=50;i++)
    {
        if (isPrime(i)) {
            System.out.println(i+" ");

        }
    }
}
public static boolean isPrime(int num) {
    if (num <= 1) return false;
    for(int i=2;i<=Math.sqrt(num);i++){
        if(num % i == 0) return false;
    }
    return true;
}
}