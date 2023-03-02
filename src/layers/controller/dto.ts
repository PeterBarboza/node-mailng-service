import { IsString, IsNotEmpty } from "class-validator"

import { ISendMailParams } from "../service";

export class SendMailDTO implements ISendMailParams {
  @IsNotEmpty()
  @IsString()
  to!: string;

  @IsNotEmpty()
  @IsString()
  subject!: string;

  @IsNotEmpty()
  @IsString()
  text!: string;

  @IsNotEmpty()
  @IsString()
  html!: string;
}