import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  orderDate: Date | null;
  totalAmount: number | null;
  updatedAt: Date;
  user?: User | null;
};
