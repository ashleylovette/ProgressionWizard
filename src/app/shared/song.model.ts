export class Song{
  public chords: string;
  public title?: string;
  public id?: string;

  constructor(chords: string, title?: string, id?: string) {
    this.chords = chords;
    this.title = title;
    this.id = id;
  }
}
