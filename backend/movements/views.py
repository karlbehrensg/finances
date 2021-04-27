from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Movement
from .serializers import MovementSerializer

@api_view(['GET', 'POST', 'PUT'])
def movements_list(request):
    if request.method == 'GET':
        user = request.user
        movement = Movement.objects.filter(user=user).order_by('-expired')
        serializer = MovementSerializer(movement, many=True)
        response = {'movements': serializer.data}
        return Response(response, status=status.HTTP_200_OK)

    elif request.method == 'POST':
        serializer = MovementSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'PUT':
        try:
            movement = Movement.objects.get(pk=request.data['id'])
        except Movement.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = MovementSerializer(movement, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)        
