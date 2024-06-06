import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  orderDate?: Date | null;
  totalAmount?: number | null;
  user?: UserWhereUniqueInput | null;
};
