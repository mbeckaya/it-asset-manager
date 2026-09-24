class Parser:
    def __init__(self, schema: list):
        self.__schema = schema
        
    def parse_items(self, items: list) -> list:
        parsed_items = []

        for item in items:
            parsed_item = {}
            
            for index, rule in enumerate(self.__schema):
                try:
                    if rule["type"] is int:
                        try:
                            parsed_item[rule["field"]] = int(item[index])
                        except ValueError:
                            parsed_item[rule["field"]] = 0
                    elif rule["type"] is float:
                        try:
                            parsed_item[rule["field"]] = float(item[index])
                        except ValueError:
                            parsed_item[rule["field"]] = 0.0
                    else:
                        parsed_item[rule["field"]] = item[index]
                except IndexError:
                    parsed_item[rule["field"]] = ""

            parsed_items.append(parsed_item)

        return parsed_items
