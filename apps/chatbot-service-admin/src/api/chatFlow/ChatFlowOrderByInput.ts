import { SortOrder } from "../../util/SortOrder";

export type ChatFlowOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
