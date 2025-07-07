package day2;

public class MangoArrangementServices {
    public static void main(String[] args) {
        int mangoes = 2345;
        int boxCapacity = 25;
        int boxesRequired;

        if( mangoes % boxCapacity == 0){
            boxesRequired = mangoes/boxCapacity;

        }
        else{
            boxesRequired = mangoes/boxCapacity + 1;
        }
        System.out.println("The boxes required are " + boxesRequired);
    }
}
