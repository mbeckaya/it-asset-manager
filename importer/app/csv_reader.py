import csv

class CsvReader:
    def __init__(self, headers: list[str]):
        self.headers = headers

    def read_file(self, file_path: str) -> list:
        with open(file_path, newline="", encoding="utf-8") as file:
            reader = csv.reader(file)

            rows = list(reader)

            if rows and rows[0] == self.headers:
                rows = rows[1:]

        return rows