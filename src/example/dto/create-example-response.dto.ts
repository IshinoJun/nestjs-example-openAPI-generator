import { ApiProperty } from '@nestjs/swagger';

export type CreateExampleResponse = {
  id: string;
  name: string;
};

export class CreateExampleResponseDto implements CreateExampleResponse {
  @ApiProperty({ example: '1' })
  public readonly id: string;
  @ApiProperty({ example: 'hoge' })
  public readonly name: string;

  public constructor(object: CreateExampleResponse) {
    Object.assign(this, object);
  }
}
