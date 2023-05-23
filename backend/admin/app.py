from starlette_admin import BaseAdmin as Admin
from tinydb import TinyDB

from backend.admin.view import PostView
from backend.settings import DEBUG

db = TinyDB("db.json")


admin = Admin(
    templates_dir="./backend/admin/templates",
)

admin.templates.env.globals["is_debug"] = lambda: DEBUG
admin.add_view(PostView(db))
