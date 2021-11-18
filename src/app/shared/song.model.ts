export class Song{
  public chords: string;
  public id?: string;

  constructor(chords: string, id?: string) {
    this.chords = chords;
    this.id = id;
  }
}
