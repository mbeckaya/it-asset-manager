from fastapi import FastAPI, Request, status
from fastapi.responses import JSONResponse
from starlette.exceptions import HTTPException as StarletteHTTPException

from app.core.database import lifespan
from app.features.asset.router import router as asset_router
from app.features.assignment.router import router as asset_assignment_router
from app.features.status.router import router as assset_status_router

def error_response(
        status_code: int, 
        message: str, 
        path: str
) -> JSONResponse:
    return JSONResponse(
        status_code=status_code,
        content={
            "success": False,
            "status_code": status_code,
            "message": message,
            "path": path,
        },
    )

app = FastAPI(lifespan=lifespan)

@app.exception_handler(StarletteHTTPException)
async def http_exception_handler(
    request: Request, 
    exc: StarletteHTTPException
):
    return error_response(
        status_code=exc.status_code,
        message=exc.detail,
        path=request.url.path,
    )

@app.exception_handler(Exception)
async def global_exception_handler(request: Request):
    return error_response(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        message="An internal server error occurred.",
        path=request.url.path,
    )

app.include_router(asset_router)
app.include_router(asset_assignment_router)
app.include_router(assset_status_router)