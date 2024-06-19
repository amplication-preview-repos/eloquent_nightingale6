import { ChatFlow } from "../chatFlow/ChatFlow";

export type CustomField = {
  chatFlow?: ChatFlow | null;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
  value: string | null;
};
