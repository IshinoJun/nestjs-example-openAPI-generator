import { ApiProperty } from '@nestjs/swagger';

export type CreateExampleRequest = {
  name: string;
};

export class CreateExampleRequestDto implements CreateExampleRequest {
  @ApiProperty({ example: 'hoge' })
  public readonly name: string;
}
