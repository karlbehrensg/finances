from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Movement
from .serializers import MovementSerializer

@api_view(['GET'])
def movements_list(request):
    if request.method == 'GET':
        user = request.user
        movement = Movement.objects.filter(user=user)
        serializer = MovementSerializer(movement, many=True)
        response = {'movements': serializer.data}
        return Response(response)
