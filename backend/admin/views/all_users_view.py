from typing import Any, Optional, Sequence, Union
from starlette.requests import Request
from starlette_admin import (
    BaseModelView,
    IntegerField,
    StringField,
    DateField,
    BooleanField,
)
from operator import attrgetter

from backend.db import crud


class AllUsersView(BaseModelView):
    identity = "all-users"
    name = "Все пользователи"
    label = "Все пользователи"
    icon = "fa fa-user"
    pk_attr = "id"
    fields = [
        IntegerField("adults", label="Число взрослых"),
        IntegerField("children", label="Число детей"),
        IntegerField("total_members", label="Всего человек"),
        StringField("user_id", label="ID клиента"),
        StringField("tent_id", label="ID палатки"),
        DateField("creation_date", label="Дата создания"),
        DateField("check_in_date", label="Дата въезда"),
        DateField("check_out_date", label="Дата выезда"),
        IntegerField("days_total", label="Всего дней"),
        IntegerField("price", label="Цена"),
        BooleanField("is_active", label="Бронь активна"),
    ]
    sortable_fields = ("user_id",)
    search_builder = True
    page_size = 5
    page_size_options = [5, 10, 25, -1]
