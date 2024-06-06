import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";

export const DeliveryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="deliveryAddress" source="deliveryAddress" />
        <DateTimeInput label="deliveryDate" source="deliveryDate" />
        <SelectInput
          source="deliveryStatus"
          label="deliveryStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="order.id" reference="Order" label="order">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
