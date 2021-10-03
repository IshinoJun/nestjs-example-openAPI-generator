import { ApiProperty } from '@nestjs/swagger';

export type UpdateExampleResponse = {
  id: string;
  name: string;
};

export class UpdateExampleResponseDto implements UpdateExampleResponse {
  @ApiProperty({ example: '1' })
  public readonly id: string;
  @ApiProperty({ example: 'hoge' })
  public readonly name: string;

  public constructor(object: UpdateExampleResponse) {
    Object.assign(this, object);
  }
}
