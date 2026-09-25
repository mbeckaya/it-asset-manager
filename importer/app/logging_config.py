import logging
import os

def setup_logging():
    os.makedirs("./logs", exist_ok=True)

    logging.basicConfig(
        filename="./logs/error.log",
        level=logging.INFO,
        format="%(asctime)s | %(levelname)s | %(name)s | line=%(lineno)d | %(message)s",
    )

    logging.getLogger("httpx").setLevel(logging.WARNING)