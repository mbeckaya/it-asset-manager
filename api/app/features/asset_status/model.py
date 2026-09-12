from datetime import datetime
from sqlmodel import Field, SQLModel
from app.features.asset.enums import AssetStatusEnum

class AssetStatusCreate(SQLModel):
    asset_id: int
    status: AssetStatusEnum = Field(default=AssetStatusEnum.AVAILABLE)
    created_at: datetime = Field(default_factory=datetime.now)

class AssetStatus(SQLModel, table=True):
    __tablename__ = "asset_statuses"

    id: int | None = Field(default=None, primary_key=True)
    asset_id: int = Field(foreign_key="assets.id", index=True)
    status: AssetStatusEnum = Field(default=AssetStatusEnum.ASSIGNED)
    created_at: datetime = Field(index=True)

# For development
asset_statuses = [
    AssetStatus(
        asset_id=1,
        status=AssetStatusEnum.AVAILABLE,
        created_at=datetime.now(),
    ),
    AssetStatus(
        asset_id=1,
        status=AssetStatusEnum.ASSIGNED,
        created_at=datetime.now(),
    ),
    AssetStatus(
        asset_id=2,
        status=AssetStatusEnum.AVAILABLE,
        created_at=datetime.now(),
    ),
    AssetStatus(
        asset_id=2,
        status=AssetStatusEnum.RESERVED,
        created_at=datetime.now(),
    ),
    AssetStatus(
        asset_id=2,
        status=AssetStatusEnum.ASSIGNED,
        created_at=datetime.now(),
    ),
]