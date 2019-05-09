export default interface Type<T> {
  new(...args: any[]): T;
}