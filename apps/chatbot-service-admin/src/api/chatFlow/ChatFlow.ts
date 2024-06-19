import { CustomField } from "../customField/CustomField";
import { Trigger } from "../trigger/Trigger";

export type ChatFlow = {
  createdAt: Date;
  customFields?: Array<CustomField>;
  description: string | null;
  id: string;
  isActive: boolean | null;
  name: string | null;
  triggers?: Array<Trigger>;
  updatedAt: Date;
};
