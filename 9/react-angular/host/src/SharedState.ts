interface ISharedState {
  [key: string]: any;
}

export class SharedState {
  private sharedState: ISharedState = {};

  getState(key: string): any {
    return this.sharedState[key];
  }

  setState(key: string, value: any): void {
    this.sharedState[key] = value;
  }
}
