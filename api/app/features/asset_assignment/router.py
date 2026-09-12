from fastapi import APIRouter, status

from app.features.asset_assignment.model import AssetAssignment, AssetAssignmentCreate
from app.features.asset.model import Asset
from app.features.asset_assignment.service import AssetAssignmentService
from app.features.asset.service import AssetService
from app.features.asset_assignment.controller import AssetAssignmentController

asset_assignment_service = AssetAssignmentService(AssetAssignment)
asset_service = AssetService(Asset)

asset_assignment_controller = AssetAssignmentController(
    asset_assignment_service,
    asset_service,
)

router = APIRouter(prefix="/api/v1")

@router.get(
    "/asset-assignments",
    response_model=list[AssetAssignment]
)
async def get_asset_assignments() -> list[AssetAssignment]:
    return asset_assignment_controller.index()

@router.post(
    "/asset-assignments",
    response_model=AssetAssignment, 
    status_code=status.HTTP_201_CREATED,
)
async def create_asset_assignment(
    asset_assignment: AssetAssignmentCreate
) -> AssetAssignment:
    return asset_assignment_controller.store(asset_assignment)

@router.put(
    "/asset-assignments/{asset_assignment_id}",
    response_model=AssetAssignment, 
)
async def update_asset_assignment(
    asset_assignment_id: int, 
    asset_assignment: AssetAssignment 
) -> AssetAssignment:
    return asset_assignment_controller.update(
        asset_assignment_id, 
        asset_assignment,
    )

