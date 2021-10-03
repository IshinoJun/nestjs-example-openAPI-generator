import { ApiProperty } from '@nestjs/swagger';

export type UpdateExampleRequest = {
  id: string;
  name: string;
};

export class UpdateExampleRequestDto implements UpdateExampleRequest {
  @ApiProperty({ example: '1' })
  public readonly id: string;
  @ApiProperty({ example: 'hoge' })
  public readonly name: string;
}
