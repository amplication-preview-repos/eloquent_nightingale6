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

export const TriggerCreate = (props: CreateProps): React.ReactElement => {
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
    </Create>
  );
};
