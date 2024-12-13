import { DeliveryCreateNestedManyWithoutOrdersInput } from "./DeliveryCreateNestedManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  deliveries?: DeliveryCreateNestedManyWithoutOrdersInput;
  orderDate?: Date | null;
  totalAmount?: number | null;
  user?: UserWhereUniqueInput | null;
};
