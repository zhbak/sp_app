import smtplib
from email.message import EmailMessage

from celery import Celery

from config import SMTP_PASSWORD, SMTP_USER

SMTP_HOST = "smtp.gmail.com"
SMTP_PORT = 465

celery = Celery('tasks', broker='redis://localhost:6379')

def get_email_template_dashboard(email: str):
    email = EmailMessage()
    email['Subject'] = 'Hello'
    email['From'] = SMTP_USER
    email['To'] = SMTP_USER

    email.set_content(
        '<div>'
        f'<h1 style="color: red;">Tamam {email}</h1>'
        '<img src="https://media.istockphoto.com/id/1289427492/vector/deciduous-tree-vector-icon-isolated-forest-tree-flat-colored-symbol-vector.jpg?s=612x612&w=0&k=20&c=BNJA7TkXo49AkmWID-bfswem1R5sNwFeUTjOObfB1BQ='
        '-management-dashboard-ui-design-template-suitable-designing-application-for-android-and-ios-clean-style-app'
        '-mobile-free-vector.jpg" width="600">'
        '</div>',
        subtype='html'
    )
    return email


@celery.task
def send_email_report_dashboard(email: str):
    email = get_email_template_dashboard(email)
    with smtplib.SMTP_SSL(SMTP_HOST, SMTP_PORT) as server:
        server.login(SMTP_USER, SMTP_PASSWORD)
        server.send_message(email)