package day23;

import java.util.ArrayList;
import java.util.List;

class DynamicArrayList {
    private List<Object> list = new ArrayList<>();
    public void add(Object ele) {
        list.add(ele);
    }
    public Object get(int index){
        return list.get(index);
    }

    public void showElement() {
        if(list.size() == 0){
            System.out.println("Array is Emply");
            return;
        }else {
            for (Object ele : list) {
                System.out.println(ele + " ");
            }
        }
    }
    public boolean delete(int pos) {
        return list.remove(pos) != null;
    }
}
public class DynamicArrayListExampleDemo {

    public static void main(String[] args) {

    }
}
