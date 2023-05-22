from starlette_admin import BaseAdmin as Admin
from tinydb import TinyDB

from backend.admin.view import PostView

db = TinyDB("db.json")


admin = Admin()
admin.add_view(PostView(db))
# admin.mount_to(app)
