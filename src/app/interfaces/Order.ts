export default interface Order {
  user: string;
  date: Date;
  email: string;
  address: string;
  totalPrice: number;
  items: [{item: string, quantity: string}];
}
