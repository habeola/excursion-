from core.models import Travel
from .serializer import TravelSerializer
from rest_framework import viewsets


class TravelViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = TravelSerializer
    queryset = Travel.objects.all()
