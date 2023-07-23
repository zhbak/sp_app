from fastapi import APIRouter, Request, Depends
from fastapi.templating import Jinja2Templates

from climate_report.router import get_climate_report

router = APIRouter(
    prefix="/pages",
    tags=["Pages"]
)

templates = Jinja2Templates(directory="sp_app/templates")

@router.get("/base")
def get_base_page(request: Request):
    return templates.TemplateResponse("base.html", {"request": request})

@router.get("/search/{climate_report_location}")
def get_search_page(request: Request, climate_reports=Depends(get_climate_report)):
    return templates.TemplateResponse("search.html", {"request": request, "climate_reports" : climate_reports["data"]})