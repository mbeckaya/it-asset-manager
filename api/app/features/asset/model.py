from sqlmodel import Field, SQLModel

from app.features.asset.enums import AssetBrandsEnum, AssetTypeEnum, AssetResellerEnum
from app.features.asset.enums import AssetStatusEnum

class AssetCreate(SQLModel):
    brand: AssetBrandsEnum = Field(default=AssetBrandsEnum.APPLE)
    type: AssetTypeEnum = Field(default=AssetTypeEnum.LAPTOP)
    reseller: AssetResellerEnum = Field(default=AssetResellerEnum.MEDIAMARKT)
    purchased_at: str | None = None
    model: str
    serial: str
    warranty_months: int | None = None
    price: float
    status: AssetStatusEnum = Field(default=AssetStatusEnum.AVAILABLE)

class AssetUpdate(SQLModel):
    brand: AssetBrandsEnum | None = None
    type: AssetTypeEnum | None = None
    reseller: AssetResellerEnum | None = None
    purchased_at: str | None = None
    model: str | None = None
    serial: str | None = None
    warranty_months: int | None = None
    price: float | None = None
    status: AssetStatusEnum | None = None

class Asset(SQLModel, table=True):
    __tablename__ = "assets"

    id: int | None = Field(default=None, primary_key=True)
    brand: AssetBrandsEnum = Field(default=AssetBrandsEnum.APPLE)
    type: AssetTypeEnum = Field(default=AssetTypeEnum.LAPTOP)
    reseller: AssetResellerEnum = Field(default=AssetResellerEnum.MEDIAMARKT)
    purchased_at: str | None = Field(default=None, index=True)
    model: str = Field(index=True)
    serial: str
    warranty_months: int | None = None
    price: float
    status: AssetStatusEnum = Field(default=AssetStatusEnum.AVAILABLE)

# For development
assets = [
    Asset(
        brand=AssetBrandsEnum.APPLE,
        type=AssetTypeEnum.LAPTOP,
        reseller=AssetResellerEnum.APPLE,
        purchased_at="2024-01-15",
        model="MacBook Pro 14",
        serial="C02ABC123XYZ",
        warranty_months=24,
        price=2499.99,
        status=AssetStatusEnum.ASSIGNED,
    ),
    Asset(
        brand=AssetBrandsEnum.DELL,
        type=AssetTypeEnum.LAPTOP,
        reseller=AssetResellerEnum.MEDIAMARKT,
        purchased_at="2023-09-10",
        model="Latitude 7440",
        serial="DL123456789",
        warranty_months=36,
        price=1599.00,
        status=AssetStatusEnum.ASSIGNED,
    ),
    Asset(
        brand=AssetBrandsEnum.LENOVO,
        type=AssetTypeEnum.LAPTOP,
        reseller=AssetResellerEnum.LENOVO,
        purchased_at="2024-03-22",
        model="ThinkPad X1 Carbon Gen 11",
        serial="LNV987654321",
        warranty_months=36,
        price=1899.00,
        status=AssetStatusEnum.AVAILABLE,
    ),
    Asset(
        brand=AssetBrandsEnum.APPLE,
        type=AssetTypeEnum.SMARTPHONE,
        reseller=AssetResellerEnum.APPLE,
        purchased_at="2024-06-05",
        model="iPhone 15 Pro",
        serial="APLIP15P001",
        warranty_months=24,
        price=1199.00,
        status=AssetStatusEnum.AVAILABLE,
    ),
    Asset(
        brand=AssetBrandsEnum.SAMSUNG,
        type=AssetTypeEnum.SMARTPHONE,
        reseller=AssetResellerEnum.MEDIAMARKT,
        purchased_at="2023-11-18",
        model="Galaxy S23",
        serial="SMS23004567",
        warranty_months=24,
        price=899.99,
        status=AssetStatusEnum.AVAILABLE,
    ),
    Asset(
        brand=AssetBrandsEnum.DELL,
        type=AssetTypeEnum.MONITOR,
        reseller=AssetResellerEnum.MEDIAMARKT,
        purchased_at="2024-02-12",
        model="UltraSharp U2723QE",
        serial="DLU2723QE001",
        warranty_months=36,
        price=649.00,
        status=AssetStatusEnum.AVAILABLE,
    ),
    Asset(
        brand=AssetBrandsEnum.LG,
        type=AssetTypeEnum.MONITOR,
        reseller=AssetResellerEnum.MEDIAMARKT,
        purchased_at="2023-08-30",
        model="UltraFine 27UN880",
        serial="LG27UN880123",
        warranty_months=24,
        price=549.99,
        status=AssetStatusEnum.AVAILABLE,
    ),
    Asset(
        brand=AssetBrandsEnum.APPLE,
        type=AssetTypeEnum.TABLET,
        reseller=AssetResellerEnum.APPLE,
        purchased_at="2023-05-14",
        model="iPad Pro 12.9",
        serial="APLIPAD12942",
        warranty_months=24,
        price=1449.00,
        status=AssetStatusEnum.AVAILABLE,
    ),
    Asset(
        brand=AssetBrandsEnum.LOGITECH,
        type=AssetTypeEnum.KEYBOARD,
        reseller=AssetResellerEnum.MEDIAMARKT,
        purchased_at="2024-04-09",
        model="MX Keys S",
        serial="LOGMXKS00987",
        warranty_months=24,
        price=119.99,
        status=AssetStatusEnum.AVAILABLE,
    ),
    Asset(
        brand=AssetBrandsEnum.LOGITECH,
        type=AssetTypeEnum.MOUSE,
        reseller=AssetResellerEnum.MEDIAMARKT,
        purchased_at="2024-04-09",
        model="MX Master 3S",
        serial="LOGMX3S00542",
        warranty_months=24,
        price=99.99,
        status=AssetStatusEnum.AVAILABLE,
    ),
]