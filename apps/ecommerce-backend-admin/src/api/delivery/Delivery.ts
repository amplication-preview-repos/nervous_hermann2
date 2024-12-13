import { Order } from "../order/Order";

export type Delivery = {
  createdAt: Date;
  deliveryAddress: string | null;
  deliveryDate: Date | null;
  deliveryStatus?: "Option1" | null;
  id: string;
  order?: Order | null;
  updatedAt: Date;
};
