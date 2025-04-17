from django.shortcuts import render, redirect
from myapp.forms import UserForm
 
def home_template(request):
    # フォームを作成
    form = UserForm()
    
    # メソッドがPOSTだった場合
    if request.method == "POST":
        # POSTデータを取得
        form = UserForm(request.POST)

        # データが有効か確認
        if form.is_valid():
            # 有効であればデータを格納
            form.save()
            # myapp/urls.pyに設定したnameにリダイレクトする
            return redirect('home')

    # HTMLで読み込むformを定義
    context = {"form": form}
    return render(request, "home/index.html", context)