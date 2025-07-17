package day17;

class Parent{
    void m1() {
        System.out.println("Parent m1");
    }
}
class Child1 extends Parent{
    void m1(){
        System.out.println("child m1");
    }
    void m2(){
        System.out.println("child m2");
    }

}
class child2 extends Parent{
    void m1(){
        System.out.println("child m1");
    }
    void m2(){
        System.out.println("child m2");
    }
    void m3(){
        System.out.println("child m3");
    }
}

public class TypeCastExample {
    public static void main(String[] args) {
        Parent p1 = new Child1();
        if(p1 instanceof Child1 ref) {
            ref.m1();
            ref.m2();
        }
//        else if(p1 instanceof child2 ref ){
//            ref.m1();
//            ref.m2();
//            ref.m3();
//        }else{
//            p1.m1();
//        }
    }
}

