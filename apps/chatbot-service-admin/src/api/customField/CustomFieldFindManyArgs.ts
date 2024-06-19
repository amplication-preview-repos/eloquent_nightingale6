import { CustomFieldWhereInput } from "./CustomFieldWhereInput";
import { CustomFieldOrderByInput } from "./CustomFieldOrderByInput";

export type CustomFieldFindManyArgs = {
  where?: CustomFieldWhereInput;
  orderBy?: Array<CustomFieldOrderByInput>;
  skip?: number;
  take?: number;
};
