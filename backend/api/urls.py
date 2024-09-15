from django.urls import include,path
from . import views
from .views import sample_api


urlpatterns = [
    path('endpoint/',sample_api)
]