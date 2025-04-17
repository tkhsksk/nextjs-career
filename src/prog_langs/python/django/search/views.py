from django.shortcuts import render, redirect # redirectを追記
from myapp.forms import UserForm # UserFormをimport
from .models import User

def search(request):
    query = request.GET.get('query')

    if query:
        users = User.objects.filter(
            name__icontains=query)
    else:
        users = User.objects.all()
    context = {"users": users}
    return render(request, "search/index.html", context)
