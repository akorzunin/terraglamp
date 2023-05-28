from starlette_admin import BaseAdmin as Admin
from starlette_admin.views import CustomView

from backend.admin.views.create_booking_view import NewBookingView
from backend.admin.views.all_bookings_view import AllBookingsView
from backend.admin.views.all_tents_view import AllTentsView
from backend.admin.views.all_users_view import AllUsersView
from backend.settings import DEBUG


admin = Admin(
    templates_dir="./backend/admin/templates",
    title="Админка терраглэмп",
    index_view=CustomView(
        label="Home", icon="fa fa-home", path="/home", template_path="home.html"
    ),
)

admin.templates.env.globals["is_debug"] = lambda: DEBUG
admin.add_view(NewBookingView())  # type: ignore
admin.add_view(AllBookingsView())  # type: ignore
admin.add_view(AllTentsView())  # type: ignore
admin.add_view(AllUsersView())  # type: ignore
