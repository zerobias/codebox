//@flow

export const effectorReact = `

declare module 'effector-react' {

import type {
  ComponentType,
  Component,
  ElementConfig,
  Node,
  Context as ContextType,
} from 'react'
import type {Store, Event} from 'effector'

declare export type StoreConsumer<State> = ComponentType<{|
  children: (state: State) => Node,
|}>

declare export type StoreComponent<State> = ComponentType<{|
  children: (state: State) => Node,
|}>

declare export type Gate<Props = {||}> = Class<Component<Props, {||}>> & {|
  isOpen: boolean,
  isTerminated: boolean,
  open: Event<void>,
  close: Event<void>,
  status: Store<boolean>,
  destructor: Event<void>,
  current: Props,
  state: Store<Props>,
  childGate<Next>(childName?: string): Gate<Next>,
|}

declare export type StoreView<State, Props = {||}> = ComponentType<Props> & {|
  mounted: Event<{|
    props: Props,
    state: State,
  |}>,
  unmounted: Event<{|
    props: Props,
    state: State,
  |}>,
|}

declare export function useStore<State>(store: Store<State>): State
declare export function useStoreMap<
  State,
  Result,
  Keys: $ReadOnlyArray<any>,
>(opts: {|
  +store: Store<State>,
  +keys: Keys,
  fn(state: State, keys: Keys): Result,
|}): Result
declare export function useList<T>(
  list: Store<T[]> | Store<$ReadOnlyArray<T>>,
  renderItem:
    | {|
        +keys?: any[],
        fn(item: T, index: number): Node,
      |}
    | ((item: T, index: number) => Node),
): Node
declare export function useGate<Props>(Gate: Gate<Props>, props?: Props): void

declare export function createGate<Props: {...}>(name?: string): Gate<Props>
declare export function createGate<Props>(
  name: string,
  defaultState: Props,
): Gate<Props>

declare export function createComponent<
  Props,
  Shape: {+[key: string]: Store<any> | any, ...},
>(
  store: Shape,
  view: (
    props: Props,
    state: $ObjMap<
      Shape,
      //prettier-ignore
      <S>(field: Store<S> | S) => S,
    >,
  ) => Node,
): StoreView<
  $ObjMap<
    Shape,
    //prettier-ignore
    <S>(field: Store<S> | S) => S,
  >,
  Props,
>
declare export function createComponent<Props, State>(
  storeFactory: (initialProps: Props) => Store<State>,
  view: (props: Props, state: State) => Node,
): StoreView<State, Props>
declare export function createComponent<Props, State>(
  store: Store<State>,
  view: (props: Props, state: State) => Node,
): StoreView<State, Props>

declare export function createContextComponent<Props, State, Context>(
  store: Store<State>,
  context: ContextType<Context>,
  view: (props: Props, state: State, context: Context) => Node,
): ComponentType<Props>

declare export function connect<
  State: {[key: string]: any, ...},
  Com: ComponentType<*>,
>(
  Component: Com,
): (
  store: Store<State>,
) => ComponentType<$Exact<$Diff<ElementConfig<Com>, State>>>

declare export function createStoreConsumer<State>(
  store: Store<State>,
): StoreConsumer<State>

declare export function createReactState<
  State: {[key: string]: any, ...},
  Com: ComponentType<*>,
>(
  store: Store<State>,
  Component: Com,
): ComponentType<$Exact<$Diff<ElementConfig<Com>, State>>>


}

`
export const effectorReactGlobal = ''
const effectorReactGlobalBroken = `

declare type StoreConsumer<State> = React$ComponentType<{|
  children: (state: State) => React$Node,
|}>

declare type StoreComponent<State> = React$ComponentType<{|
  children: (state: State) => React$Node,
|}>

declare type Gate<Props = {||}> = Class<React$Component<Props, {||}>> & {|
  isOpen: boolean,
  isTerminated: boolean,
  open: Event<void>,
  close: Event<void>,
  status: Store<boolean>,
  destructor: Event<void>,
  current: Props,
  state: Store<Props>,
  childGate<Next>(childName?: string): Gate<Next>,
|}

declare type StoreView<State, Props = {||}> = React$ComponentType<Props> & {|
  mounted: Event<{|
    props: Props,
    state: State,
  |}>,
  unmounted: Event<{|
    props: Props,
    state: State,
  |}>,
|}

declare function useStore<State>(store: Store<State>): State
declare function useStoreMap<
  State,
  Result,
  Keys: $ReadOnlyArray<any>,
>(opts: {|
  +store: Store<State>,
  +keys: Keys,
  fn(state: State, keys: Keys): Result,
|}): Result
declare function useList<T>(
  list: Store<T[]> | Store<$ReadOnlyArray<T>>,
  renderItem:
    | {|
        +keys?: any[],
        fn(item: T, index: number): React$Node,
      |}
    | ((item: T, index: number) => React$Node),
): React$Node
declare function useGate<Props>(Gate: Gate<Props>, props?: Props): void

declare function createGate<Props: {...}>(name?: string): Gate<Props>
declare function createGate<Props>(
  name: string,
  defaultState: Props,
): Gate<Props>

declare function createComponent<
  Props,
  Shape: {+[key: string]: Store<any> | any, ...},
>(
  store: Shape,
  view: (
    props: Props,
    state: $ObjMap<
      Shape,
      //prettier-ignore
      <S>(field: Store<S> | S) => S,
    >,
  ) => React$Node,
): StoreView<
  $ObjMap<
    Shape,
    //prettier-ignore
    <S>(field: Store<S> | S) => S,
  >,
  Props,
>
declare function createComponent<Props, State>(
  storeFactory: (initialProps: Props) => Store<State>,
  view: (props: Props, state: State) => React$Node,
): StoreView<State, Props>
declare function createComponent<Props, State>(
  store: Store<State>,
  view: (props: Props, state: State) => React$Node,
): StoreView<State, Props>


declare function createContextComponent<Props, State, Context>(
  store: Store<State>,
  context: React$Context<Context>,
  view: (props: Props, state: State, context: Context) => React$Node,
): React$ComponentType<Props>

declare function connect<
  State: {[key: string]: any, ...},
  Com: React$ComponentType<*>,
>(
  Component: Com,
): (
  store: Store<State>,
) => React$ComponentType<$Exact<$Diff<React$ElementConfig<Com>, State>>>

declare function createStoreConsumer<State>(
  store: Store<State>,
): StoreConsumer<State>

declare function createReactState<
  State: {[key: string]: any, ...},
  Com: React$ComponentType<*>,
>(
  store: Store<State>,
  Component: Com,
): React$ComponentType<$Exact<$Diff<React$ElementConfig<Com>, State>>>


`
