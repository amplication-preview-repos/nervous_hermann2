import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type DeliveryWhereInput = {
  deliveryAddress?: StringNullableFilter;
  deliveryDate?: DateTimeNullableFilter;
  deliveryStatus?: "Option1";
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
};
