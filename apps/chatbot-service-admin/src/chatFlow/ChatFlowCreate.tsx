import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { CustomFieldTitle } from "../customField/CustomFieldTitle";
import { TriggerTitle } from "../trigger/TriggerTitle";

export const ChatFlowCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="customFields"
          reference="CustomField"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CustomFieldTitle} />
        </ReferenceArrayInput>
        <TextInput label="description" multiline source="description" />
        <BooleanInput label="isActive" source="isActive" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="triggers"
          reference="Trigger"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TriggerTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
