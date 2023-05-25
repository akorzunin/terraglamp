from starlette_admin import BaseAdmin as Admin
from starlette_admin.views import CustomView
from tinydb import TinyDB

from backend.admin.view import PostView
from backend.settings import DEBUG

db = TinyDB("db.json")


admin = Admin(
    templates_dir="./backend/admin/templates",
    index_view=CustomView(
        label="Home", icon="fa fa-home", path="/home", template_path="home.html"
    ),
)

admin.templates.env.globals["is_debug"] = lambda: DEBUG
admin.add_view(PostView(db))
