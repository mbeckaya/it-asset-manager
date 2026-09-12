from enum import Enum

class AssetBrandsEnum(Enum):
    APPLE = "Apple"
    DELL = "Dell"
    SAMSUNG = "Samsung"
    LENOVO = "Lenovo"
    LOGITECH = "Logitech"
    LG = "LG"

class AssetTypeEnum(Enum):
    LAPTOP = "Laptop"
    SMARTPHONE = "Smartphone"
    MONITOR = "Monitor"
    TABLET = "Tablet"
    KEYBOARD = "Keyboard"
    MOUSE = "Mouse"

class AssetResellerEnum(Enum):
    APPLE = "Apple Store"
    LENOVO = "Lenovo Store"
    MEDIAMARKT = "MediaMarkt"

class AssetStatusEnum(Enum):
    AVAILABLE = "available"
    RESERVED = "reserved"
    ASSIGNED = "assigned"
    DEFECTIVE = "defective"
    UNDER_REPAIR = "under_repair"
    UNDER_MAINTENANCE = "under_maintenance"
    QUARANTINED = "quarantined"
    STOLEN = "stolen"
    RETIRED = "retired"