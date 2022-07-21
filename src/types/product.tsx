export type ProductType = {
  status: number;
  _id: string;
  name: string;
  originalPrice: number;
  saleOffPrice: number;
  image: string;
  feature: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};
export type ProductUpdateType = {
  name: string;
  originalPrice: number;
  saleOffPrice: number;
  image: string;
  feature: string;
  category: string;
};
