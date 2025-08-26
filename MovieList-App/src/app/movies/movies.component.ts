import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

type Movie = {
  title: string;
  genre: string;
  rating: number;    // 1–5 (can be decimals)
  poster: string;
  description: string;
};

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  // ---- Static data ----
  movies: Movie[] = [
{
  title: 'Vikram',
  genre: 'Action / Thriller',
  rating: 4.8,
  poster: 'https://tse4.mm.bing.net/th/id/OIP.dyccZyQmEgHup9DfEQXkrAHaEK?pid=Api&P=0&h=180',
  description: 'A retired agent returns to hunt a masked syndicate leader.'
},
{
  title: '96',
  genre: 'Romance / Drama',
  rating: 4.4,
  poster: 'https://e1.pxfuel.com/desktop-wallpaper/833/618/desktop-wallpaper-96-movie-trailer-review-96-movie.jpg',
  description: 'Two childhood sweethearts reunite at a school reunion years later.'
},
{
  title: 'RRR',
  genre: 'Action / Drama',
  rating: 4.7,
  poster: 'https://live.staticflickr.com/65535/51856360367_0038ec27fa_b.jpg',
  description: 'Two revolutionaries fight against the British Raj in 1920s India.'
},
{
title: 'Khaidi No. 150',
  genre: 'Action / Drama',
  rating: 4.2,
  poster: 'https://tse4.mm.bing.net/th/id/OIP.SG6DSVv2sMrovdrA7JbH9gHaEo?pid=Api&P=0&h=180',
  description: 'A man fights against corporate greed to protect farmers’ rights.'
},
{
  title: 'Goodachari',
  genre: 'Spy Thriller',
  rating: 4.4,
  poster: 'https://tse2.mm.bing.net/th/id/OIP.aEoOOzU6OMv6eo7lDJCAjQHaFP?pid=Api&P=0&h=180',
  description: 'A young man becomes a secret agent and uncovers shocking family secrets.'
},

{
  title: 'Arjun Reddy',
  genre: 'Romance / Drama',
  rating: 4.3,
  poster: 'https://tse1.mm.bing.net/th/id/OIP.0IKDD-pRj9c3m7eV2JKLZgHaEU?pid=Api&P=0&h=180',
  description:'A brilliant but self-destructive surgeon struggles after heartbreak.'
}
  ];

  // ---- Filtering ----
  selectedGenre: string = 'All';
  get genres(): string[] {
    return ['All', ...Array.from(new Set(this.movies.map(m => m.genre)))];
  }

  get filteredMovies(): Movie[] {
    return this.selectedGenre === 'All'
      ? this.movies
      : this.movies.filter(m => m.genre === this.selectedGenre);
  }

  // ---- Average rating (all movies) ----
  get averageRating(): number {
    const total = this.movies.reduce((sum, m) => sum + m.rating, 0);
    return Number((total / this.movies.length).toFixed(1));
  }

  // ---- Styling helpers ----
  isTopRated(m: Movie): boolean {
    return m.rating >= 4.5; // highlight
  }

  starIcon(i: number, rating: number): 'star' | 'star_half' | 'star_border' {
    const diff = rating - i + 1; // i is 1..5
    if (diff >= 1) return 'star';
    if (diff >= 0.5) return 'star_half';
    return 'star_border';
  }
}
