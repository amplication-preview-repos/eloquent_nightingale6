import { Module } from "@nestjs/common";
import { TriggerModuleBase } from "./base/trigger.module.base";
import { TriggerService } from "./trigger.service";
import { TriggerController } from "./trigger.controller";
import { TriggerResolver } from "./trigger.resolver";

@Module({
  imports: [TriggerModuleBase],
  controllers: [TriggerController],
  providers: [TriggerService, TriggerResolver],
  exports: [TriggerService],
})
export class TriggerModule {}
