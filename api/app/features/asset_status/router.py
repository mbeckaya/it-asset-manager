from fastapi import APIRouter, status

from app.features.asset_status.model import AssetStatus, AssetStatusCreate
from app.features.asset_status.service import AssetStatusService
from app.features.asset_status.controller import AssetStatusController

asset_status_service = AssetStatusService(AssetStatus)
asset_status_controller = AssetStatusController(asset_status_service)

router = APIRouter(prefix="/api/v1")

@router.get(
    "/assets/{asset_id}/status", 
    response_model=list[AssetStatus],
)
async def get_asset_statuses(asset_id: int) -> list[AssetStatus]:
    return asset_status_controller.index(asset_id)

@router.post(
    "/assets/status", 
    response_model=AssetStatus,
    status_code=status.HTTP_201_CREATED,
)
async def create_asset_statuses(asset_status: AssetStatusCreate) -> AssetStatus:
    return asset_status_controller.store(
        asset_status,
    )