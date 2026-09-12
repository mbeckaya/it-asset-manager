from sqlmodel import Field, SQLModel

class AssetAssignmentCreate(SQLModel):
    asset_id: int
    user_id: int
    assigned_at: str
    returned_at: str | None = None
    notes: str | None = None

class AssetAssignment(SQLModel, table=True):
    __tablename__ = "asset_assignments"

    id: int | None = Field(default=None, primary_key=True)
    asset_id: int = Field(foreign_key="assets.id", index=True)
    user_id: int  = Field(foreign_key="users.id", index=True)
    assigned_at: str
    returned_at: str | None = Field(default=None, index=True)
    notes: str | None = None

# For development
asset_assignments = [
    AssetAssignment(
        asset_id=1,
        user_id=1,
        assigned_at="2026-01-15",
    ),
    AssetAssignment(
        asset_id=2,
        user_id=1,
        assigned_at="2025-01-15",
        returned_at="2025-01-31",
    ),
    AssetAssignment(
        asset_id=3,
        user_id=2,
        assigned_at="2025-03-10",
    ),
    AssetAssignment(
        asset_id=4,
        user_id=3,
        assigned_at="2025-04-22",
    ),
    AssetAssignment(
        asset_id=5,
        user_id=4,
        assigned_at="2025-05-05",
        returned_at="2025-08-12",
    ),
    AssetAssignment(
        asset_id=6,
        user_id=2,
        assigned_at="2025-06-18",
    ),
    AssetAssignment(
        asset_id=7,
        user_id=3,
        assigned_at="2025-07-01",
        returned_at="2025-12-20",
    ),
    AssetAssignment(
        asset_id=8,
        user_id=4,
        assigned_at="2025-09-15",
    ),
    AssetAssignment(
        asset_id=9,
        user_id=1,
        assigned_at="2026-02-01",
    ),
    AssetAssignment(
        asset_id=10,
        user_id=2,
        assigned_at="2026-03-12",
    ),
]