// 各種インポート
import java.util.Arrays;
import java.util.List;
import java.util.ArrayList;

class Dog{
    public static void main(String[] args) {
        // Listで配列作成
        List<String> exList = Arrays.asList("test","hoge","piyo","huga");
        // ArrayListで空の配列作成
        ArrayList<String> dogs = new ArrayList<>();

        // Listを全て回して
        exList.forEach(
            value -> {
                // 🐶をつける
                dogs.add(value+"🐶");
            }
        );

        // 完成した配列を回す
        dogs.forEach(
            s -> System.out.println(s)
        );
    }
}

/*出力結果
test🐶
hoge🐶
piyo🐶
huga🐶*/