import { DeliveryUpdateManyWithoutOrdersInput } from "./DeliveryUpdateManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  deliveries?: DeliveryUpdateManyWithoutOrdersInput;
  orderDate?: Date | null;
  totalAmount?: number | null;
  user?: UserWhereUniqueInput | null;
};
