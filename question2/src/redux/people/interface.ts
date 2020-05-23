export interface IPeople {
  _id: string;
  picture: string;
  name: IName;
  email: string;
  location: ILocation;
}

export interface IPeopleState {
  people: IPeople[];
  loading: boolean;
  error: null | boolean;
}

interface IName {
  first: string;
  last: string;
}

interface ILocation {
  latitude: number | null;
  longitude: number | null;
}
