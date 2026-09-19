from sqlmodel import Session, select

from app.core.database import engine
from app.core.service import BaseService
from app.features.status.model import AssetStatus, AssetStatusCreate

class AssetStatusService(BaseService):
    def get_all(self, asset_id: int) -> list[AssetStatus]:
        with Session(engine) as session:
            return session.exec(
                select(AssetStatus)
                .where(AssetStatus.asset_id == asset_id)
                .order_by(AssetStatus.created_at.desc())
            ).all()

    def create(self, asset_status: AssetStatusCreate) -> AssetStatus:
        asset_status_new = AssetStatus.model_validate(asset_status)
                
        with Session(engine) as session:
            try:
                session.add(asset_status_new)
                session.commit()
                session.refresh(asset_status_new)
            except Exception:
                session.rollback()
                raise

        return asset_status_new