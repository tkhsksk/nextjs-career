from django.shortcuts import render, redirect
from myapp.forms import UserForm
from .models import User
 
def home_template(request):
    form = UserForm()
    users = User.objects.all() # Userモデルを取得

    if request.method == "POST":
        form = UserForm(request.POST)

        if form.is_valid():
            form.save()
            return redirect('home')

    context = {
        "form": form,
        'users': users, # htmlに渡す
    }
    return render(request, "home/index.html", context)
