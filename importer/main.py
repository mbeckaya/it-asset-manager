from app.schema import schema
from app.csv_reader import CsvReader
from app.parser import Parser

reader = CsvReader()
parser = Parser(schema)

file_paths = (
    "./data/inbox/2026-08-assets.csv",
    "./data/inbox/2026-09-assets.csv",
)

for file_path in file_paths:
    items = reader.read_file(file_path)
    parsed_items = parser.parse_items(items)
    print(parsed_items)