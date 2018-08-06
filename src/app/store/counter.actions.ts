export class Increment {
  static readonly type = "[Counter] Increment";
  constructor(public payload: { target: string }) {}
}

export class Decrement {
  static readonly type = "[Counter] Decrement";
  constructor(public payload: { target: string }) {}
}

export class Reset {
  static readonly type = "[Counter] Reset";
  constructor(public payload: { target: string }) {}
}