import { IsString, IsNotEmpty, IsObject } from 'class-validator';

export class UpdateSelectedSongDto {
  @IsString()
  @IsNotEmpty({ message: 'query is required and cannot be empty' })
  query: string;

  @IsString()
  @IsNotEmpty({ message: 'videoId is required and cannot be empty' })
  videoId: string;

  @IsObject({ message: 'songData must be an object' })
  songData: Record<string, any>;
}
