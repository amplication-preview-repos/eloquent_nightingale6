import { CustomFieldUpdateManyWithoutChatFlowsInput } from "./CustomFieldUpdateManyWithoutChatFlowsInput";
import { TriggerUpdateManyWithoutChatFlowsInput } from "./TriggerUpdateManyWithoutChatFlowsInput";

export type ChatFlowUpdateInput = {
  customFields?: CustomFieldUpdateManyWithoutChatFlowsInput;
  description?: string | null;
  isActive?: boolean | null;
  name?: string | null;
  triggers?: TriggerUpdateManyWithoutChatFlowsInput;
};
