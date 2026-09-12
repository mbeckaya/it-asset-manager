from sqlmodel import Session, select

from app.core.database import engine
from app.core.service import BaseService
from app.features.asset.model import Asset, AssetCreate, AssetUpdate
from app.features.asset.enums import AssetStatusEnum

class AssetService(BaseService):
    def __get_by_id(
            self, 
            asset_id: int, 
            session: Session
    ) -> Asset | None:
        return session.get(Asset, asset_id)
    
    def get_by_id(self, asset_id: int) -> Asset | None:
        with Session(engine) as session:
            return self.__get_by_id(asset_id, session)

    def get_all(self) -> list[Asset]:
        with Session(engine) as session:
            return session.exec(select(Asset).order_by("id")).all()

    def create(self, asset_new: AssetCreate) -> Asset:
        asset = Asset.model_validate(asset_new)

        with Session(engine) as session:
            try:
                session.add(asset)
                session.commit()
                session.refresh(asset)
            except Exception:
                session.rollback()
                raise

        return asset

    def update(
        self,
        asset_id: int,
        asset_updated: AssetUpdate,
    ) -> Asset | None:
        with Session(engine) as session:
            asset = self.__get_by_id(asset_id, session)

            if asset is None:
                return None

            try:
                update_data = asset_updated.model_dump(
                    exclude_unset=True,
                    mode="python",
                )

                asset.sqlmodel_update(update_data)

                session.add(asset)
                session.commit()
                session.refresh(asset)

                return asset

            except Exception:
                session.rollback()
                raise

    def retire(self, asset_id: int) -> bool:
        with Session(engine) as session:
            asset = self.__get_by_id(asset_id, session)

            if not asset: 
                return False

            try:
                asset.status = AssetStatusEnum.RETIRED
                session.commit()
                session.refresh(asset)
            except:
                session.rollback()
                self.err_default()

        return True