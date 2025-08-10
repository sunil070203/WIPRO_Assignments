import java.util.*;
import java.util.stream.*;

public class PrettyJoiner {
    public static void main(String[] args) {
        List<String> cities = Arrays.asList("Delhi", "Mumbai", "Chennai", "Kolkata");
        String result = cities.stream()
                              .collect(Collectors.joining(", "));
        System.out.println(result);
    }
}
