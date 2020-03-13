export interface Dictionary<Value> {
  [key: string]: Value;
}

export abstract class Transformer<S, TS, F, TF> {
  public sendCollection(data: S[]): TS[] {
    return data.map((datum: S) => this.send(datum));
  }

  public fetchCollection(data: F[]): TF[] {
    return data.map((datum: F) => this.fetch(datum));
  }

  public sendObjectCollection(data: Dictionary<S>): Dictionary<TS> {
    const transformed: Dictionary<TS> = {};
    Object.keys(data).forEach((key: string) => {
      transformed[key] = this.send(data[key]);
    });

    return transformed;
  }

  public fetchObjectCollection(data: Dictionary<F>): Dictionary<TF> {
    const transformed: Dictionary<TF> = {};
    Object.keys(data).forEach((key: string) => {
      transformed[key] = this.fetch(data[key]);
    });

    return transformed;
  }

  public abstract send(data: S): TS;

  public abstract fetch(data: F): TF;
}
