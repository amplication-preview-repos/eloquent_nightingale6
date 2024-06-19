import { ChatFlowWhereUniqueInput } from "../chatFlow/ChatFlowWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TriggerWhereInput = {
  chatFlow?: ChatFlowWhereUniqueInput;
  id?: StringFilter;
  typeField?: "Option1";
  value?: StringNullableFilter;
};
