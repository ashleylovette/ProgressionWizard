import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { Song } from 'src/app/shared/song.model';
import { SongsService } from 'src/app/shared/songs.service';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {
  song: Song;
  id: number;

  constructor( private route: ActivatedRoute, private songsService: SongsService ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.song = this.songsService.getSong(this.id);
          // console.log(this.id)
          // console.log(this.songsService.getSong(this.id))
        });
  }

}
