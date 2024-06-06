import { DeliveryListRelationFilter } from "../delivery/DeliveryListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  deliveries?: DeliveryListRelationFilter;
  id?: StringFilter;
  orderDate?: DateTimeNullableFilter;
  totalAmount?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
