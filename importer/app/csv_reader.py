import csv

class CsvReader:
    def read_file(self, file_path: str) -> list:
        with open(file_path, newline="", encoding="utf-8") as file:
            reader = csv.reader(file)

            next(reader)

            rows = [row for row in reader]

        return rows