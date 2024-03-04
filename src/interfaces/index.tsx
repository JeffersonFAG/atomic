export type StatusNotification = "error" | "success" | null;

export interface dataTableCompany {
  nit: string;
  nameCompany: string;
  address: string;
  phone: number;
}

export interface dataTableProducts {
  code: string;
  nameProduct: string;
  features: string;
  price: number;
  nameCompany: string;
}
