import pytest

from app.csv_reader import CsvReader

def test_read_file(tmp_path):
    reader = CsvReader(["name", "age"])

    csv_file = tmp_path / "test.csv"
    csv_file.write_text(
        "name,age\n"
        "Alice,30\n"
        "Bob,25\n",
        encoding="utf-8"
    )

    result = reader.read_file(str(csv_file))

    assert result == [
        ["Alice", "30"],
        ["Bob", "25"],
    ]