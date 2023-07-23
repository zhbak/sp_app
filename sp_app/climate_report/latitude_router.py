from fastapi import APIRouter, Depends
from database import get_async_session
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from models import Table_8_1, Table_9_1, Table_13_1
import numpy as np

router = APIRouter(
    prefix="/climate_report/latitude",
    tags=["climate_report"]
)

@router.get("/")


async def get_latitude(latitude: str, session: AsyncSession = Depends(get_async_session)):
    
    query = select(Table_8_1)
    result = await session.execute(query)
    query_result_8_1 = result.scalars().all()
    query_result_8_1 = [item.__dict__ for item in query_result_8_1]

    query = select(Table_9_1)
    result = await session.execute(query)
    query_result_9_1 = result.scalars().all()
    query_result_9_1 = [item.__dict__ for item in query_result_9_1]

    query = select(Table_13_1)
    result = await session.execute(query)
    query_result_13 = result.scalars().all()
    query_result_13 = [item.__dict__ for item in query_result_13]

    if "," in latitude:
        latitude = latitude.replace(",", ".")
        latitude = float(latitude)
    else:
        latitude = float(latitude)
    
    def valaue_interpolation(col_down, col_up, latitude, latitudes, data):
      result = {}
      for item in data:
            values = [item[col_down], item[col_up]]
            value_result = np.interp(latitude, latitudes, values)
            if value_result == 0:
                  result.update({item["month"]:""})
            else: result.update({item["month"]:int(value_result)})
      return result


    def radiation_calc(latitude, data):
        if (40 <= latitude < 68):      
                if (40 <= latitude < 44):
                    latitudes =[40, 44]
                    col_down = "N_40"
                    col_up = "N_44"

                elif (44 <= latitude < 48):
                    latitudes =[44, 48]
                    col_down = "N_44"
                    col_up = "N_48"
                
                elif (48 <= latitude < 52):
                    latitudes =[48, 52]
                    col_down = "N_48"
                    col_up = "N_52"

                elif (52 <= latitude < 56):
                    latitudes =[52, 56]
                    col_down = "N_52"
                    col_up = "N_56"

                elif (56 <= latitude < 60):
                    latitudes =[56, 60]
                    col_down = "N_56"
                    col_up = "N_60"

                elif (60 <= latitude < 64):
                    latitudes =[60, 64]
                    col_down = "N_60"
                    col_up = "N_64"

                elif (64 <= latitude < 68):
                    latitudes =[64, 68]
                    col_down = "N_64"
                    col_up = "N_68"

                return valaue_interpolation(col_down, col_up, latitude, latitudes, data)  
        
        else:
            latitudes =[64, 68]
            col_down = "N_64"
            col_up = "N_68"
            result={}
            for item in data:
                slope = (item[col_up] - item[col_down])/(68-64)
                value_result = item[col_up] + slope*(latitude-68)
                if value_result <= 0:
                    result.update({item["month"]:""})
                else: result.update({item["month"]:int(value_result)})
            return result
        
    def valaue_interpolation_table_9_1(col_down, col_up, latitude, latitudes, data):
      result = {}
      for item in data:
            values = [item[col_down], item[col_up]]
            value_result = np.interp(latitude, latitudes, values)
            if value_result == 0:
                  if item["orientation"] not in result:
                        result[item["orientation"]] = {}
                  result[item["orientation"]][item["month"]] = ""
            else:
                  if item["orientation"] not in result:
                        result[item["orientation"]] = {}
                  result[item["orientation"]][item["month"]] = int(value_result)
                  
      return result


    def radiation_calc_table_9_1(latitude, data):
        if (40 <= latitude < 68):      
                if (40 <= latitude < 44):
                    latitudes =[40, 44]
                    col_down = "N_40"
                    col_up = "N_44"

                elif (44 <= latitude < 48):
                    latitudes =[44, 48]
                    col_down = "N_44"
                    col_up = "N_48"
                
                elif (48 <= latitude < 52):
                    latitudes =[48, 52]
                    col_down = "N_48"
                    col_up = "N_52"

                elif (52 <= latitude < 56):
                    latitudes =[52, 56]
                    col_down = "N_52"
                    col_up = "N_56"

                elif (56 <= latitude < 60):
                    latitudes =[56, 60]
                    col_down = "N_56"
                    col_up = "N_60"

                elif (60 <= latitude < 64):
                    latitudes =[60, 64]
                    col_down = "N_60"
                    col_up = "N_64"

                elif (64 <= latitude < 68):
                    latitudes =[64, 68]
                    col_down = "N_64"
                    col_up = "N_68"

                return valaue_interpolation_table_9_1(col_down, col_up, latitude, latitudes, data)  
        
        else:
                latitudes =[64, 68]
                col_down = "N_64"
                col_up = "N_68"
                result={}
                for item in data:
                    slope = (item[col_up]-item[col_down])/(68-64)
                    value_result = item[col_up] + slope*(latitude-68)
                    if value_result <= 0:
                            if item["orientation"] not in result:
                                result[item["orientation"]] = {}
                            result[item["orientation"]][item["month"]] = ""
                    else:
                            if item["orientation"] not in result:
                                result[item["orientation"]] = {}
                            result[item["orientation"]][item["month"]] = int(value_result)
                return result     

    def degree_calc_table_13(latitude, data):
      latitude = float(latitude)
      result ={}
      months = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"]

      if 38 <= latitude < 68:      
            for i in range(38, 68, 2):
                  if (i <= latitude < i+2):
                        latitudes = [i, i+2]

            for index in range(len(data)):
                  if data[index]["latitude"] == latitudes[0]:
                        for month in months:
                              values = [float(data[index][month]), float(data[index+1][month])]
                              value_result = np.interp(latitude, latitudes, values)
                              result[month] = round(value_result, 1)


      elif latitude >= 68:
            latitude_down = data[-2]
            latitude_up = data[-1]
            for month in months:
                  slope = (float(latitude_up[month])-float(latitude_down[month]))/(68-66)
                  value_result = float(latitude_up[month]) + slope*(latitude-68)
                  result[month] = round(value_result, 1)

      elif latitude < 38:
            latitude_down = data[1]
            latitude_up = data[0]
            for month in months:
                  slope = (float(latitude_up[month])-float(latitude_down[month]))/(40-38)
                  value_result = float(latitude_up[month]) + slope*(latitude-38)
                  result[month] = round(value_result, 1)
      
      return result

    itog_table_8_1 = radiation_calc(latitude, query_result_8_1)
    itog_table_9_1 = radiation_calc_table_9_1(latitude, query_result_9_1)
    itog_table_13 = degree_calc_table_13(latitude, query_result_13)
    itog = {
         "table_8_1":itog_table_8_1,
         "table_9_1":itog_table_9_1,
         "table_13":itog_table_13
    }

    if itog != []:  
        return {
                "status" : "succsess",
                "data" : itog,
                "details" : None
                }
