from fastapi import APIRouter, Depends
from auth.auth import current_user
from tasks.tasks import send_email_report_dashboard

router = APIRouter(prefix='/report')

@router.get("/dashboard")
def get_dashboard_report(user=Depends(current_user)):
    send_email_report_dashboard.delay(user.email)
    return {
        "status" : 200,
        "data" : None,
        "details" : 'Письмо успешно отправлено'
    }