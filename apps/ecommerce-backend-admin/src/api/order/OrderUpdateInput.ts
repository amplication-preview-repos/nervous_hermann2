import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  orderDate?: Date | null;
  totalAmount?: number | null;
  user?: UserWhereUniqueInput | null;
};
