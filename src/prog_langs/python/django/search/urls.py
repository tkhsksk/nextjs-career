from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_template, name='home'),
    path('edit/<int:pk>/', views.user_edit, name="user_edit"),
    path('search', views.search, name='search'),
]