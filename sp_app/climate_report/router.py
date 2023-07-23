import time

from database import get_async_session
from fastapi import APIRouter, Depends
from fastapi_cache.decorator import cache
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from models import Table_3_1, Table_4_1, Table_5_1, Table_6_1, Table_7_1, Table_10_2, Table_11_1_1, Table_11_1_2, User

router = APIRouter(
    prefix="/climate_report",
    tags=["climate_report"]
)

@router.get("/")
#@cache(expire=30)

async def get_climate_report(climate_report_location : str, session: AsyncSession = Depends(get_async_session)):

        itog = {}
#        table_data = []
        
        tables = [Table_3_1, Table_4_1, Table_5_1, Table_6_1, Table_7_1, Table_10_2, Table_11_1_1, Table_11_1_2]
        if "_" in climate_report_location:
            climate_report_location = climate_report_location.split('_')
            for location in climate_report_location:
                tables_data_itog = {}
                for table in tables:
                    query = (
                            select(table)
                            .where(table.location == location)
                            )   
                    result = await session.execute(query)
                    table_data = {"{}".format(table.__tablename__): result.scalars().first()}
                    tables_data_itog.update(table_data)
                itog.update({"{}".format(location) : tables_data_itog})
        else:
            for table in tables:
                query = (
                    select(table)
                    .where(table.location == climate_report_location)
                )
                result = await session.execute(query)
                table_data = {"{}".format(table.__tablename__): result.scalars().first()}
                itog.update(table_data)
            itog = {"{}".format(climate_report_location): itog}


        if itog != []:  
            return {
                    "status" : "succsess",
                    "data" : itog,
                    "details" : None
                    }
        elif itog == []:
            return {
                "status": "error",
                "data": None,
                "details": "Метостанции с таким названием не существует"
            }
