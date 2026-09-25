import pytest

from app.models.field_definition import FieldDefinition
from app.validator import Validator

def test_validate_items_returns_valid_items():
    schema = (
        FieldDefinition(
            field="field_1",
            type=int,
            required=True,
        ),
        FieldDefinition(
            field="field_2",
            type=str,
            required=True,
        ),
    )

    items = [
        {
            "field_1": 20,
            "field_2": "Test_1",
        },
        {
            "field_1": "99",
            "field_2": "Test_2",
        },
    ]

    validator = Validator(schema)

    valid_items = validator.validate_items(items)

    assert valid_items == [
        {
            "field_1": 20,
            "field_2": "Test_1",
        },
    ]
