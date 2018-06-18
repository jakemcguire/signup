export class Address {

  constructor(
    public name: string,
    public address: string,
    public city: string,
    public state: string,
    public zip: string,
    public careOf?: string,
  ) {  }
}
