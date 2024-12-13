import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type DeliveryCreateInput = {
  deliveryAddress?: string | null;
  deliveryDate?: Date | null;
  deliveryStatus?: "Option1" | null;
  order?: OrderWhereUniqueInput | null;
};
