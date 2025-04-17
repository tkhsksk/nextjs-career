class ClassSub{
    public static void main(String[] args) {
        // 型Stringと変数x,yを指定して数を格納
        int a = 5;
        int b = 11;

        // 関数を使って、int sに格納
        int s1 = privateVoidClassAdd(a, b);

        // s2というインスタンスを作り、対象のメソッドを呼び出す
        // さらにnumにint型として格納
        ClassSub s2 = new ClassSub();
        int num = s2.privateClassAdd(a, b);

        // 最終的な出力
        System.out.println("答えは「"+s1+"」です");
        System.out.println("答えは「"+num+"」です");
    }

    // 同一クラス内で取得できるようにするために、staticにするパターン
    private static int privateVoidClassAdd(int x, int y) {
        // 型intと変数x,yを指定して数を足し算してreturnする
        return (x + y);
    }

    // 同一クラス内で取得できるようにするために、取得時にインスタンスを作るパターン
    private int privateClassAdd(int x, int y) {
        // 型intと変数x,yを指定して数を足し算してreturnする
        return (x + y);
    }
}