import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TriggerServiceBase } from "./base/trigger.service.base";

@Injectable()
export class TriggerService extends TriggerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
