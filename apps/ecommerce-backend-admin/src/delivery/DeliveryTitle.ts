import { Delivery as TDelivery } from "../api/delivery/Delivery";

export const DELIVERY_TITLE_FIELD = "deliveryAddress";

export const DeliveryTitle = (record: TDelivery): string => {
  return record.deliveryAddress?.toString() || String(record.id);
};
