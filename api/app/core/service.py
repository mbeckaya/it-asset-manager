from sqlmodel import SQLModel
from app.core.database import engine

class BaseService:
    def __init__(self, model: type[SQLModel]):
        self.__model = model