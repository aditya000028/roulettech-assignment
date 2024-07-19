from django.shortcuts import render
import json
from django.http import HttpResponse

# Create your views here.
def getProfileInformationView(request):
  response = {
    "introduction": "Hey there. I am Aditya Gupta",
    "aboutMe": """I am Aditya Gupta, a Full Stack Developer. Ironically, I did not want to work with computers until university, 
                  and actually found their complexity to be intimidating. But I took a data structures and algorithms course in 
                  my first year of university course and fell in love with coding. I actually used to save my 
                  Computing Science homework for Fridays because I enjoyed it! Fast-forward to today, and here I am 
                  coding as my passion. My main focus is web and software development, and I am very comfortable in 
                  both the front and back end. I have gained a year of internship experience, working with Visier and PNI 
                  Digital Media as a Full Stack Developer. I am very excited to join Roulettech and look forward to the next steps!""",
    "education": """I am an April 2023 graduate with a Bachelors of Computing Science from Simon Fraser University (SFU) 
                  in Vancouver, Canada. Additionally, I achieved a Distinction in Co-op, meaning that the school has 
                  recognized that I have done 1+ year of internship work with organizations. I have also been a 
                  two-time recipient of the Dean's Honor Roll award, which signifies that I achieved a grade point 
                  average of above 3.5 in a full course load semester. Some completed courses which I would like to 
                  highlight are: Web Systems Architecture, Database Systems I & II, Object Oriented Design in Java, 
                  and Distributed Systems."""
  }
  return HttpResponse(json.dumps(response))