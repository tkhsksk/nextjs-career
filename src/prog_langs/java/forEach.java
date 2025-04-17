// 各種インポート
import java.util.Arrays;
import java.util.List;
import java.util.HashMap;
import java.util.Map;

class ForEach{
    public static void main(String[] args) {
        // 通常の配列作成
        String[] exArray = {"test","hoge","piyo","huga"};
        // Listで配列作成
        List<String> exList = Arrays.asList("test","hoge","piyo","huga");
        // Mapで配列作成
        Map<Integer, String> exMap = new HashMap<Integer, String>() {
            {
                put(0, "test");
                put(1, "hoge");
                put(2, "piyo");
                put(3, "huga");
            }
        };

        // 通常配列を全て回して表示
        Arrays.stream(exArray).forEach(
            s -> System.out.println(s)
        );
        // Listを全て回して表示
        exList.forEach(
            s -> System.out.println(s)
        );
        // Mapを全て回して表示
        exMap.forEach(
            (key, value) -> System.out.println(key + " : " + value))
        ;
    }
}

/*出力結果
test
hoge
piyo
huga
test
hoge
piyo
huga
0 : test
1 : hoge
2 : piyo
3 : huga*/