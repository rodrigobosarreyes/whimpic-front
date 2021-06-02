export interface IManga {
  id: number;
  originalName: string;
  japaneseName: string;
  author: IAuthor;
  rating: string;
  createdAt: Date;
  finishedAt: Date;
  addedAt: Date;
  publisher: IPublisher;
  genre: IGenre;
  tags: ITag[];
}

export interface IMangaDetail {
  id: number;
  name: string;
  cover: string;
  seasonsCount: number;
  description: string;
  manga: IManga;
  language: string;
}

export interface IAuthor {
  id: number;
  name: string;
}

export interface IPublisher {
  id: number;
  name: string;
}

export interface ITag {
  id: number;
  i18nCode: string;
  esTranslation: string;
  enTranslation: string;
}

export interface IGenre {
  id: number;
  i18nCode: string;
  esTranslation: string;
  enTranslation: string;
}

export interface IMangaSeason {
  id: number;
  name: string;
  seasonNumber: number;
  manga: IManga;
}

export interface IMangaEpisode {
  id: number;
  name: string;
  episodeNumber: number;
  description: string;
  cover: string;
  pagesCount: number;
  isFinished: boolean;
}

export interface ISeasonEpisode {
  season: IMangaSeason;
  episodes: IMangaEpisode[];
}
