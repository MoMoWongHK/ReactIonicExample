
export interface KOLObject {
  id: string;
  avatarUrl:string,
  coverImages: string[],
  createDate: Date,
  description:string,
  email: string,
  firstName:string,
  followers: string[],
  isPublish: boolean,
  isVerified: boolean,
  jobScored: number,
  lastModified: Date,
  lastName: string,
  nationality:string,
  platform:string[],
  score: number,
  serviceTag:string[],
  tags:string[],
  type:string,
  url:string[],
  userName:string

}
