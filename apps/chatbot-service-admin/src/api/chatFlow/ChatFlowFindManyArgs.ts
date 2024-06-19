import { ChatFlowWhereInput } from "./ChatFlowWhereInput";
import { ChatFlowOrderByInput } from "./ChatFlowOrderByInput";

export type ChatFlowFindManyArgs = {
  where?: ChatFlowWhereInput;
  orderBy?: Array<ChatFlowOrderByInput>;
  skip?: number;
  take?: number;
};
