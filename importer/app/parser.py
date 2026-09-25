from app.models.field_definition import FieldDefinition

class Parser:
    def __init__(self, schema: tuple[FieldDefinition]):
        self.__schema = schema
        
    def parse_items(self, items: list) -> list:
        parsed_items = []

        for item in items:
            parsed_item = {}
            
            for index, definition in enumerate(self.__schema):
                try:
                    if definition.type is int:
                        try:
                            parsed_item[definition.field] = int(item[index])
                        except ValueError:
                            parsed_item[definition.field] = 0
                    elif definition.type is float:
                        try:
                            parsed_item[definition.field] = float(item[index])
                        except ValueError:
                            parsed_item[definition.field] = 0.0
                    else:
                        parsed_item[definition.field] = item[index]
                except IndexError:
                    parsed_item[definition.field] = ""

            parsed_items.append(parsed_item)

        return parsed_items
