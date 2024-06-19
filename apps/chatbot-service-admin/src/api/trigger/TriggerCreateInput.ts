import { ChatFlowWhereUniqueInput } from "../chatFlow/ChatFlowWhereUniqueInput";

export type TriggerCreateInput = {
  chatFlow?: ChatFlowWhereUniqueInput | null;
  typeField?: "Option1" | null;
  value?: string | null;
};
