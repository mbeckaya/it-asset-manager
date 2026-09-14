import os
from dotenv import load_dotenv
from contextlib import asynccontextmanager
from fastapi import FastAPI
from sqlmodel import SQLModel, Session, create_engine, select

from app.features.user.model import User, users
from app.features.asset.model import Asset, assets
from app.features.assignment.model import AssetAssignment, asset_assignments

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

engine = create_engine(DATABASE_URL)

def seed_database() -> None:
    with Session(engine) as session:
        seed_data = [
            (User, users),
            (Asset, assets),
            (AssetAssignment, asset_assignments),
        ]

        for model, data in seed_data:
            existing = session.exec(select(model)).first()

            if existing is None:
                session.add_all(data)

        session.commit()


@asynccontextmanager
async def lifespan(app: FastAPI):
    SQLModel.metadata.create_all(engine)
    seed_database()

    yield