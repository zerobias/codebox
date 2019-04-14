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

declare export var Kind: {|
  /*::+*/ store: kind,
  /*::+*/ event: kind,
  /*::+*/ effect: kind,
  /*::+*/ domain: kind,
|}

declare export type Subscriber<A> = {+next?: (value: A) => void, ...}

declare export type Subscription = {
  (): void,
  unsubscribe(): void,
  ...
}
declare export interface Unit<T> {
  /*::+*/ kind: kind;
}
declare export class Event<Payload> implements Unit<Payload> {
  (payload: Payload): Payload;
  /*::+*/ kind: kind;
  watch(watcher: (payload: Payload) => any): Subscription;
  map<T>(fn: (_: Payload) => T): Event<T>;
  filter<T>(fn: (_: Payload) => T | void): Event<T>;
  prepend<Before>(fn: (_: Before) => Payload): Event<Before>;
  subscribe(subscriber: Subscriber<Payload>): Subscription;
  getType(): string;
}

declare export class Future<Params, Done, Fail> extends Promise<Done> {
  /*::+*/ args: Params;
  anyway(): Promise<void>;
  cache(): Done | void;
}

declare export class Effect<Params, Done, Fail = Error>
  implements Unit<Params> {
  (payload: Params): Future<Params, Done, Fail>;
  /*::+*/ kind: kind;
  /*::+*/ done: Event<{|
    params: Params,
    result: Done,
  |}>;
  /*::+*/ fail: Event<{|
    params: Params,
    error: Fail,
  |}>;
  /*::+*/ use: {|
    (asyncFunction: (params: Params) => Promise<Done> | Done): this,
    getCurrent(): (params: Params) => Promise<Done>,
  |};
  watch(watcher: (payload: Params) => any): Subscription;
  prepend<Before>(fn: (_: Before) => Params): Event<Before>;
  //map<T>(fn: (_: E) => T): Event<T>,
  subscribe(subscriber: Subscriber<Params>): Subscription;
  getType(): string;
}

declare export class Store<State> implements Unit<State> {
  /*::+*/ kind: kind;
  reset(trigger: Unit<any>): this;
  getState(): State;
  map<T>(fn: (_: State, lastState?: T) => T, _: void): Store<T>;
  map<T>(fn: (_: State, lastState: T) => T, firstState: T): Store<T>;
  on<E>(
    trigger: Unit<E>,
    handler: (state: State, payload: E) => State | void,
  ): this;
  off(trigger: Unit<any>): void;
  subscribe(listener: any): Subscription;
  watch<E>(
    watcher: (state: State, payload: void, type: string) => any,
    __: void,
  ): Subscription;
  watch<E>(
    trigger: Unit<E>,
    watcher: (state: State, payload: E, type: string) => any,
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

declare export class Domain {
  /*::+*/ kind: kind;
  onCreateEvent(hook: (newEvent: Event<mixed>) => any): Subscription;
  onCreateEffect(
    hook: (newEffect: Effect<mixed, mixed, mixed>) => any,
  ): Subscription;
  onCreateStore(hook: (newStore: Store<mixed>) => any): Subscription;
  onCreateDomain(hook: (newDomain: Domain) => any): Subscription;
  event<Payload>(name?: string): Event<Payload>;
  effect<Params, Done, Fail>(
    name?: string,
    config?: {handler?: (params: Params) => Promise<Done> | Done, ...},
  ): Effect<Params, Done, Fail>;
  domain(name?: string): Domain;
  store<State>(defaultState: State, config?: {name?: string}): Store<State>;
  getType(): string;
}
declare export type ID = string
declare export type StateRef = {
  current: any,
  id: ID,
}
//prettier-ignore
declare export type Cmd =
  | Update
  | Run
  | Filter
  | Emit
  | Compute
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
    fn: (data: any, scope: {[field: string]: any}) => any,
  |},
|}

