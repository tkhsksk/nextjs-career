// 各種インポート
import java.util.Arrays;
import java.util.List;
import java.util.ArrayList;

class Search{
    public static void main(String[] args) {
        // Listで配列作成
        List<String> exList = Arrays.asList("test","hoge","piyo","huga");
        // ArrayListで空の配列作成
        ArrayList<String> search = new ArrayList<>();

        // Listを全て回して
        exList.forEach(
            value -> {
                // 条件に合致するもののみ
                if(value.contains("e")) {
                    // 空の配列に追加
                    search.add(value);
                }
            }
        );

        // 完成した配列を回す
        search.forEach(
            s -> System.out.println(s)
        );
    }
}

/*出力結果
test
hoge*/