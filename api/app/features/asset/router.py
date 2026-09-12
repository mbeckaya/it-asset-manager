from fastapi import APIRouter, status

from app.features.asset.model import Asset, AssetCreate, AssetUpdate
from app.features.asset.service import AssetService
from app.features.asset.controller import AssetController

asset_service = AssetService(Asset)
asset_controller = AssetController(
    asset_service,
)

router = APIRouter(prefix="/api/v1")

@router.get(
    "/assets", 
    response_model=list[Asset],
)
async def get_assets() -> list[Asset]:
    return asset_controller.index()

@router.get(
    "/assets/{asset_id}", 
    response_model=Asset,
)
async def get_asset(asset_id: int) -> Asset:
    return asset_controller.show(asset_id)

@router.post(
    "/assets",
    response_model=Asset,
    status_code=status.HTTP_201_CREATED,
)
async def create_asset(asset_new: AssetCreate) -> Asset:
    return asset_controller.store(asset_new)

@router.put(
    "/assets/{asset_id}", 
    response_model=Asset,
)
async def update_asset(
    asset_id: int, 
    asset_updated: AssetUpdate,
) -> Asset:
    return asset_controller.update(asset_id, asset_updated)

@router.delete(
    "/assets/{asset_id}",
    status_code=status.HTTP_204_NO_CONTENT,
)
async def delete_asset(asset_id: int) -> None:
    return asset_controller.destroy(asset_id)