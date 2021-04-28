from django.urls import path
from . import views

urlpatterns = [
    path('movements/', views.movements_list),
    path('resume/', views.resume)
]
