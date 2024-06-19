import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CustomFieldService } from "./customField.service";
import { CustomFieldControllerBase } from "./base/customField.controller.base";

@swagger.ApiTags("customFields")
@common.Controller("customFields")
export class CustomFieldController extends CustomFieldControllerBase {
  constructor(protected readonly service: CustomFieldService) {
    super(service);
  }
}
