from sqlalchemy.exc import IntegrityError

from app.features.asset.service import AssetService
from app.core.controller import BaseController
from app.features.asset.model import Asset, AssetCreate, AssetUpdate

class AssetController(BaseController):
    def __init__(
            self, 
            asset_service: AssetService,
    ):
        super().__init__("Asset")
        self.__asset_service = asset_service

    def index(self) -> list[Asset]:
        return self.__asset_service.get_all()

    def show(self, asset_id: int) -> Asset:
        asset = self.__asset_service.get_by_id(asset_id)
        
        if not asset: 
            self.err_not_found(asset_id)

        return asset

    def store(self, asset_new: AssetCreate) -> Asset:
        try:
            asset_new = self.__asset_service.create(asset_new) 
        except IntegrityError:
            self.err_res_conflict()
        except:
            self.err_default()

        return asset_new

    def update(
            self, 
            asset_id: int, 
            asset_updated: AssetUpdate
    ) -> Asset:
        try:
            asset = self.__asset_service.update(
                asset_id, 
                asset_updated
            )
        except:
            self.err_default()

        if not asset:
            self.err_not_found(asset_id)

        return asset

    def destroy(self, asset_id: int) -> None:
        try:
            is_deleted = self.__asset_service.retire(asset_id)
        except:
            self.err_default()

        if not is_deleted:
            self.err_not_found(asset_id)