export type Images = {
  flower_1: string;
  flower_2: string;
  categories_1?: string;
  categories_2?: string;
  categories_3?: string;
};

export type Icons = {
  basket: string;
  hamburger_menu: string;
  logo: string;
  logout: string;
  search: string;
  facebook: string;
  google: string;
  footer_flower_1: string;
  footer_flower_2: string;
  call: string;
  location: string;
  email: string;
  facebook_green: string;
  instagram_green: string;
  twitter_green: string;
  linkedin_green: string;
  union_green: string;
  paypal: string;
  master_card: string;
  visa: string;
  amex: string;
  controller: string;
  heart: string;
  facebook_color: string;
  product: string;
  user: string;
  location_black: string;
  logout_black: string;
};

export type AssetTypes = "images" | "icons";

export type AuthUserType = {
  name?: string;
  _id?: string;
  followers?: string[];
  permission?: {
    create: boolean;
    delete: boolean;
    read: boolean;
    update: boolean;
  };
};

type authDataType = {
  token: string;
  user: object;
};

export type AuthResponseType = {
  data: authDataType;
};

export type FlowerDataTypes = {
  main_image: string;
  detailed_images: object;
  category: string;
  title: string;
  price: number;
  dicount: boolean;
  description: string;
  short_description: string;
  rate: number;
  tags: object;
  comments: string;
  created_at: string;
  created_by: string;
  __v: number;
  _id: string;
};

export type Product = {
  className?: string;
  isLoading?: boolean;
  data: FlowerDataTypes;
  isError?: boolean;
};
