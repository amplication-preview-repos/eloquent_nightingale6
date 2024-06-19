/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CustomFieldUpdateManyWithoutChatFlowsInput } from "./CustomFieldUpdateManyWithoutChatFlowsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { TriggerUpdateManyWithoutChatFlowsInput } from "./TriggerUpdateManyWithoutChatFlowsInput";

@InputType()
class ChatFlowUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CustomFieldUpdateManyWithoutChatFlowsInput,
  })
  @ValidateNested()
  @Type(() => CustomFieldUpdateManyWithoutChatFlowsInput)
  @IsOptional()
  @Field(() => CustomFieldUpdateManyWithoutChatFlowsInput, {
    nullable: true,
  })
  customFields?: CustomFieldUpdateManyWithoutChatFlowsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isActive?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => TriggerUpdateManyWithoutChatFlowsInput,
  })
  @ValidateNested()
  @Type(() => TriggerUpdateManyWithoutChatFlowsInput)
  @IsOptional()
  @Field(() => TriggerUpdateManyWithoutChatFlowsInput, {
    nullable: true,
  })
  triggers?: TriggerUpdateManyWithoutChatFlowsInput;
}

export { ChatFlowUpdateInput as ChatFlowUpdateInput };
