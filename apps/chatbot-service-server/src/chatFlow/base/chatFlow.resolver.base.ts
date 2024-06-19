/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ChatFlow } from "./ChatFlow";
import { ChatFlowCountArgs } from "./ChatFlowCountArgs";
import { ChatFlowFindManyArgs } from "./ChatFlowFindManyArgs";
import { ChatFlowFindUniqueArgs } from "./ChatFlowFindUniqueArgs";
import { CreateChatFlowArgs } from "./CreateChatFlowArgs";
import { UpdateChatFlowArgs } from "./UpdateChatFlowArgs";
import { DeleteChatFlowArgs } from "./DeleteChatFlowArgs";
import { CustomFieldFindManyArgs } from "../../customField/base/CustomFieldFindManyArgs";
import { CustomField } from "../../customField/base/CustomField";
import { TriggerFindManyArgs } from "../../trigger/base/TriggerFindManyArgs";
import { Trigger } from "../../trigger/base/Trigger";
import { ChatFlowService } from "../chatFlow.service";
@graphql.Resolver(() => ChatFlow)
export class ChatFlowResolverBase {
  constructor(protected readonly service: ChatFlowService) {}

  async _chatFlowsMeta(
    @graphql.Args() args: ChatFlowCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ChatFlow])
  async chatFlows(
    @graphql.Args() args: ChatFlowFindManyArgs
  ): Promise<ChatFlow[]> {
    return this.service.chatFlows(args);
  }

  @graphql.Query(() => ChatFlow, { nullable: true })
  async chatFlow(
    @graphql.Args() args: ChatFlowFindUniqueArgs
  ): Promise<ChatFlow | null> {
    const result = await this.service.chatFlow(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ChatFlow)
  async createChatFlow(
    @graphql.Args() args: CreateChatFlowArgs
  ): Promise<ChatFlow> {
    return await this.service.createChatFlow({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ChatFlow)
  async updateChatFlow(
    @graphql.Args() args: UpdateChatFlowArgs
  ): Promise<ChatFlow | null> {
    try {
      return await this.service.updateChatFlow({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ChatFlow)
  async deleteChatFlow(
    @graphql.Args() args: DeleteChatFlowArgs
  ): Promise<ChatFlow | null> {
    try {
      return await this.service.deleteChatFlow(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [CustomField], { name: "customFields" })
  async findCustomFields(
    @graphql.Parent() parent: ChatFlow,
    @graphql.Args() args: CustomFieldFindManyArgs
  ): Promise<CustomField[]> {
    const results = await this.service.findCustomFields(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Trigger], { name: "triggers" })
  async findTriggers(
    @graphql.Parent() parent: ChatFlow,
    @graphql.Args() args: TriggerFindManyArgs
  ): Promise<Trigger[]> {
    const results = await this.service.findTriggers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}