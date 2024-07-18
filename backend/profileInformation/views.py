from django.shortcuts import render
import json
from django.http import HttpResponse

# Create your views here.
def getProfileInformation(request):
  response = {
    "aboutMe": "Something about me",
    "education": "My education is that I am educated"
  }
  return HttpResponse(json.dumps(response))