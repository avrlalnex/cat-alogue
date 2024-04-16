from django.urls import path
from . import views

urlpatterns = [
    path("accounts/", views.AccountListCreate.as_view(), name = "account-view-create"),
    path("accounts/<int:pk>/", views.AccountRetrieveUpdateDestroy.as_view(), name = "update"),

]


