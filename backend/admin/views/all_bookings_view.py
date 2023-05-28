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


class AllBookingsView(BaseModelView):
    identity = "all-bookings"
    name = "Все бронирования"
    label = "Все бронирования"
    icon = "fa fa-book"
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

    async def find_all(
        self,
        request: Request,
        skip: int = 0,
        limit: int = 100,
        where: Union[dict[str, Any], str, None] = None,
        order_by: Optional[list[str]] = None,
    ) -> Sequence[Any]:
        if where is not None:
            values = [i async for i in crud.get_booking_by_filter(where)]
        else:
            values = [i async for i in crud.get_all_bookings()]

        if order_by is not None:
            """Multiple sort"""
            for item in reversed(order_by):
                key, dir = item.split(maxsplit=1)
                values.sort(key=attrgetter(key), reverse=(dir == "desc"))
        return values[skip : skip + limit] if limit > 0 else values[skip:]

    async def count(
        self, request: Request, where: Union[dict[str, Any], str, None] = None
    ) -> int:
        if where is not None:
            return len([i async for i in crud.get_booking_by_filter(where)])
        return len([i async for i in crud.get_all_bookings()])
