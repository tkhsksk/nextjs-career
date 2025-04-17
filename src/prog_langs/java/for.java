class For{
    public static void main(String[] args) {
        // textにstring型で配列を格納
        String[] text = {"test","hoge","piyo","huga"};

        // 回すときの条件は0から始まり2未満まで、1ずつ増やす
        for (int i = 0; i < 2; i++){
          System.out.println(text[i]);
        }
    }
}