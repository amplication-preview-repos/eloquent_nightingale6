import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CHATFLOW_TITLE_FIELD } from "./ChatFlowTitle";

export const ChatFlowShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <BooleanField label="isActive" source="isActive" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="CustomField"
          target="chatFlowId"
          label="CustomFields"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="ChatFlow"
              source="chatflow.id"
              reference="ChatFlow"
            >
              <TextField source={CHATFLOW_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="value" source="value" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Trigger"
          target="chatFlowId"
          label="Triggers"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="ChatFlow"
              source="chatflow.id"
              reference="ChatFlow"
            >
              <TextField source={CHATFLOW_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="value" source="value" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
