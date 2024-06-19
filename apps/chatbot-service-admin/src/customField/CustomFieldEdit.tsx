import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ChatFlowTitle } from "../chatFlow/ChatFlowTitle";

export const CustomFieldEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
