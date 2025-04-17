class ForEnd{
    public static void main(String[] args) {
        // textにstring型で配列を格納
        String[] text = {"test","hoge","piyo","huga"};

        // 回すときの条件は0から始まり"配列の長さ"未満まで、1ずつ増やす
        for (int i = 0; i < text.length; i++){
          System.out.println(text[i]);
        }
    }
}