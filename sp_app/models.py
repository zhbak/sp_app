from sqlalchemy import Column, String, Integer, ForeignKey, REAL, Boolean, DECIMAL
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class User(Base):
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True, nullable=False)
    email = Column(String, nullable=False)
    hashed_password = Column(String, nullable=False)
    is_active = Column(Boolean, default=True, nullable=False)
    is_superuser = Column(Boolean, default=True, nullable=False)
    is_verified = Column(Boolean, default=True, nullable=False)

class Table_3_1(Base):
    __tablename__ = "table_3_1"
    id = Column(Integer, primary_key=True)
    station_id = Column("station_id", Integer, nullable=False)
    subject = Column("subject", String)
    location = Column("location", String, nullable=False)
    cold_temperature_1day_098 = Column("cold_temperature_1day_0.98", Integer)
    cold_temperature_1day_092 = Column("cold_temperature_1day_0.92", Integer)
    cold_temperature_5day_098 = Column("cold_temperature_5day_0.98", Integer)
    cold_temperature_5day_092 = Column("cold_temperature_5day_0.92", Integer)
    temperature_094 = Column("temperature_0.94", Integer)
    absolutely_minimal_temperature = Column("absolutely_minimal_temperature", Integer)
    mean_1day_amplitude_the_coldest_month = Column("mean_1day_amplitude_the_coldest_month", DECIMAL)
    duration_of_period_with_mean_1day_temperature_1 = Column("duration_of_period_with_mean_1day_temperature_1", Integer)
    mean_temperature_1 = Column("mean_temperature_1", DECIMAL)
    duration_of_period_with_mean_1day_temperature_2 = Column("duration_of_period_with_mean_1day_temperature_2", Integer)
    mean_temperature_2 = Column("mean_temperature_2", DECIMAL)
    duration_of_period_with_mean_1day_temperature_3 = Column("duration_of_period_with_mean_1day_temperature_3", Integer)
    mean_temperature_3 = Column("mean_temperature_3", DECIMAL)
    mean_monthly_relative_moisture_the_coldest_month = Column("mean_monthly_relative_moisture_the_coldest_month", Integer)
    mean_monthly_relative_moisture_in15oclock_the_coldest_month = Column("mean_monthly_relative_moisture_in15oclock_the_coldest_month", Integer)
    precipitation_november_march_mm = Column("precipitation_november-march_mm", Integer)
    dominant_wind_direction_december_february = Column("dominant_wind_direction_december-february", String)
    maximal_of_mean_speed_wind_by_point_january = Column("maximal_of_mean_speed_wind_by_point_january", DECIMAL)
    mean_wind_speed_in_period_of_mean_1day_temperature = Column("mean_wind_speed_in_period_of_mean_1day_temperature", DECIMAL)

class Table_4_1(Base):
    __tablename__ = "table_4_1"
    id = Column(Integer, primary_key=True)
    station_id = Column("station_id", Integer, nullable=False)
    subject = Column("subject", String)
    location = Column("location", String, nullable=False)
    pressure = Column("pressure", DECIMAL)
    temperature_095 = Column("temperature_095", Integer)
    temperature_098 = Column("temperature_098", Integer)
    mean_maximal_month_temperature = Column("mean_maximal_month_temperature", DECIMAL)
    absolutely_maximal_temperature = Column("absolutely_maximal_temperature", Integer)
    mean_daily_amplitude_temperature_the_warmest_month = Column("mean_daily_amplitude_temperature_the_warmest_month", DECIMAL)
    mean_monthly_relative_humidity_the_warmest_month = Column("mean_monthly_relative_humidity_the_warmest_month", Integer)
    mean_monthly_relative_humidity_the_warmest_month_15h = Column("mean_monthly_relative_humidity_the_warmest_month_15h", Integer)
    precipitation_amount_april_october = Column("precipitation_amount_april_october", Integer)
    max_daily_precipitation_amount = Column("max_daily_precipitation_amount", Integer)
    dominant_wind_direction_june_august = Column("dominant_wind_direction_june_august", String)
    minimal_of_mean_speed_wind_by_point_july = Column("minimal_of_mean_speed_wind_by_point_july", DECIMAL)

class Table_5_1(Base):
    __tablename__ = "table_5_1"
    location = Column("location", String, primary_key=True)
    subject = Column("subject", String)
    I = Column("I", DECIMAL)
    II = Column("II", DECIMAL)
    III = Column("III", DECIMAL)
    IV = Column("IV", DECIMAL)
    V = Column("V", DECIMAL)
    VI = Column("VI", DECIMAL)
    VII = Column("VII", DECIMAL)
    VIII = Column("VIII", DECIMAL)
    IX = Column("IX", DECIMAL)
    X = Column("X", DECIMAL)
    XI = Column("XI", DECIMAL)
    XII = Column("XII", DECIMAL)
    year = Column("year", DECIMAL)

