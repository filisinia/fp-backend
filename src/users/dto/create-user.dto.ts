import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ type: String })
  @IsString()
  name: string;

  @ApiProperty({ type: String })
  @IsEmail({}, { message: 'Please enter a valid email' })
  email: string;

  @ApiProperty({ type: Number })
  @IsNumber()
  age: number;
}
