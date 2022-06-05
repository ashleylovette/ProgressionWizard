export class Song{
  chords: string;
  title?: string;
  id?: string;

  constructor(res?, title?: string, name?) {
    this.chords = res['song_chords'],
    this.title = res["song_name"],
    this.id = res["id"]
  }
}
