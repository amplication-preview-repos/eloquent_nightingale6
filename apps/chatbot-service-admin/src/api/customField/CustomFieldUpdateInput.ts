import { ChatFlowWhereUniqueInput } from "../chatFlow/ChatFlowWhereUniqueInput";

export type CustomFieldUpdateInput = {
  chatFlow?: ChatFlowWhereUniqueInput | null;
  name?: string | null;
  value?: string | null;
};
