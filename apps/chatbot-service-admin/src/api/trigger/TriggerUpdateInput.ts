import { ChatFlowWhereUniqueInput } from "../chatFlow/ChatFlowWhereUniqueInput";

export type TriggerUpdateInput = {
  chatFlow?: ChatFlowWhereUniqueInput | null;
  typeField?: "Option1" | null;
  value?: string | null;
};
