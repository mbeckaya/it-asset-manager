from pathlib import Path
import shutil

from app.logging_config import setup_logging
from app.models.schema import schema
from app.csv_reader import CsvReader
from app.parser import Parser
from app.validator import Validator
from app.api_request import ApiRequest

def main():
    setup_logging()

    inbox_path = Path("./data/inbox")
    proceed_path = Path("./data/proceed")
    proceed_path.mkdir(parents=True, exist_ok=True)

    file_paths = sorted(inbox_path.glob("*.csv"))

    headers = [definition.field for definition in schema]

    reader = CsvReader(headers)
    parser = Parser(schema)
    validator = Validator(schema)
    api_request = ApiRequest()

    for file_path in file_paths:
        items = reader.read_file(file_path)
        parsed_items = parser.parse_items(items)
        valid_items = validator.validate_items(parsed_items)
        api_request.create_asset(valid_items)

        shutil.move(str(file_path), proceed_path / file_path.name)

if __name__ == "__main__":
    main()