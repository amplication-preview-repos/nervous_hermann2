import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";

export const DeliveryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
