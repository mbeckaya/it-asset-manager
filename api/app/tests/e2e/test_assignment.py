import httpx
from fastapi import status

from ...features.assignment.model import AssetAssignment

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

def create_assignment():
    payload = {
        "asset_id": create_asset()["id"],
        "user_id": 1,
        "assigned_at": "2026-08-13",
        "notes": "Laptop for remote"
    }

    with httpx.Client(base_url=BASE_URL) as client:
        response = client.post("/asset-assignments", json=payload)

    assert response.status_code == status.HTTP_201_CREATED

    return response.json()

def test_get_assignments():
    with httpx.Client(base_url=BASE_URL) as client:
        response = client.get("/asset-assignments")
    
    assert response.status_code == status.HTTP_200_OK

    data = response.json()

    assert isinstance(data, list)
    assert len(data) > 0

def test_create_assignment():
    assignment = AssetAssignment.model_validate(create_assignment())

    assert isinstance(assignment, AssetAssignment)
    
def test_update_assignment():
    assignment = create_assignment()

    payload = {
        "asset_id": assignment["asset_id"],
        "user_id": assignment["user_id"],
        "assigned_at": assignment["assigned_at"],
        "notes": "This was updated"
    }

    with httpx.Client(base_url=BASE_URL) as client:
        response = client.put(
            f"/asset-assignments/{assignment["id"]}", 
            json=payload,
        )

    assert response.status_code == status.HTTP_200_OK

    assignment = AssetAssignment.model_validate(response.json())

    assert isinstance(assignment, AssetAssignment)
    assert assignment.notes == "This was updated"
    