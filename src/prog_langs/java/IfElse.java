// インポート
import java.util.Arrays;

class IfElse{
    public static void main(String[] args) {
        // 通常の配列作成
        String[] exArray = {"test","hoge","piyo","huga"};

        // 通常配列を全て回して表示
        Arrays.stream(exArray).forEach(
            value -> {
                // eが含まれていたら
                if(value.contains("e")) {
                    // 表示する
                    System.out.println(value);
                }
            }
        );
    }
}

/*実行結果
test
hoge*/