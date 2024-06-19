import { ChatFlowWhereUniqueInput } from "../chatFlow/ChatFlowWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CustomFieldWhereInput = {
  chatFlow?: ChatFlowWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  value?: StringNullableFilter;
};
