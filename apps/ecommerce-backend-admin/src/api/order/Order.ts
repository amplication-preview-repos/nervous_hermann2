import { Delivery } from "../delivery/Delivery";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  deliveries?: Array<Delivery>;
  id: string;
  orderDate: Date | null;
  totalAmount: number | null;
  updatedAt: Date;
  user?: User | null;
};
