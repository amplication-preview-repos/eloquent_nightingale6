import { Module } from "@nestjs/common";
import { CustomFieldModuleBase } from "./base/customField.module.base";
import { CustomFieldService } from "./customField.service";
import { CustomFieldController } from "./customField.controller";
import { CustomFieldResolver } from "./customField.resolver";

@Module({
  imports: [CustomFieldModuleBase],
  controllers: [CustomFieldController],
  providers: [CustomFieldService, CustomFieldResolver],
  exports: [CustomFieldService],
})
export class CustomFieldModule {}
