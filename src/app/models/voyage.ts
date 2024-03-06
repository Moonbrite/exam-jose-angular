import {Image} from "./image";

export class Voyage {

  constructor(
    id?: number,
    destination?: string,
    lattitude?: number,
    longitude?: number,
    mainPicture?: Image,
    pictures?: Image[],
    type?:string,
    nbStar?: number
  ) {

    this.id = id;
    this.destination = destination;
    this.lattitude = lattitude;
    this.longitude = longitude;
    this.mainPicture = mainPicture;
    this.pictures = pictures;
    this.type = type;
    this.nbStar = nbStar;

  }
  id?:number;
  destination?:string;
  lattitude?:number;
  longitude?:number;
  mainPicture?: Image;
  pictures?: Image[];
  type?:string;
  nbStar?:number;

}
