import { ChatFlow } from "../chatFlow/ChatFlow";

export type Trigger = {
  chatFlow?: ChatFlow | null;
  createdAt: Date;
  id: string;
  typeField?: "Option1" | null;
  updatedAt: Date;
  value: string | null;
};
