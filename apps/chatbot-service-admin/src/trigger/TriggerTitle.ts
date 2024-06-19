import { Trigger as TTrigger } from "../api/trigger/Trigger";

export const TRIGGER_TITLE_FIELD = "value";

export const TriggerTitle = (record: TTrigger): string => {
  return record.value?.toString() || String(record.id);
};
