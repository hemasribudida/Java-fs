package day23;

import java.util.Arrays;

class DynamicArray {
    private Object[] arr;
    private int index;

    public DynamicArray(int size) {
        arr = new Object[size];
        index = 0;
    }

    public void add(Object ele) {
        if (index < arr.length) {
            arr[index++] = ele;
        } else {
            Object[] temp = new Object[arr.length == 0 ? 1 :arr.length  * 2];
            arr = temp;
            arr[index++] = ele;
        }
    }

    public Object get(int index) {
        return arr[index];
    }

    public void showElements() {
        System.out.println("Array size is " + arr.length);
        if(index == 0){
            System.out.println("Array is empty");
            return;
        }
        for (int i = 0; i< index; i++){
            System.out.println(arr[i] + " ");
        }
    }
    public boolean delete(int pos) {
        if (pos < 0 || pos > index) {
            return false;
        }
        if (pos == 0) {
            Object[] temp = new Object[arr.length - 1];
            System.arraycopy(arr, 1, temp, 0, arr.length - 1);
            arr = temp;
            index--;
            return true;
        }
        return false;
    }
}
public class DynamicArrayExample {
    public static void main(String[] args) {
        DynamicArray ref = new DynamicArray(3);
        ref.add("1");
        ref.add("2");
        ref.add("3");

        ref.delete(2);
        ref.delete(1);
        ref.delete(0);


        ref.add("1");
        ref.add("2");
        ref.showElements();
    }
}
