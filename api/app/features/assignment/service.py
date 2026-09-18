from sqlmodel import Session, select

from app.core.database import engine
from app.core.service import BaseService
from app.features.assignment.model import AssetAssignment, AssetAssignmentCreate

class AssetAssignmentService(BaseService):
    def get_all(self) -> list[AssetAssignment]:
        with Session(engine) as session:
            return session.exec(select(AssetAssignment)).all()

    def get_by_id(self, asset_assignment_id: int) -> AssetAssignment | None:
        with Session(engine) as session:
            return session.get(AssetAssignment, asset_assignment_id)

    def create(
            self, 
            asset_assignment_new: AssetAssignmentCreate
    ) -> AssetAssignment:
        asset_assignment = AssetAssignment.model_validate(asset_assignment_new)
        
        with Session(engine) as session:
            try:
                session.add(asset_assignment)
                session.commit()
                session.refresh(asset_assignment)
            except Exception:
                session.rollback()
                raise

        return asset_assignment

    def update(
            self, 
            asset_assignment_id: int, 
            asset_assignment_updated: AssetAssignment
    ) -> AssetAssignment | None:
        with Session(engine) as session:
            asset_assignment = session.get(
                AssetAssignment, 
                asset_assignment_id
            )

            if not asset_assignment: 
                return None

            try:
                asset_assignment.sqlmodel_update(
                    asset_assignment_updated.model_dump(
                        exclude={"id"}
                    )
                )
                session.commit()
                session.refresh(asset_assignment)
            except Exception:
                session.rollback()
                raise
            
        return asset_assignment