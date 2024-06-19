import { ChatFlow as TChatFlow } from "../api/chatFlow/ChatFlow";

export const CHATFLOW_TITLE_FIELD = "name";

export const ChatFlowTitle = (record: TChatFlow): string => {
  return record.name?.toString() || String(record.id);
};
