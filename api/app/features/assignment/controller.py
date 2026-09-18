from fastapi import HTTPException, status
from sqlalchemy.exc import IntegrityError

from app.features.assignment.service import AssetAssignmentService
from app.features.status.service import AssetStatusService
from app.features.asset.service import AssetService
from app.features.assignment.model import AssetAssignment, AssetAssignmentCreate
from app.features.status.model import AssetStatusCreate
from app.core.controller import BaseController
from app.features.asset.enums import AssetStatusEnum

class AssetAssignmentController(BaseController):
    def __init__(
            self, 
            asset_assignment_service: AssetAssignmentService,
            asset_status_service: AssetStatusService,
            asset_service: AssetService,
    ):
        super().__init__("Asset Assignment")
        self.__asset_assignment_service = asset_assignment_service
        self.__asset_status_service = asset_status_service
        self.__asset_service = asset_service

    def index(self) -> list[AssetAssignment]:
        return self.__asset_assignment_service.get_all()

    def show(self, asset_assignment_id: int) -> AssetAssignment:
        asset_assignment = self.__asset_assignment_service.get_by_id(asset_assignment_id)
        
        if not asset_assignment: 
            self.err_not_found(asset_assignment_id)

        return asset_assignment

    def store(self, asset_assignment_new: AssetAssignmentCreate) -> AssetAssignment:
        asset = self.__asset_service.get_by_id(
            asset_assignment_new.asset_id
        )

        if not asset:
            self.err_not_found(asset_assignment_new.asset_id)

        if asset.status is not AssetStatusEnum.AVAILABLE:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail=f"Asset with id {asset.id} is not available."
            )

        try:
            asset_assignment = self.__asset_assignment_service.create(
                asset_assignment_new
            ) 
        except IntegrityError:
            self.err_res_conflict()
        except:
            self.err_default()

        self.__asset_status_service.create(
            AssetStatusCreate(
                status=AssetStatusEnum.ASSIGNED,
                asset_id=asset_assignment.asset_id,
            )
        ) 

        asset.status = AssetStatusEnum.ASSIGNED
        self.__asset_service.update(asset.id, asset)

        return asset_assignment

    def update(
            self, 
            asset_assignment_id: int, 
            asset_assignment_updated: AssetAssignment
    ) -> AssetAssignment:
        try:
            asset_assignment = self.__asset_assignment_service.update(
                asset_assignment_id, 
                asset_assignment_updated,
            )
        except:
            self.err_default()

        if not asset_assignment:
            self.err_not_found(asset_assignment_id)

        self.__asset_status_service.create(
            AssetStatusCreate(
                status=AssetStatusEnum.AVAILABLE,
                asset_id=asset_assignment.asset_id,
            )
        ) 

        return asset_assignment