from django.db import models

# Create your models here.
CATEGORY_CHOICES = (
    ('Tour', 'Tour'),
    ('Vacation', 'Vacation'),
    ('Conference', 'Conference'),
    ('Event', 'Event'),
    ('Party', 'Party')
)

LOCATION_CHOICES = (
    ('Lagos', 'Lagos'),
    ('Port-Harcourt', 'Port-Harcourt'),
    ('Kaduna', 'Kaduna'),
    ('Jos', 'Jos'),
    ('Abuja', 'Abuja')   
)

ATTENDEES_CATEGORY = (
    ('single', 'single'),
    ('couple', 'couple'),
    ('family', 'family'),
    ('friends', 'friends'),
    ('co-workers', 'co-workers')
)



class Travel(models.Model):
    title = models.CharField(max_length=50)
    image = models.ImageField(upload_to='images')
    description = models.TextField()
    location = models.CharField(choices=LOCATION_CHOICES, max_length=20)
    hotel = models.CharField(max_length=100)
    resturant = models.CharField(max_length=100)
    popular_event = models.CharField(max_length=100, blank=True, null=True)
    tourist_center = models.CharField(max_length=100)
    trip_plan = models.CharField(choices=CATEGORY_CHOICES, max_length=10)
    attendee = models.CharField(choices=ATTENDEES_CATEGORY, max_length=20)
    price = models.IntegerField()


    def __str__(self):
        return self.title


    
