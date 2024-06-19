import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ChatFlowTitle } from "../chatFlow/ChatFlowTitle";

export const CustomFieldCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="chatFlow.id"
          reference="ChatFlow"
          label="ChatFlow"
        >
          <SelectInput optionText={ChatFlowTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <TextInput label="value" multiline source="value" />
      </SimpleForm>
    </Create>
  );
};
