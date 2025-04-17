import java.sql.*;
import java.util.*;

class ReadDB {
    // 取得できるようにstatic finalで変数を格納しておく
    static final String URL  = "jdbc:mysql://localhost/java";
    static final String USER = "guest";
    static final String PASS = "DK4XMDVATL2N8448CMF9";
        
    public static void main(String[] args) {
        // 実行する文
        String sql = "SELECT * FROM toy;";
        
        try ( Connection connection = DriverManager.getConnection(URL, USER, PASS);
              PreparedStatement statement = connection.prepareStatement(sql); )
        {
            // 実行結果を取得する
            ResultSet result = statement.executeQuery();
            // 配列に格納するパターンを実行するために、配列と2次元配列を準備しておく
            ArrayList<String> res_arr = new ArrayList<>();
            Map<Integer, String> res_map = new HashMap<Integer, String>();

            System.out.println("whileで出力");
            // while文で回す
            while (result.next()) {
                // 単純に出力
                System.out.println(result.getString("id")+ " : " +result.getString("name"));
                // 配列に格納するパターン
                res_arr.add(result.getString("id")+ " : " +result.getString("name"));
                // 2次元配列に格納するパターン
                res_map.put(result.getInt("id"), result.getString("name"));
            }

            System.out.println("forEachで出力");
            res_arr.forEach(
                // 配列を出力
                value -> System.out.println(value)
            );

            System.out.println("多次元を出力");
            res_map.forEach(
                // 多次元配列を出力
                (key, value) -> System.out.println(key + " : " + value)
            );

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}