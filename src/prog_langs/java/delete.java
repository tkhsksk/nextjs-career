/*ioとsql系を一括でインポート*/
import java.io.*;
import java.sql.*;
 
class DeleteDB {
    /*エラー結果を取得するために、Exceptionにスローが必要*/
    public static void main(String[] args) throws Exception {
        /*db接続情報*/
        String URL  = "jdbc:mysql://localhost/java";
        String USER = "guest";
        String PASS = "DK4XMDVATL2N8448CMF9";

        /*dbに接続*/
        Connection con = DriverManager.getConnection(URL, USER, PASS);
        /*実行文*/
        PreparedStatement preStatement = con.prepareStatement("delete from toy where id = ?");

        /*実行文の?第1引数に2*/
        preStatement.setInt(1, 2);
        /*そのまま実行*/
        preStatement.executeUpdate();
    }
}