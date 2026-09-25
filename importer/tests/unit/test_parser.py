import pytest

from app.models.field_definition import FieldDefinition

from app.parser import Parser

def test_parse_items_converts_values_to_types():
    schema = (
        FieldDefinition(
            field="field_1",
            type=int,
            required=True,
        ),
        FieldDefinition(
            field="field_2",
            type=float,
            required=True,
        ),
        FieldDefinition(
            field="field_3",
            type=str,
            required=True,
        ),
    )

    items = [
        ["20", "14.99", "Test_1"],
        ["99", "","Test_2"],
        ["", "99.49", "Test_3"],
    ]

    parser = Parser(schema)

    parsed_items = parser.parse_items(items)

    assert parsed_items == [
        {
            "field_1": 20,
            "field_2": 14.99,
            "field_3": "Test_1",
        },
        {
            "field_1": 99,
            "field_2": 0.0,
            "field_3": "Test_2",
        },
        {
            "field_1": 0,
            "field_2": 99.49,
            "field_3": "Test_3",
        },
    ]


