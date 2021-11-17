export class Song{
  public title?: string;
  public chords: string[];
  public id?: string;

  constructor(chords: string[], title?: string, id?: string) {
    this.chords = chords;
    this.title = title;
    this.id = id;
  }
}
