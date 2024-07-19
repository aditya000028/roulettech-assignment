from django.urls import path

from .views import getProfileInformationView

urlpatterns = [
    path("profile/", getProfileInformationView, name="profileInformation"),
]