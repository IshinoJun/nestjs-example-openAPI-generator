import { ApiProperty } from '@nestjs/swagger';
import { Example } from '../example.entity';

export type GetExampleResponse = {
  id: string;
  name: string;
};

export class GetExampleResponseDto implements GetExampleResponse {
  @ApiProperty({ example: '1' })
  public readonly id: string;
  @ApiProperty({ example: 'hoge' })
  public readonly name: string;

  public constructor(object: Example) {
    Object.assign(this, object);
  }
}
