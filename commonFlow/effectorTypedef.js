//@flow

export const effector = `

declare module 'effector' {

declare export var version: string

//prettier-ignore
declare export type kind =
  | 'store'
  | 'event'
  | 'effect'
  | 'domain'

declare export type mixed_non_void =
  | null
  | string
  | number
  | boolean
  | {}
  | $ReadOnlyArray<mixed>

declare export var Kind: {|
  +store: kind,
  +event: kind,
  +effect: kind,
  +domain: kind,
|}

declare export type Observer<A> = {+next?: (value: A) => void, ...}

declare export type Subscription = {
  (): void,
  unsubscribe(): void,
  ...
}
declare export interface Unit<T> {
  +kind: kind;
}
declare export class Event<Payload> implements Unit<Payload> {
  (payload: Payload): Payload;
  +kind: kind;
  watch(watcher: (payload: Payload) => any): Subscription;
  map<T>(fn: (payload: Payload) => T): Event<T>;
  filter(config: {|
    fn(payload: Payload): boolean,
  |}): Event<Payload>;
  /**
  * @deprecated This form is deprecated, use \`filterMap\` method instead.
  */
  filter<T>(fn: (payload: Payload) => T | void): Event<T>;
  filterMap<T>(fn: (payload: Payload) => T | void): Event<T>;
  prepend<Before>(fn: (_: Before) => Payload): Event<Before>;
  subscribe(observer: Observer<Payload>): Subscription;
  thru<U>(fn: (event: Event<Payload>) => U): U;
  getType(): string;
}

declare export class Future<Params, Done, Fail> extends Promise<Done> {
  +args: Params;
  anyway(): Promise<void>;
  cache(): Done | void;
}

declare export class Effect<Params, Done, Fail = Error>
  implements Unit<Params> {
  (payload: Params): Future<Params, Done, Fail>;
  +kind: kind;
  +done: Event<{|
    +params: Params,
    +result: Done,
  |}>;
  +fail: Event<{|
    +params: Params,
    +error: Fail,
  |}>;
  +finally: Event<{|
    params: Params,
  |}>;
  +use: {|
    (asyncFunction: (params: Params) => Promise<Done> | Done): this,
    getCurrent(): (params: Params) => Promise<Done>,
  |};
  pending: Store<boolean>;
  watch(watcher: (payload: Params) => any): Subscription;
  prepend<Before>(fn: (_: Before) => Params): Event<Before>;
  map<T>(fn: (params: Params) => T): Event<T>;
  subscribe(observer: Observer<Params>): Subscription;
  getType(): string;
}

declare export class Store<State> implements Unit<State> {
  +kind: kind;
  reset(...triggers: Array<Unit<any>>): this;
  getState(): State;
  map<T>(fn: (state: State, lastState?: T) => T, _: void): Store<T>;
  map<T>(fn: (state: State, lastState: T) => T, firstState: T): Store<T>;
  on<E>(
    trigger: Unit<E>,
    handler: (state: State, payload: E) => State | void,
  ): this;
  off(trigger: Unit<any>): void;
  subscribe(listener: (state: State) => any): Subscription;
  +updates: Event<State>;
  +fail: Event<{|
    error: mixed,
    state: State,
  |}>;
  watch<E>(
    watcher: (state: State, payload: void) => any,
    _: void,
  ): Subscription;
  watch<E>(
    trigger: Unit<E>,
    watcher: (state: State, payload: E) => any,
  ): Subscription;
  thru<U>(fn: (store: Store<State>) => U): U;
  shortName: string;
  defaultState: State;
}

declare export function isUnit(obj: mixed): boolean %checks(typeof obj ===
  'object' &&
  obj !== null &&
  (obj instanceof Event || obj instanceof Store || obj instanceof Effect))
declare export function isStore(obj: mixed): boolean %checks(typeof obj ===
  'object' &&
  obj !== null &&
  obj instanceof Store)
declare export function isEvent(obj: mixed): boolean %checks(typeof obj ===
  'object' &&
  obj !== null &&
  obj instanceof Event)
declare export function isEffect(obj: mixed): boolean %checks(typeof obj ===
  'object' &&
  obj !== null &&
  obj instanceof Effect)
declare export function isDomain(obj: mixed): boolean %checks(typeof obj ===
  'object' &&
  obj !== null &&
  obj instanceof Domain)

declare export var is: {|
  unit(obj: mixed): boolean,
  store(obj: mixed): boolean,
  event(obj: mixed): boolean,
  effect(obj: mixed): boolean,
  domain(obj: mixed): boolean,
|}

declare class InternalStore<State> extends Store<State> implements Unit<State> {
  setState(state: State): void;
}

declare export class Domain {
  +kind: kind;
  onCreateEvent(hook: (newEvent: Event<mixed>) => any): Subscription;
  onCreateEffect(
    hook: (newEffect: Effect<mixed, mixed, mixed>) => any,
  ): Subscription;
  onCreateStore(
    hook: (newStore: InternalStore<mixed_non_void>) => any,
  ): Subscription;
  onCreateDomain(hook: (newDomain: Domain) => any): Subscription;
  event<Payload>(name?: string): Event<Payload>;
  effect<Params, Done, Fail>(
    name?: string,
    config?: {
      handler?: (params: Params) => Promise<Done> | Done,
      ...
    },
  ): Effect<Params, Done, Fail>;
  domain(name?: string): Domain;
  store<State>(
    defaultState: State,
    config?: {name?: string, ...},
  ): Store<State>;
  getType(): string;
}
declare export type ID = string
declare export type StateRef = {|
  current: any,
  id: ID,
|}
//prettier-ignore
declare export type Cmd =
  | Update
  | Run
  | Filter
  | Emit
  | Compute
  | Tap
  | Barrier

declare export type Barrier = {|
  +id: ID,
  +type: 'barrier',
  +group: 'cmd',
  +data: {|
    +barrierID: ID,
  |},
|}
declare export type Update = {|
  +id: ID,
  +type: 'update',
  +group: 'cmd',
  +data: {|
    store: StateRef,
  |},
|}
declare export type Run = {|
  +id: ID,
  +type: 'run',
  +group: 'cmd',
  +data: {|
    fn: (data: any, scope: {[field: string]: any, ...}) => any,
  |},
|}
declare export type Filter = {|
  +id: ID,
  +type: 'filter',
  +group: 'cmd',
  +data: {|
    fn: (data: any, scope: {[field: string]: any, ...}) => boolean,
  |},
|}
declare export type Emit = {|
  +id: ID,
  +type: 'emit',
  +group: 'cmd',
  +data: {|
    fullName: string,
  |},
|}
declare export type Compute = {|
  +id: ID,
  +type: 'compute',
  +group: 'cmd',
  +data: {|
    fn: (data: any, scope: {[field: string]: any, ...}) => any,
  |},
|}
declare export type Tap = {|
  +id: ID,
  +type: 'tap',
  +group: 'cmd',
  +data: {|
    fn: (data: any, scope: {[field: string]: any, ...}) => any,
  |},
|}
declare export type Step = /*::interface extends Unit<any>*/ {
  +from: Array<Step>,
  +next: Array<Step>,
  +seq: Array<Cmd>,
  +scope: {[field: string]: any, ...},
}
declare export var step: {|
  emit(data: {|
    fullName: string,
  |}): Emit,
  compute(data: {|
    fn: (data: any, scope: {[field: string]: any, ...}) => any,
  |}): Compute,
  tap(data: {|
    fn: (data: any, scope: {[field: string]: any, ...}) => any,
  |}): Tap,
  filter(data: {|
    fn: (data: any, scope: {[field: string]: any, ...}) => boolean,
  |}): Filter,
  update(data: {|
    store: StateRef,
  |}): Update,
  run(data: {|
    fn: (data: any, scope: {[field: string]: any, ...}) => any,
  |}): Run,
|}
declare export function forward<T>(opts: {|
  +from: Unit<T>,
  +to: Unit<T>,
|}): Subscription

declare export function merge<T>(events: $ReadOnlyArray<Unit<T>>): Event<T>

declare export function clearNode(
  unit: Unit<any> | Step,
  opts?: {deep?: boolean, ...},
): void
declare export function createNode(opts: {|
  +node: Array<Cmd>,
  +child?: Array<Unit<any> | Step>,
  +from?: Array<Unit<any> | Step>,
  +scope?: {[field: string]: any, ...},
|}): Step

declare export function launch<T>(unit: Unit<T>, payload: T): void

declare export function fromObservable<T>(observable: mixed): Event<T>

declare export function createEvent<E>(eventName?: string): Event<E>

declare export function createEffect<Params, Done, Fail>(
  effectName?: string,
  config?: {
    handler?: (params: Params) => Promise<Done> | Done,
    ...
  },
): Effect<Params, Done, Fail>

declare export function createStore<State>(
  defaultState: State,
  config?: {name?: string, ...},
): Store<State>
declare export function setStoreName<State>(
  store: Store<State>,
  name: string,
): void

declare export function createStoreObject<
  State: {+[key: string]: Store<any> | any, ...},
>(
  obj: State,
): Store<
  $ObjMap<
    State,
    //prettier-ignore
    <S>(field: Store<S> | S) => S,
  >,
>
declare export function extract<
  State: {+[key: string]: Store<any> | any, ...},
  NextState: {+[key: string]: Store<any> | any, ...},
>(
  store: Store<State>,
  extractor: (_: State) => NextState,
): Store<
  $ObjMap<
    NextState,
    //prettier-ignore
    <S>(field: Store<S> | S) => S,
  >,
>
declare export function createApi<
  S,
  Api: {+[name: string]: (store: S, e: any) => S, ...},
>(
  store: Store<S>,
  api: Api,
): $ObjMap<Api, <E>(h: (store: S, e: E) => S) => Event<E>>
declare export function restoreObject<
  State: {+[key: string]: Store<any> | any, ...},
>(
  state: State,
): $ObjMap<
  State,
  //prettier-ignore
  <S>(field: Store<S> | S) => Store<S>,
>

declare export function restoreEffect<Done>(
  effect: Effect<any, Done, any>,
  defaultState: Done,
): Store<Done>

declare export function restoreEvent<E>(
  event: Event<E>,
  defaultState: E,
): Store<E>

declare export function restore<Done>(
  effect: Effect<any, Done, any>,
  defaultState: Done,
): Store<Done>
declare export function restore<E>(event: Event<E>, defaultState: E): Store<E>
declare export function restore<State: {+[key: string]: Store<any> | any, ...}>(
  state: State,
): $ObjMap<
  State,
  //prettier-ignore
  <S>(field: Store<S> | S) => Store<S>,
>
declare export function createDomain(domainName?: string): Domain

declare export function sample<A>(config: {|
  +source: Unit<A>,
  +clock: Unit<any>,
  +target?: Unit<A>,
|}): Unit<A>
declare export function sample<A, B, C>(config: {|
  +source: Unit<A>,
  +clock: Unit<B>,
  +target?: Unit<C>,
  fn(source: A, clock: B): C,
|}): Unit<C>
declare export function sample<A>(
  source: Store<A>,
  clock?: Store<any>,
): Store<A>
declare export function sample<A>(
  source: Event<A> | Effect<A, any, any>,
  clock: Store<any>,
): Event<A>
declare export function sample<A>(
  source: Event<A> | Store<A> | Effect<A, any, any>,
  clock: Event<any> | Effect<any, any, any>,
): Event<A>

declare export function sample<A, B, C>(
  source: Store<A>,
  clock: Store<B>,
  fn: (source: A, clock: B) => C,
): Store<C>
declare export function sample<A, B, C>(
  source: Event<A> | Effect<A, any, any>,
  clock: Store<B>,
  fn: (source: A, clock: B) => C,
): Event<A>
declare export function sample<A, B, C>(
  source: Event<A> | Store<A> | Effect<A, any, any>,
  clock: Event<B> | Effect<B, any, any>,
  fn: (source: A, clock: B) => C,
): Event<C>

declare export function invariant(
  condition: boolean,
  format: string,
  ...args: mixed[]
): void
declare export function warning(
  condition: boolean,
  format: string,
  ...args: mixed[]
): void

declare export function combine<R>(fn: () => R): Store<R>
declare export function combine<A, R>(a: Store<A>, fn: (a: A) => R): Store<R>
declare export function combine<A, B, R>(
  a: Store<A>,
  b: Store<B>,
  fn: (a: A, b: B) => R,
): Store<R>
declare export function combine<A, B, C, R>(
  a: Store<A>,
  b: Store<B>,
  c: Store<C>,
  fn: (a: A, b: B, c: C) => R,
): Store<R>
declare export function combine<A, B, C, D, R>(
  a: Store<A>,
  b: Store<B>,
  c: Store<C>,
  d: Store<D>,
  fn: (a: A, b: B, c: C, d: D) => R,
): Store<R>
declare export function combine<A, B, C, D, E, R>(
  a: Store<A>,
  b: Store<B>,
  c: Store<C>,
  d: Store<D>,
  e: Store<E>,
  fn: (a: A, b: B, c: C, d: D, e: E) => R,
): Store<R>
declare export function combine<A, B, C, D, E, F, R>(
  a: Store<A>,
  b: Store<B>,
  c: Store<C>,
  d: Store<D>,
  e: Store<E>,
  f: Store<F>,
  fn: (a: A, b: B, c: C, d: D, e: E, f: F) => R,
): Store<R>
declare export function combine<A, B, C, D, E, F, G, R>(
  a: Store<A>,
  b: Store<B>,
  c: Store<C>,
  d: Store<D>,
  e: Store<E>,
  f: Store<F>,
  g: Store<G>,
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => R,
): Store<R>
declare export function combine<A, B, C, D, E, F, G, H, R>(
  a: Store<A>,
  b: Store<B>,
  c: Store<C>,
  d: Store<D>,
  e: Store<E>,
  f: Store<F>,
  g: Store<G>,
  h: Store<H>,
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => R,
): Store<R>
declare export function combine<A, B, C, D, E, F, G, H, I, R>(
  a: Store<A>,
  b: Store<B>,
  c: Store<C>,
  d: Store<D>,
  e: Store<E>,
  f: Store<F>,
  g: Store<G>,
  h: Store<H>,
  i: Store<I>,
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => R,
): Store<R>
declare export function combine<A, B, C, D, E, F, G, H, I, J, R>(
  a: Store<A>,
  b: Store<B>,
  c: Store<C>,
  d: Store<D>,
  e: Store<E>,
  f: Store<F>,
  g: Store<G>,
  h: Store<H>,
  i: Store<I>,
  j: Store<J>,
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => R,
): Store<R>
declare export function combine<A, B, C, D, E, F, G, H, I, J, K, R>(
  a: Store<A>,
  b: Store<B>,
  c: Store<C>,
  d: Store<D>,
  e: Store<E>,
  f: Store<F>,
  g: Store<G>,
  h: Store<H>,
  i: Store<I>,
  j: Store<J>,
  k: Store<K>,
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K) => R,
): Store<R>

}

`

