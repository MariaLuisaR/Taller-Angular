export class Serie {
  id: number;
  name: string;
  channel: string;
  seasons: number;
  desc: string;
  link: string;
  img: string;

  public constructor(id: number, name: string, channel: string, seasons: number, desc: string, link: string, img: string) {
    this.id = id;
    this.name = name;
    this.channel = channel;
    this.seasons = seasons;
    this.desc = desc;
    this.link = link;
    this.img = img;
  }
}
