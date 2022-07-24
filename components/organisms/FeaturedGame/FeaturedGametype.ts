interface Category {
  _id: string;
  __v: number;
  name: string;
}

interface Game<Cat> {
  _id: string;
  status: string;
  thumbnail: string;
  name: string;
  category: Cat;
}

type FeaturedGameListType<T> = {
  [P in keyof T]?: T[P];
};

export type GameItemTypes = FeaturedGameListType<Game<Category>>;
