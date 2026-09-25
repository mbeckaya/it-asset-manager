import logging
import httpx

logger = logging.getLogger(__name__)

class ApiRequest:
    BASE_URL = "http://127.0.0.1:8000/api/v1"

    def create_asset(self, items: list) -> None:
        for item_index, item in enumerate(items):
            with httpx.Client(base_url=self.BASE_URL) as client:
                response = client.post("/assets", json=item)

            if response.status_code != 201:
                logger.error(
                    "event=api_request | endpoint=/assets | method=POST | "
                    "status=failed | status_code=%s | item_index=%s | response=%s",
                    response.status_code,
                    item_index,
                    response.text,
                )