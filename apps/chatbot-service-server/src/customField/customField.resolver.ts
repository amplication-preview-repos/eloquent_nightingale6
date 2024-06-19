import * as graphql from "@nestjs/graphql";
import { CustomFieldResolverBase } from "./base/customField.resolver.base";
import { CustomField } from "./base/CustomField";
import { CustomFieldService } from "./customField.service";

@graphql.Resolver(() => CustomField)
export class CustomFieldResolver extends CustomFieldResolverBase {
  constructor(protected readonly service: CustomFieldService) {
    super(service);
  }
}
