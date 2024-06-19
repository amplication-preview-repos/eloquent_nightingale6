import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TriggerService } from "./trigger.service";
import { TriggerControllerBase } from "./base/trigger.controller.base";

@swagger.ApiTags("triggers")
@common.Controller("triggers")
export class TriggerController extends TriggerControllerBase {
  constructor(protected readonly service: TriggerService) {
    super(service);
  }
}
