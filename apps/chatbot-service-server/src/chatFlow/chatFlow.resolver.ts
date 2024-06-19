import * as graphql from "@nestjs/graphql";
import { ChatFlowResolverBase } from "./base/chatFlow.resolver.base";
import { ChatFlow } from "./base/ChatFlow";
import { ChatFlowService } from "./chatFlow.service";

@graphql.Resolver(() => ChatFlow)
export class ChatFlowResolver extends ChatFlowResolverBase {
  constructor(protected readonly service: ChatFlowService) {
    super(service);
  }
}
