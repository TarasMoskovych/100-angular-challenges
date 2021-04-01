export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export const testUser = {
  name: 'Leanne Graham',
  email: 'Sincere@april.biz',
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
} as User;

export const testUser2 = {
  name: 'Chelsey Dietrich',
  email: 'Lucio_Hettinger@annie.caz',
  phone: '(254)954-1289',
  website: 'demarco.info',
} as User;
