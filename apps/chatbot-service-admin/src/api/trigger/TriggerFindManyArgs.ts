import { TriggerWhereInput } from "./TriggerWhereInput";
import { TriggerOrderByInput } from "./TriggerOrderByInput";

export type TriggerFindManyArgs = {
  where?: TriggerWhereInput;
  orderBy?: Array<TriggerOrderByInput>;
  skip?: number;
  take?: number;
};
