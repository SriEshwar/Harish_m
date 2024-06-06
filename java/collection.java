import java.util.*;

public class collection{
    public static void main(String[] args) {    
        int[] array = {2,3,4,5,6,7,8};
        Set<Integer> set = new HashSet<>();
        for (int num : array) {
            set.add(num);
        } 
        if (set.contains(5)) System.out.println("Is present");
        else System.out.println("not present ");
    }
}
