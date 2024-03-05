export class Image {
  constructor(
    id?: number,
    src?: string,
    alt?: string
  ) {
    this.id = id;
    this.src = src;
    this.alt = alt;
  }
  id?:number;
  src?:string;
  alt?:string;
}
