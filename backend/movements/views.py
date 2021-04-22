from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Movement
from .serializers import MovementSerializer

@api_view(['GET'])
def movements_list(request):
    if request.method == 'GET':
        movement = Movement.objects.all()
        serializer = MovementSerializer(movement, many=True)
        return Response(serializer.data)
