import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css'],
  providers: [ MoviesService ]
})
export class MyHomeComponent implements OnInit {

  movies: Array<Object> = [];

  constructor(private movieService: MoviesService, private router: Router) { }

  ngOnInit() {
    this.movies = this.movieService.movieList();
  }

}
