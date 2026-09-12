from sqlalchemy.exc import IntegrityError

from app.core.controller import BaseController
from app.features.asset_status.service import AssetStatusService
from app.features.asset_status.model import AssetStatus, AssetStatusCreate

class AssetStatusController(BaseController):
    def __init__(self, asset_status_service: AssetStatusService):
        super().__init__("Asset Status")
        self.__asset_status_service = asset_status_service

    def index(self, asset_id: int) -> list[AssetStatus]:
        return self.__asset_status_service.get_all(asset_id)

    def store(
        self, 
        asset_status: AssetStatusCreate,
    ) -> AssetStatus:
        try:
            asset_status_new = self.__asset_status_service.create(
                asset_status
            ) 
        except IntegrityError:
            self.err_res_conflict()
        except:
            self.err_default()

        return asset_status_new