declare export type Filter = {|
  +id: ID,
  +type: 'filter',
  +group: 'cmd',
  +data: {|
    fn: (data: any, scope: {[field: string]: any}) => boolean,
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
    fn: (data: any, scope: {[field: string]: any}) => any,
  |},
|}
declare export type Step = {
  +from: Array<Step>,
  +next: Array<Step>,
  +seq: Array<Cmd>,
  +scope: {[field: string]: any},
}
declare export var step: {|
  emit(data: {|
    fullName: string,
  |}): Emit,
  compute(data: {|
    fn: (data: any, scope: {[field: string]: any}) => any,
  |}): Compute,
  filter(data: {|
    fn: (data: any, scope: {[field: string]: any}) => boolean,
  |}): Filter,
  update(data: {|
    store: StateRef,
  |}): Update,
  run(data: {|
    fn: (data: any, scope: {[field: string]: any}) => any,
  |}): Run,
|}
declare export function forward<T>(opts: {|
  /*::+*/ from: Unit<T>,
  /*::+*/ to: Unit<T>,
|}): Subscription
declare export function clearNode(
  unit: Unit<any> | Step,
  opts?: {deep?: boolean},
): void
declare export function createNode(opts: {|
  +node: Array<Cmd>,
  +child?: Array<Unit<any> | Step>,
  +from?: Array<Unit<any> | Step>,
  +scope?: {[field: string]: any},
|}): Step

declare export function launch(unit: Unit<any> | Step, payload: any): void

declare export function createEvent<E>(eventName?: string): Event<E>

declare export function createEffect<Params, Done, Fail>(
  effectName?: string,
  config?: {handler?: (params: Params) => Promise<Done> | Done, ...},
): Effect<Params, Done, Fail>

