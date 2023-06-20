from operator import attrgetter
from typing import Any, Dict, List, Optional, Sequence, Union

from starlette.requests import Request
from starlette_admin import (
    BaseModelView,
    BooleanField,
    DateField,
    EmailField,
    EnumField,
    IntegerField,
    PhoneField,
    StringField,
)

from backend.db import crud
from backend.db.schemas import TentTypeEnum


class NewBookingView(BaseModelView):
    identity = "new-booking"
    name = "Бронировние"
    label = "Создание заявки"
    icon = "fa fa-plus"
    pk_attr = "id"
    fields = [
        StringField("first_name", label="Имя"),
        StringField("last_name", label="Фамилия"),
        EmailField("email", label="Email"),
        PhoneField("phone", label="Телефон"),
        DateField("check_in_date", label="Дата заезда"),
        DateField("check_out_date", label="Дата выезда"),
        IntegerField("adults", label="Число взрослых"),
        IntegerField("children", label="Числа детей (дополнитлеьные места)"),
        IntegerField("message", label="Сообщение"),
        EnumField(
            "tent_type",
            enum=TentTypeEnum,
            label="Тип палатки",
        ),
        BooleanField(
            "is_active",
            label="Бронь активна",
            help_text="Поставить если бронь актуальна",
        ),
    ]
    sortable_fields = ("first_name",)
    search_builder = True
    page_size = 5
    page_size_options = [5, 10, 25, -1]

    def __init__(self):
        super().__init__()

    async def find_all(
        self,
        request: Request,
        skip: int = 0,
        limit: int = 100,
        where: Union[Dict[str, Any], str, None] = None,
        order_by: Optional[List[str]] = None,
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
        self, request: Request, where: Union[Dict[str, Any], str, None] = None
    ) -> int:
        if where is not None:
            # assert not isinstance(where, dict)  # search_builder is disabled
            return len([i async for i in crud.get_booking_by_filter(where)])
        return len([i async for i in crud.get_all_bookings()])

    # async def find_by_pk(self, request: Request, pk: Any) -> Any:
    #     pk = int(pk)
    #     if self.db.contains(doc_id=pk):
    #         return Post.from_document(self.db.get(doc_id=pk))
    #     return None

    # async def find_by_pks(
    #     self, request: Request, pks: List[Any]
    # ) -> Sequence[Any]:
    #     return [
    #         Post.from_document(self.db.get(doc_id=pk)) for pk in map(int, pks)
    #     ]

    async def validate_data(self, data: Dict) -> None:
        pass
        # errors = {}
        # if data["title"] is None or len(data["title"]) < 3:
        #     errors["title"] = "Ensure title has at least 03 characters"
        # if data["tags"] is None or len(data["tags"]) < 1:
        #     errors["tags"] = "You need at least one tag"
        # if errors:
        #     raise FormValidationError(errors)  # type: ignore

    async def create(self, request: Request, data: Dict) -> Any:
        # await self.validate_data(data)
        # new_id = self.db.insert(Post(**data).to_dict())
        # return await self.find_by_pk(request, new_id)
        ...

    # async def edit(
    #     self, request: Request, pk: Any, data: Dict[str, Any]
    # ) -> Any:
    #     pk = int(pk)
    #     await self.validate_data(data)
    #     self.db.update(Post(**data).to_dict(), doc_ids=[pk])
    #     return await self.find_by_pk(request, pk)

    # async def delete(self, request: Request, pks: List[Any]) -> Optional[int]:
    #     return len(self.db.remove(doc_ids=map(int, pks)))
