import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomFieldServiceBase } from "./base/customField.service.base";

@Injectable()
export class CustomFieldService extends CustomFieldServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
