import { ChatFlowWhereUniqueInput } from "../chatFlow/ChatFlowWhereUniqueInput";

export type CustomFieldCreateInput = {
  chatFlow?: ChatFlowWhereUniqueInput | null;
  name?: string | null;
  value?: string | null;
};
