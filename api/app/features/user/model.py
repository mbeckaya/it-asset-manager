from sqlmodel import Field, SQLModel

class User(SQLModel, table=True):
    __tablename__ = "users"

    id: int | None = Field(default=None, primary_key=True)
    email: str
    password: str
    first_name: str
    last_name: str

# For development
users = [
     User(
        email="max.mustermann@example.com",
        password="password123",
        first_name="Max",
        last_name="Mustermann",
    ),
    User(
        email="anna.schmidt@example.com",
        password="password123",
        first_name="Anna",
        last_name="Schmidt",
    ),
    User(
        email="lukas.mueller@example.com",
        password="password123",
        first_name="Lukas",
        last_name="Müller",
    ),
    User(
        email="sophie.weber@example.com",
        password="password123",
        first_name="Sophie",
        last_name="Weber",
    ),
    User(
        email="jonas.fischer@example.com",
        password="password123",
        first_name="Jonas",
        last_name="Fischer",
    ),
    User(
        email="lea.wagner@example.com",
        password="password123",
        first_name="Lea",
        last_name="Wagner",
    ),
]