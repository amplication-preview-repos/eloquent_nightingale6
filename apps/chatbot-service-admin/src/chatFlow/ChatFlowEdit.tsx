import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { CustomFieldTitle } from "../customField/CustomFieldTitle";
import { TriggerTitle } from "../trigger/TriggerTitle";

export const ChatFlowEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
