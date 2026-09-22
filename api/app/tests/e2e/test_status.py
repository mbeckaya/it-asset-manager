import httpx
from fastapi import status

BASE_URL = "http://127.0.0.1:8000/api/v1"

def test_get_asset_status():
    with httpx.Client(base_url=BASE_URL) as client:
        response = client.get("/assets/1/status")

    assert response.status_code == status.HTTP_200_OK

    data = response.json()
    
    assert isinstance(data, list)
    assert len(data) > 0