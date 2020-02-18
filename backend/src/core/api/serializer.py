from rest_framework import serializers
from core.models import Travel

class TravelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Travel
        fields = '__all__'