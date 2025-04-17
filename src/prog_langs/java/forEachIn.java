// インポート
import java.util.Arrays;

class ForEachIn{
    public static void main(String[] args) {
        // 多次元配列作成
        String[][] exArray = {{"0","test"},{"1","hoge"},{"2","piyo"},{"3","huga"}};

        // 多次元配列を全て回して表示
        Arrays.stream(exArray).forEach(
            s -> System.out.println(s[0]+"番目は"+s[1])
        );
    }
}