declare export function createStore<State>(
  defaultState: State,
  config?: {name?: string},
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
  Api: {[name: string]: (store: S, e: any) => S, ...},
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

declare export function sample<A, B>(
  source: Event<A>,
  sampler: Event<B> | Store<B>,
): Event<A>
declare export function sample<A, B>(
  source: Store<A>,
  sampler: Event<B> | Store<B>,
): Store<A>
declare export function sample<A, B>(
  source: Effect<A, any, any>,
  sampler: Event<B> | Store<B>,
): Event<A>

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

declare var Kind: {|
  /*::+*/ store: kind,
  /*::+*/ event: kind,
  /*::+*/ effect: kind,
  /*::+*/ domain: kind,
|}

declare type Subscriber<A> = {+next?: (value: A) => void, ...}

declare type Subscription = {
  (): void,
  unsubscribe(): void,
  ...
}
declare interface Unit<T> {
  /*::+*/ kind: kind;
}
declare class Effector_Event<Payload> implements Unit<Payload> {
  (payload: Payload): Payload;
  /*::+*/ kind: kind;
  watch(watcher: (payload: Payload) => any): Subscription;
  map<T>(fn: (_: Payload) => T): Effector_Event<T>;
  filter<T>(fn: (_: Payload) => T | void): Effector_Event<T>;
  prepend<Before>(fn: (_: Before) => Payload): Effector_Event<Before>;
  subscribe(subscriber: Subscriber<Payload>): Subscription;
  getType(): string;
}

declare class Future<Params, Done, Fail> extends Promise<Done> {
  /*::+*/ args: Params;
  anyway(): Promise<void>;
  cache(): Done | void;
}

declare class Effect<Params, Done, Fail = Error>
  implements Unit<Params> {
  (payload: Params): Future<Params, Done, Fail>;
  /*::+*/ kind: kind;
  /*::+*/ done: Effector_Event<{|
    params: Params,
    result: Done,
  |}>;
  /*::+*/ fail: Effector_Event<{|
    params: Params,
    error: Fail,
  |}>;
  /*::+*/ use: {|
    (asyncFunction: (params: Params) => Promise<Done> | Done): this,
    getCurrent(): (params: Params) => Promise<Done>,
  |};
  watch(watcher: (payload: Params) => any): Subscription;
  prepend<Before>(fn: (_: Before) => Params): Effector_Event<Before>;
  //map<T>(fn: (_: E) => T): Effector_Event<T>,
  subscribe(subscriber: Subscriber<Params>): Subscription;
  getType(): string;
}

declare class Store<State> implements Unit<State> {
  /*::+*/ kind: kind;
  reset(trigger: Unit<any>): this;
  getState(): State;
  map<T>(fn: (_: State, lastState?: T) => T, _: void): Store<T>;
  map<T>(fn: (_: State, lastState: T) => T, firstState: T): Store<T>;
  on<E>(
    trigger: Unit<E>,
    handler: (state: State, payload: E) => State | void,
  ): this;
  off(trigger: Unit<any>): void;
  subscribe(listener: any): Subscription;
  watch<E>(
    watcher: (state: State, payload: void, type: string) => any,
    __: void,
  ): Subscription;
  watch<E>(
    trigger: Unit<E>,
    watcher: (state: State, payload: E, type: string) => any,
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
declare function isEffector_Event(obj: mixed): boolean %checks(typeof obj ===
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

declare class Domain {
  /*::+*/ kind: kind;
  onCreateEvent(hook: (newEvent: Effector_Event<mixed>) => any): Subscription;
  onCreateEffect(
    hook: (newEffect: Effect<mixed, mixed, mixed>) => any,
  ): Subscription;
  onCreateStore(hook: (newStore: Store<mixed>) => any): Subscription;
  onCreateDomain(hook: (newDomain: Domain) => any): Subscription;
  event<Payload>(name?: string): Effector_Event<Payload>;
  effect<Params, Done, Fail>(
    name?: string,
    config?: {handler?: (params: Params) => Promise<Done> | Done, ...},
  ): Effect<Params, Done, Fail>;
  domain(name?: string): Domain;
  store<State>(defaultState: State, config?: {name?: string}): Store<State>;
  getType(): string;
}
declare type ID = string
declare type StateRef = {
  current: any,
  id: ID,
}
//prettier-ignore
declare type Cmd =
  | Update
  | Run
  | Filter
  | Emit
  | Compute
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
    fn: (data: any, scope: {[field: string]: any}) => any,
  |},
|}

declare type Filter = {|
  +id: ID,
  +type: 'filter',
  +group: 'cmd',
  +data: {|
    fn: (data: any, scope: {[field: string]: any}) => boolean,
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
    fn: (data: any, scope: {[field: string]: any}) => any,
  |},
|}
declare type Step = {
  +from: Array<Step>,
  +next: Array<Step>,
  +seq: Array<Cmd>,
  +scope: {[field: string]: any},
}
declare var step: {|
  emit(data: {|
    fullName: string,
  |}): Emit,
  compute(data: {|
    fn: (data: any, scope: {[field: string]: any}) => any,
  |}): Compute,
  filter(data: {|
    fn: (data: any, scope: {[field: string]: any}) => boolean,
  |}): Filter,
  update(data: {|
    store: StateRef,
  |}): Update,
  run(data: {|
    fn: (data: any, scope: {[field: string]: any}) => any,
  |}): Run,
|}
declare function forward<T>(opts: {|
  /*::+*/ from: Unit<T>,
  /*::+*/ to: Unit<T>,
|}): Subscription
declare function clearNode(
  unit: Unit<any> | Step,
  opts?: {deep?: boolean},
): void
declare function createNode(opts: {|
  +node: Array<Cmd>,
  +child?: Array<Unit<any> | Step>,
  +from?: Array<Unit<any> | Step>,
  +scope?: {[field: string]: any},
|}): Step

declare function launch(unit: Unit<any> | Step, payload: any): void

declare function createEvent<E>(eventName?: string): Effector_Event<E>

declare function createEffect<Params, Done, Fail>(
  effectName?: string,
  config?: {handler?: (params: Params) => Promise<Done> | Done, ...},
): Effect<Params, Done, Fail>

declare function createStore<State>(
  defaultState: State,
  config?: {name?: string},
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
  Api: {[name: string]: (store: S, e: any) => S, ...},
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

declare function sample<A, B>(
  source: Effector_Event<A>,
  sampler: Effector_Event<B> | Store<B>,
): Effector_Event<A>
declare function sample<A, B>(
  source: Store<A>,
  sampler: Effector_Event<B> | Store<B>,
): Store<A>
declare function sample<A, B>(
  source: Effect<A, any, any>,
  sampler: Effector_Event<B> | Store<B>,
): Effector_Event<A>

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
