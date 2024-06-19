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

export const TriggerEdit = (props: EditProps): React.ReactElement => {
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
        <SelectInput
          source="typeField"
          label="type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
