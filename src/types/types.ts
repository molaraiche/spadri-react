export type productType = {
  _id: Key | null | undefined;
  _id: number;
  name: string;
  description: string;
  productImage: string;
  quantity: number;
  price: number;
  path: string;
};

export type blogType = {
  _id: number;
  title: string;
  description: string;
  blogImage: string;
  path: string;
};

export type authType = {
  email: string;
  password: string;
};

export type contactType = {
  fullName: string;
  email: string;
  message: string;
};
