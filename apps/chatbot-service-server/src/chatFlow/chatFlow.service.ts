import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChatFlowServiceBase } from "./base/chatFlow.service.base";

@Injectable()
export class ChatFlowService extends ChatFlowServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
