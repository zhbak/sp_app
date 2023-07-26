from auth.auth import auth_backend, current_user, fastapi_users
from auth.schemas import UserRead, UserCreate
from database import User
from fastapi import FastAPI, Depends
import models

from climate_report.router import router as climate_report_router
from fastapi.middleware.cors import CORSMiddleware
from tasks.router import router as send_report
from pages.router import router as router_pages
from climate_report.latitude_router import router as latitude_router

from fastapi_cache import FastAPICache
from fastapi_cache.backends.redis import RedisBackend

from redis import asyncio as aioredis

app = FastAPI(
    title="SP133_app"
)

app.include_router(
    fastapi_users.get_auth_router(auth_backend),
    prefix="/auth/jwt",
    tags=["auth"],
)

app.include_router(
    fastapi_users.get_register_router(UserRead, UserCreate),
    prefix="/auth",
    tags=["auth"],
)

app.include_router(climate_report_router)
app.include_router(latitude_router)
app.include_router(send_report)
app.include_router(router_pages)

origins = ["http://185.180.230.68:3099",
            "http://172.26.0.4:3000",]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Access-Control-Allow-Origin"],
)

@app.get("/protected-route")
def protected_route(user: User = Depends(current_user)):
    return f"Hello, {user.email}"


@app.get("/unprotected-route")
def unprotected_route():
    return f"Hello, anonym"

#endpoint для reddis
@app.on_event("startup")
async def startup_event():
    redis = aioredis.from_url("redis://localhost", encoding="utf8", decode_responses=True)
    FastAPICache.init(RedisBackend(redis), prefix="fastapi-cache")
