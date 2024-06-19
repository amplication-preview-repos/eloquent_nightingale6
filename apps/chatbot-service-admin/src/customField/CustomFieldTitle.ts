import { CustomField as TCustomField } from "../api/customField/CustomField";

export const CUSTOMFIELD_TITLE_FIELD = "name";

export const CustomFieldTitle = (record: TCustomField): string => {
  return record.name?.toString() || String(record.id);
};
