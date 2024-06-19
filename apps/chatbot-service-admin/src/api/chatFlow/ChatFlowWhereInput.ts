import { CustomFieldListRelationFilter } from "../customField/CustomFieldListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { TriggerListRelationFilter } from "../trigger/TriggerListRelationFilter";

export type ChatFlowWhereInput = {
  customFields?: CustomFieldListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  name?: StringNullableFilter;
  triggers?: TriggerListRelationFilter;
};
