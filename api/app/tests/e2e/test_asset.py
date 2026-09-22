import httpx
from fastapi import status

from ...features.asset.model import Asset

BASE_URL = "http://127.0.0.1:8000/api/v1"

def create_asset():
    payload = {
        "brand": "Lenovo",
        "type": "Tablet",
        "reseller": "Apple Store",
        "purchased_at": "2024-04-22",
        "model": "Tab P12",
        "serial": "LEN007890",
        "warranty_months": 24,
        "price": 429.0,
        "status": "available"
    }

    with httpx.Client(base_url=BASE_URL) as client:
        response = client.post("/assets", json=payload)

    assert response.status_code == status.HTTP_201_CREATED

    return response.json()

def test_get_assets():
    with httpx.Client(base_url=BASE_URL) as client:
        response = client.get("/assets")

    assert response.status_code == status.HTTP_200_OK

    data = response.json()

    assert isinstance(data, list)
    assert len(data) > 0

def test_get_asset():
    with httpx.Client(base_url=BASE_URL) as client:
        response = client.get("/assets/1")

    assert response.status_code == status.HTTP_200_OK

    asset = Asset.model_validate(response.json())

    assert isinstance(asset, Asset)
    assert asset.id == 1

def test_create_asset():
    asset = Asset.model_validate(create_asset())
    
    assert isinstance(asset, Asset)

def test_update_asset():
    payload = {
        "brand": "Lenovo",
        "type": "Tablet",
        "reseller": "Apple Store",
        "purchased_at": "2024-04-22",
        "model": "Tab P12 UPDATE",
        "serial": "LEN007890",
        "warranty_months": 24,
        "price": 429.0,
        "status": "available"
    }

    with httpx.Client(base_url=BASE_URL) as client:
        response = client.put("/assets/1", json=payload)

    assert response.status_code == status.HTTP_200_OK

    asset = Asset.model_validate(response.json())
        
    assert isinstance(asset, Asset)
    assert asset.model == "Tab P12 UPDATE"

def test_delete_asset():
    asset = create_asset()

    with httpx.Client(base_url=BASE_URL) as client:
        response = client.delete(f"/assets/{asset["id"]}")

    assert response.status_code == status.HTTP_204_NO_CONTENT