export const effectorGlobal = `

declare var version: string

//prettier-ignore
declare type kind =
  | 'store'
  | 'event'
  | 'effect'
  | 'domain'

declare type mixed_non_void =
  | null
  | string
  | number
  | boolean
  | {}
  | $ReadOnlyArray<mixed>

declare var Kind: {|
  +store: kind,
  +event: kind,
  +effect: kind,
  +domain: kind,
|}

declare type Observer<A> = {+next?: (value: A) => void, ...}

declare type Subscription = {
  (): void,
  unsubscribe(): void,
  ...
}
declare interface Unit<T> {
  +kind: kind;
}
declare class Effector_Event<Payload> implements Unit<Payload> {
  (payload: Payload): Payload;
  +kind: kind;
  watch(watcher: (payload: Payload) => any): Subscription;
  map<T>(fn: (payload: Payload) => T): Effector_Event<T>;
  filter(config: {|
    fn(payload: Payload): boolean,
  |}): Effector_Event<Payload>;
  /**
   * @deprecated This form is deprecated, use \`filterMap\` method instead.
   */
  filter<T>(fn: (payload: Payload) => T | void): Effector_Event<T>;
  filterMap<T>(fn: (payload: Payload) => T | void): Effector_Event<T>;
  prepend<Before>(fn: (_: Before) => Payload): Effector_Event<Before>;
  subscribe(observer: Observer<Payload>): Subscription;
  thru<U>(fn: (event: Effector_Event<Payload>) => U): U;
  getType(): string;
}

declare class Future<Params, Done, Fail> extends Promise<Done> {
  +args: Params;
  anyway(): Promise<void>;
  cache(): Done | void;
}

declare class Effect<Params, Done, Fail = Error>
  implements Unit<Params> {
  (payload: Params): Future<Params, Done, Fail>;
  +kind: kind;
  +done: Effector_Event<{|
    +params: Params,
    +result: Done,
  |}>;
  +fail: Effector_Event<{|
    +params: Params,
    +error: Fail,
  |}>;
  +finally: Effector_Event<{|
    params: Params,
  |}>;
  +use: {|
    (asyncFunction: (params: Params) => Promise<Done> | Done): this,
    getCurrent(): (params: Params) => Promise<Done>,
  |};
  pending: Store<boolean>;
  watch(watcher: (payload: Params) => any): Subscription;
  prepend<Before>(fn: (_: Before) => Params): Effector_Event<Before>;
  map<T>(fn: (params: Params) => T): Effector_Event<T>;
  subscribe(observer: Observer<Params>): Subscription;
  getType(): string;
}

declare class Store<State> implements Unit<State> {
  +kind: kind;
  reset(...triggers: Array<Unit<any>>): this;
  getState(): State;
  map<T>(fn: (state: State, lastState?: T) => T, _: void): Store<T>;
  map<T>(fn: (state: State, lastState: T) => T, firstState: T): Store<T>;
  on<E>(
    trigger: Unit<E>,
    handler: (state: State, payload: E) => State | void,
  ): this;
  off(trigger: Unit<any>): void;
  subscribe(listener: (state: State) => any): Subscription;
  +updates: Effector_Event<State>;
  +fail: Effector_Event<{|
    error: mixed,
    state: State,
  |}>;
  watch<E>(
    watcher: (state: State, payload: void) => any,
    _: void,
  ): Subscription;
  watch<E>(
    trigger: Unit<E>,
    watcher: (state: State, payload: E) => any,
  ): Subscription;
  thru<U>(fn: (store: Store<State>) => U): U;
  shortName: string;
  defaultState: State;
}

declare function isUnit(obj: mixed): boolean %checks(typeof obj ===
  'object' &&
  obj !== null &&
  (obj instanceof Effector_Event || obj instanceof Store || obj instanceof Effect))
declare function isStore(obj: mixed): boolean %checks(typeof obj ===
  'object' &&
  obj !== null &&
  obj instanceof Store)
declare function isEvent(obj: mixed): boolean %checks(typeof obj ===
  'object' &&
  obj !== null &&
  obj instanceof Effector_Event)
declare function isEffect(obj: mixed): boolean %checks(typeof obj ===
  'object' &&
  obj !== null &&
  obj instanceof Effect)
declare function isDomain(obj: mixed): boolean %checks(typeof obj ===
  'object' &&
  obj !== null &&
  obj instanceof Domain)

declare var is: {|
  unit(obj: mixed): boolean,
  store(obj: mixed): boolean,
  event(obj: mixed): boolean,
  effect(obj: mixed): boolean,
  domain(obj: mixed): boolean,
|}

declare class InternalStore<State> extends Store<State> implements Unit<State> {
  setState(state: State): void;
}

declare class Domain {
  +kind: kind;
  onCreateEvent(hook: (newEvent: Effector_Event<mixed>) => any): Subscription;
  onCreateEffect(
    hook: (newEffect: Effect<mixed, mixed, mixed>) => any,
  ): Subscription;
  onCreateStore(
    hook: (newStore: InternalStore<mixed_non_void>) => any,
  ): Subscription;
  onCreateDomain(hook: (newDomain: Domain) => any): Subscription;
  event<Payload>(name?: string): Effector_Event<Payload>;
  effect<Params, Done, Fail>(
    name?: string,
    config?: {
      handler?: (params: Params) => Promise<Done> | Done,
      ...
    },
  ): Effect<Params, Done, Fail>;
  domain(name?: string): Domain;
  store<State>(
    defaultState: State,
    config?: {name?: string, ...},
  ): Store<State>;
  getType(): string;
}
declare type ID = string
declare type StateRef = {|
  current: any,
  id: ID,
|}
//prettier-ignore
declare type Cmd =
  | Update
  | Run
  | Filter
  | Emit
  | Compute
  | Tap
  | Barrier

declare type Barrier = {|
  +id: ID,
  +type: 'barrier',
  +group: 'cmd',
  +data: {|
    +barrierID: ID,
  |},
|}
declare type Update = {|
  +id: ID,
  +type: 'update',
  +group: 'cmd',
  +data: {|
    store: StateRef,
  |},
|}
declare type Run = {|
  +id: ID,
  +type: 'run',
  +group: 'cmd',
  +data: {|
    fn: (data: any, scope: {[field: string]: any, ...}) => any,
  |},
|}
declare type Filter = {|
  +id: ID,
  +type: 'filter',
  +group: 'cmd',
  +data: {|
    fn: (data: any, scope: {[field: string]: any, ...}) => boolean,
  |},
|}
declare type Emit = {|
  +id: ID,
  +type: 'emit',
  +group: 'cmd',
  +data: {|
    fullName: string,
  |},
|}
declare type Compute = {|
  +id: ID,
  +type: 'compute',
  +group: 'cmd',
  +data: {|
    fn: (data: any, scope: {[field: string]: any, ...}) => any,
  |},
|}
declare type Tap = {|
  +id: ID,
  +type: 'tap',
  +group: 'cmd',
  +data: {|
    fn: (data: any, scope: {[field: string]: any, ...}) => any,
  |},
|}
declare type Step = /*::interface extends Unit<any>*/ {
  +from: Array<Step>,
  +next: Array<Step>,
  +seq: Array<Cmd>,
  +scope: {[field: string]: any, ...},
}
declare var step: {|
  emit(data: {|
    fullName: string,
  |}): Emit,
  compute(data: {|
    fn: (data: any, scope: {[field: string]: any, ...}) => any,
  |}): Compute,
  tap(data: {|
    fn: (data: any, scope: {[field: string]: any, ...}) => any,
  |}): Tap,
  filter(data: {|
    fn: (data: any, scope: {[field: string]: any, ...}) => boolean,
  |}): Filter,
  update(data: {|
    store: StateRef,
  |}): Update,
  run(data: {|
    fn: (data: any, scope: {[field: string]: any, ...}) => any,
  |}): Run,
|}
declare function forward<T>(opts: {|
  +from: Unit<T>,
  +to: Unit<T>,
|}): Subscription

declare function merge<T>(events: $ReadOnlyArray<Unit<T>>): Effector_Event<T>

declare function clearNode(
  unit: Unit<any> | Step,
  opts?: {deep?: boolean, ...},
): void
declare function createNode(opts: {|
  +node: Array<Cmd>,
  +child?: Array<Unit<any> | Step>,
  +from?: Array<Unit<any> | Step>,
  +scope?: {[field: string]: any, ...},
|}): Step

declare function launch<T>(unit: Unit<T>, payload: T): void

declare function fromObservable<T>(observable: mixed): Effector_Event<T>

declare function createEvent<E>(eventName?: string): Effector_Event<E>

declare function createEffect<Params, Done, Fail>(
  effectName?: string,
  config?: {
    handler?: (params: Params) => Promise<Done> | Done,
    ...
  },
): Effect<Params, Done, Fail>

declare function createStore<State>(
  defaultState: State,
  config?: {name?: string, ...},
): Store<State>
declare function setStoreName<State>(
  store: Store<State>,
  name: string,
): void

declare function createStoreObject<
  State: {+[key: string]: Store<any> | any, ...},
>(
  obj: State,
): Store<
  $ObjMap<
    State,
    //prettier-ignore
    <S>(field: Store<S> | S) => S,
  >,
>
declare function extract<
  State: {+[key: string]: Store<any> | any, ...},
  NextState: {+[key: string]: Store<any> | any, ...},
>(
  store: Store<State>,
  extractor: (_: State) => NextState,
): Store<
  $ObjMap<
    NextState,
    //prettier-ignore
    <S>(field: Store<S> | S) => S,
  >,
>
declare function createApi<
  S,
  Api: {+[name: string]: (store: S, e: any) => S, ...},
>(
  store: Store<S>,
  api: Api,
): $ObjMap<Api, <E>(h: (store: S, e: E) => S) => Effector_Event<E>>
declare function restoreObject<
  State: {+[key: string]: Store<any> | any, ...},
>(
  state: State,
): $ObjMap<
  State,
  //prettier-ignore
  <S>(field: Store<S> | S) => Store<S>,
>

declare function restoreEffect<Done>(
  effect: Effect<any, Done, any>,
  defaultState: Done,
): Store<Done>

declare function restoreEvent<E>(
  event: Effector_Event<E>,
  defaultState: E,
): Store<E>

declare function restore<Done>(
  effect: Effect<any, Done, any>,
  defaultState: Done,
): Store<Done>
declare function restore<E>(event: Effector_Event<E>, defaultState: E): Store<E>
declare function restore<State: {+[key: string]: Store<any> | any, ...}>(
  state: State,
): $ObjMap<
  State,
  //prettier-ignore
  <S>(field: Store<S> | S) => Store<S>,
>
declare function createDomain(domainName?: string): Domain

declare function sample<A>(config: {|
  +source: Unit<A>,
  +clock: Unit<any>,
  +target?: Unit<A>,
|}): Unit<A>
declare function sample<A, B, C>(config: {|
  +source: Unit<A>,
  +clock: Unit<B>,
  +target?: Unit<C>,
  fn(source: A, clock: B): C,
|}): Unit<C>
declare function sample<A>(
  source: Store<A>,
  clock?: Store<any>,
): Store<A>
declare function sample<A>(
  source: Effector_Event<A> | Effect<A, any, any>,
  clock: Store<any>,
): Effector_Event<A>
declare function sample<A>(
  source: Effector_Event<A> | Store<A> | Effect<A, any, any>,
  clock: Effector_Event<any> | Effect<any, any, any>,
): Effector_Event<A>

declare function sample<A, B, C>(
  source: Store<A>,
  clock: Store<B>,
  fn: (source: A, clock: B) => C,
): Store<C>
declare function sample<A, B, C>(
  source: Effector_Event<A> | Effect<A, any, any>,
  clock: Store<B>,
  fn: (source: A, clock: B) => C,
): Effector_Event<A>
declare function sample<A, B, C>(
  source: Effector_Event<A> | Store<A> | Effect<A, any, any>,
  clock: Effector_Event<B> | Effect<B, any, any>,
  fn: (source: A, clock: B) => C,
): Effector_Event<C>

declare function invariant(
  condition: boolean,
  format: string,
  ...args: mixed[]
): void
declare function warning(
  condition: boolean,
  format: string,
  ...args: mixed[]
): void

declare function combine<R>(fn: () => R): Store<R>
declare function combine<A, R>(a: Store<A>, fn: (a: A) => R): Store<R>
declare function combine<A, B, R>(
  a: Store<A>,
  b: Store<B>,
  fn: (a: A, b: B) => R,
): Store<R>
declare function combine<A, B, C, R>(
  a: Store<A>,
  b: Store<B>,
  c: Store<C>,
  fn: (a: A, b: B, c: C) => R,
): Store<R>
declare function combine<A, B, C, D, R>(
  a: Store<A>,
  b: Store<B>,
  c: Store<C>,
  d: Store<D>,
  fn: (a: A, b: B, c: C, d: D) => R,
): Store<R>
declare function combine<A, B, C, D, E, R>(
  a: Store<A>,
  b: Store<B>,
  c: Store<C>,
  d: Store<D>,
  e: Store<E>,
  fn: (a: A, b: B, c: C, d: D, e: E) => R,
): Store<R>
declare function combine<A, B, C, D, E, F, R>(
  a: Store<A>,
  b: Store<B>,
  c: Store<C>,
  d: Store<D>,
  e: Store<E>,
  f: Store<F>,
  fn: (a: A, b: B, c: C, d: D, e: E, f: F) => R,
): Store<R>
declare function combine<A, B, C, D, E, F, G, R>(
  a: Store<A>,
  b: Store<B>,
  c: Store<C>,
  d: Store<D>,
  e: Store<E>,
  f: Store<F>,
  g: Store<G>,
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => R,
): Store<R>
declare function combine<A, B, C, D, E, F, G, H, R>(
  a: Store<A>,
  b: Store<B>,
  c: Store<C>,
  d: Store<D>,
  e: Store<E>,
  f: Store<F>,
  g: Store<G>,
  h: Store<H>,
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => R,
): Store<R>
declare function combine<A, B, C, D, E, F, G, H, I, R>(
  a: Store<A>,
  b: Store<B>,
  c: Store<C>,
  d: Store<D>,
  e: Store<E>,
  f: Store<F>,
  g: Store<G>,
  h: Store<H>,
  i: Store<I>,
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => R,
): Store<R>
declare function combine<A, B, C, D, E, F, G, H, I, J, R>(
  a: Store<A>,
  b: Store<B>,
  c: Store<C>,
  d: Store<D>,
  e: Store<E>,
  f: Store<F>,
  g: Store<G>,
  h: Store<H>,
  i: Store<I>,
  j: Store<J>,
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => R,
): Store<R>
declare function combine<A, B, C, D, E, F, G, H, I, J, K, R>(
  a: Store<A>,
  b: Store<B>,
  c: Store<C>,
  d: Store<D>,
  e: Store<E>,
  f: Store<F>,
  g: Store<G>,
  h: Store<H>,
  i: Store<I>,
  j: Store<J>,
  k: Store<K>,
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K) => R,
): Store<R>


`
