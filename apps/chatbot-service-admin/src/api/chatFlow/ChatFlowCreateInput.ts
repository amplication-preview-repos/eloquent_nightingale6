import { CustomFieldCreateNestedManyWithoutChatFlowsInput } from "./CustomFieldCreateNestedManyWithoutChatFlowsInput";
import { TriggerCreateNestedManyWithoutChatFlowsInput } from "./TriggerCreateNestedManyWithoutChatFlowsInput";

export type ChatFlowCreateInput = {
  customFields?: CustomFieldCreateNestedManyWithoutChatFlowsInput;
  description?: string | null;
  isActive?: boolean | null;
  name?: string | null;
  triggers?: TriggerCreateNestedManyWithoutChatFlowsInput;
};