class Table_6_1(Base):
    __tablename__ = "table_6_1"
    location = Column("location", String, primary_key=True)
    subject = Column("subject", String)
    maximal_temperature_amplitude = Column("maximal_temperature_amplitude", Integer)

class Table_7_1(Base):
    __tablename__ = "table_7_1"
    location = Column("location", String, primary_key=True)
    subject = Column("subject", String)
    I = Column("I", DECIMAL)
    II = Column("II", DECIMAL)
    III = Column("III", DECIMAL)
    IV = Column("IV", DECIMAL)
    V = Column("V", DECIMAL)
    VI = Column("VI", DECIMAL)
    VII = Column("VII", DECIMAL)
    VIII = Column("VIII", DECIMAL)
    IX = Column("IX", DECIMAL)
    X = Column("X", DECIMAL)
    XI = Column("XI", DECIMAL)
    XII = Column("XII", DECIMAL)
    year = Column("year", DECIMAL)

class Table_8_1(Base):
    __tablename__ = "table_8_1"
    month = Column("month", String, primary_key=True)
    N_40 = Column("N_40", Integer)
    N_44 = Column("N_44", Integer)
    N_48 = Column("N_48", Integer)
    N_52 = Column("N_52", Integer)
    N_56 = Column("N_56", Integer)
    N_60 = Column("N_60", Integer)
    N_64 = Column("N_64", Integer)
    N_68 = Column("N_68", Integer)

class Table_9_1(Base):
    __tablename__ = "table_9_1"
    id = Column("id", Integer, primary_key=True)
    month = Column("month", String)
    orientation = Column("orientation", String)
    N_40 = Column("N_40", Integer)
    N_44 = Column("N_44", Integer)
    N_48 = Column("N_48", Integer)
    N_52 = Column("N_52", Integer)
    N_56 = Column("N_56", Integer)
    N_60 = Column("N_60", Integer)
    N_64 = Column("N_64", Integer)
    N_68 = Column("N_68", Integer)

class Table_10_2(Base):
    __tablename__ = "table_10_2"
    location = Column("location", String, primary_key=True)
    entalpia_0_98 = Column("entalpia_0_98", DECIMAL)
    moisture_content = Column("moisture_content", DECIMAL)

class Table_11_1_1(Base):
    __tablename__ = "table_11_1_1"
    location = Column("location", String, primary_key=True)
    subject = Column("subject", String)
    I = Column("I", DECIMAL)
    II = Column("II", DECIMAL)
    III = Column("III", DECIMAL)
    IV = Column("IV", DECIMAL)
    V = Column("V", DECIMAL)
    VI = Column("VI", DECIMAL)
    VII = Column("VII", DECIMAL)
    VIII = Column("VIII", DECIMAL)
    IX = Column("IX", DECIMAL)
    X = Column("X", DECIMAL)
    XI = Column("XI", DECIMAL)
    XII = Column("XII", DECIMAL)

class Table_11_1_2(Base):
    __tablename__ = "table_11_1_2"
    location = Column("location", String, primary_key=True)
    subject = Column("subject", String)
    I = Column("I", DECIMAL)
    II = Column("II", DECIMAL)
    III = Column("III", DECIMAL)
    IV = Column("IV", DECIMAL)
    V = Column("V", DECIMAL)
    VI = Column("VI", DECIMAL)
    VII = Column("VII", DECIMAL)
    VIII = Column("VIII", DECIMAL)
    IX = Column("IX", DECIMAL)
    X = Column("X", DECIMAL)
    XI = Column("XI", DECIMAL)
    XII = Column("XII", DECIMAL)

class Table_13_1(Base):
    __tablename__ = "table_13_1"
    latitude = Column("latitude", Integer, primary_key=True)
    I = Column("I", DECIMAL)
    II = Column("II", DECIMAL)
    III = Column("III", DECIMAL)
    IV = Column("IV", DECIMAL)
    V = Column("V", DECIMAL)
    VI = Column("VI", DECIMAL)
    VII = Column("VII", DECIMAL)
    VIII = Column("VIII", DECIMAL)
    IX = Column("IX", DECIMAL)
    X = Column("X", DECIMAL)
    XI = Column("XI", DECIMAL)
    XII = Column("XII", DECIMAL)

#def __repr__(self):
#    return 'id: {}, root cause: {}'.format(self.id, self.root_cause.name)