import logging
from app.models.field_definition import FieldDefinition

logging.basicConfig(
    filename="./logs/validation.log",
    level=logging.INFO,
    format="%(asctime)s | %(levelname)s | %(name)s | line=%(lineno)d | %(message)s",
)

logger = logging.getLogger(__name__)

class Validator:
    def __init__(self, schema: tuple[FieldDefinition]):
        self.__schema = schema

    def validate_items(self, items: list) -> list:
        valid_items = []

        for item_index, item in enumerate(items):
            is_valid = True

            for definition in self.__schema:
                key = definition.field

                try:
                    value = item[key]

                    has_invalid_type = not isinstance(value, definition.type)
                    is_string_type = definition.type is str
                    is_empty_required = (
                        definition.required
                        and is_string_type
                        and not value
                    )

                    if has_invalid_type:
                        is_valid = False

                        logger.warning(
                            "event=validation | field=%s | status=failed | "
                            "reason=invalid_type | expected=%s | actual=%s | "
                            "item_index=%s",
                            key,
                            definition.type.__name__,
                            type(value).__name__,
                            item_index,
                        )

                    elif is_empty_required:
                        is_valid = False

                        logger.warning(
                            "event=validation | field=%s | status=failed | "
                            "reason=required_empty | item_index=%s",
                            key,
                            item_index,
                        )

                except KeyError:
                    is_valid = False

                    logger.warning(
                        "event=validation | field=%s | status=failed | "
                        "reason=missing_field | item_index=%s",
                        key,
                        item_index,
                    )

            if is_valid:
                valid_items.append(item)

        return valid_items