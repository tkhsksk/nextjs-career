import java.io.*;
import java.sql.*;
import java.util.Scanner;
 
class Insert {
    public static void main(String[] args) throws Exception {
        String URL  = "jdbc:mysql://localhost/java";
        String USER = "guest";
        String PASS = "DK4XMDVATL2N8448CMF9";

        try (Connection con = DriverManager.getConnection(URL, USER, PASS);
                PreparedStatement preStatement = con.prepareStatement("insert into toy values(?, ?);")) {
            Scanner sc = new Scanner(System.in);
            System.out.print("idを入力してください");
            int id = Integer.parseInt(sc.nextLine());

            System.out.print("名前を入力してください");
            String name = sc.nextLine();

            preStatement.setInt(1, id);
            preStatement.setString(2, name);
            int count = preStatement.executeUpdate();
        }
        catch (SQLException ex)
        {
            System.out.println("MySQLへの接続に失敗しました。");
            ex.printStackTrace();
        }  
    }
}