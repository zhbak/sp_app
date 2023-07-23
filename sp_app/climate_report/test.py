"""first =     {
      "subject": "Республика Адыгея (Адыгея)",
      "cold_temperature_1day_098": -22,
      "cold_temperature_1day_092": -19,
      "mean_temperature_2": 2.5,
      "location": "Майкоп"
	}
second = 	{
      "subject": "Республика Алтай",
      "cold_temperature_1day_098": -43,
      "cold_temperature_1day_092": -40,
      "mean_temperature_2": -9,
      "location": "Катанда"
	 }

third = {
      "table" : {
        "Майкоп": {
            "subject": "Республика Адыгея (Адыгея)",
            "cold_temperature_1day_098": -22,
            "cold_temperature_1day_092": -19,
            "mean_temperature_2": 2.5,
            "location": "Майкоп",
            "cold_temperature_5day_098": -18,
            "duration_of_period_with_mean_1day_temperature_3": 167,
            "cold_temperature_5day_092": -16,
            "absolutely_minimal_temperature": -34,
            "mean_temperature_3": 3.200000047683716,
            "temperature_094": -6,
            "mean_1day_amplitude_the_coldest_month": 8.399999618530273,
            "mean_monthly_relative_moisture_the_coldest_month": 77,
            "duration_of_period_with_mean_1day_temperature_1": 34,
            "mean_monthly_relative_moisture_in15oclock_the_coldest_month": 68,
            "precipitation_november_march_mm": 293,
            "mean_temperature_1": -0.20000000298023224,
            "dominant_wind_direction_december_february": "Ю",
            "maximal_of_mean_speed_wind_by_point_january": 3.5999999046325684,
            "id": 1,
            "duration_of_period_with_mean_1day_temperature_2": 147,
            "mean_wind_speed_in_period_of_mean_1day_temperature": 3.299999952316284,
            "station_id": 1
      }
    }
}
  

for key in third["table"].values():
    key["Метоположение"] = key.pop("location")
    key["Субъект"] = key.pop("subject") 
    key["Средняя температура"] = key.pop("mean_temperature_1") 
    key["Абсолютная минимальная температура"] = key.pop(" absolutely_minimal_temperature")  
    key["Температура обеспеченностью 0.94"] = key.pop("temperature_094") 

    
print(third)

"""
"""
string = "55,44"

if "," in string:
    string = string.replace(",", ".")
    float_number = float(string)

else:
    float_number = float(string)
print(float_number)

"""

"""
null=0

data = [{
      "N_44": 238,
      "N_40": 280,
      "N_48": 196,
      "N_56": 112,
      "N_64": 29,
      "month": "Январь",
      "N_52": 154,
      "N_60": 70,
      "N_68": null,
      "orientation":"C"
    },
    {
      "N_44": 354,
      "N_40": 401,
      "N_48": 308,
      "N_56": 215,
      "N_64": 122,
      "month": "Январь",
      "N_52": 261,
      "N_60": 169,
      "N_68": 76,
      "orientation":"Ю"
    },
    {
      "N_44": 595,
      "N_40": 645,
      "N_48": 545,
      "N_56": 445,
      "N_64": 346,
      "month": "Январь",
      "N_52": 495,
      "N_60": 396,
      "N_68": 296,
      "orientation":"З"
    },
    {
      "N_44": 743,
      "N_40": 770,
      "N_48": 712,
      "N_56": 648,
      "N_64": 585,
      "month": "Январь",
      "N_52": 680,
      "N_60": 617,
      "N_68": 554,
      "orientation":"В"
    },
    {
      "N_44": 238,
      "N_40": 280,
      "N_48": 196,
      "N_56": 112,
      "N_64": 29,
      "month": "Февраль",
      "N_52": 154,
      "N_60": 70,
      "N_68": null,
      "orientation":"C"
    },
    {
      "N_44": 354,
      "N_40": 401,
      "N_48": 308,
      "N_56": 215,
      "N_64": 122,
      "month": "Февраль",
      "N_52": 261,
      "N_60": 169,
      "N_68": 76,
      "orientation":"Ю"
    },
    {
      "N_44": 595,
      "N_40": 645,
      "N_48": 545,
      "N_56": 445,
      "N_64": 346,
      "month": "Февраль",
      "N_52": 495,
      "N_60": 396,
      "N_68": 296,
      "orientation":"З"
    },
    {
      "N_44": 743,
      "N_40": 775,
      "N_48": 712,
      "N_56": 648,
      "N_64": 585,
      "month": "Февраль",
      "N_52": 680,
      "N_60": 617,
      "N_68": 1,
      "orientation":"В"
    }]

latitude = 75

import numpy as np

def valaue_interpolation(col_down, col_up, latitude, latitudes, data):
      result = {}
      for item in data:
            values = [item[col_down], item[col_up]]
            value_result = np.interp(latitude, latitudes, values)
            if value_result <= 0:
                  if item["month"] not in result:
                        result[item["month"]] = {}
                  result[item["month"]][item["orientation"]] = ""
            else:
                  if item["month"] not in result:
                        result[item["month"]] = {}
                  result[item["month"]][item["orientation"]] = int(value_result)
                  
      return result


def radiation_calc(latitude):
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
                  slope = (item[col_up]-item[col_down])/(68-64)
                  value_result = item[col_up] + slope*(latitude-68)
                  if value_result <= 0:
                        if item["month"] not in result:
                              result[item["month"]] = {}
                        result[item["month"]][item["orientation"]] = ""
                  else:
                        if item["month"] not in result:
                              result[item["month"]] = {}
                        result[item["month"]][item["orientation"]] = int(value_result)
            return result     

#radiation_calc(latitude)
value = radiation_calc(latitude)
print(value)

"""

data = [{
            "latitude" : 38,
            "I" : 30.8,
            "II" : 39.2,
            "III" : 49.8
      },
      {
            "latitude" : 40,
            "I" : 28.8,
            "II" : 37.2,
            "III" : 47.8 
      }
      ]     

latitude = 39
import numpy as np

def degree_calc_table_13(latitude, data):

      result ={}
      months = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"]

      if 38 <= latitude < 68:      
            for i in range(38, 68, 2):
                  if (i <= latitude < i+2):
                        latitudes = [i, i+2]

            for index in range(len(data)):
                  if data[index]["latitude"] == latitudes[0]:
                        for month in months:
                              values = [data[index][month], data[index+1][month]]
                              value_result = np.interp(latitude, latitudes, values)
                              result[month] = round(value_result, 1)


      elif latitude >= 68:
            latitude_down = data[-2]
            latitude_up = data[-1]
            for month in months:
                  slope = (latitude_up[month]-latitude_down[month])/(68-66)
                  value_result = latitude_up[month] + slope*(latitude-68)
                  result[month] = round(value_result, 1)

      elif latitude < 38:
            latitude_down = data[1]
            latitude_up = data[0]
            for month in months:
                  slope = (latitude_up[month]-latitude_down[month])/(40-38)
                  value_result = latitude_up[month] + slope*(latitude-38)
                  result[month] = round(value_result, 1)
      
      return result
          
    




#slope = (item[col_up]-item[col_down])/(68-64)
#value_result = item[col_up] + slope*(latitude-68)


print(degree_calc_table_13(latitude, data))