import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ChatFlowService } from "./chatFlow.service";
import { ChatFlowControllerBase } from "./base/chatFlow.controller.base";

@swagger.ApiTags("chatFlows")
@common.Controller("chatFlows")
export class ChatFlowController extends ChatFlowControllerBase {
  constructor(protected readonly service: ChatFlowService) {
    super(service);
  }
}
