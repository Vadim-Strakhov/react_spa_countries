import { Region } from "./regions";

type Currency = {
  code: string;
  name: string;
  symbol: string;
};

type Languages = {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
};

export type Country = {
  name: string;
  nativeName: string;
  flag: string;
  flags: {png: string, svg: string};
  region: Region;
  population: number;
  capital: string;
  subregion: string;
  topLevelDomain: string[];
  borders: string[];
  currencies: Currency[];
  languages: Languages[];
};

type Info = {
  title: string;
  description: string;
};

export type CountryInfo = {
  img: string;
  name: string;
  info: Info[];
};
