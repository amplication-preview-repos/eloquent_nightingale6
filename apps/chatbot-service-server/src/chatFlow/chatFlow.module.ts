import { Module } from "@nestjs/common";
import { ChatFlowModuleBase } from "./base/chatFlow.module.base";
import { ChatFlowService } from "./chatFlow.service";
import { ChatFlowController } from "./chatFlow.controller";
import { ChatFlowResolver } from "./chatFlow.resolver";

@Module({
  imports: [ChatFlowModuleBase],
  controllers: [ChatFlowController],
  providers: [ChatFlowService, ChatFlowResolver],
  exports: [ChatFlowService],
})
export class ChatFlowModule {}
