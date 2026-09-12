from fastapi import HTTPException, status

class BaseController:
    def __init__(self, resource_name: str):
        self.__resource_name = resource_name

    def err_not_found(self, id: int):
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"{self.__resource_name} ID: {id} not found."
        )

    def err_res_conflict(self):
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail=f"Resource ({self.__resource_name}) conflicts with existing data"
        )

    def err_default(self):
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Internal server error"
        )