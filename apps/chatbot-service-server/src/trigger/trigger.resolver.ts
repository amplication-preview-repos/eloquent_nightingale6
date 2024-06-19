import * as graphql from "@nestjs/graphql";
import { TriggerResolverBase } from "./base/trigger.resolver.base";
import { Trigger } from "./base/Trigger";
import { TriggerService } from "./trigger.service";

@graphql.Resolver(() => Trigger)
export class TriggerResolver extends TriggerResolverBase {
  constructor(protected readonly service: TriggerService) {
    super(service);
  }
}
