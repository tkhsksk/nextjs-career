from django.shortcuts import render, redirect
from myapp.forms import UserForm
from .models import User # Userモデルを追加
 
# 以下関数を追加
def user_edit(request, pk):
    # Userモデルからidを元にデータを取得
    item = User.objects.get(id=pk)
    # フォームにデータを格納
    form = UserForm(instance=item)

    if request.method == "POST":
        # postデータを取得
        form = UserForm(request.POST, instance=item)

        if form.is_valid():
            form.save()
            return redirect('user_edit', pk)

    # htmlで読み込むformを定義
    context = {"form": form}
    return render(request, "user/edit.html", context)
