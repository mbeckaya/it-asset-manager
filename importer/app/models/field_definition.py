from dataclasses import dataclass

@dataclass
class FieldDefinition:
    field: str
    type: type
    required: bool
