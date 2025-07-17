package day17;

public class TypeCastingExamples {
    public static void main(String[] args) {
        int a = 10;
        float b = a;// implicit
        System.out.println("a= " +a+  "b="  +b);

        float c= 10.5f;
        int d = (int)c;//explicit
        System.out.println("c= " +c+ "d=" +d);

        String numStr = "100.50f";

        float num = Float.parseFloat(numStr);
        System.out.println("num=" +num);

        String emp = "EMP1001,KRISH,developer,3000000";

        String[] arr = emp.split(",");

        double salary = Double.parseDouble(arr[3]);
        System.out.println(salary + salary * 0.1);

    }
}
