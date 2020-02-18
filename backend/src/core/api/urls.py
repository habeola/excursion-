from core.api.views import TravelViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', TravelViewSet, basename='travels')
urlpatterns = router.urls