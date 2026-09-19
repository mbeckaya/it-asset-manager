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