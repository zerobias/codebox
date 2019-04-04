//@flow

export const bom = `
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* BOM */

declare class Screen {
  availHeight: number;
  availLeft: number;
  availTop: number;
  availWidth: number;
  colorDepth: number;
  height: number;
  left: number;
  mozOrientation?: string;
  onmozorientationchange?: any;
  orientation?: {
    lock(): Promise<void>;
    unlock(): void;
    angle: number;
    onchange: () => mixed;
    type: 'portrait-primary' | 'portrait-secondary' | 'landscape-primary' | 'landscape-secondary';
  };
  pixelDepth: number;
  top: number;
  width: number;
  mozLockOrientation?: Function;
  mozUnlockOrientation?: Function;
  mozOrientation?: string;
  onmozorientationchange?: Function;
}

declare var screen: Screen;
declare var window: any;

type GamepadButton = {
  pressed: bool;
  value: number;
}
type GamepadHapticActuator = {
  type: 'vibration';
  pulse(value: number, duration: number): Promise<boolean>;
}
type GamepadPose = {
  angularAcceleration: null | Float32Array;
  angularVelocity: null | Float32Array;
  hasOrientation: boolean;
  hasPosition: boolean;
  linearAcceleration: null | Float32Array;
  linearVelocity: null | Float32Array;
  orientation: null | Float32Array;
  position: null | Float32Array;
}
type Gamepad = {
  axes: number[];
  buttons: GamepadButton[];
  connected: bool;
  displayId?: number;
  hapticActuators?: GamepadHapticActuator[];
  hand?: '' | 'left' | 'right';
  id: string;
  index: number;
  mapping: string;
  pose?: null | GamepadPose;
  timestamp: number;
}

type BatteryManager = {
    charging: boolean;
    chargingTime: number;
    dischargingTime: number;
    level: number;
    onchargingchange: ?Function;
    onchargingtimechange: ?Function;
    ondischargingtimechange: ?Function;
    onlevelchange: ?Function;
}

// https://wicg.github.io/web-share
type ShareData = {
    title?: string;
    text?: string;
    url?: string;
}

declare class NavigatorCommon {
    appName: 'Netscape';
    appVersion: string;
    platform: string;
    userAgent: string;
    language: string;
    languages: Array<string>;
    onLine: boolean;
    hardwareConcurrency: number;
}

declare class Navigator mixins NavigatorCommon {
    activeVRDisplays?: VRDisplay[];
    appCodeName: 'Mozilla';
    buildID: string;
    cookieEnabled: boolean;
    doNotTrack?: any;
    geolocation: Geolocation;
    mediaDevices?: MediaDevices;
    javaEnabled: Function;
    maxTouchPoints: number;
    mimeTypes: MimeTypeArray;
    oscpu: string;
    permissions: any;
    plugins: PluginArray;
    product: 'Gecko';
    productSub: '20030107' | '20100101';
    serviceWorker?: ServiceWorkerContainer;
    vendor: '' | 'Google Inc.' | 'Apple Computer, Inc';
    vendorSub: '';
    getBattery?: () => Promise<BatteryManager>;
    mozGetBattery?: () => Promise<BatteryManager>;
    getGamepads?: () => Object[];
    webkitGetGamepads?: Function;
    mozGetGamepads?: Function;
    mozGamepads?: any;
    gamepads?: any;
    webkitGamepads?: any;
    getVRDisplays?: () => Promise<VRDisplay[]>;
    requestMIDIAccess?: Function;
    registerContentHandler(mimeType: string, uri: string, title: string): void;
    registerProtocolHandler(protocol: string, uri: string, title: string): void;
    requestMediaKeySystemAccess?: (keySystem: string, supportedConfigurations: any[]) => Promise<any>;
    sendBeacon?: Function;
    getUserMedia?: Function;
    webkitGetUserMedia?: Function;
    mozGetUserMedia?: Function;
    msGetUserMedia?: Function;
    taintEnabled?: Function;
    vibrate?: (pattern: number|number[]) => bool;
    mozVibrate?: (pattern: number|number[]) => bool;
    webkitVibrate?: (pattern: number|number[]) => bool;
    share?: (shareData: ShareData) => Promise<void>;
    clipboard: Clipboard;
    credentials?: CredMgmtCredentialsContainer;
}

declare class Clipboard extends EventTarget {
    read(): Promise<DataTransfer>;
    readText(): Promise<string>;
    write(data: DataTransfer): Promise<void>;
    writeText(data: string): Promise<void>;
}

declare var navigator: Navigator;

declare class MimeType {
    type: string;
    description: string;
    suffixes: string;
    enabledPlugin: Plugin;
}

declare class MimeTypeArray {
    length: number;
    item(index: number): MimeType;
    namedItem(name: string): MimeType;
    [key: number | string]: MimeType;
}

declare class Plugin {
    description: string;
    filename: string;
    name: string;
    version?: string; // Gecko only
    length: number;
    item(index: number): MimeType;
    namedItem(name: string): MimeType;
    [key: number | string]: MimeType;
}

declare class PluginArray {
    length: number;
    item(index: number): Plugin;
    namedItem(name: string): Plugin;
    refresh(): void;
    [key: number | string]: Plugin;
}

// https://www.w3.org/TR/hr-time-2/#dom-domhighrestimestamp
// https://developer.mozilla.org/en-US/docs/Web/API/DOMHighResTimeStamp
declare type DOMHighResTimeStamp = number;

// https://www.w3.org/TR/navigation-timing-2/
declare class PerformanceTiming {
    connectEnd: number;
    connectStart: number;
    domainLookupEnd: number;
    domainLookupStart: number;
    domComplete: number;
    domContentLoadedEventEnd: number;
    domContentLoadedEventStart: number;
    domInteractive: number;
    domLoading: number;
    fetchStart: number;
    loadEventEnd: number;
    loadEventStart: number;
    navigationStart: number;
    redirectEnd: number;
    redirectStart: number;
    requestStart: number;
    responseEnd: number;
    responseStart: number;
    secureConnectionStart: number;
    unloadEventEnd: number;
    unloadEventStart: number;
}

declare class PerformanceNavigation {
    TYPE_NAVIGATE: 0;
    TYPE_RELOAD: 1;
    TYPE_BACK_FORWARD: 2;
    TYPE_RESERVED: 255;

    type: 0 | 1 | 2 | 255;
    redirectCount: number;
}

type PerformanceEntryFilterOptions = {
    name: string;
    entryType: string;
    initiatorType: string;
}

// https://www.w3.org/TR/performance-timeline-2/
declare class PerformanceEntry {
    name: string;
    entryType: string;
    startTime: DOMHighResTimeStamp;
    duration: DOMHighResTimeStamp;
    toJSON(): string;
}

// https://www.w3.org/TR/resource-timing/
declare class PerformanceResourceTiming extends PerformanceEntry {
    initiatorType: string;
    redirectStart: number;
    redirectEnd: number;
    fetchStart: number;
    domainLookupStart: number;
    domainLookupEnd: number;
    connectStart: number;
    connectEnd: number;
    secureConnectionStart: number;
    requestStart: number;
    responseStart: number;
    responseEnd: number;
}

// https://www.w3.org/TR/navigation-timing-2/
declare class PerformanceNavigationTiming extends PerformanceResourceTiming {
    unloadEventStart: number;
    unloadEventEnd: number;
    domInteractive: number;
    domContentLoadedEventStart: number;
    domContentLoadedEventEnd: number;
    domComplete: number;
    loadEventStart: number;
    loadEventEnd: number;
    type: 'navigate' | 'reload' | 'back_forward' | 'prerender';
    redirectCount: number;
}

declare class Performance {
    navigation: PerformanceNavigation;
    onresourcetimingbufferfull: (ev: Event) => any;
    timing: PerformanceTiming;
    clearMarks(name?: string): void;
    clearMeasures(name?: string): void;
    clearResourceTimings(): void;
    getEntries(options?: PerformanceEntryFilterOptions): Array<PerformanceEntry>;
    getEntriesByName(name: string, type?: string): Array<PerformanceEntry>;
    getEntriesByType(type: string): Array<PerformanceEntry>;
    mark(name: string): void;
    measure(name: string, startMark?: string, endMark?: string): void;
    now(): DOMHighResTimeStamp;
    setResourceTimingBufferSize(maxSize: number): void;
    toJSON(): string;
}

declare var performance: Performance;

declare class History {
    length: number;
    scrollRestoration: 'auto' | 'manual';
    state: any;
    back(): void;
    forward(): void;
    go(delta?: any): void;
    pushState(statedata: any, title: string, url?: string): void;
    replaceState(statedata: any, title: string, url?: string): void;
}

declare var history: History;

declare class Location {
    ancestorOrigins: string[];
    hash: string;
    host: string;
    hostname: string;
    href: string;
    origin: string;
    pathname: string;
    port: string;
    protocol: string;
    search: string;
    assign(url: string): void;
    reload(flag?: boolean): void;
    replace(url: string): void;
    toString(): string;
}

declare var location: Location;

///////////////////////////////////////////////////////////////////////////////

declare class DOMParser {
    parseFromString(source: string, mimeType: string): Document;
}

type FormDataEntryValue = string | File

declare class FormData {
    constructor(form?: HTMLFormElement): void;

    has(name: string): boolean;
    get(name: string): ?FormDataEntryValue;
    getAll(name: string): Array<FormDataEntryValue>;

    set(name: string, value: string): void;
    set(name: string, value: Blob, filename?: string): void;
    set(name: string, value: File, filename?: string): void;

    append(name: string, value: string): void;
    append(name: string, value: Blob, filename?: string): void;
    append(name: string, value: File, filename?: string): void;

    delete(name: string): void;

    keys(): Iterator<string>;
    values(): Iterator<FormDataEntryValue>;
    entries(): Iterator<[string, FormDataEntryValue]>;
}

declare class MutationRecord {
    type: 'attributes' | 'characterData' | 'childList';
    target: Node;
    addedNodes: NodeList<Node>;
    removedNodes: NodeList<Node>;
    previousSibling: ?Node;
    nextSibling: ?Node;
    attributeName: ?string;
    attributeNamespace: ?string;
    oldValue: ?string;
}

type MutationObserverInitRequired =
    | { childList: true }
    | { attributes: true }
    | { characterData: true }

declare type MutationObserverInit = MutationObserverInitRequired & {
    subtree?: boolean;
    attributeOldValue?: boolean;
    characterDataOldValue?: boolean;
    attributeFilter?: Array<string>;
}

declare class MutationObserver {
    constructor(callback: (arr: Array<MutationRecord>, observer: MutationObserver) => any): void;
    observe(target: Node, options: MutationObserverInit): void;
    takeRecords(): Array<MutationRecord>;
    disconnect(): void;
}

declare class DOMRectReadOnly {
  static fromRect(rectangle?: {x: number, y: number, width: number, height: number}): DOMRectReadOnly;
  constructor(x: number, y: number, width: number, height: number): DOMRectReadOnly;
  +bottom: number;
  +height: number;
  +left: number;
  +right: number;
  +top: number;
  +width: number;
  +x: number;
  +y: number;
}

declare class DOMRect extends DOMRectReadOnly {
  static fromRect(rectangle?: {x: number, y: number, width: number, height: number}): DOMRect;
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
  x: number;
  y: number;
}

declare class DOMRectList {
  @@iterator(): Iterator<DOMRect>;
  length: number;
  item(index: number): DOMRect;
[index: number]: DOMRect;
}

declare type IntersectionObserverEntry = {
    boundingClientRect: DOMRectReadOnly,
    intersectionRatio: number,
    intersectionRect: DOMRectReadOnly,
    isIntersecting: boolean,
    rootBounds: DOMRectReadOnly,
    target: HTMLElement,
    time: DOMHighResTimeStamp,
};

declare type IntersectionObserverCallback = (
    entries: Array<IntersectionObserverEntry>,
    observer: IntersectionObserver,
) => any;

declare type IntersectionObserverOptions = {
    root?: Node | null,
    rootMargin?: string,
    threshold?: number | Array<number>,
};

declare class IntersectionObserver {
    constructor(
      callback: IntersectionObserverCallback,
      options?: IntersectionObserverOptions
    ): void,
    observe(target: HTMLElement): void,
    unobserve(target: HTMLElement): void,
    takeRecords(): Array<IntersectionObserverEntry>,
    disconnect(): void,
}

declare class ResizeObserverEntry {
    target: Element;
    contentRect: DOMRectReadOnly;
}

declare class ResizeObserver {
    constructor(callback: (entries: ResizeObserverEntry[], observer: ResizeObserver) => mixed): void;
    observe(target: Element): void;
    unobserve(target: Element): void;
    disconnect(): void;
}

declare var NodeFilter: {
    acceptNode(n: Node): number;
    SHOW_ENTITY_REFERENCE: number;
    SHOW_NOTATION: number;
    SHOW_ENTITY: number;
    SHOW_DOCUMENT: number;
    SHOW_PROCESSING_INSTRUCTION: number;
    FILTER_REJECT: number;
    SHOW_CDATA_SECTION: number;
    FILTER_ACCEPT: number;
    SHOW_ALL: number;
    SHOW_DOCUMENT_TYPE: number;
    SHOW_TEXT: number;
    SHOW_ELEMENT: number;
    SHOW_COMMENT: number;
    FILTER_SKIP: number;
    SHOW_ATTRIBUTE: number;
    SHOW_DOCUMENT_FRAGMENT: number;
};

declare class CloseEvent extends Event {
    code: number;
    reason: string;
    wasClean: boolean;
}

declare class WebSocket extends EventTarget {
    static CONNECTING: 0;
    static OPEN: 1;
    static CLOSING: 2;
    static CLOSED: 3;
    constructor(url: string, protocols?: string | Array<string>): void;
    protocol: string;
    readyState: number;
    bufferedAmount: number;
    onopen: (ev: Event) => any;
    extensions: string;
    onmessage: (ev: MessageEvent) => any;
    onclose: (ev: CloseEvent) => any;
    onerror: (ev: Event) => any;
    binaryType: string;
    url: string;
    close(code?: number, reason?: string): void;
    send(data: any): void;
    CONNECTING: 0;
    OPEN: 1;
    CLOSING: 2;
    CLOSED: 3;
}

declare class Worker extends EventTarget {
    constructor(stringUrl: string): void;
    onerror: null | (ev: Event) => any;
    onmessage: null | (ev: MessageEvent) => any;
    onmessageerror: null | (ev: MessageEvent) => any;
    postMessage(message: any, ports?: any): void;
    terminate(): void;
}

declare class SharedWorker extends EventTarget {
    constructor(stringUrl: string): void;
    port: MessagePort;
    onerror: (ev: Event) => any;
}

declare function importScripts(...urls: Array<string>): void;

declare class WorkerGlobalScope extends EventTarget {
    self: this;
    location: WorkerLocation;
    navigator: WorkerNavigator;
    close(): void;
    importScripts(...urls: Array<string>): void;
    onerror: (ev: Event) => any;
    onlanguagechange: (ev: Event) => any;
    onoffline: (ev: Event) => any;
    ononline: (ev: Event) => any;
    onrejectionhandled: (ev: PromiseRejectionEvent) => any;
    onunhandledrejection: (ev: PromiseRejectionEvent) => any;
}

declare class DedicatedWorkerGlobalScope extends WorkerGlobalScope {
    onmessage: (ev: MessageEvent) => any;
    postMessage(message: any, transfer?: Iterable<Object>): void;
}

declare class SharedWorkerGlobalScope extends WorkerGlobalScope {
    name: string;
    onconnect: (ev: MessageEvent) => any;
}

declare class WorkerLocation {
    origin: string;
    protocol: string;
    host: string;
    hostname: string;
    port: string;
    pathname: string;
    search: string;
    hash: string;
}

declare class WorkerNavigator mixins NavigatorCommon {}

declare class XDomainRequest {
    timeout: number;
    onerror(): any;
    onload(): any;
    onprogress(): any;
    ontimeout(): any;
    +responseText: string;
    +contentType: string;
    open(method: "GET" | "POST", url: string): void;
    abort(): void;
    send(data?: string): void;

    statics: {
        create(): XDomainRequest;
    }
}

declare class XMLHttpRequest extends EventTarget {
    static LOADING: number;
    static DONE: number;
    static UNSENT: number;
    static OPENED: number;
    static HEADERS_RECEIVED: number;
    responseBody: any;
    status: number;
    readyState: number;
    responseText: string;
    responseXML: any;
    responseURL: string;
    ontimeout: ProgressEventHandler;
    statusText: string;
    onreadystatechange: (ev: Event) => any;
    timeout: number;
    onload: ProgressEventHandler;
    response: any;
    withCredentials: boolean;
    onprogress: ProgressEventHandler;
    onabort: ProgressEventHandler;
    responseType: string;
    onloadend: ProgressEventHandler;
    upload: XMLHttpRequestEventTarget;
    onerror: ProgressEventHandler;
    onloadstart: ProgressEventHandler;
    msCaching: string;
    open(method: string, url: string, async?: boolean, user?: string, password?: string): void;
    send(data?: any): void;
    abort(): void;
    getAllResponseHeaders(): string;
    setRequestHeader(header: string, value: string): void;
    getResponseHeader(header: string): string;
    msCachingEnabled(): boolean;
    overrideMimeType(mime: string): void;
    LOADING: number;
    DONE: number;
    UNSENT: number;
    OPENED: number;
    HEADERS_RECEIVED: number;

    statics: {
        create(): XMLHttpRequest;
    }
}

declare class XMLHttpRequestEventTarget extends EventTarget {
    onprogress: ProgressEventHandler;
    onerror: ProgressEventHandler;
    onload: ProgressEventHandler;
    ontimeout: ProgressEventHandler;
    onabort: ProgressEventHandler;
    onloadstart: ProgressEventHandler;
    onloadend: ProgressEventHandler;
}

declare class XMLSerializer {
    serializeToString(target: Node): string;
}

declare class Geolocation {
    getCurrentPosition: (
        success: (position: Position) => any,
        error?: (error: PositionError) => any,
        options?: PositionOptions
    ) => void;
    watchPosition: (
        success: (position: Position) => any,
        error?: (error: PositionError) => any,
        options?: PositionOptions
    ) => number;
    clearWatch: (number) => void;
}

declare class Position {
    coords: Coordinates;
    timestamp: number;
}

declare class Coordinates {
    latitude: number;
    longitude: number;
    altitude?: number;
    accuracy: number;
    altitudeAccuracy?: number;
    heading?: number;
    speed?: number;
}

declare class PositionError {
    code: number;
    message: string;
    PERMISSION_DENIED: number;
    POSITION_UNAVAILABLE: number;
    TIMEOUT: number;
}

type PositionOptions = {
    enableHighAccuracy?: boolean;
    timeout?: number;
    maximumAge?: number;
}

type AudioContextState = 'suspended' | 'running' | 'closed';

declare class BaseAudioContext {
  currentTime: number;
  destination: AudioDestinationNode;
  listener: AudioListener;
  sampleRate: number;
  state: AudioContextState;
  onstatechange: (ev: any) => any;
  createBuffer(numOfChannels: number, length: number, sampleRate: number): AudioBuffer;
  createBufferSource(myMediaElement?: HTMLMediaElement): AudioBufferSourceNode;
  createMediaElementSource(myMediaElement: HTMLMediaElement): MediaElementAudioSourceNode;
  createMediaStreamSource(stream: MediaStream): MediaStreamAudioSourceNode;
  createMediaStreamDestination(): MediaStreamAudioDestinationNode;
  createScriptProcessor(bufferSize: number, numberOfInputChannels: number, numberOfOutputChannels: number): ScriptProcessorNode;
  createAnalyser(): AnalyserNode;
  createBiquadFilter(): BiquadFilterNode;
  createChannelMerger(numberOfInputs?: number): ChannelMergerNode;
  createChannelSplitter(numberOfInputs?: number): ChannelSplitterNode;
  createConvolver(): ConvolverNode;
  createDelay(maxDelayTime?: number): DelayNode;
  createDynamicsCompressor(): DynamicsCompressorNode;
  createGain(): GainNode;
  createIIRFilter (feedforward: Float32Array, feedback: Float32Array): IIRFilterNode;
  createOscillator(): OscillatorNode;
  createPanner(): PannerNode;
  createStereoPanner(): StereoPannerNode;
  createPeriodicWave(real: Float32Array, img: Float32Array, options?: {
    disableNormalization: bool,
  }): PeriodicWave;
  createStereoPanner(): StereoPannerNode;
  createWaveShaper(): WaveShaperNode;
  decodeAudioData(arrayBuffer: ArrayBuffer, decodeSuccessCallback: Function, decodeErrorCallback: Function): void;
  decodeAudioData(arrayBuffer: ArrayBuffer): Promise<AudioBuffer>;
}

declare class AudioTimestamp {
  contextTime: number;
  performanceTime: number;
}

declare class AudioContext extends BaseAudioContext {
  baseLatency: number;
  outputLatency: number;
  getOutputTimestamp(): AudioTimestamp;
  resume(): Promise<void>;
  suspend(): Promise<void>;
  close(): Promise<void>;
  createMediaElementSource(myMediaElement: HTMLMediaElement): MediaElementAudioSourceNode;
  createMediaStreamSource(myMediaStream: MediaStream): MediaStreamAudioSourceNode;
  createMediaStreamTrackSource(myMediaStreamTrack: MediaStreamTrack): MediaStreamTrackAudioSourceNode;
  createMediaStreamDestination(): MediaStreamAudioDestinationNode;
}

declare class OfflineAudioContext extends BaseAudioContext {
  startRendering(): Promise<AudioBuffer>;
  suspend(suspendTime: number): Promise<void>;
  length: number;
  oncomplete: (ev: any) => any;
}

declare class AudioNode {
  context: AudioContext;
  numberOfInputs: number;
  numberOfOutputs: number;
  channelCount: number;
  channelCountMode: any;
  channelInterpretation: 'speakers'|'discrete';
  connect(audioNode: AudioNode, output?: number, input?: number): AudioNode;
  connect(destination: AudioParam, output?: number): void;
  disconnect(destination?: AudioNode, output?: number, input?: number): void;
}

declare class AudioParam extends AudioNode {
  value: number;
  defaultValue: number;
  setValueAtTime(value: number, startTime: number): this;
  linearRampToValueAtTime(value: number, endTime: number): this;
  exponentialRampToValueAtTime(value: number, endTime: number): this;
  setTargetAtTime(target: number, startTime: number, timeConstant: number): this;
  setValueCurveAtTime(values: Float32Array, startTime: number, duration: number): this;
  cancelScheduledValues(startTime: number): this;
}

declare class AudioDestinationNode extends AudioNode {
  maxChannelCount: number;
}

declare class AudioListener extends AudioNode {
  positionX: AudioParam;
  positionY: AudioParam;
  positionZ: AudioParam;
  forwardX: AudioParam;
  forwardY: AudioParam;
  forwardZ: AudioParam;
  upX: AudioParam;
  upY: AudioParam;
  upZ: AudioParam;
  setPosition(x: number, y: number, c: number): void;
  setOrientation(x: number, y: number, z: number, xUp: number, yUp: number, zUp: number): void;
}

declare class AudioBuffer {
  sampleRate: number;
  length: number;
  duration: number;
  numberOfChannels: number;
  getChannelData(channel: number): Float32Array;
  copyFromChannel(destination: Float32Array, channelNumber: number, startInChannel?: number): void;
  copyToChannel(source: Float32Array, channelNumber: number, startInChannel?: number): void;
}

declare class AudioBufferSourceNode extends AudioNode {
  buffer: AudioBuffer;
  detune: AudioParam;
  loop: bool;
  loopStart: number;
  loopEnd: number;
  playbackRate: AudioParam;
  onended: (ev: any) => any;
  start(when?: number, offset?: number, duration?: number): void;
  stop(when?: number): void;
}

declare class CanvasCaptureMediaStream extends MediaStream {
  canvas: HTMLCanvasElement;
  requestFrame(): void;
}

declare class MediaDevices extends EventTarget {
  ondevicechange: (ev: Event) => any;
  enumerateDevices: () => Promise<Array<MediaDeviceInfo>>;
  getSupportedConstraints: Function;
  getDisplayMedia: (constraints?: Object) => Promise<MediaStream>;
  getUserMedia: (constraints: Object) => Promise<MediaStream>;
}

declare class MediaDeviceInfo {
  +deviceId: string;
  +groupId: string;
  +kind: 'videoinput' | 'audioinput' | 'audiooutput';
  +label: string;
}

declare class MediaStream extends EventTarget {
  active: bool;
  ended: bool;
  id: string;
  onactive: (ev: any) => any;
  onaddtrack: (ev: MediaStreamTrackEvent) => any;
  onended: (ev: any) => any;
  oninactive: (ev: any) => any;
  onremovetrack: (ev: any) => any;
  addTrack(track: MediaStreamTrack): void;
  clone(): MediaStream;
  getAudioTracks(): MediaStreamTrack[];
  getTrackById(trackid?: string): ?MediaStreamTrack;
  getTracks(): MediaStreamTrack[];
  getVideoTracks(): MediaStreamTrack[];
  removeTrack(track: MediaStreamTrack): void;
}

declare class MediaStreamTrack extends EventTarget {
  enabled: bool;
  id: string;
  kind: string;
  label: string;
  muted: bool;
  readonly: bool;
  readyState: 'live'|'ended';
  remote: bool;
  onstarted: (ev: any) => any;
  onmute: (ev: any) => any;
  onunmute: (ev: any) => any;
  onoverconstrained: (ev: any) => any;
  onended: (ev: any) => any;
  getConstraints(): any;
  applyConstraints(): any;
  getSettings(): any;
  getCapabilities(): any;
  clone(): MediaStreamTrack;
  stop(): void;
}

declare class MediaStreamTrackEvent extends Event {
  track: MediaStreamTrack;
}

declare class MediaElementAudioSourceNode extends AudioNode {}
declare class MediaStreamAudioSourceNode extends AudioNode {}
declare class MediaStreamTrackAudioSourceNode extends AudioNode {}

declare class MediaStreamAudioDestinationNode extends AudioNode {
  stream: MediaStream;
}

declare class ScriptProcessorNode extends AudioNode {
  bufferSize: number;
  onaudioprocess: (ev: any) => any;
}

declare class AnalyserNode extends AudioNode {
  fftSize: number;
  frequencyBinCount: number;
  minDecibels: number;
  maxDecibels: number;
  smoothingTimeConstant: number;
  getFloatFrequencyData(array: Float32Array): Float32Array;
  getByteFrequencyData(array: Uint8Array): Uint8Array;
  getFloatTimeDomainData(array: Float32Array): Float32Array;
  getByteTimeDomainData(array: Uint8Array): Uint8Array;
}

declare class BiquadFilterNode extends AudioNode {
  frequency: AudioParam;
  detune: AudioParam;
  Q: AudioParam;
  gain: AudioParam;
  type: 'lowpass'|'highpass'|'bandpass'|'lowshelf'|'highshelf'|'peaking'|'notch'|'allpass';
  getFrequencyResponse(frequencyHz: Float32Array, magResponse: Float32Array, phaseResponse: Float32Array): void;
}

declare class ChannelMergerNode extends AudioNode {}
declare class ChannelSplitterNode extends AudioNode {}
declare class ConvolverNode extends AudioNode {
  buffer: AudioBuffer;
  normalize: bool;
}

declare class DelayNode extends AudioNode {
  delayTime: number;
}

declare class DynamicsCompressorNode extends AudioNode {
  threshold: AudioParam;
  knee: AudioParam;
  ratio: AudioParam;
  reduction: AudioParam;
  attack: AudioParam;
  release: AudioParam;
}

declare class GainNode extends AudioNode {
  gain: AudioParam;
}

declare class IIRFilterNode extends AudioNode {
  getFrequencyResponse(frequencyHz: Float32Array, magResponse: Float32Array, phaseResponse: Float32Array): void;
}

declare class OscillatorNode extends AudioNode {
  frequency: AudioParam;
  detune: AudioParam;
  type: 'sine' | 'square' | 'sawtooth' | 'triangle' | 'custom';
  start(when?: number): void;
  stop(when?: number): void;
  setPeriodicWave(periodicWave: PeriodicWave): void;
}

declare class StereoPannerNode extends AudioNode {
  pan: AudioParam;
}

declare class PannerNode extends AudioNode {
  panningModel: 'equalpower'|'HRTF';
  distanceModel: 'linear'|'inverse'|'exponential';
  refDistance: number;
  maxDistance: number;
  rolloffFactor: number;
  coneInnerAngle: number;
  coneOuterAngle: number;
  coneOuterGain: number;
  setPosition(x: number, y: number, z: number): void;
  setOrientation(x: number, y: number, z: number): void;
}

declare class PeriodicWave extends AudioNode {}
declare class WaveShaperNode extends AudioNode {
  curve: Float32Array;
  oversample: 'none'|'2x'|'4x';
}


// this part of spec is not finished yet, apparently
// https://stackoverflow.com/questions/35296664/can-fetch-get-object-as-headers
type HeadersInit = Headers | {[key: string]: string};


// TODO Heades and URLSearchParams are almost the same thing.
// Could it somehow be abstracted away?
declare class Headers {
    @@iterator(): Iterator<[string, string]>;
    constructor(init?: HeadersInit): void;
    append(name: string, value: string): void;
    delete(name: string): void;
    entries(): Iterator<[string, string]>;
    forEach((value: string, name: string, headers: Headers) => any, thisArg?: any): void;
    get(name: string): null | string;
    has(name: string): boolean;
    keys(): Iterator<string>;
    set(name: string, value: string): void;
    values(): Iterator<string>;
}

declare class URLSearchParams {
    @@iterator(): Iterator<[string, string]>;
    constructor(query?: string | URLSearchParams | Array<[string, string]> | {[string]: string} ): void;
    append(name: string, value: string): void;
    delete(name: string): void;
    entries(): Iterator<[string, string]>;
    forEach((value: string, name: string, params: URLSearchParams) => any, thisArg?: any): void;
    get(name: string): null | string;
    getAll(name: string): Array<string>;
    has(name: string): boolean;
    keys(): Iterator<string>;
    set(name: string, value: string): void;
    values(): Iterator<string>;
}

type CacheType =  'default' | 'no-store' | 'reload' | 'no-cache' | 'force-cache' | 'only-if-cached';
type CredentialsType = 'omit' | 'same-origin' | 'include';
type ModeType = 'cors' | 'no-cors' | 'same-origin';
type RedirectType = 'follow' | 'error' | 'manual';
type ReferrerPolicyType =
    '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'same-origin' |
    'origin' | 'strict-origin' | 'origin-when-cross-origin' |
    'strict-origin-when-cross-origin' | 'unsafe-url';

type ResponseType =  'basic' | 'cors' | 'default' | 'error' | 'opaque' | 'opaqueredirect' ;

type BodyInit = string | URLSearchParams | FormData | Blob | ArrayBuffer | $ArrayBufferView | ReadableStream;

type RequestInfo = Request | URL | string;

type RequestOptions = {
    body?: ?BodyInit;

    cache?: CacheType;
    credentials?: CredentialsType;
    headers?: HeadersInit;
    integrity?: string;
    keepalive?: boolean;
    method?: string;
    mode?: ModeType;
    redirect?: RedirectType;
    referrer?: string;
    referrerPolicy?: ReferrerPolicyType;
    signal?: ?AbortSignal;
    window?: any;
}

type ResponseOptions = {
    status?: number;
    statusText?: string;
    headers?: HeadersInit
}

declare class Response {
    constructor(input?: ?BodyInit, init?: ResponseOptions): void;
    clone(): Response;
    static error(): Response;
    static redirect(url: string, status?: number): Response;

    redirected: boolean;
    type: ResponseType;
    url: string;
    ok: boolean;
    status: number;
    statusText: string;
    headers: Headers;
    trailer: Promise<Headers>;

    // Body methods and attributes
    bodyUsed: boolean;
    body: ?ReadableStream,

    arrayBuffer(): Promise<ArrayBuffer>;
    blob(): Promise<Blob>;
    formData(): Promise<FormData>;
    json(): Promise<any>;
    text(): Promise<string>;
}

declare class Request {
    constructor(input: RequestInfo, init?: RequestOptions): void;
    clone(): Request;

    url: string;

    cache: CacheType;
    credentials: CredentialsType;
    headers: Headers;
    integrity: string;
    method: string;
    mode: ModeType;
    redirect: RedirectType;
    referrer: string;
    referrerPolicy: ReferrerPolicyType;

    // Body methods and attributes
    bodyUsed: boolean;

    arrayBuffer(): Promise<ArrayBuffer>;
    blob(): Promise<Blob>;
    formData(): Promise<FormData>;
    json(): Promise<any>;
    text(): Promise<string>;
}

declare class AbortController {
    constructor(): void;
    +signal: AbortSignal;
    abort(): void;
}

declare class AbortSignal extends EventTarget {
    +aborted: boolean;
    onabort: (event: AbortProgressEventTypes) => mixed;
}

declare function fetch(input: RequestInfo, init?: RequestOptions): Promise<Response>;


type TextEncoder$availableEncodings = 'utf-8' | 'utf8' | 'unicode-1-1-utf-8' | 'utf-16be' | 'utf-16' | 'utf-16le';

declare class TextEncoder {
  constructor(encoding?: TextEncoder$availableEncodings): TextEncoder;
  encode(buffer: string, options?: {
    stream: bool,
  }): Uint8Array;
  encoding: TextEncoder$availableEncodings;
}

type TextDecoder$availableEncodings =
  | '866'
  | 'ansi_x3.4-1968'
  | 'arabic'
  | 'ascii'
  | 'asmo-708'
  | 'big5-hkscs'
  | 'big5'
  | 'chinese'
  | 'cn-big5'
  | 'cp1250'
  | 'cp1251'
  | 'cp1252'
  | 'cp1253'
  | 'cp1254'
  | 'cp1255'
  | 'cp1256'
  | 'cp1257'
  | 'cp1258'
  | 'cp819'
  | 'cp866'
  | 'csbig5'
  | 'cseuckr'
  | 'cseucpkdfmtjapanese'
  | 'csgb2312'
  | 'csibm866'
  | 'csiso2022jp'
  | 'csiso2022kr'
  | 'csiso58gb231280'
  | 'csiso88596e'
  | 'csiso88596i'
  | 'csiso88598e'
  | 'csiso88598i'
  | 'csisolatin1'
  | 'csisolatin2'
  | 'csisolatin3'
  | 'csisolatin4'
  | 'csisolatin5'
  | 'csisolatin6'
  | 'csisolatin9'
  | 'csisolatinarabic'
  | 'csisolatincyrillic'
  | 'csisolatingreek'
  | 'csisolatinhebrew'
  | 'cskoi8r'
  | 'csksc56011987'
  | 'csmacintosh'
  | 'csshiftjis'
  | 'cyrillic'
  | 'dos-874'
  | 'ecma-114'
  | 'ecma-118'
  | 'elot_928'
  | 'euc-jp'
  | 'euc-kr'
  | 'gb_2312-80'
  | 'gb_2312'
  | 'gb18030'
  | 'gb2312'
  | 'gbk'
  | 'greek'
  | 'greek8'
  | 'hebrew'
  | 'hz-gb-2312'
  | 'ibm819'
  | 'ibm866'
  | 'iso_8859-1:1987'
  | 'iso_8859-1'
  | 'iso_8859-2:1987'
  | 'iso_8859-2'
  | 'iso_8859-3:1988'
  | 'iso_8859-3'
  | 'iso_8859-4:1988'
  | 'iso_8859-4'
  | 'iso_8859-5:1988'
  | 'iso_8859-5'
  | 'iso_8859-6:1987'
  | 'iso_8859-6'
  | 'iso_8859-7:1987'
  | 'iso_8859-7'
  | 'iso_8859-8:1988'
  | 'iso_8859-8'
  | 'iso_8859-9:1989'
  | 'iso_8859-9'
  | 'iso-2022-cn-ext'
  | 'iso-2022-cn'
  | 'iso-2022-jp'
  | 'iso-2022-kr'
  | 'iso-8859-1'
  | 'iso-8859-10'
  | 'iso-8859-11'
  | 'iso-8859-13'
  | 'iso-8859-14'
  | 'iso-8859-15'
  | 'iso-8859-16'
  | 'iso-8859-2'
  | 'iso-8859-3'
  | 'iso-8859-4'
  | 'iso-8859-5'
  | 'iso-8859-6-e'
  | 'iso-8859-6-i'
  | 'iso-8859-6'
  | 'iso-8859-7'
  | 'iso-8859-8-e'
  | 'iso-8859-8-i'
  | 'iso-8859-8'
  | 'iso-8859-9'
  | 'iso-ir-100'
  | 'iso-ir-101'
  | 'iso-ir-109'
  | 'iso-ir-110'
  | 'iso-ir-126'
  | 'iso-ir-127'
  | 'iso-ir-138'
  | 'iso-ir-144'
  | 'iso-ir-148'
  | 'iso-ir-149'
  | 'iso-ir-157'
  | 'iso-ir-58'
  | 'iso8859-1'
  | 'iso8859-10'
  | 'iso8859-11'
  | 'iso8859-13'
  | 'iso8859-14'
  | 'iso8859-15'
  | 'iso8859-2'
  | 'iso8859-3'
  | 'iso8859-4'
  | 'iso8859-6'
  | 'iso8859-7'
  | 'iso8859-8'
  | 'iso8859-9'
  | 'iso88591'
  | 'iso885910'
  | 'iso885911'
  | 'iso885913'
  | 'iso885914'
  | 'iso885915'
  | 'iso88592'
  | 'iso88593'
  | 'iso88594'
  | 'iso88595'
  | 'iso88596'
  | 'iso88597'
  | 'iso88598'
  | 'iso88599'
  | 'koi'
  | 'koi8_r'
  | 'koi8-r'
  | 'koi8-u'
  | 'koi8'
  | 'korean'
  | 'ks_c_5601-1987'
  | 'ks_c_5601-1989'
  | 'ksc_5601'
  | 'ksc5601'
  | 'l1'
  | 'l2'
  | 'l3'
  | 'l4'
  | 'l5'
  | 'l6'
  | 'l9'
  | 'latin1'
  | 'latin2'
  | 'latin3'
  | 'latin4'
  | 'latin5'
  | 'latin6'
  | 'latin9'
  | 'logical'
  | 'mac'
  | 'macintosh'
  | 'ms_kanji'
  | 'shift_jis'
  | 'shift-jis'
  | 'sjis'
  | 'sun_eu_greek'
  | 'tis-620'
  | 'unicode-1-1-utf-8'
  | 'us-ascii'
  | 'utf-16'
  | 'utf-16be'
  | 'utf-16le'
  | 'utf-8'
  | 'utf8'
  | 'visual'
  | 'windows-1250'
  | 'windows-1251'
  | 'windows-1252'
  | 'windows-1253'
  | 'windows-1254'
  | 'windows-1255'
  | 'windows-1256'
  | 'windows-1257'
  | 'windows-1258'
  | 'windows-31j'
  | 'windows-874'
  | 'windows-949'
  | 'x-cp1250'
  | 'x-cp1251'
  | 'x-cp1252'
  | 'x-cp1253'
  | 'x-cp1254'
  | 'x-cp1255'
  | 'x-cp1256'
  | 'x-cp1257'
  | 'x-cp1258'
  | 'x-euc-jp'
  | 'x-gbk'
  | 'x-mac-cyrillic'
  | 'x-mac-roman'
  | 'x-mac-ukrainian'
  | 'x-sjis'
  | 'x-user-defined'
  | 'x-x-big5';


declare class TextDecoder {
  constructor(encoding?: TextDecoder$availableEncodings, options?: { fatal: bool }): TextDecoder;
  encoding: TextDecoder$availableEncodings;
  fatal: bool;
  ignoreBOM: bool;
  decode(buffer?: ArrayBuffer | $ArrayBufferView, options?: { stream: bool }): string;
}

declare class MessagePort extends EventTarget {
  postMessage(message: any, transfer?: Iterable<Object>): void;
  start(): void;
  close(): void;

  onmessage: null | (ev: MessageEvent) => any;
  onmessageerror: null | (ev: MessageEvent) => any;
}

declare class MessageChannel {
  port1: MessagePort;
  port2: MessagePort;
}

declare class VRDisplay extends EventTarget {
  capabilities: VRDisplayCapabilities;
  depthFar: number;
  depthNear: number;
  displayId: number;
  displayName: string;
  isPresenting: boolean;
  stageParameters: null | VRStageParameters;

  cancelAnimationFrame(number): void;
  exitPresent(): Promise<void>;
  getEyeParameters(VREye): VREyeParameters;
  getFrameData(VRFrameData): boolean;
  getLayers(): VRLayerInit[];
  requestAnimationFrame(cb: (number) => mixed): number;
  requestPresent(VRLayerInit[]): Promise<void>;
  submitFrame(): void;
}

type VRSource = HTMLCanvasElement;

type VRLayerInit = {
  leftBounds?: number[];
  rightBounds?: number[];
  source?: null | VRSource;
};

type VRDisplayCapabilities = {
  canPresent: boolean;
  hasExternalDisplay: boolean;
  hasPosition: boolean;
  maxLayers: number;
};

type VREye = 'left' | 'right';

type VRPose = {
  angularAcceleration?: Float32Array;
  angularVelocity?: Float32Array;
  linearAcceleration?: Float32Array;
  linearVelocity?: Float32Array;
  orientation?: Float32Array;
  position?: Float32Array;
};

declare class VRFrameData {
  leftProjectionMatrix: Float32Array;
  leftViewMatrix: Float32Array;
  pose: VRPose;
  rightProjectionMatrix: Float32Array;
  rightViewMatrix: Float32Array;
  timestamp: number;
}

type VREyeParameters = {
  offset: Float32Array;
  renderWidth: number;
  renderHeight: number;
};

type VRStageParameters = {
  sittingToStandingTransform: Float32Array;
  sizeX: number;
  sizeZ: number;
};

type VRDisplayEventReason = 'mounted' | 'navigation' | 'requested' | 'unmounted';

type VRDisplayEventInit = {
  display: VRDisplay;
  reason: VRDisplayEventReason;
};

declare class VRDisplayEvent extends Event {
  display: VRDisplay;
  reason?: VRDisplayEventReason;

  constructor(type: string, eventInitDict: VRDisplayEventInit): VRDisplayEvent;
}

declare class MediaQueryListEvent {
  matches: boolean;
  media: string;
}

declare type MediaQueryListListener = MediaQueryListEvent => void;

declare class MediaQueryList extends EventTarget {
  matches: boolean;
  media: string;
  addListener: MediaQueryListListener => void;
  removeListener: MediaQueryListListener => void;
  onchange: MediaQueryListListener;
}

declare var matchMedia: string => MediaQueryList;

// https://w3c.github.io/webappsec-credential-management/#idl-index
declare type CredMgmtCredentialRequestOptions = {
  mediation: 'silent' | 'optional' | 'required';
  signal: AbortSignal;
}

declare type CredMgmtCredentialCreationOptions = {
  signal: AbortSignal;
}

declare interface CredMgmtCredential {
  id: string;
  type: string;
}

declare interface CredMgmtPasswordCredential extends CredMgmtCredential {
  password: string;
}

declare interface CredMgmtCredentialsContainer {
  get(option?: CredMgmtCredentialRequestOptions): Promise<?CredMgmtCredential>;
  store(credential: CredMgmtCredential): Promise<CredMgmtCredential>;
  create(
    creationOption?: CredMgmtCredentialCreationOptions,
  ): Promise<?CredMgmtCredential>;
  preventSilentAccess(): Promise<void>;
}

`
export const core = `
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* JS primitives
   cf. https://github.com/Microsoft/TypeScript/blob/master/lib/lib.d.ts
*/

declare var NaN: number;
declare var Infinity: number;
declare var undefined: void;

declare function parseInt(string: mixed, radix?: number): number;
declare function parseFloat(string: mixed): number;
declare function isNaN(number: mixed): boolean;
declare function isFinite(number: mixed): boolean;
declare function decodeURI(encodedURI: string): string;
declare function decodeURIComponent(encodedURIComponent: string): string;
declare function encodeURI(uri: string): string;
declare function encodeURIComponent(uriComponent: string): string;

type PropertyDescriptor<T> = {
    enumerable?: boolean;
    configurable?: boolean;
    writable?: boolean;
    value?: T;
    get?: () => T;
    set?: (value: T) => void;
};

type PropertyDescriptorMap = {
  [s: string]: PropertyDescriptor<any>;
}

// TODO: instance
declare class Object {
    static (o: ?void): {[key: any]: any};
    static (o: boolean): Boolean;
    static (o: number): Number;
    static (o: string): String;
    static <T>(o: T): T;
    static assign: Object$Assign;
    static create(o: any, properties?: PropertyDescriptorMap): any; // compiler magic
    static defineProperties(o: any, properties: PropertyDescriptorMap): any;
    static defineProperty<T>(o: any, p: any, attributes: PropertyDescriptor<T>): any;
    static entries(object: mixed): Array<[string, mixed]>;
    static freeze<T>(o: T): T;
    static fromEntries<K, V>(entries: Iterable<[K, V] | {'0': K, '1': V}>): {[K]: V};

    static getOwnPropertyDescriptor<T>(o: mixed, p: any): PropertyDescriptor<T> | void;
    static getOwnPropertyDescriptors(o: {}): PropertyDescriptorMap;
    static getOwnPropertyNames(o: mixed): Array<string>;
    static getOwnPropertySymbols(o: mixed): Symbol[];
    static getPrototypeOf: Object$GetPrototypeOf;
    static is<T>(a: T, b: T): boolean;
    static isExtensible(o: mixed): boolean;
    static isFrozen(o: mixed): boolean;
    static isSealed(o: mixed): boolean;
    static keys(o: mixed): Array<string>;
    static preventExtensions<T>(o: T): T;
    static seal<T>(o: T): T;
    static setPrototypeOf<T>(o: T, proto: ?Object): T;
    static values(object: mixed): Array<mixed>;
    hasOwnProperty(prop: any): boolean;
    isPrototypeOf(o: any): boolean;
    propertyIsEnumerable(prop: any): boolean;
    toLocaleString(): string;
    toString(): string;
    valueOf(): mixed;
}

// Well known Symbols.
declare class $SymbolHasInstance mixins Symbol {}
declare class $SymboIsConcatSpreadable mixins Symbol {}
declare class $SymbolIterator mixins Symbol {}
declare class $SymbolMatch mixins Symbol {}
declare class $SymbolReplace mixins Symbol {}
declare class $SymbolSearch mixins Symbol {}
declare class $SymbolSpecies mixins Symbol {}
declare class $SymbolSplit mixins Symbol {}
declare class $SymbolToPrimitive mixins Symbol {}
declare class $SymbolToStringTag mixins Symbol {}
declare class $SymbolUnscopables mixins Symbol {}

declare class Symbol {
  static (value?:any): Symbol;
  static for(key: string): Symbol;
  +description: string | void;
  static hasInstance: $SymbolHasInstance;
  static isConcatSpreadable: $SymboIsConcatSpreadable;
  static iterator: string; // polyfill '@@iterator'
  static keyFor(sym: Symbol): ?string;
  static length: 0;
  static match: $SymbolMatch;
  static replace: $SymbolReplace;
  static search: $SymbolSearch;
  static species: $SymbolSpecies;
  static split: $SymbolSplit;
  static toPrimitive: $SymbolToPrimitive;
  static toStringTag: $SymbolToStringTag;
  static unscopables: $SymbolUnscopables;
  toString(): string;
  valueOf(): ?Symbol;
}

// TODO: instance, static
declare class Function {
    proto apply: Function$Prototype$Apply; // (thisArg: any, argArray?: any) => any
    proto bind: Function$Prototype$Bind; // (thisArg: any, ...argArray: Array<any>) => any;
    proto call: Function$Prototype$Call; // (thisArg: any, ...argArray: Array<any>) => any
    toString(): string;
    arguments: any;
    caller: Function | null;
    length: number;
    name: string;
}

declare class Boolean {
    constructor(value?: mixed): void;
    static (value:any):boolean;
    valueOf(): boolean;
    toString(): string;
}

declare class Number {
    static EPSILON: number;
    static MAX_SAFE_INTEGER: number;
    static MAX_VALUE: number;
    static MIN_SAFE_INTEGER: number;
    static MIN_VALUE: number;
    static NaN: number;
    static NEGATIVE_INFINITY: number;
    static POSITIVE_INFINITY: number;
    static (value:any):number;
    static isFinite(value: any): boolean;
    static isInteger(value: any): boolean;
    static isNaN(value: any): boolean;
    static isSafeInteger(value: any): boolean;
    static parseFloat(value: string): number;
    static parseInt(value: string, radix?: number): number;
    constructor(value?: mixed): void;
    toExponential(fractionDigits?: number): string;
    toFixed(fractionDigits?: number): string;
    toLocaleString(locales?: string | Array<string>, options?: Intl$NumberFormatOptions): string;
    toPrecision(precision?: number): string;
    toString(radix?: number): string;
    valueOf(): number;
}

declare var Math: {
    E: number;
    LN10: number;
    LN2: number;
    LOG10E: number;
    LOG2E: number;
    PI: number;
    SQRT1_2: number;
    SQRT2: number;
    abs(x: number): number;
    acos(x: number): number;
    acosh(x: number): number;
    asin(x: number): number;
    asinh(x: number): number;
    atan(x: number): number;
    atan2(y: number, x: number): number;
    atanh(x: number): number;
    cbrt(x: number): number;
    ceil(x: number): number;
    clz32(x: number): number;
    cos(x: number): number;
    cosh(x: number): number;
    exp(x: number): number;
    expm1(x: number): number;
    floor(x: number): number;
    fround(x: number): number;
    hypot(...values: Array<number>): number;
    imul(y: number, x: number): number;
    log(x: number): number;
    log10(x: number): number;
    log1p(x: number): number;
    log2(x: number): number;
    max(...values: Array<number>): number;
    min(...values: Array<number>): number;
    pow(x: number, y: number): number;
    random(): number;
    round(x: number): number;
    sign(x: number): number;
    sin(x: number): number;
    sinh(x: number): number;
    sqrt(x: number): number;
    tan(x: number): number;
    tanh(x: number): number;
    trunc(x: number): number;
};

/* All the Array.prototype methods and properties that don't mutate the array.
 */
declare class $ReadOnlyArray<+T> {
    @@iterator(): Iterator<T>;
    toLocaleString(): string;
    // concat creates a new array
    concat<S, Item: $ReadOnlyArray<S> | S>(...items: Array<Item>): Array<T | S>;
    entries(): Iterator<[number, T]>;
    every(callbackfn: (value: T, index: number, array: $ReadOnlyArray<T>) => any, thisArg?: any): boolean;
    filter(callbackfn: typeof Boolean): Array<$NonMaybeType<T>>;
    filter(callbackfn: (value: T, index: number, array: $ReadOnlyArray<T>) => any, thisArg?: any): Array<T>;
    find(callbackfn: (value: T, index: number, array: $ReadOnlyArray<T>) => any, thisArg?: any): T | void;
    findIndex(callbackfn: (value: T, index: number, array: $ReadOnlyArray<T>) => any, thisArg?: any): number;
    forEach(callbackfn: (value: T, index: number, array: $ReadOnlyArray<T>) => any, thisArg?: any): void;
    includes(searchElement: mixed, fromIndex?: number): boolean;
    indexOf(searchElement: mixed, fromIndex?: number): number;
    join(separator?: string): string;
    keys(): Iterator<number>;
    lastIndexOf(searchElement: mixed, fromIndex?: number): number;
    map<U>(callbackfn: (value: T, index: number, array: $ReadOnlyArray<T>) => U, thisArg?: any): Array<U>;

    reduce(
      callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: $ReadOnlyArray<T>) => T,
      initialValue: void
    ): T;
    reduce<U>(
      callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: $ReadOnlyArray<T>) => U,
      initialValue: U
    ): U;
    reduceRight(
      callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: $ReadOnlyArray<T>) => T,
      initialValue: void
    ): T;
    reduceRight<U>(
      callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: $ReadOnlyArray<T>) => U,
      initialValue: U
    ): U;
    slice(start?: number, end?: number): Array<T>;
    some(callbackfn: (value: T, index: number, array: $ReadOnlyArray<T>) => any, thisArg?: any): boolean;
    values(): Iterator<T>;
    +[key: number]: T;
    +length: number;
}

declare class Array<T> extends $ReadOnlyArray<T> {
    copyWithin(target: number, start: number, end?: number): T[];
    every(callbackfn: (value: T, index: number, array: Array<T>) => any, thisArg?: any): boolean;
    fill(value: T, begin?: number, end?: number): Array<T>;
    filter(callbackfn: typeof Boolean): Array<$NonMaybeType<T>>;
    filter(callbackfn: (value: T, index: number, array: Array<T>) => any, thisArg?: any): Array<T>;
    find(callbackfn: (value: T, index: number, array: Array<T>) => any, thisArg?: any): T | void;
    findIndex(callbackfn: (value: T, index: number, array: Array<T>) => any, thisArg?: any): number;
    forEach(callbackfn: (value: T, index: number, array: Array<T>) => any, thisArg?: any): void;
    map<U>(callbackfn: (value: T, index: number, array: Array<T>) => U, thisArg?: any): Array<U>;
    pop(): T;
    push(...items: Array<T>): number;
    reduce(
      callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: Array<T>) => T,
      initialValue: void
    ): T;
    reduce<U>(
      callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: Array<T>) => U,
      initialValue: U
    ): U;
    reduceRight(
      callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: Array<T>) => T,
      initialValue: void
    ): T;
    reduceRight<U>(
      callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: Array<T>) => U,
      initialValue: U
    ): U;
    reverse(): Array<T>;
    shift(): T;
    some(callbackfn: (value: T, index: number, array: Array<T>) => any, thisArg?: any): boolean;
    sort(compareFn?: (a: T, b: T) => number): Array<T>;
    splice(start: number, deleteCount?: number, ...items: Array<T>): Array<T>;
    unshift(...items: Array<T>): number;


    [key: number]: T;
    length: number;
    static (...values:Array<any>): Array<any>;
    static isArray(obj: any): bool;
    static from<A, B>(iter: Iterable<A>, mapFn: (elem: A, index: number) => B, thisArg?: any): Array<B>;
    static from<A>(iter: Iterable<A>, mapFn: void): Array<A>;
    static from<A, B>(iter: Iterator<A>, mapFn: (elem: A, index: number) => B, thisArg?: any): Array<B>;
    static from<A>(iter: Iterator<A>, mapFn: void): Array<A>;
    static from<A>(arrayLike: {length: number}, mapFn: (elem: void, index: number) => A, thisArg?: any): Array<A>;
    static from(arrayLike: {length: number}, mapFn: void): Array<void>;
    static of<T>(...values: Array<T>): Array<T>;
}

type RegExp$flags = $CharSet<"gimsuy">;
type RegExp$matchResult = Array<string> & {index: number, input: string, groups: ?{[name: string]: string}};

declare class String {
    @@iterator(): Iterator<string>;
    anchor(name: string): string;
    charAt(pos: number): string;
    charCodeAt(index: number): number;
    codePointAt(index: number): number;
    concat(...strings: Array<string>): string;
    constructor(value?: mixed): void;
    endsWith(searchString: string, position?: number): boolean;
    includes(searchString: string, position?: number): boolean;
    indexOf(searchString: string, position?: number): number;
    lastIndexOf(searchString: string, position?: number): number;
    link(href: string): string;
    localeCompare(that: string, locales?: string | Array<string>, options?: Intl$CollatorOptions): number;
    match(regexp: string | RegExp): RegExp$matchResult | null;
    normalize(format?: string): string;
    padEnd(targetLength: number, padString?: string): string;
    padStart(targetLength: number, padString?: string): string;
    repeat(count: number): string;
    replace(searchValue: string | RegExp, replaceValue: string | (substring: string, ...args: Array<any>) => string): string;
    search(regexp: string | RegExp): number;
    slice(start?: number, end?: number): string;
    split(separator?: string | RegExp, limit?: number): Array<string>;
    startsWith(searchString: string, position?: number): boolean;
    substr(from: number, length?: number): string;
    substring(start: number, end?: number): string;
    toLocaleLowerCase(locale?: string | Array<string>): string;
    toLocaleUpperCase(locale?: string | Array<string>): string;
    toLowerCase(): string;
    toUpperCase(): string;
    trim(): string;
    trimEnd(): string;
    trimLeft(): string;
    trimRight(): string;
    trimStart(): string;
    valueOf(): string;
    toString(): string;
    length: number;
    [key: number]: string;
    static (value:any):string;
    static fromCharCode(...codes: Array<number>): string;
    static fromCodePoint(...codes: Array<number>): string;
    static raw(templateString: string): string;
    static raw(callSite: $Shape<{raw: string}>, ...substitutions: any[]): string;
}

declare class RegExp {
    static (pattern: string | RegExp, flags?: RegExp$flags): RegExp;
    compile(): RegExp;
    constructor(pattern: string | RegExp, flags?: RegExp$flags): RegExp;
    exec(string: string): RegExp$matchResult | null;
    flags: string;
    global: boolean;
    ignoreCase: boolean;
    lastIndex: number;
    multiline: boolean;
    source: string;
    sticky: bool;
    unicode: bool;
    test(string: string): boolean;
    toString(): string;
}

declare class Date {
    constructor(): void;
    constructor(timestamp: number): void;
    constructor(date: Date): void;
    constructor(dateString: string): void;
    constructor(year: number, month: number, day?: number, hour?: number, minute?: number, second?: number, millisecond?: number): void;
    getDate(): number;
    getDay(): number;
    getFullYear(): number;
    getHours(): number;
    getMilliseconds(): number;
    getMinutes(): number;
    getMonth(): number;
    getSeconds(): number;
    getTime(): number;
    getTimezoneOffset(): number;
    getUTCDate(): number;
    getUTCDay(): number;
    getUTCFullYear(): number;
    getUTCHours(): number;
    getUTCMilliseconds(): number;
    getUTCMinutes(): number;
    getUTCMonth(): number;
    getUTCSeconds(): number;
    setDate(date: number): number;
    setFullYear(year: number, month?: number, date?: number): number;
    setHours(hours: number, min?: number, sec?: number, ms?: number): number;
    setMilliseconds(ms: number): number;
    setMinutes(min: number, sec?: number, ms?: number): number;
    setMonth(month: number, date?: number): number;
    setSeconds(sec: number, ms?: number): number;
    setTime(time: number): number;
    setUTCDate(date: number): number;
    setUTCFullYear(year: number, month?: number, date?: number): number;
    setUTCHours(hours: number, min?: number, sec?: number, ms?: number): number;
    setUTCMilliseconds(ms: number): number;
    setUTCMinutes(min: number, sec?: number, ms?: number): number;
    setUTCMonth(month: number, date?: number): number;
    setUTCSeconds(sec: number, ms?: number): number;
    toDateString(): string;
    toISOString(): string;
    toJSON(key?: mixed): string;
    toLocaleDateString(locales?: string | Array<string>, options?: Intl$DateTimeFormatOptions): string;
    toLocaleString(locales?: string | Array<string>, options?: Intl$DateTimeFormatOptions): string;
    toLocaleTimeString(locales?: string | Array<string>, options?: Intl$DateTimeFormatOptions): string;
    toTimeString(): string;
    toUTCString(): string;
    valueOf(): number;

    static ():string;
    static now(): number;
    static parse(s: string): number;
    static UTC(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): number;
    // multiple indexers not yet supported
    [key: $SymbolToPrimitive]: (hint: 'string' | 'default' | 'number') => string | number;
}

declare class CallSite {
    getThis(): any;
    getTypeName(): string;
    getFunction(): ?Function;
    getFunctionName(): string;
    getMethodName(): string;
    getFileName(): ?string;
    getLineNumber(): ?number;
    getColumnNumber(): ?number;
    getEvalOrigin(): ?CallSite;
    getScriptNameOrSourceURL(): ?string;
    isToplevel(): bool;
    isEval(): bool;
    isNative(): bool;
    isConstructor(): bool;
    toString(): string;
}

declare class Error {
    static (message?:string):Error;
    constructor (message?: mixed): void;
    name: string;
    message: string;
    stack: string;
    toString(): string;

    // note: microsoft only
    description?: string;
    number?: number;

    // note: mozilla only
    fileName?: string;
    lineNumber?: number;
    columnNumber?: number;

    // note: v8 only (node/chrome)
    static captureStackTrace(target: Object, constructor?: Function): void;

    static stackTraceLimit: number;
    static prepareStackTrace: (err: Error, stack: CallSite[]) => mixed;
}

declare class EvalError extends Error {
    static (message?:string):Error;
}

declare class RangeError extends Error {
    static (message?:string):Error;
}

declare class ReferenceError extends Error {
    static (message?:string):Error;
}

declare class SyntaxError extends Error {
    static (message?:string):Error;
}

declare class TypeError extends Error {
    static (message?:string):Error;
}

declare class URIError extends Error {
    static (message?:string):Error;
}

declare class JSON {
    static parse(text: string, reviver?: (key: any, value: any) => any): any;
    static stringify(
      value: null | string | number | boolean | {} | $ReadOnlyArray<mixed>,
      replacer?: ?((key: string, value: any) => any) | Array<any>,
      space?: string | number
    ): string;
    static stringify(
      value: mixed,
      replacer?: ?((key: string, value: any) => any) | Array<any>,
      space?: string | number
    ): string | void;
}

/* Iterable/Iterator/Generator */

type IteratorResult<+Yield,+Return> =
  | { done: true, +value?: Return }
  | { done: false, +value: Yield };

interface $Iterator<+Yield,+Return,-Next> {
    @@iterator(): $Iterator<Yield,Return,Next>;
    next(value?: Next): IteratorResult<Yield,Return>;
}
type Iterator<+T> = $Iterator<T,void,void>;

interface $Iterable<+Yield,+Return,-Next> {
    @@iterator(): $Iterator<Yield,Return,Next>;
}
type Iterable<+T> = $Iterable<T,void,void>;

interface Generator<+Yield,+Return,-Next> {
    @@iterator(): $Iterator<Yield,Return,Next>;
    next(value?: Next): IteratorResult<Yield,Return>;
    return<R>(value: R): IteratorResult<Yield,R|Return>;
    throw(error?: any): IteratorResult<Yield,Return>;
}

declare function $iterate<T>(p: Iterable<T>): T;

/* Async Iterable/Iterator/Generator */

interface $AsyncIterator<+Yield,+Return,-Next> {
    @@asyncIterator(): $AsyncIterator<Yield,Return,Next>;
    next(value?: Next): Promise<IteratorResult<Yield,Return>>;
}
type AsyncIterator<+T> = $AsyncIterator<T,void,void>;

interface $AsyncIterable<+Yield,+Return,-Next> {
    @@asyncIterator(): $AsyncIterator<Yield,Return,Next>;
}
type AsyncIterable<+T> = $AsyncIterable<T,void,void>;

interface AsyncGenerator<+Yield,+Return,-Next> {
    @@asyncIterator(): $AsyncIterator<Yield,Return,Next>;
    next(value?: Next): Promise<IteratorResult<Yield,Return>>;
    return<R>(value: R): Promise<IteratorResult<Yield,R|Return>>;
    throw(error?: any): Promise<IteratorResult<Yield,Return>>;
}

declare function $asyncIterator<T>(p: AsyncIterable<T>): T;

/* Maps and Sets */

declare class $ReadOnlyMap<K, V> {
    @@iterator(): Iterator<[K, V]>;
    entries(): Iterator<[K, V]>;
    forEach(callbackfn: (value: V, index: K, map: $ReadOnlyMap<K, V>) => mixed, thisArg?: any): void;
    get(key: K): V | void;
    has(key: K): boolean;
    keys(): Iterator<K>;
    size: number;
    values(): Iterator<V>;
}

declare class Map<K, V> extends $ReadOnlyMap<K, V> {
    @@iterator(): Iterator<[K, V]>;
    constructor(iterable: ?Iterable<[K, V]>): void;
    clear(): void;
    delete(key: K): boolean;
    entries(): Iterator<[K, V]>;
    forEach(callbackfn: (value: V, index: K, map: Map<K, V>) => mixed, thisArg?: any): void;
    get(key: K): V | void;
    has(key: K): boolean;
    keys(): Iterator<K>;
    set(key: K, value: V): Map<K, V>;
    size: number;
    values(): Iterator<V>;
    // Multiple Indexers not yet supported
    [key: $SymbolToStringTag | $SymbolSpecies]: Function;
}

declare class $ReadOnlyWeakMap<K: {} | $ReadOnlyArray<mixed>, V> {
    get(key: K): V | void;
    has(key: K): boolean;
}

declare class WeakMap<K: {} | $ReadOnlyArray<mixed>, V> extends $ReadOnlyWeakMap<K, V> {
    constructor(iterable: ?Iterable<[K, V]>): void;
    delete(key: K): boolean;
    get(key: K): V | void;
    has(key: K): boolean;
    set(key: K, value: V): WeakMap<K, V>;
}

declare class $ReadOnlySet<T> {
    @@iterator(): Iterator<T>;
    entries(): Iterator<[T, T]>;
    forEach(callbackfn: (value: T, index: T, set: $ReadOnlySet<T>) => mixed, thisArg?: any): void;
    has(value: T): boolean;
    keys(): Iterator<T>;
    size: number;
    values(): Iterator<T>;
}

declare class Set<T> extends $ReadOnlySet<T> {
    @@iterator(): Iterator<T>;
    constructor(iterable: ?Iterable<T>): void;
    add(value: T): Set<T>;
    clear(): void;
    delete(value: T): boolean;
    entries(): Iterator<[T, T]>;
    forEach(callbackfn: (value: T, index: T, set: Set<T>) => mixed, thisArg?: any): void;
    has(value: T): boolean;
    keys(): Iterator<T>;
    size: number;
    values(): Iterator<T>;
    [key: $SymbolSpecies]: Function; // This would the Set constructor, can't think of a way to correctly type this
}

declare class $ReadOnlyWeakSet<T: Object> {
    has(value: T): boolean;
}

declare class WeakSet<T: Object> extends $ReadOnlyWeakSet<T> {
    constructor(iterable?: Iterable<T>): void;
    add(value: T): WeakSet<T>;
    delete(value: T): boolean;
    has(value: T): boolean;
}

/* Promises
   cf. https://github.com/borisyankov/DefinitelyTyped/blob/master/es6-promises/es6-promises.d.ts
*/

declare class Promise<+R> {
    constructor(callback: (
      resolve: (result: Promise<R> | R) => void,
      reject: (error: any) => void
    ) => mixed): void;

    then(onFulfill: null | void, onReject: null | void): Promise<R>;
    then<U>(
      onFulfill: null | void,
      onReject: (error: any) => Promise<U> | U
    ): Promise<R | U>;
    then<U>(
      onFulfill: (value: R) => Promise<U> | U,
      onReject: null | void | ((error: any) => Promise<U> | U)
    ): Promise<U>;

    catch(onReject: null | void): Promise<R>;
    catch<U>(
      onReject: (error: any) => Promise<U> | U
    ): Promise<R | U>;

    finally(onFinally: () => mixed): Promise<R>;

    static resolve<T>(object: Promise<T> | T): Promise<T>;
    static reject<T>(error: any): Promise<T>;
    static all<T: Iterable<mixed>>(promises: T): Promise<$TupleMap<T, typeof $await>>;
    static race<T, Elem: Promise<T> | T>(promises: Iterable<Elem>): Promise<T>;
}

// we use this signature when typing await expressions
declare function $await<T>(p: Promise<T> | T): T;

/* Binary data */

declare class ArrayBuffer {
    static isView(arg: mixed): boolean;
    constructor(byteLength: number): void;
    byteLength: number;
    slice(begin: number, end?: number): this;
    static +[key: $SymbolSpecies]: Class<this>;
}

// This is a helper type to simplify the specification, it isn't an interface
// and there are no objects implementing it.
// https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView
type $ArrayBufferView = $TypedArray | DataView;

// The TypedArray intrinsic object is a constructor function, but does not have
// a global name or appear as a property of the global object.
// http://www.ecma-international.org/ecma-262/6.0/#sec-%typedarray%-intrinsic-object
declare class $TypedArray {
    static BYTES_PER_ELEMENT: number;
    static from(iterable: Iterable<number>, mapFn?: (element: number) => number, thisArg?: any): this;
    static of(...values: number[]): this;

    constructor(length: number): void;
    constructor(typedArray: $TypedArray): void;
    constructor(iterable: Iterable<number>): void;
    constructor(buffer: ArrayBuffer, byteOffset?: number, length?: number): void;

    [index: number]: number;

    @@iterator(): Iterator<number>;

    buffer: ArrayBuffer;
    byteLength: number;
    byteOffset: number;
    length: number;

    copyWithin(target: number, start: number, end?: number): void;
    entries(): Iterator<[number, number]>;
    every(callback: (value: number, index: number, array: this) => mixed, thisArg?: any): boolean;
    fill(value: number, start?: number, end?: number): this;
    filter(callback: (value: number, index: number, array: this) => mixed, thisArg?: any): this;
    find(callback: (value: number, index: number, array: this) => mixed, thisArg?: any): number | void;
    findIndex(callback: (value: number, index: number, array: this) => mixed, thisArg?: any): number;
    forEach(callback: (value: number, index: number, array: this) => mixed, thisArg?: any): void;
    includes(searchElement: number, fromIndex?: number): boolean;
    indexOf(searchElement: number, fromIndex?: number): number; // -1 if not present
    join(separator?: string): string;
    keys(): Iterator<number>;
    lastIndexOf(searchElement: number, fromIndex?: number): number; // -1 if not present
    map(callback: (currentValue: number, index: number, array: this) => number, thisArg?: any): this;
    reduce(
      callback: (previousValue: number, currentValue: number, index: number, array: this) => number,
      initialValue: void
    ): number;
    reduce<U>(
      callback: (previousValue: U, currentValue: number, index: number, array: this) => U,
      initialValue: U
    ): U;
    reduceRight(
      callback: (previousValue: number, currentValue: number, index: number, array: this) => number,
      initialValue: void
    ): number;
    reduceRight<U>(
      callback: (previousValue: U, currentValue: number, index: number, array: this) => U,
      initialValue: U
    ): U;
    reverse(): this;
    set(array: Array<number> | $TypedArray, offset?: number): void;
    slice(begin?: number, end?: number): this;
    some(callback: (value: number, index: number, array: this) => mixed, thisArg?: any): boolean;
    sort(compare?: (a: number, b: number) => number): void;
    subarray(begin?: number, end?: number): this;
    values(): Iterator<number>;
}

declare class Int8Array extends $TypedArray {}
declare class Uint8Array extends $TypedArray {}
declare class Uint8ClampedArray extends $TypedArray {}
declare class Int16Array extends $TypedArray {}
declare class Uint16Array extends $TypedArray {}
declare class Int32Array extends $TypedArray {}
declare class Uint32Array extends $TypedArray {}
declare class Float32Array extends $TypedArray {}
declare class Float64Array extends $TypedArray {}

declare class DataView {
    constructor(buffer: ArrayBuffer, byteOffset?: number, length?: number): void;
    buffer: ArrayBuffer;
    byteLength: number;
    byteOffset: number;
    getInt8(byteOffset: number): number;
    getUint8(byteOffset: number): number;
    getInt16(byteOffset: number, littleEndian?: boolean): number;
    getUint16(byteOffset: number, littleEndian?: boolean): number;
    getInt32(byteOffset: number, littleEndian?: boolean): number;
    getUint32(byteOffset: number, littleEndian?: boolean): number;
    getFloat32(byteOffset: number, littleEndian?: boolean): number;
    getFloat64(byteOffset: number, littleEndian?: boolean): number;
    setInt8(byteOffset: number, value: number): void;
    setUint8(byteOffset: number, value: number): void;
    setInt16(byteOffset: number, value: number, littleEndian?: boolean): void;
    setUint16(byteOffset: number, value: number, littleEndian?: boolean): void;
    setInt32(byteOffset: number, value: number, littleEndian?: boolean): void;
    setUint32(byteOffset: number, value: number, littleEndian?: boolean): void;
    setFloat32(byteOffset: number, value: number, littleEndian?: boolean): void;
    setFloat64(byteOffset: number, value: number, littleEndian?: boolean): void;
}

declare function btoa(rawString: string): string;
declare function atob(encodedString: string): string;

declare function escape(str: string): string;
declare function unescape(str: string): string;

declare opaque type TimeoutID;
declare opaque type IntervalID;
declare function clearInterval(intervalId: ?IntervalID): void;
declare function clearTimeout(timeoutId: ?TimeoutID): void;
declare function setTimeout<TArguments: Array<mixed>>(
  callback: (...args: TArguments) => mixed,
  ms?: number,
  ...args: TArguments
): TimeoutID;
declare function setInterval<TArguments: Array<mixed>>(
  callback: (...args: TArguments) => mixed,
  ms?: number,
  ...args: TArguments
): IntervalID;

/* Reflect API */

declare var Reflect: {
    apply(target: Function, thisArg?: any, argumentsList?: Array<any>): any;
    construct(target: Function, argumentsList?: Array<any>, newTarget?: Function): any;
    defineProperty(o: any, p: any, attributes: any): boolean;
    deleteProperty(o: any, p: any): boolean;
    get(o: any, p: any, receiver?: any): any;
    getOwnPropertyDescriptor(o: any, p: any): any;
    getPrototypeOf: Object$GetPrototypeOf;
    setPrototypeOf: Object$SetPrototypeOf;
    has(o: any, p: any): boolean;
    isExtensible(o: any): boolean;
    ownKeys(o: any): Array<any>;
    preventExtensions(o: any): boolean;
    set(o: any, p: any, value: any, receiver?: any): boolean;
}

/* Proxy */

type Proxy$traps<T> = {
  getPrototypeOf?: (target: T) => Object|null;
  setPrototypeOf?: (target: T, prototype: Object|null) => boolean;
  isExtensible?: (target: T) => boolean;
  preventExtensions?: (target: T) => boolean;
  getOwnPropertyDescriptor?: (target: T, property: string) => void | PropertyDescriptor<T>;
  defineProperty?: (target: T, property: string, descriptor: PropertyDescriptor<T>) => boolean;
  has?: (target: T, key: string) => boolean;
  get?: (target: T, property: string, receiver: Proxy<T>) => any;
  set?: (target: T, property: string, value: any, receiver: Proxy<T>) => boolean;
  deleteProperty?: (target: T, property: string) => boolean;
  ownKeys?: (target: T) => Array<string>;
  apply?: (target: T, context: any, args: Array<any>) => any;
  construct?: (target: T, args: Array<any>, newTarget: Function) => Object;
};

type Proxy$revocable<T> = T & {
  revoke(): void;
};

declare class Proxy<T> {
  constructor(target: T, handler: Proxy$traps<T>): T;

  static revocable(target: T, handler: Proxy$traps<T>): Proxy$revocable<T>;
}

/* CommonJS */

declare var global: any;

declare var module: {
    exports: any;
    require(id: string): any;
    id: string;
    filename: string;
    loaded: boolean;
    parent: any;
    children: Array<any>;
    builtinModules: Array<string>;
};
declare var require: {
  (id: string): any;
  resolve: (id: string) => string;
  cache: any;
  main: typeof module;
};
declare var exports: any;

/* Opaque type for module reference magic strings */
declare opaque type $Flow$ModuleRef<T>;

/* Commonly available, shared between node and dom */
declare var console: {
  assert(condition: mixed, ...data: Array<any>): void;
  clear(): void;
  count(label: string): void;
  debug(...data: Array<any>): void;
  dir(...data: Array<any>): void;
  dirxml(...data: Array<any>): void;
  error(...data: Array<any>): void;
  _exception(...data: Array<any>): void;
  group(...data: Array<any>): void;
  groupCollapsed(...data: Array<any>): void;
  groupEnd(): void;
  info(...data: Array<any>): void;
  log(...data: Array<any>): void;
  profile(name?: string): void;
  profileEnd(name?: string): void;
  table(tabularData: { [key: string]: any } | Array<{ [key: string]: any }> | Array<Array<any>>): void;
  time(label: string): void;
  timeEnd(label: string): void;
  timeStamp(label?: string): void;
  trace(...data: Array<any>): void;
  warn(...data: Array<any>): void;
};

`

export const cssom = `
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

declare class StyleSheet {
  disabled: boolean;
  href: string;
  media: MediaList;
  ownerNode: Node;
  parentStyleSheet: ?StyleSheet;
  title: string;
  type: string;
}

declare class StyleSheetList {
  @@iterator(): Iterator<StyleSheet>;
  length: number;
  [index: number]: StyleSheet;
}

declare class MediaList {
  @@iterator(): Iterator<string>;
  mediaText: string;
  length: number;
  item(index: number): ?string;
  deleteMedium(oldMedium: string): void;
  appendMedium(newMedium: string): void;
  [index: number]: string;
}

declare class CSSStyleSheet extends StyleSheet {
  cssRules: CSSRuleList;
  ownerRule: ?CSSRule;
  deleteRule(index: number): void;
  insertRule(rule: string, index: number): void;
}

declare class CSSRule {
  cssText: string;
  parentRule: ?CSSRule;
  parentStyleSheet: ?CSSStyleSheet;
  type: number;
  static STYLE_RULE: number;
  static MEDIA_RULE: number;
  static FONT_FACE_RULE: number;
  static PAGE_RULE: number;
  static IMPORT_RULE: number;
  static CHARSET_RULE: number;
  static UNKNOWN_RULE: number;
  static KEYFRAMES_RULE: number;
  static KEYFRAME_RULE: number;
  static NAMESPACE_RULE: number;
  static COUNTER_STYLE_RULE: number;
  static SUPPORTS_RULE: number;
  static DOCUMENT_RULE: number;
  static FONT_FEATURE_VALUES_RULE: number;
  static VIEWPORT_RULE: number;
  static REGION_STYLE_RULE: number;
}

declare class CSSRuleList {
  @@iterator(): Iterator<CSSRule>;
  length: number;
  item(index: number): ?CSSRule;
  [index: number]: CSSRule;
}

declare class CSSStyleDeclaration {
  @@iterator(): Iterator<string>;
  /* DOM CSS Properties */
  alignContent: string;
  alignItems: string;
  alignSelf: string;
  all: string;
  animation: string;
  animationDelay: string;
  animationDirection: string;
  animationDuration: string;
  animationFillMode: string;
  animationIterationCount: string;
  animationName: string;
  animationPlayState: string;
  animationTimingFunction: string;
  backdropFilter: string;
  webkitBackdropFilter: string;
  backfaceVisibility: string;
  background: string;
  backgroundAttachment: string;
  backgroundBlendMode: string;
  backgroundClip: string;
  backgroundColor: string;
  backgroundImage: string;
  backgroundOrigin: string;
  backgroundPosition: string;
  backgroundPositionX: string;
  backgroundPositionY: string;
  backgroundRepeat: string;
  backgroundSize: string;
  blockSize: string;
  border: string;
  borderBlockEnd: string;
  borderBlockEndColor: string;
  borderBlockEndStyle: string;
  borderBlockEndWidth: string;
  borderBlockStart: string;
  borderBlockStartColor: string;
  borderBlockStartStyle: string;
  borderBlockStartWidth: string;
  borderBottom: string;
  borderBottomColor: string;
  borderBottomLeftRadius: string;
  borderBottomRightRadius: string;
  borderBottomStyle: string;
  borderBottomWidth: string;
  borderCollapse: string;
  borderColor: string;
  borderImage: string;
  borderImageOutset: string;
  borderImageRepeat: string;
  borderImageSlice: string;
  borderImageSource: string;
  borderImageWidth: string;
  borderInlineEnd: string;
  borderInlineEndColor: string;
  borderInlineEndStyle: string;
  borderInlineEndWidth: string;
  borderInlineStart: string;
  borderInlineStartColor: string;
  borderInlineStartStyle: string;
  borderInlineStartWidth: string;
  borderLeft: string;
  borderLeftColor: string;
  borderLeftStyle: string;
  borderLeftWidth: string;
  borderRadius: string;
  borderRight: string;
  borderRightColor: string;
  borderRightStyle: string;
  borderRightWidth: string;
  borderSpacing: string;
  borderStyle: string;
  borderTop: string;
  borderTopColor: string;
  borderTopLeftRadius: string;
  borderTopRightRadius: string;
  borderTopStyle: string;
  borderTopWidth: string;
  borderWidth: string;
  bottom: string;
  boxDecorationBreak: string;
  boxShadow: string;
  boxSizing: string;
  breakAfter: string;
  breakBefore: string;
  breakInside: string;
  captionSide: string;
  clear: string;
  clip: string;
  clipPath: string;
  color: string;
  columns: string;
  columnCount: string;
  columnFill: string;
  columnGap: string;
  columnRule: string;
  columnRuleColor: string;
  columnRuleStyle: string;
  columnRuleWidth: string;
  columnSpan: string;
  columnWidth: string;
  contain: string;
  content: string;
  counterIncrement: string;
  counterReset: string;
  cursor: string;
  direction: string;
  display: string;
  emptyCells: string;
  filter: string;
  flex: string;
  flexBasis: string;
  flexDirection: string;
  flexFlow: string;
  flexGrow: string;
  flexShrink: string;
  flexWrap: string;
  float: string;
  font: string;
  fontFamily: string;
  fontFeatureSettings: string;
  fontKerning: string;
  fontLanguageOverride: string;
  fontSize: string;
  fontSizeAdjust: string;
  fontStretch: string;
  fontStyle: string;
  fontSynthesis: string;
  fontVariant: string;
  fontVariantAlternates: string;
  fontVariantCaps: string;
  fontVariantEastAsian: string;
  fontVariantLigatures: string;
  fontVariantNumeric: string;
  fontVariantPosition: string;
  fontWeight: string;
  grad: string;
  grid: string;
  gridArea: string;
  gridAutoColumns: string;
  gridAutoFlow: string;
  gridAutoPosition: string;
  gridAutoRows: string;
  gridColumn: string;
  gridColumnStart: string;
  gridColumnEnd: string;
  gridRow: string;
  gridRowStart: string;
  gridRowEnd: string;
  gridTemplate: string;
  gridTemplateAreas: string;
  gridTemplateRows: string;
  gridTemplateColumns: string;
  height: string;
  hyphens: string;
  imageRendering: string;
  imageResolution: string;
  imageOrientation: string;
  imeMode: string;
  inherit: string;
  initial: string;
  inlineSize: string;
  isolation: string;
  justifyContent: string;
  left: string;
  letterSpacing: string;
  lineBreak: string;
  lineHeight: string;
  listStyle: string;
  listStyleImage: string;
  listStylePosition: string;
  listStyleType: string;
  margin: string;
  marginBlockEnd: string;
  marginBlockStart: string;
  marginBottom: string;
  marginInlineEnd: string;
  marginInlineStart: string;
  marginLeft: string;
  marginRight: string;
  marginTop: string;
  marks: string;
  mask: string;
  maskType: string;
  maxBlockSize: string;
  maxHeight: string;
  maxInlineSize: string;
  maxWidth: string;
  minBlockSize: string;
  minHeight: string;
  minInlineSize: string;
  minWidth: string;
  mixBlendMode: string;
  mozTransform: string;
  mozTransformOrigin: string;
  mozTransitionDelay: string;
  mozTransitionDuration: string;
  mozTransitionProperty: string;
  mozTransitionTimingFunction: string;
  objectFit: string;
  objectPosition: string;
  offsetBlockEnd: string;
  offsetBlockStart: string;
  offsetInlineEnd: string;
  offsetInlineStart: string;
  opacity: string;
  order: string;
  orphans: string;
  outline: string;
  outlineColor: string;
  outlineOffset: string;
  outlineStyle: string;
  outlineWidth: string;
  overflow: string;
  overflowWrap: string;
  overflowX: string;
  overflowY: string;
  padding: string;
  paddingBlockEnd: string;
  paddingBlockStart: string;
  paddingBottom: string;
  paddingInlineEnd: string;
  paddingInlineStart: string;
  paddingLeft: string;
  paddingRight: string;
  paddingTop: string;
  pageBreakAfter: string;
  pageBreakBefore: string;
  pageBreakInside: string;
  perspective: string;
  perspectiveOrigin: string;
  pointerEvents: string;
  position: string;
  quotes: string;
  rad: string;
  resize: string;
  right: string;
  rubyAlign: string;
  rubyMerge: string;
  rubyPosition: string;
  scrollBehavior: string;
  scrollSnapCoordinate: string;
  scrollSnapDestination: string;
  scrollSnapPointsX: string;
  scrollSnapPointsY: string;
  scrollSnapType: string;
  shapeImageThreshold: string;
  shapeMargin: string;
  shapeOutside: string;
  tableLayout: string;
  tabSize: string;
  textAlign: string;
  textAlignLast: string;
  textCombineUpright: string;
  textDecoration: string;
  textDecorationColor: string;
  textDecorationLine: string;
  textDecorationStyle: string;
  textIndent: string;
  textOrientation: string;
  textOverflow: string;
  textRendering: string;
  textShadow: string;
  textTransform: string;
  textUnderlinePosition: string;
  top: string;
  touchAction: string;
  transform: string;
  transformOrigin: string;
  transformStyle: string;
  transition: string;
  transitionDelay: string;
  transitionDuration: string;
  transitionProperty: string;
  transitionTimingFunction: string;
  turn: string;
  unicodeBidi: string;
  unicodeRange: string;
  userSelect: string;
  verticalAlign: string;
  visibility: string;
  webkitOverflowScrolling: string;
  webkitTransform: string;
  webkitTransformOrigin: string;
  webkitTransitionDelay: string;
  webkitTransitionDuration: string;
  webkitTransitionProperty: string;
  webkitTransitionTimingFunction: string;
  whiteSpace: string;
  widows: string;
  width: string;
  willChange: string;
  wordBreak: string;
  wordSpacing: string;
  wordWrap: string;
  writingMode: string;
  zIndex: string;

  cssFloat: string;
  cssText: string;
  getPropertyPriority(property: string): string;
  getPropertyValue(property:string): string;
  item(index: number): string;
  [index: number]: string;
  length: number;
  parentRule: CSSRule;
  removeProperty(property: string): string;
  setProperty(property: string, value: ?string, priority: ?string): void;
  setPropertyPriority(property: string, priority: string): void;
}

declare class TransitionEvent extends Event {
  elapsedTime: number; // readonly
  pseudoElement: string; // readonly
  propertyName: string; // readonly
}

`

export const dom = `
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* Files */

declare class Blob {
  constructor(blobParts?: Array<any>, options?: {
    type?: string;
    endings?: string;
  }): void;
  isClosed: bool;
  size: number;
  type: string;
  close(): void;
  slice(start?: number, end?: number, contentType?: string): Blob;
}

declare class FileReader extends EventTarget {
  abort(): void;
  DONE: number;
  EMPTY: number;
  error: DOMError;
  LOADING: number;
  onabort: (ev: any) => any;
  onerror: (ev: any) => any;
  onload: (ev: any) => any;
  onloadend: (ev: any) => any;
  onloadstart: (ev: any) => any;
  onprogress: (ev: any) => any;
  readAsArrayBuffer(blob: Blob): void;
  readAsBinaryString(blob: Blob): void;
  readAsDataURL(blob: Blob): void;
  readAsText(blob: Blob, encoding?: string): void;
  readyState: 0 | 1 | 2;
  result: string | ArrayBuffer;
}

declare type FilePropertyBag = {
  type?: string,
  lastModified?: number,
};
declare class File extends Blob {
  constructor(
    fileBits: $ReadOnlyArray<string | BufferDataSource | Blob>,
    filename: string,
    options?: FilePropertyBag,
  ): void;
  lastModified: number;
  name: string;
}

declare class FileList {
  @@iterator(): Iterator<File>;
  length: number;
  item(index: number): File;
  [index: number]: File;
}

/* DataTransfer */

declare class DataTransfer {
  clearData(format?: string): void;
  getData(format: string): string;
  setData(format: string, data: string): void;
  setDragImage(image: Element, x: number, y: number): void;
  dropEffect: string;
  effectAllowed: string;
  files: FileList; // readonly
  items: DataTransferItemList; // readonly
  types: Array<string>; // readonly
}

declare class DataTransferItemList {
  @@iterator(): Iterator<DataTransferItem>;
  length: number; // readonly
  [index: number]: DataTransferItem;
  add(data: string, type: string): ?DataTransferItem;
  add(data: File): ?DataTransferItem;
  remove(index: number): void;
  clear(): void;
};

declare class DataTransferItem {
  kind: string; // readonly
  type: string; // readonly
  getAsString(_callback: ?(data: string) => mixed): void;
  getAsFile(): ?File;
};

/* DOM */

declare type DOMStringMap = {
  [key:string]: string;
}

declare class DOMError {
  name: string;
}

declare type ElementDefinitionOptions = {
  extends?: string;
}

declare interface CustomElementRegistry {
  define(name: string, ctor: Class<Element>, options?: ElementDefinitionOptions): void;
  get(name: string): any;
  whenDefined(name: string): Promise<void>;
}

declare interface ShadowRoot extends DocumentFragment {
  host: Element;
  innerHTML: string;
}

declare type ShadowRootMode = 'open'|'closed';

declare type ShadowRootInit = {
  delegatesFocus?: boolean;
  mode: ShadowRootMode;
}

type EventHandler = (event: Event) => mixed
type EventListener = {handleEvent: EventHandler} | EventHandler
type MouseEventHandler = (event: MouseEvent) => mixed
type MouseEventListener = {handleEvent: MouseEventHandler} | MouseEventHandler
type FocusEventHandler = (event: FocusEvent) => mixed
type FocusEventListener = {handleEvent: FocusEventHandler} | FocusEventHandler
type KeyboardEventHandler = (event: KeyboardEvent) => mixed
type KeyboardEventListener = {handleEvent: KeyboardEventHandler} | KeyboardEventHandler
type InputEventHandler = (event: InputEvent) => mixed
type InputEventListener = {handleEvent: InputEventHandler} | InputEventHandler
type TouchEventHandler = (event: TouchEvent) => mixed
type TouchEventListener = {handleEvent: TouchEventHandler} | TouchEventHandler
type WheelEventHandler = (event: WheelEvent) => mixed
type WheelEventListener = {handleEvent: WheelEventHandler} | WheelEventHandler
type AbortProgressEventHandler = (event: ProgressEvent) => mixed
type AbortProgressEventListener = {handleEvent: AbortProgressEventHandler} | AbortProgressEventHandler
type ProgressEventHandler = (event: ProgressEvent) => mixed
type ProgressEventListener = {handleEvent: ProgressEventHandler} | ProgressEventHandler
type DragEventHandler = (event: DragEvent) => mixed
type DragEventListener = {handleEvent: DragEventHandler} | DragEventHandler
type PointerEventHandler = (event: PointerEvent) => mixed
type PointerEventListener = {handleEvent: PointerEventHandler} | PointerEventHandler
type AnimationEventHandler = (event: AnimationEvent) => mixed
type AnimationEventListener = {handleEvent: AnimationEventHandler} | AnimationEventHandler
type ClipboardEventHandler = (event: ClipboardEvent) => mixed
type ClipboardEventListener = {handleEvent: ClipboardEventHandler} | ClipboardEventHandler
type TransitionEventHandler = (event: TransitionEvent) => mixed
type TransitionEventListener = {handleEvent: TransitionEventHandler} | TransitionEventHandler
type MessageEventHandler = (event: MessageEvent) => mixed
type MessageEventListener = {handleEvent: MessageEventHandler} | MessageEventHandler
type BeforeUnloadEventHandler = (event: BeforeUnloadEvent) => mixed
type BeforeUnloadEventListener = {handleEvent: BeforeUnloadEventHandler} | BeforeUnloadEventHandler

type MediaKeySessionType = 'temporary' | 'persistent-license';
type MediaKeyStatus = 'usable' | 'expired' | 'released' | 'output-restricted' | 'output-downscaled' | 'status-pending' | 'internal-error';
type MouseEventTypes = 'contextmenu' | 'mousedown' | 'mouseenter' | 'mouseleave' | 'mousemove' | 'mouseout' | 'mouseover' | 'mouseup' | 'click' | 'dblclick';
type FocusEventTypes = 'blur' | 'focus' | 'focusin' | 'focusout';
type KeyboardEventTypes = 'keydown' | 'keyup' | 'keypress';
type InputEventTypes = 'input' | 'beforeinput'
type TouchEventTypes = 'touchstart' | 'touchmove' | 'touchend' | 'touchcancel';
type WheelEventTypes = 'wheel';
type AbortProgressEventTypes = 'abort';
type ProgressEventTypes = 'abort' | 'error' | 'load' | 'loadend' | 'loadstart' | 'progress' | 'timeout';
type DragEventTypes = 'drag' | 'dragend' | 'dragenter' | 'dragexit' | 'dragleave' | 'dragover' | 'dragstart' | 'drop';
type PointerEventTypes = 'pointerover' | 'pointerenter' | 'pointerdown' | 'pointermove' | 'pointerup' | 'pointercancel' | 'pointerout' | 'pointerleave' | 'gotpointercapture' | 'lostpointercapture';
type AnimationEventTypes = 'animationstart' | 'animationend' | 'animationiteration';
type ClipboardEventTypes = 'clipboardchange' | 'cut' | 'copy' | 'paste';
type TransitionEventTypes = 'transitionrun' | 'transitionstart' | 'transitionend' | 'transitioncancel';
type MessageEventTypes = string;
type BeforeUnloadEventTypes = 'beforeunload';

type EventListenerOptionsOrUseCapture = boolean | {
  capture?: boolean,
  once?: boolean,
  passive?: boolean
};

declare class EventTarget {
  addEventListener(type: MouseEventTypes, listener: MouseEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
  addEventListener(type: FocusEventTypes, listener: FocusEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
  addEventListener(type: KeyboardEventTypes, listener: KeyboardEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
  addEventListener(type: InputEventTypes, listener: InputEventHandler, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
  addEventListener(type: TouchEventTypes, listener: TouchEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
  addEventListener(type: WheelEventTypes, listener: WheelEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
  addEventListener(type: AbortProgressEventTypes, listener: AbortProgressEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
  addEventListener(type: ProgressEventTypes, listener: ProgressEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
  addEventListener(type: DragEventTypes, listener: DragEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
  addEventListener(type: PointerEventTypes, listener: PointerEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
  addEventListener(type: AnimationEventTypes, listener: AnimationEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
  addEventListener(type: ClipboardEventTypes, listener: ClipboardEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
  addEventListener(type: TransitionEventTypes, listener: TransitionEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
  addEventListener(type: MessageEventTypes, listener: MessageEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
  addEventListener(type: BeforeUnloadEventTypes, listener: BeforeUnloadEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
  addEventListener(type: string, listener: EventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;

  removeEventListener(type: MouseEventTypes, listener: MouseEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
  removeEventListener(type: FocusEventTypes, listener: FocusEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
  removeEventListener(type: KeyboardEventTypes, listener: KeyboardEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
  removeEventListener(type: TouchEventTypes, listener: TouchEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
  removeEventListener(type: WheelEventTypes, listener: WheelEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
  removeEventListener(type: AbortProgressEventTypes, listener: AbortProgressEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
  removeEventListener(type: ProgressEventTypes, listener: ProgressEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
  removeEventListener(type: DragEventTypes, listener: DragEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
  removeEventListener(type: PointerEventTypes, listener: PointerEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
  removeEventListener(type: AnimationEventTypes, listener: AnimationEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
  removeEventListener(type: ClipboardEventTypes, listener: ClipboardEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
  removeEventListener(type: TransitionEventTypes, listener: TransitionEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
  removeEventListener(type: MessageEventTypes, listener: MessageEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
  removeEventListener(type: BeforeUnloadEventTypes, listener: BeforeUnloadEventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;
  removeEventListener(type: string, listener: EventListener, optionsOrUseCapture?: EventListenerOptionsOrUseCapture): void;

  attachEvent?: (type: MouseEventTypes, listener: MouseEventListener) => void;
  attachEvent?: (type: FocusEventTypes, listener: FocusEventListener) => void;
  attachEvent?: (type: KeyboardEventTypes, listener: KeyboardEventListener) => void;
  attachEvent?: (type: InputEventTypes, listener: InputEventHandler) => void;
  attachEvent?: (type: TouchEventTypes, listener: TouchEventListener) => void;
  attachEvent?: (type: WheelEventTypes, listener: WheelEventListener) => void;
  attachEvent?: (type: AbortProgressEventTypes, listener: AbortProgressEventListener) => void;
  attachEvent?: (type: ProgressEventTypes, listener: ProgressEventListener) => void;
  attachEvent?: (type: DragEventTypes, listener: DragEventListener) => void;
  attachEvent?: (type: PointerEventTypes, listener: PointerEventListener) => void;
  attachEvent?: (type: AnimationEventTypes, listener: AnimationEventListener) => void;
  attachEvent?: (type: ClipboardEventTypes, listener: ClipboardEventListener) => void;
  attachEvent?: (type: TransitionEventTypes, listener: TransitionEventListener) => void;
  attachEvent?: (type: MessageEventTypes, listener: MessageEventListener) => void;
  attachEvent?: (type: BeforeUnloadEventTypes, listener: BeforeUnloadEventListener) => void;
  attachEvent?: (type: string, listener: EventListener) => void;

  detachEvent?: (type: MouseEventTypes, listener: MouseEventListener) => void;
  detachEvent?: (type: FocusEventTypes, listener: FocusEventListener) => void;
  detachEvent?: (type: KeyboardEventTypes, listener: KeyboardEventListener) => void;
  detachEvent?: (type: InputEventTypes, listener: InputEventListener) => void;
  detachEvent?: (type: TouchEventTypes, listener: TouchEventListener) => void;
  detachEvent?: (type: WheelEventTypes, listener: WheelEventListener) => void;
  detachEvent?: (type: AbortProgressEventTypes, listener: AbortProgressEventListener) => void;
  detachEvent?: (type: ProgressEventTypes, listener: ProgressEventListener) => void;
  detachEvent?: (type: DragEventTypes, listener: DragEventListener) => void;
  detachEvent?: (type: PointerEventTypes, listener: PointerEventListener) => void;
  detachEvent?: (type: AnimationEventTypes, listener: AnimationEventListener) => void;
  detachEvent?: (type: ClipboardEventTypes, listener: ClipboardEventListener) => void;
  detachEvent?: (type: TransitionEventTypes, listener: TransitionEventListener) => void;
  detachEvent?: (type: MessageEventTypes, listener: MessageEventListener) => void;
  detachEvent?: (type: BeforeUnloadEventTypes, listener: BeforeUnloadEventListener) => void;
  detachEvent?: (type: string, listener: EventListener) => void;

  dispatchEvent(evt: Event): boolean;

  // Deprecated

  cancelBubble: boolean;
  initEvent(eventTypeArg: string, canBubbleArg: boolean, cancelableArg: boolean): void;
}

type Event$Init = {
  bubbles?: boolean,
  cancelable?: boolean,
  composed?: boolean,
  scoped?: boolean
}

declare class Event {
  constructor(type: string, eventInitDict?: Event$Init): void;
  bubbles: boolean;
  cancelable: boolean;
  currentTarget: EventTarget;
  deepPath?: () => EventTarget[];
  defaultPrevented: boolean;
  eventPhase: number;
  isTrusted: boolean;
  scoped: boolean;
  srcElement: Element;
  target: EventTarget;
  timeStamp: number;
  type: string;
  preventDefault(): void;
  stopImmediatePropagation(): void;
  stopPropagation(): void;
  AT_TARGET: number;
  BUBBLING_PHASE: number;
  CAPTURING_PHASE: number;

  // deprecated
  initEvent(
    type: string,
    bubbles: boolean,
    cancelable: boolean
  ): void;
}

type CustomEvent$Init = Event$Init & {
  detail?: any;
}

declare class CustomEvent extends Event {
  constructor(type: string, eventInitDict?: CustomEvent$Init): void;
  detail: any;

  // deprecated
  initCustomEvent(
    type: string,
    bubbles: boolean,
    cancelable: boolean,
    detail: any
  ): CustomEvent;
}

declare class UIEvent extends Event {
  detail: number;
  view: any;
}

type MouseEvent$MouseEventInit = {
  screenX?: number,
  screenY?: number,
  clientX?: number,
  clientY?: number,
  ctrlKey?: boolean,
  shiftKey?: boolean,
  altKey?: boolean,
  metaKey?: boolean,
  button?: number,
  buttons?: number,
  region?: string | null,
  relatedTarget?: EventTarget | null,
};

declare class MouseEvent extends UIEvent {
  constructor(
    typeArg: string,
    mouseEventInit?: MouseEvent$MouseEventInit,
  ): void;
  altKey: boolean;
  button: number;
  buttons: number;
  clientX: number;
  clientY: number;
  ctrlKey: boolean;
  metaKey: boolean;
  movementX: number;
  movementY: number;
  offsetX: number;
  offsetY: number;
  pageX: number;
  pageY: number;
  region: string | null;
  relatedTarget: EventTarget | null;
  screenX: number;
  screenY: number;
  shiftKey: boolean;
  x: number;
  y: number;
  getModifierState(keyArg: string): boolean;
}

declare class FocusEvent extends UIEvent {
  relatedTarget: ?EventTarget;
}

declare class WheelEvent extends MouseEvent {
  deltaX: number; // readonly
  deltaY: number; // readonly
  deltaZ: number; // readonly
  deltaMode: 0x00 | 0x01 | 0x02; // readonly
}

declare class DragEvent extends MouseEvent {
  dataTransfer: ?DataTransfer; // readonly
}

type PointerEvent$PointerEventInit = MouseEvent$MouseEventInit & {
  pointerId?: number;
  width?: number;
  height?: number;
  pressure?: number;
  tangentialPressure?: number;
  tiltX?: number;
  tiltY?: number;
  twist?: number;
  pointerType?: string;
  isPrimary?: boolean;
};

declare class PointerEvent extends MouseEvent {
  constructor(
    typeArg: string,
    pointerEventInit?: PointerEvent$PointerEventInit,
  ): void;
  pointerId: number;
  width: number;
  height: number;
  pressure: number;
  tangentialPressure: number;
  tiltX: number;
  tiltY: number;
  twist: number;
  pointerType: string;
  isPrimary: boolean;
}

declare class ProgressEvent extends Event {
  lengthComputable: boolean;
  loaded: number;
  total: number;

  // Deprecated
  initProgressEvent(
    typeArg: string,
    canBubbleArg: boolean,
    cancelableArg: boolean,
    lengthComputableArg: boolean,
    loadedArg: number,
    totalArg: number
  ): void;
}

declare class PromiseRejectionEvent extends Event {
  promise: Promise<any>;
  reason: any;
}

// used for websockets and postMessage, for example. See:
// http://www.w3.org/TR/2011/WD-websockets-20110419/
// and
// http://www.w3.org/TR/2008/WD-html5-20080610/comms.html
// and
// https://html.spec.whatwg.org/multipage/comms.html#the-messageevent-interfaces
declare class MessageEvent extends Event {
  data: mixed;
  origin: string;
  lastEventId: string;
  source: WindowProxy;
}

// https://www.w3.org/TR/eventsource/
declare class EventSource extends EventTarget {
  constructor(url: string, configuration?: { withCredentials: boolean }): void;
  +CLOSED: 2;
  +CONNECTING: 0;
  +OPEN: 1;
  +readyState: 0 | 1 | 2;
  +url: string;
  +withCredentials: boolean;
  onerror: () => void;
  onmessage: MessageEventListener;
  onopen: () => void;
  close: () => void;
}

declare class KeyboardEvent extends UIEvent {
  altKey: boolean;
  code: string;
  ctrlKey: boolean;
  isComposing: boolean;
  key: string;
  location: number;
  metaKey: boolean;
  repeat: boolean;
  shiftKey: boolean;
  getModifierState(keyArg?: string): boolean;

  // Deprecated
  charCode: number;
  keyCode: number;
  which: number;
}

declare class InputEvent extends UIEvent {
  data: string | null;
  isComposing: boolean;
}

declare class AnimationEvent extends Event {
  animationName: string;
  elapsedTime: number;
  pseudoElement: string;

  // deprecated

  initAnimationEvent: (
    type: 'animationstart' | 'animationend' | 'animationiteration',
    canBubble: boolean,
    cancelable: boolean,
    animationName: string,
    elapsedTime: number
  ) => void;
}

// https://html.spec.whatwg.org/multipage/web-messaging.html#broadcasting-to-other-browsing-contexts
declare class BroadcastChannel {
  name: string;
  onmessage: ?(event: MessageEvent) => void;
  onmessageerror: ?(event: MessageEvent) => void;

  constructor(name: string): void;
  postMessage(msg: mixed): void;
  close(): void;
}

// https://www.w3.org/TR/touch-events/#idl-def-Touch
declare class Touch {
  clientX: number,
  clientY: number,
  identifier: number,
  pageX: number,
  pageY: number,
  screenX: number,
  screenY: number,
  target: EventTarget,
}

// https://www.w3.org/TR/touch-events/#idl-def-TouchList
// TouchList#item(index) will return null if n > #length. Should #item's
// return type just been Touch?
declare class TouchList {
  @@iterator(): Iterator<Touch>;
  length: number,
  item(index: number): null | Touch,
  [index: number]: Touch,
}

// https://www.w3.org/TR/touch-events/#touchevent-interface
declare class TouchEvent extends UIEvent {
  altKey: boolean,
  changedTouches: TouchList,
  ctrlKey: boolean,
  metaKey: boolean,
  shiftKey: boolean,
  targetTouches: TouchList,
  touches: TouchList,
}

// https://www.w3.org/TR/webstorage/#the-storageevent-interface
declare class StorageEvent extends Event {
  key: ?string,
  oldValue: ?string,
  newValue: ?string,
  url: string,
  storageArea: ?Storage,
}

// https://w3c.github.io/clipboard-apis/ as of 15 May 2018
type ClipboardEvent$Init = Event$Init & {
  clipboardData: DataTransfer | null;
};

declare class ClipboardEvent extends Event {
  constructor(type: ClipboardEventTypes, eventInit?: ClipboardEvent$Init): void;
  +clipboardData: ?DataTransfer; // readonly
}

// https://www.w3.org/TR/2017/WD-css-transitions-1-20171130/#interface-transitionevent
type TransitionEvent$Init = Event$Init & {
  propertyName: string;
  elapsedTime: number;
  pseudoElement: string;
};

declare class TransitionEvent extends Event {
  constructor(type: TransitionEventTypes, eventInit?: TransitionEvent$Init): void;

  +propertyName: string; // readonly
  +elapsedTime: number; // readonly
  +pseudoElement: string; // readonly
}

// https://www.w3.org/TR/html50/browsers.html#beforeunloadevent
declare class BeforeUnloadEvent extends Event {
  returnValue: string,
}

// TODO: *Event

declare class Node extends EventTarget {
  baseURI: ?string;
  childNodes: NodeList<Node>;
  firstChild: ?Node;
  +isConnected: boolean;
  lastChild: ?Node;
  nextSibling: ?Node;
  nodeName: string;
  nodeType: number;
  nodeValue: string;
  ownerDocument: Document;
  parentElement: ?Element;
  parentNode: ?Node;
  previousSibling: ?Node;
  rootNode: Node;
  textContent: string;
  appendChild<T: Node>(newChild: T): T;
  cloneNode(deep?: boolean): this;
  compareDocumentPosition(other: Node): number;
  contains(other: ?Node): boolean;
  getRootNode(options?: {composed: boolean}): Node;
  hasChildNodes(): boolean;
  insertBefore<T: Node>(newChild: T, refChild?: ?Node): T;
  isDefaultNamespace(namespaceURI: string): boolean;
  isEqualNode(arg: Node): boolean;
  isSameNode(other: Node): boolean;
  lookupNamespaceURI(prefix: string): string;
  lookupPrefix(namespaceURI: string): string;
  normalize(): void;
  removeChild<T: Node>(oldChild: T): T;
  replaceChild<T: Node>(newChild: Node, oldChild: T): T;
  static ATTRIBUTE_NODE: number;
  static CDATA_SECTION_NODE: number;
  static COMMENT_NODE: number;
  static DOCUMENT_FRAGMENT_NODE: number;
  static DOCUMENT_NODE: number;
  static DOCUMENT_POSITION_CONTAINED_BY: number;
  static DOCUMENT_POSITION_CONTAINS: number;
  static DOCUMENT_POSITION_DISCONNECTED: number;
  static DOCUMENT_POSITION_FOLLOWING: number;
  static DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
  static DOCUMENT_POSITION_PRECEDING: number;
  static DOCUMENT_TYPE_NODE: number;
  static ELEMENT_NODE: number;
  static ENTITY_NODE: number;
  static ENTITY_REFERENCE_NODE: number;
  static NOTATION_NODE: number;
  static PROCESSING_INSTRUCTION_NODE: number;
  static TEXT_NODE: number;

  // Non-standard
  innerText?: string;
  outerText?: string;
}

declare class NodeList<T> {
  @@iterator(): Iterator<T>;
  length: number;
  item(index: number): T;
  [index: number]: T;

  forEach(callbackfn: (value: T, index: number, list: NodeList<T>) => any, thisArg?: any): void;
  entries(): Iterator<[number, T]>;
  keys(): Iterator<number>;
  values(): Iterator<T>;
}

declare class NamedNodeMap {
  @@iterator(): Iterator<Attr>;
  length: number;
  removeNamedItemNS(namespaceURI: string, localName: string): Attr;
  item(index: number): Attr;
  [index: number]: Attr;
  removeNamedItem(name: string): Attr;
  getNamedItem(name: string): Attr;
  setNamedItem(arg: Attr): Attr;
  getNamedItemNS(namespaceURI: string, localName: string): Attr;
  setNamedItemNS(arg: Attr): Attr;
}

declare class Attr extends Node {
  isId: boolean;
  specified: boolean;
  ownerElement: Element | null;
  value: string;
  name: string;
  namespaceURI: string | null;
  prefix: string | null;
  localName: string;
}

declare class HTMLCollection<+Elem: HTMLElement> {
  @@iterator(): Iterator<Elem>;
  length: number;
  item(nameOrIndex?: any, optionalIndex?: any): Elem | null;
  namedItem(name: string): Elem | null;
  [index: number | string]: Elem;
}

// from https://www.w3.org/TR/custom-elements/#extensions-to-document-interface-to-register
type ElementRegistrationOptions = {
  +prototype?: {
    // from https://www.w3.org/TR/custom-elements/#types-of-callbacks
    +createdCallback?: () => mixed;
    +attachedCallback?: () => mixed;
    +detachedCallback?: () => mixed;
    +attributeChangedCallback?:
    // attribute is set
    ((
      attributeLocalName: string,
      oldAttributeValue: null,
      newAttributeValue: string,
      attributeNamespace: string
    ) => mixed) &
    // attribute is changed
    ((
      attributeLocalName: string,
      oldAttributeValue: string,
      newAttributeValue: string,
      attributeNamespace: string
    ) => mixed) &
    // attribute is removed
    ((
      attributeLocalName: string,
      oldAttributeValue: string,
      newAttributeValue: null,
      attributeNamespace: string
    ) => mixed);
  };
  +extends?: string;
}

declare class Document extends Node {
  URL: string;
  adoptNode<T: Node>(source: T): T;
  anchors: HTMLCollection<HTMLAnchorElement>;
  applets: HTMLCollection<HTMLAppletElement>;
  body: HTMLBodyElement | null;
  characterSet: string;
  close(): void;
  cookie: string;
  createAttribute(name: string): Attr;
  createAttributeNS(namespaceURI: string | null, qualifiedName: string): Attr;
  createCDATASection(data: string): Text;
  createComment(data: string): Comment;
  createDocumentFragment(): DocumentFragment;
  createElement(tagName: 'a'): HTMLAnchorElement;
  createElement(tagName: 'area'): HTMLAreaElement;
  createElement(tagName: 'audio'): HTMLAudioElement;
  createElement(tagName: 'blockquote'): HTMLQuoteElement;
  createElement(tagName: 'body'): HTMLBodyElement;
  createElement(tagName: 'br'): HTMLBRElement;
  createElement(tagName: 'button'): HTMLButtonElement;
  createElement(tagName: 'canvas'): HTMLCanvasElement;
  createElement(tagName: 'col'): HTMLTableColElement;
  createElement(tagName: 'colgroup'): HTMLTableColElement;
  createElement(tagName: 'data'): HTMLDataElement;
  createElement(tagName: 'datalist'): HTMLDataListElement;
  createElement(tagName: 'del'): HTMLModElement;
  createElement(tagName: 'details'): HTMLDetailsElement;
  createElement(tagName: 'dialog'): HTMLDialogElement;
  createElement(tagName: 'div'): HTMLDivElement;
  createElement(tagName: 'dl'): HTMLDListElement;
  createElement(tagName: 'embed'): HTMLEmbedElement;
  createElement(tagName: 'fieldset'): HTMLFieldSetElement;
  createElement(tagName: 'form'): HTMLFormElement;
  createElement(tagName: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'): HTMLHeadingElement;
  createElement(tagName: 'head'): HTMLHeadElement;
  createElement(tagName: 'hr'): HTMLHRElement;
  createElement(tagName: 'html'): HTMLHtmlElement;
  createElement(tagName: 'iframe'): HTMLIFrameElement;
  createElement(tagName: 'img'): HTMLImageElement;
  createElement(tagName: 'input'): HTMLInputElement;
  createElement(tagName: 'ins'): HTMLModElement;
  createElement(tagName: 'label'): HTMLLabelElement;
  createElement(tagName: 'legend'): HTMLLegendElement;
  createElement(tagName: 'li'): HTMLLIElement;
  createElement(tagName: 'link'): HTMLLinkElement;
  createElement(tagName: 'map'): HTMLMapElement;
  createElement(tagName: 'meta'): HTMLMetaElement;
  createElement(tagName: 'meter'): HTMLMeterElement;
  createElement(tagName: 'object'): HTMLObjectElement;
  createElement(tagName: 'ol'): HTMLOListElement;
  createElement(tagName: 'optgroup'): HTMLOptGroupElement;
  createElement(tagName: 'option'): HTMLOptionElement;
  createElement(tagName: 'p'): HTMLParagraphElement;
  createElement(tagName: 'param'): HTMLParamElement;
  createElement(tagName: 'picture'): HTMLPictureElement;
  createElement(tagName: 'pre'): HTMLPreElement;
  createElement(tagName: 'progress'): HTMLProgressElement;
  createElement(tagName: 'q'): HTMLQuoteElement;
  createElement(tagName: 'script'): HTMLScriptElement;
  createElement(tagName: 'select'): HTMLSelectElement;
  createElement(tagName: 'source'): HTMLSourceElement;
  createElement(tagName: 'span'): HTMLSpanElement;
  createElement(tagName: 'style'): HTMLStyleElement;
  createElement(tagName: 'textarea'): HTMLTextAreaElement;
  createElement(tagName: 'time'): HTMLTimeElement;
  createElement(tagName: 'title'): HTMLTitleElement;
  createElement(tagName: 'track'): HTMLTrackElement;
  createElement(tagName: 'video'): HTMLVideoElement;
  createElement(tagName: 'table'): HTMLTableElement;
  createElement(tagName: 'caption'): HTMLTableCaptionElement;
  createElement(tagName: 'thead' | 'tfoot' | 'tbody'): HTMLTableSectionElement;
  createElement(tagName: 'tr'): HTMLTableRowElement;
  createElement(tagName: 'td' | 'th'): HTMLTableCellElement;
  createElement(tagName: 'template'): HTMLTemplateElement;
  createElement(tagName: 'ul'): HTMLUListElement;
  createElement(tagName: string): HTMLElement;
  createElementNS(namespaceURI: string | null, qualifiedName: string): Element;
  createTextNode(data: string): Text;
  currentScript: HTMLScriptElement | null;
  doctype: DocumentType | null;
  documentElement: HTMLElement | null;
  documentMode: number;
  domain: string | null;
  embeds: HTMLCollection<HTMLEmbedElement>;
  queryCommandSupported(cmdID: string): boolean;
  execCommand(cmdID: string, showUI?: boolean, value?: any): boolean;
  forms: HTMLCollection<HTMLFormElement>;
  getElementById(elementId: string): HTMLElement | null;
  getElementsByClassName(classNames: string): HTMLCollection<HTMLElement>;
  getElementsByName(elementName: string): HTMLCollection<HTMLElement>;
  getElementsByTagName(name: 'a'): HTMLCollection<HTMLAnchorElement>;
  getElementsByTagName(name: 'area'): HTMLCollection<HTMLAreaElement>;
  getElementsByTagName(name: 'audio'): HTMLCollection<HTMLAudioElement>;
  getElementsByTagName(name: 'blockquote'): HTMLCollection<HTMLQuoteElement>;
  getElementsByTagName(name: 'body'): HTMLCollection<HTMLBodyElement>;
  getElementsByTagName(name: 'br'): HTMLCollection<HTMLBRElement>;
  getElementsByTagName(name: 'button'): HTMLCollection<HTMLButtonElement>;
  getElementsByTagName(name: 'canvas'): HTMLCollection<HTMLCanvasElement>;
  getElementsByTagName(name: 'col'): HTMLCollection<HTMLTableColElement>;
  getElementsByTagName(name: 'colgroup'): HTMLCollection<HTMLTableColElement>;
  getElementsByTagName(name: 'data'): HTMLCollection<HTMLDataElement>;
  getElementsByTagName(name: 'datalist'): HTMLCollection<HTMLDataListElement>;
  getElementsByTagName(name: 'del'): HTMLCollection<HTMLModElement>;
  getElementsByTagName(name: 'details'): HTMLCollection<HTMLDetailsElement>;
  getElementsByTagName(name: 'dialog'): HTMLCollection<HTMLDialogElement>;
  getElementsByTagName(name: 'div'): HTMLCollection<HTMLDivElement>;
  getElementsByTagName(name: 'dl'): HTMLCollection<HTMLDListElement>;
  getElementsByTagName(name: 'embed'): HTMLCollection<HTMLEmbedElement>;
  getElementsByTagName(name: 'fieldset'): HTMLCollection<HTMLFieldSetElement>;
  getElementsByTagName(name: 'form'): HTMLCollection<HTMLFormElement>;
  getElementsByTagName(name: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'): HTMLCollection<HTMLHeadingElement>;
  getElementsByTagName(name: 'head'): HTMLCollection<HTMLHeadElement>;
  getElementsByTagName(name: 'hr'): HTMLCollection<HTMLHRElement>;
  getElementsByTagName(name: 'html'): HTMLCollection<HTMLHtmlElement>;
  getElementsByTagName(name: 'iframe'): HTMLCollection<HTMLIFrameElement>;
  getElementsByTagName(name: 'img'): HTMLCollection<HTMLImageElement>;
  getElementsByTagName(name: 'input'): HTMLCollection<HTMLInputElement>;
  getElementsByTagName(name: 'ins'): HTMLCollection<HTMLModElement>;
  getElementsByTagName(name: 'label'): HTMLCollection<HTMLLabelElement>;
  getElementsByTagName(name: 'legend'): HTMLCollection<HTMLLegendElement>;
  getElementsByTagName(name: 'li'): HTMLCollection<HTMLLIElement>;
  getElementsByTagName(name: 'link'): HTMLCollection<HTMLLinkElement>;
  getElementsByTagName(name: 'map'): HTMLCollection<HTMLMapElement>;
  getElementsByTagName(name: 'meta'): HTMLCollection<HTMLMetaElement>;
  getElementsByTagName(name: 'meter'): HTMLCollection<HTMLMeterElement>;
  getElementsByTagName(name: 'object'): HTMLCollection<HTMLObjectElement>;
  getElementsByTagName(name: 'ol'): HTMLCollection<HTMLOListElement>;
  getElementsByTagName(name: 'option'): HTMLCollection<HTMLOptionElement>;
  getElementsByTagName(name: 'optgroup'): HTMLCollection<HTMLOptGroupElement>;
  getElementsByTagName(name: 'p'): HTMLCollection<HTMLParagraphElement>;
  getElementsByTagName(name: 'param'): HTMLCollection<HTMLParamElement>;
  getElementsByTagName(name: 'picture'): HTMLCollection<HTMLPictureElement>;
  getElementsByTagName(name: 'pre'): HTMLCollection<HTMLPreElement>;
  getElementsByTagName(name: 'progress'): HTMLCollection<HTMLProgressElement>;
  getElementsByTagName(name: 'q'): HTMLCollection<HTMLQuoteElement>;
  getElementsByTagName(name: 'script'): HTMLCollection<HTMLScriptElement>;
  getElementsByTagName(name: 'select'): HTMLCollection<HTMLSelectElement>;
  getElementsByTagName(name: 'source'): HTMLCollection<HTMLSourceElement>;
  getElementsByTagName(name: 'span'): HTMLCollection<HTMLSpanElement>;
  getElementsByTagName(name: 'style'): HTMLCollection<HTMLStyleElement>;
  getElementsByTagName(name: 'textarea'): HTMLCollection<HTMLTextAreaElement>;
  getElementsByTagName(name: 'time'): HTMLCollection<HTMLTimeElement>;
  getElementsByTagName(name: 'title'): HTMLCollection<HTMLTitleElement>;
  getElementsByTagName(name: 'track'): HTMLCollection<HTMLTrackElement>;
  getElementsByTagName(name: 'video'): HTMLCollection<HTMLVideoElement>;
  getElementsByTagName(name: 'table'): HTMLCollection<HTMLTableElement>;
  getElementsByTagName(name: 'caption'): HTMLCollection<HTMLTableCaptionElement>;
  getElementsByTagName(name: 'thead' | 'tfoot' | 'tbody'): HTMLCollection<HTMLTableSectionElement>;
  getElementsByTagName(name: 'tr'): HTMLCollection<HTMLTableRowElement>;
  getElementsByTagName(name: 'td' | 'th'): HTMLCollection<HTMLTableCellElement>;
  getElementsByTagName(name: 'template'): HTMLCollection<HTMLTemplateElement>;
  getElementsByTagName(name: 'ul'): HTMLCollection<HTMLUListElement>;
  getElementsByTagName(name: string): HTMLCollection<HTMLElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'a'): HTMLCollection<HTMLAnchorElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'area'): HTMLCollection<HTMLAreaElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'audio'): HTMLCollection<HTMLAudioElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'blockquote'): HTMLCollection<HTMLQuoteElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'body'): HTMLCollection<HTMLBodyElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'br'): HTMLCollection<HTMLBRElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'button'): HTMLCollection<HTMLButtonElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'canvas'): HTMLCollection<HTMLCanvasElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'col'): HTMLCollection<HTMLTableColElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'colgroup'): HTMLCollection<HTMLTableColElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'data'): HTMLCollection<HTMLDataElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'datalist'): HTMLCollection<HTMLDataListElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'del'): HTMLCollection<HTMLModElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'details'): HTMLCollection<HTMLDetailsElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'dialog'): HTMLCollection<HTMLDialogElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'div'): HTMLCollection<HTMLDivElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'dl'): HTMLCollection<HTMLDListElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'embed'): HTMLCollection<HTMLEmbedElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'fieldset'): HTMLCollection<HTMLFieldSetElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'form'): HTMLCollection<HTMLFormElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'): HTMLCollection<HTMLHeadingElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'head'): HTMLCollection<HTMLHeadElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'hr'): HTMLCollection<HTMLHRElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'html'): HTMLCollection<HTMLHtmlElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'iframe'): HTMLCollection<HTMLIFrameElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'img'): HTMLCollection<HTMLImageElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'input'): HTMLCollection<HTMLInputElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'ins'): HTMLCollection<HTMLModElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'label'): HTMLCollection<HTMLLabelElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'legend'): HTMLCollection<HTMLLegendElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'li'): HTMLCollection<HTMLLIElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'link'): HTMLCollection<HTMLLinkElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'map'): HTMLCollection<HTMLMapElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'meta'): HTMLCollection<HTMLMetaElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'meter'): HTMLCollection<HTMLMeterElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'object'): HTMLCollection<HTMLObjectElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'ol'): HTMLCollection<HTMLOListElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'option'): HTMLCollection<HTMLOptionElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'optgroup'): HTMLCollection<HTMLOptGroupElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'p'): HTMLCollection<HTMLParagraphElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'param'): HTMLCollection<HTMLParamElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'picture'): HTMLCollection<HTMLPictureElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'pre'): HTMLCollection<HTMLPreElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'progress'): HTMLCollection<HTMLProgressElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'q'): HTMLCollection<HTMLQuoteElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'script'): HTMLCollection<HTMLScriptElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'select'): HTMLCollection<HTMLSelectElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'source'): HTMLCollection<HTMLSourceElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'span'): HTMLCollection<HTMLSpanElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'style'): HTMLCollection<HTMLStyleElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'textarea'): HTMLCollection<HTMLTextAreaElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'time'): HTMLCollection<HTMLTimeElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'title'): HTMLCollection<HTMLTitleElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'track'): HTMLCollection<HTMLTrackElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'video'): HTMLCollection<HTMLVideoElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'table'): HTMLCollection<HTMLTableElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'caption'): HTMLCollection<HTMLTableCaptionElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'thead' | 'tfoot' | 'tbody'): HTMLCollection<HTMLTableSectionElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'tr'): HTMLCollection<HTMLTableRowElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'td' | 'th'): HTMLCollection<HTMLTableCellElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'template'): HTMLCollection<HTMLTemplateElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'ul'): HTMLCollection<HTMLUListElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: string): HTMLCollection<HTMLElement>;
  head: HTMLElement | null;
  images: HTMLCollection<HTMLImageElement>;
  implementation: DOMImplementation;
  importNode<T: Node>(importedNode: T, deep: boolean): T;
  inputEncoding: string;
  lastModified: string;
  links: HTMLCollection<HTMLLinkElement>;
  media: string;
  open(url?: string, name?: string, features?: string, replace?: boolean): any;
  readyState: string;
  referrer: string;
  scripts: HTMLCollection<HTMLScriptElement>;
  scrollingElement: HTMLElement | null;
  styleSheets: StyleSheetList;
  title: string;
  visibilityState: 'visible' | 'hidden' | 'prerender' | 'unloaded';
  write(...content: Array<string>): void;
  writeln(...content: Array<string>): void;
  xmlEncoding: string;
  xmlStandalone: boolean;
  xmlVersion: string;

  registerElement(type: string, options?: ElementRegistrationOptions): any;
  getSelection(): Selection | null;

  // 6.4.6 Focus management APIs
  activeElement: HTMLElement | null;
  hasFocus(): boolean;

  // extension
  location: Location;
  createEvent(eventInterface: 'CustomEvent'): CustomEvent;
  createEvent(eventInterface: string): Event;
  createRange(): Range;
  elementFromPoint(x: number, y: number): HTMLElement | null;
  defaultView: any;
  compatMode: 'BackCompat' | 'CSS1Compat';
  hidden: boolean;

  // from ParentNode interface
  childElementCount: number;
  children: HTMLCollection<HTMLElement>;
  firstElementChild: ?Element;
  lastElementChild: ?Element;
  append(...nodes: Array<string | Node>): void;
  prepend(...nodes: Array<string | Node>): void;

  querySelector(selector: 'a'): HTMLAnchorElement | null;
  querySelector(selector: 'area'): HTMLAreaElement | null;
  querySelector(selector: 'audio'): HTMLAudioElement | null;
  querySelector(selector: 'blockquote'): HTMLQuoteElement | null;
  querySelector(selector: 'body'): HTMLBodyElement | null;
  querySelector(selector: 'br'): HTMLBRElement | null;
  querySelector(selector: 'button'): HTMLButtonElement | null;
  querySelector(selector: 'canvas'): HTMLCanvasElement | null;
  querySelector(selector: 'col'): HTMLTableColElement | null;
  querySelector(selector: 'colgroup'): HTMLTableColElement | null;
  querySelector(selector: 'data'): HTMLDataElement | null;
  querySelector(selector: 'datalist'): HTMLDataListElement | null;
  querySelector(selector: 'del'): HTMLModElement | null;
  querySelector(selector: 'details'): HTMLDetailsElement | null;
  querySelector(selector: 'dialog'): HTMLDialogElement | null;
  querySelector(selector: 'div'): HTMLDivElement | null;
  querySelector(selector: 'dl'): HTMLDListElement | null;
  querySelector(selector: 'embed'): HTMLEmbedElement | null;
  querySelector(selector: 'fieldset'): HTMLFieldSetElement | null;
  querySelector(selector: 'form'): HTMLFormElement | null;
  querySelector(selector: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'): HTMLHeadingElement;
  querySelector(selector: 'head'): HTMLHeadElement | null;
  querySelector(selector: 'hr'): HTMLHRElement | null;
  querySelector(selector: 'html'): HTMLHtmlElement | null;
  querySelector(selector: 'iframe'): HTMLIFrameElement | null;
  querySelector(selector: 'img'): HTMLImageElement | null;
  querySelector(selector: 'ins'): HTMLModElement | null;
  querySelector(selector: 'input'): HTMLInputElement | null;
  querySelector(selector: 'label'): HTMLLabelElement | null;
  querySelector(selector: 'legend'): HTMLLegendElement | null;
  querySelector(selector: 'li'): HTMLLIElement | null;
  querySelector(selector: 'link'): HTMLLinkElement | null;
  querySelector(selector: 'map'): HTMLMapElement | null;
  querySelector(selector: 'meta'): HTMLMetaElement | null;
  querySelector(selector: 'meter'): HTMLMeterElement | null;
  querySelector(selector: 'object'): HTMLObjectElement | null;
  querySelector(selector: 'ol'): HTMLOListElement | null;
  querySelector(selector: 'option'): HTMLOptionElement | null;
  querySelector(selector: 'optgroup'): HTMLOptGroupElement | null;
  querySelector(selector: 'p'): HTMLParagraphElement | null;
  querySelector(selector: 'param'): HTMLParamElement | null;
  querySelector(selector: 'picture'): HTMLPictureElement | null;
  querySelector(selector: 'pre'): HTMLPreElement | null;
  querySelector(selector: 'progress'): HTMLProgressElement | null;
  querySelector(selector: 'q'): HTMLQuoteElement | null;
  querySelector(selector: 'script'): HTMLScriptElement | null;
  querySelector(selector: 'select'): HTMLSelectElement | null;
  querySelector(selector: 'source'): HTMLSourceElement | null;
  querySelector(selector: 'span'): HTMLSpanElement | null;
  querySelector(selector: 'style'): HTMLStyleElement | null;
  querySelector(selector: 'textarea'): HTMLTextAreaElement | null;
  querySelector(selector: 'time'): HTMLTimeElement | null;
  querySelector(selector: 'title'): HTMLTitleElement | null;
  querySelector(selector: 'track'): HTMLTrackElement | null;
  querySelector(selector: 'video'): HTMLVideoElement | null;
  querySelector(selector: 'table'): HTMLTableElement | null;
  querySelector(selector: 'caption'): HTMLTableCaptionElement | null;
  querySelector(selector: 'thead' | 'tfoot' | 'tbody'): HTMLTableSectionElement | null;
  querySelector(selector: 'tr'): HTMLTableRowElement | null;
  querySelector(selector: 'td' | 'th'): HTMLTableCellElement | null;
  querySelector(selector: 'template'): HTMLTemplateElement | null;
  querySelector(selector: 'ul'): HTMLUListElement | null;
  querySelector(selector: string): HTMLElement | null;

  querySelectorAll(selector: 'a'): NodeList<HTMLAnchorElement>;
  querySelectorAll(selector: 'area'): NodeList<HTMLAreaElement>;
  querySelectorAll(selector: 'audio'): NodeList<HTMLAudioElement>;
  querySelectorAll(selector: 'blockquote'): NodeList<HTMLQuoteElement>;
  querySelectorAll(selector: 'body'): NodeList<HTMLBodyElement>;
  querySelectorAll(selector: 'br'): NodeList<HTMLBRElement>;
  querySelectorAll(selector: 'button'): NodeList<HTMLButtonElement>;
  querySelectorAll(selector: 'canvas'): NodeList<HTMLCanvasElement>;
  querySelectorAll(selector: 'col'): NodeList<HTMLTableColElement>;
  querySelectorAll(selector: 'colgroup'): NodeList<HTMLTableColElement>;
  querySelectorAll(selector: 'data'): NodeList<HTMLDataElement>;
  querySelectorAll(selector: 'datalist'): NodeList<HTMLDataListElement>;
  querySelectorAll(selector: 'del'): NodeList<HTMLModElement>;
  querySelectorAll(selector: 'details'): NodeList<HTMLDetailsElement>;
  querySelectorAll(selector: 'dialog'): NodeList<HTMLDialogElement>;
  querySelectorAll(selector: 'div'): NodeList<HTMLDivElement>;
  querySelectorAll(selector: 'dl'): NodeList<HTMLDListElement>;
  querySelectorAll(selector: 'embed'): NodeList<HTMLEmbedElement>;
  querySelectorAll(selector: 'fieldset'): NodeList<HTMLFieldSetElement>;
  querySelectorAll(selector: 'form'): NodeList<HTMLFormElement>;
  querySelectorAll(selector: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'): NodeList<HTMLHeadingElement>;
  querySelectorAll(selector: 'head'): NodeList<HTMLHeadElement>;
  querySelectorAll(selector: 'hr'): NodeList<HTMLHRElement>;
  querySelectorAll(selector: 'html'): NodeList<HTMLHtmlElement>;
  querySelectorAll(selector: 'iframe'): NodeList<HTMLIFrameElement>;
  querySelectorAll(selector: 'img'): NodeList<HTMLImageElement>;
  querySelectorAll(selector: 'input'): NodeList<HTMLInputElement>;
  querySelectorAll(selector: 'ins'): NodeList<HTMLModElement>;
  querySelectorAll(selector: 'label'): NodeList<HTMLLabelElement>;
  querySelectorAll(selector: 'legend'): NodeList<HTMLLegendElement>;
  querySelectorAll(selector: 'li'): NodeList<HTMLLIElement>;
  querySelectorAll(selector: 'link'): NodeList<HTMLLinkElement>;
  querySelectorAll(selector: 'map'): NodeList<HTMLMapElement>;
  querySelectorAll(selector: 'meta'): NodeList<HTMLMetaElement>;
  querySelectorAll(selector: 'meter'): NodeList<HTMLMeterElement>;
  querySelectorAll(selector: 'object'): NodeList<HTMLObjectElement>;
  querySelectorAll(selector: 'ol'): NodeList<HTMLOListElement>;
  querySelectorAll(selector: 'option'): NodeList<HTMLOptionElement>;
  querySelectorAll(selector: 'optgroup'): NodeList<HTMLOptGroupElement>;
  querySelectorAll(selector: 'p'): NodeList<HTMLParagraphElement>;
  querySelectorAll(selector: 'param'): NodeList<HTMLParamElement>;
  querySelectorAll(selector: 'picture'): NodeList<HTMLPictureElement>;
  querySelectorAll(selector: 'pre'): NodeList<HTMLPreElement>;
  querySelectorAll(selector: 'progress'): NodeList<HTMLProgressElement>;
  querySelectorAll(selector: 'q'): NodeList<HTMLQuoteElement>;
  querySelectorAll(selector: 'script'): NodeList<HTMLScriptElement>;
  querySelectorAll(selector: 'select'): NodeList<HTMLSelectElement>;
  querySelectorAll(selector: 'source'): NodeList<HTMLSourceElement>;
  querySelectorAll(selector: 'span'): NodeList<HTMLSpanElement>;
  querySelectorAll(selector: 'style'): NodeList<HTMLStyleElement>;
  querySelectorAll(selector: 'textarea'): NodeList<HTMLTextAreaElement>;
  querySelectorAll(selector: 'time'): NodeList<HTMLTimeElement>;
  querySelectorAll(selector: 'title'): NodeList<HTMLTitleElement>;
  querySelectorAll(selector: 'track'): NodeList<HTMLTrackElement>;
  querySelectorAll(selector: 'video'): NodeList<HTMLVideoElement>;
  querySelectorAll(selector: 'table'): NodeList<HTMLTableElement>;
  querySelectorAll(selector: 'caption'): NodeList<HTMLTableCaptionElement>;
  querySelectorAll(selector: 'thead' | 'tfoot' | 'tbody'): NodeList<HTMLTableSectionElement>;
  querySelectorAll(selector: 'tr'): NodeList<HTMLTableRowElement>;
  querySelectorAll(selector: 'td' | 'th'): NodeList<HTMLTableCellElement>;
  querySelectorAll(selector: 'template'): NodeList<HTMLTemplateElement>;
  querySelectorAll(selector: 'ul'): NodeList<HTMLUListElement>;
  querySelectorAll(selector: string): NodeList<HTMLElement>;

  // Interface DocumentTraversal
  // http://www.w3.org/TR/2000/REC-DOM-Level-2-Traversal-Range-20001113/traversal.html#Traversal-Document

  // Not all combinations of RootNodeT and whatToShow are logically possible.
  // The bitmasks NodeFilter.SHOW_CDATA_SECTION,
  // NodeFilter.SHOW_ENTITY_REFERENCE, NodeFilter.SHOW_ENTITY, and
  // NodeFilter.SHOW_NOTATION are deprecated and do not correspond to types
  // that Flow knows about.

  // NodeFilter.SHOW_ATTRIBUTE is also deprecated, but corresponds to the
  // type Attr. While there is no reason to prefer it to Node.attributes,
  // it does have meaning and can be typed: When (whatToShow &
  // NodeFilter.SHOW_ATTRIBUTE === 1), RootNodeT must be Attr, and when
  // RootNodeT is Attr, bitmasks other than NodeFilter.SHOW_ATTRIBUTE are
  // meaningless.
  createNodeIterator<RootNodeT: Attr>(root: RootNodeT, whatToShow: 2, filter?: NodeFilterInterface): NodeIterator<RootNodeT, Attr>;
  createTreeWalker<RootNodeT: Attr>(root: RootNodeT, whatToShow: 2, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, Attr>;

  // NodeFilter.SHOW_PROCESSING_INSTRUCTION is not implemented because Flow
  // does not currently define a ProcessingInstruction class.

  // When (whatToShow & NodeFilter.SHOW_DOCUMENT === 1 || whatToShow &
  // NodeFilter.SHOW_DOCUMENT_TYPE === 1), RootNodeT must be Document.
  createNodeIterator<RootNodeT: Document>(root: RootNodeT, whatToShow: 256, filter?: NodeFilterInterface): NodeIterator<RootNodeT, Document>;
  createNodeIterator<RootNodeT: Document>(root: RootNodeT, whatToShow: 257, filter?: NodeFilterInterface): NodeIterator<RootNodeT, Document|Element>;
  createNodeIterator<RootNodeT: Document>(root: RootNodeT, whatToShow: 260, filter?: NodeFilterInterface): NodeIterator<RootNodeT, Document|Text>;
  createNodeIterator<RootNodeT: Document>(root: RootNodeT, whatToShow: 261, filter?: NodeFilterInterface): NodeIterator<RootNodeT, Document|Element|Text>;
  createNodeIterator<RootNodeT: Document>(root: RootNodeT, whatToShow: 384, filter?: NodeFilterInterface): NodeIterator<RootNodeT, Document|Comment>;
  createNodeIterator<RootNodeT: Document>(root: RootNodeT, whatToShow: 385, filter?: NodeFilterInterface): NodeIterator<RootNodeT, Document|Element|Comment>;
  createNodeIterator<RootNodeT: Document>(root: RootNodeT, whatToShow: 388, filter?: NodeFilterInterface): NodeIterator<RootNodeT, Document|Text|Comment>;
  createNodeIterator<RootNodeT: Document>(root: RootNodeT, whatToShow: 389, filter?: NodeFilterInterface): NodeIterator<RootNodeT, Document|Element|Text|Comment>;
  createNodeIterator<RootNodeT: Document>(root: RootNodeT, whatToShow: 512, filter?: NodeFilterInterface): NodeIterator<RootNodeT, DocumentType>;
  createNodeIterator<RootNodeT: Document>(root: RootNodeT, whatToShow: 513, filter?: NodeFilterInterface): NodeIterator<RootNodeT, DocumentType|Element>;
  createNodeIterator<RootNodeT: Document>(root: RootNodeT, whatToShow: 516, filter?: NodeFilterInterface): NodeIterator<RootNodeT, DocumentType|Text>;
  createNodeIterator<RootNodeT: Document>(root: RootNodeT, whatToShow: 517, filter?: NodeFilterInterface): NodeIterator<RootNodeT, DocumentType|Element|Text>;
  createNodeIterator<RootNodeT: Document>(root: RootNodeT, whatToShow: 640, filter?: NodeFilterInterface): NodeIterator<RootNodeT, DocumentType|Comment>;
  createNodeIterator<RootNodeT: Document>(root: RootNodeT, whatToShow: 641, filter?: NodeFilterInterface): NodeIterator<RootNodeT, DocumentType|Element|Comment>;
  createNodeIterator<RootNodeT: Document>(root: RootNodeT, whatToShow: 644, filter?: NodeFilterInterface): NodeIterator<RootNodeT, DocumentType|Text|Comment>;
  createNodeIterator<RootNodeT: Document>(root: RootNodeT, whatToShow: 645, filter?: NodeFilterInterface): NodeIterator<RootNodeT, DocumentType|Element|Text|Comment>;
  createNodeIterator<RootNodeT: Document>(root: RootNodeT, whatToShow: 768, filter?: NodeFilterInterface): NodeIterator<RootNodeT, DocumentType|Document>;
  createNodeIterator<RootNodeT: Document>(root: RootNodeT, whatToShow: 769, filter?: NodeFilterInterface): NodeIterator<RootNodeT, DocumentType|Document|Element>;
  createNodeIterator<RootNodeT: Document>(root: RootNodeT, whatToShow: 772, filter?: NodeFilterInterface): NodeIterator<RootNodeT, DocumentType|Document|Text>;
  createNodeIterator<RootNodeT: Document>(root: RootNodeT, whatToShow: 773, filter?: NodeFilterInterface): NodeIterator<RootNodeT, DocumentType|Document|Element|Text>;
  createNodeIterator<RootNodeT: Document>(root: RootNodeT, whatToShow: 896, filter?: NodeFilterInterface): NodeIterator<RootNodeT, DocumentType|Document|Comment>;
  createNodeIterator<RootNodeT: Document>(root: RootNodeT, whatToShow: 897, filter?: NodeFilterInterface): NodeIterator<RootNodeT, DocumentType|Document|Element|Comment>;
  createNodeIterator<RootNodeT: Document>(root: RootNodeT, whatToShow: 900, filter?: NodeFilterInterface): NodeIterator<RootNodeT, DocumentType|Document|Text|Comment>;
  createNodeIterator<RootNodeT: Document>(root: RootNodeT, whatToShow: 901, filter?: NodeFilterInterface): NodeIterator<RootNodeT, DocumentType|Document|Element|Text|Comment>;
  createTreeWalker<RootNodeT: Document>(root: RootNodeT, whatToShow: 256, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, Document>;
  createTreeWalker<RootNodeT: Document>(root: RootNodeT, whatToShow: 257, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, Document|Element>;
  createTreeWalker<RootNodeT: Document>(root: RootNodeT, whatToShow: 260, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, Document|Text>;
  createTreeWalker<RootNodeT: Document>(root: RootNodeT, whatToShow: 261, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, Document|Element|Text>;
  createTreeWalker<RootNodeT: Document>(root: RootNodeT, whatToShow: 384, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, Document|Comment>;
  createTreeWalker<RootNodeT: Document>(root: RootNodeT, whatToShow: 385, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, Document|Element|Comment>;
  createTreeWalker<RootNodeT: Document>(root: RootNodeT, whatToShow: 388, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, Document|Text|Comment>;
  createTreeWalker<RootNodeT: Document>(root: RootNodeT, whatToShow: 389, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, Document|Element|Text|Comment>;
  createTreeWalker<RootNodeT: Document>(root: RootNodeT, whatToShow: 512, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, DocumentType>;
  createTreeWalker<RootNodeT: Document>(root: RootNodeT, whatToShow: 513, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, DocumentType|Element>;
  createTreeWalker<RootNodeT: Document>(root: RootNodeT, whatToShow: 516, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, DocumentType|Text>;
  createTreeWalker<RootNodeT: Document>(root: RootNodeT, whatToShow: 517, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, DocumentType|Element|Text>;
  createTreeWalker<RootNodeT: Document>(root: RootNodeT, whatToShow: 640, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, DocumentType|Comment>;
  createTreeWalker<RootNodeT: Document>(root: RootNodeT, whatToShow: 641, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, DocumentType|Element|Comment>;
  createTreeWalker<RootNodeT: Document>(root: RootNodeT, whatToShow: 644, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, DocumentType|Text|Comment>;
  createTreeWalker<RootNodeT: Document>(root: RootNodeT, whatToShow: 645, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, DocumentType|Element|Text|Comment>;
  createTreeWalker<RootNodeT: Document>(root: RootNodeT, whatToShow: 768, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, DocumentType|Document>;
  createTreeWalker<RootNodeT: Document>(root: RootNodeT, whatToShow: 769, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, DocumentType|Document|Element>;
  createTreeWalker<RootNodeT: Document>(root: RootNodeT, whatToShow: 772, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, DocumentType|Document|Text>;
  createTreeWalker<RootNodeT: Document>(root: RootNodeT, whatToShow: 773, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, DocumentType|Document|Element|Text>;
  createTreeWalker<RootNodeT: Document>(root: RootNodeT, whatToShow: 896, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, DocumentType|Document|Comment>;
  createTreeWalker<RootNodeT: Document>(root: RootNodeT, whatToShow: 897, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, DocumentType|Document|Element|Comment>;
  createTreeWalker<RootNodeT: Document>(root: RootNodeT, whatToShow: 900, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, DocumentType|Document|Text|Comment>;
  createTreeWalker<RootNodeT: Document>(root: RootNodeT, whatToShow: 901, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, DocumentType|Document|Element|Text|Comment>;

  // When (whatToShow & NodeFilter.SHOW_DOCUMENT_FRAGMENT === 1), RootNodeT
  // must be a DocumentFragment.
  createNodeIterator<RootNodeT: DocumentFragment>(root: RootNodeT, whatToShow: 1024, filter?: NodeFilterInterface): NodeIterator<RootNodeT, DocumentFragment>;
  createNodeIterator<RootNodeT: DocumentFragment>(root: RootNodeT, whatToShow: 1025, filter?: NodeFilterInterface): NodeIterator<RootNodeT, DocumentFragment|Element>;
  createNodeIterator<RootNodeT: DocumentFragment>(root: RootNodeT, whatToShow: 1028, filter?: NodeFilterInterface): NodeIterator<RootNodeT, DocumentFragment|Text>;
  createNodeIterator<RootNodeT: DocumentFragment>(root: RootNodeT, whatToShow: 1029, filter?: NodeFilterInterface): NodeIterator<RootNodeT, DocumentFragment|Element|Text>;
  createNodeIterator<RootNodeT: DocumentFragment>(root: RootNodeT, whatToShow: 1152, filter?: NodeFilterInterface): NodeIterator<RootNodeT, DocumentFragment|Comment>;
  createNodeIterator<RootNodeT: DocumentFragment>(root: RootNodeT, whatToShow: 1153, filter?: NodeFilterInterface): NodeIterator<RootNodeT, DocumentFragment|Element|Comment>;
  createNodeIterator<RootNodeT: DocumentFragment>(root: RootNodeT, whatToShow: 1156, filter?: NodeFilterInterface): NodeIterator<RootNodeT, DocumentFragment|Text|Comment>;
  createNodeIterator<RootNodeT: DocumentFragment>(root: RootNodeT, whatToShow: 1157, filter?: NodeFilterInterface): NodeIterator<RootNodeT, DocumentFragment|Element|Text|Comment>;
  createTreeWalker<RootNodeT: DocumentFragment>(root: RootNodeT, whatToShow: 1024, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, DocumentFragment>;
  createTreeWalker<RootNodeT: DocumentFragment>(root: RootNodeT, whatToShow: 1025, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, DocumentFragment|Element>;
  createTreeWalker<RootNodeT: DocumentFragment>(root: RootNodeT, whatToShow: 1028, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, DocumentFragment|Text>;
  createTreeWalker<RootNodeT: DocumentFragment>(root: RootNodeT, whatToShow: 1029, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, DocumentFragment|Element|Text>;
  createTreeWalker<RootNodeT: DocumentFragment>(root: RootNodeT, whatToShow: 1152, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, DocumentFragment|Comment>;
  createTreeWalker<RootNodeT: DocumentFragment>(root: RootNodeT, whatToShow: 1153, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, DocumentFragment|Element|Comment>;
  createTreeWalker<RootNodeT: DocumentFragment>(root: RootNodeT, whatToShow: 1156, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, DocumentFragment|Text|Comment>;
  createTreeWalker<RootNodeT: DocumentFragment>(root: RootNodeT, whatToShow: 1157, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, DocumentFragment|Element|Text|Comment>;

  // In the general case, RootNodeT may be any Node and whatToShow may be
  // NodeFilter.SHOW_ALL or any combination of NodeFilter.SHOW_ELEMENT,
  // NodeFilter.SHOW_TEXT and/or NodeFilter.SHOW_COMMENT
  createNodeIterator<RootNodeT: Node>(root: RootNodeT, whatToShow: 1, filter?: NodeFilterInterface): NodeIterator<RootNodeT, Element>;
  createNodeIterator<RootNodeT: Node>(root: RootNodeT, whatToShow: 4, filter?: NodeFilterInterface): NodeIterator<RootNodeT, Text>;
  createNodeIterator<RootNodeT: Node>(root: RootNodeT, whatToShow: 5, filter?: NodeFilterInterface): NodeIterator<RootNodeT, Element|Text>;
  createNodeIterator<RootNodeT: Node>(root: RootNodeT, whatToShow: 128, filter?: NodeFilterInterface): NodeIterator<RootNodeT, Comment>;
  createNodeIterator<RootNodeT: Node>(root: RootNodeT, whatToShow: 129, filter?: NodeFilterInterface): NodeIterator<RootNodeT, Element|Comment>;
  createNodeIterator<RootNodeT: Node>(root: RootNodeT, whatToShow: 132, filter?: NodeFilterInterface): NodeIterator<RootNodeT, Text|Comment>;
  createNodeIterator<RootNodeT: Node>(root: RootNodeT, whatToShow: 133, filter?: NodeFilterInterface): NodeIterator<RootNodeT, Text|Element|Comment>;
  createTreeWalker<RootNodeT: Node>(root: RootNodeT, whatToShow: 1, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, Element>;
  createTreeWalker<RootNodeT: Node>(root: RootNodeT, whatToShow: 4, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, Text>;
  createTreeWalker<RootNodeT: Node>(root: RootNodeT, whatToShow: 5, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, Element|Text>;
  createTreeWalker<RootNodeT: Node>(root: RootNodeT, whatToShow: 128, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, Comment>;
  createTreeWalker<RootNodeT: Node>(root: RootNodeT, whatToShow: 129, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, Element|Comment>;
  createTreeWalker<RootNodeT: Node>(root: RootNodeT, whatToShow: 132, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, Text|Comment>;
  createTreeWalker<RootNodeT: Node>(root: RootNodeT, whatToShow: 133, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, Text|Element|Comment>;

  // Catch all for when we don't know the value of \`whatToShow\`
  // And for when whatToShow is not provided, it is assumed to be SHOW_ALL
  createNodeIterator<RootNodeT: Node>(root: RootNodeT, whatToShow?: number, filter?: NodeFilterInterface): NodeIterator<RootNodeT, Node>;
  createTreeWalker<RootNodeT: Node>(root: RootNodeT, whatToShow?: number, filter?: NodeFilterInterface, entityReferenceExpansion?: boolean): TreeWalker<RootNodeT, Node>;
}

declare class DocumentFragment extends Node {
  // from ParentNode interface
  childElementCount: number;
  children: HTMLCollection<HTMLElement>;
  firstElementChild: ?Element;
  lastElementChild: ?Element;
  append(...nodes: Array<string | Node>): void;
  prepend(...nodes: Array<string | Node>): void;

  querySelector(selector: string): HTMLElement | null;
  querySelectorAll(selector: string): NodeList<HTMLElement>;
}

declare class Selection {
  anchorNode: Node | null;
  anchorOffset: number;
  focusNode: Node | null;
  focusOffset: number;
  isCollapsed: boolean;
  rangeCount: number;
  type: string;
  addRange(range: Range): void;
  getRangeAt(index: number): Range;
  removeRange(range: Range): void;
  removeAllRanges(): void;
  collapse(parentNode: Node | null, offset?: number): void;
  collapseToStart(): void;
  collapseToEnd(): void;
  containsNode(aNode: Node, aPartlyContained?: boolean): boolean;
  deleteFromDocument(): void;
  extend(parentNode: Node, offset?: number): void;
  empty(): void;
  selectAllChildren(parentNode: Node): void;
  setPosition(aNode: Node | null, offset?: number): void;
  setBaseAndExtent(anchorNode: Node, anchorOffset: number, focusNode: Node, focusOffset: number): void;
  toString(): string;
}

declare class Range { // extension
  startOffset: number;
  collapsed: boolean;
  endOffset: number;
  startContainer: Node;
  endContainer: Node;
  commonAncestorContainer: Node;
  setStart(refNode: Node, offset: number): void;
  setEndBefore(refNode: Node): void;
  setStartBefore(refNode: Node): void;
  selectNode(refNode: Node): void;
  detach(): void;
  getBoundingClientRect(): ClientRect;
  toString(): string;
  compareBoundaryPoints(how: number, sourceRange: Range): number;
  insertNode(newNode: Node): void;
  collapse(toStart: boolean): void;
  selectNodeContents(refNode: Node): void;
  cloneContents(): DocumentFragment;
  setEnd(refNode: Node, offset: number): void;
  cloneRange(): Range;
  getClientRects(): ClientRectList;
  surroundContents(newParent: Node): void;
  deleteContents(): void;
  setStartAfter(refNode: Node): void;
  extractContents(): DocumentFragment;
  setEndAfter(refNode: Node): void;
  createContextualFragment(fragment: string): DocumentFragment;
  static END_TO_END: number;
  static START_TO_START: number;
  static START_TO_END: number;
  static END_TO_START: number;
}

declare var document: Document;

// TODO: HTMLDocument

declare class DOMTokenList {
  @@iterator(): Iterator<string>;
  length: number;
  item(index: number): string;
  contains(token: string): boolean;
  add(...token: Array<string>): void;
  remove(...token: Array<string>): void;
  toggle(token: string, force?: boolean): boolean;

  forEach(callbackfn: (value: string, index: number, list: DOMTokenList) => any, thisArg?: any): void;
  entries(): Iterator<[number, string]>;
  keys(): Iterator<number>;
  values(): Iterator<string>;
}


declare class Element extends Node {
  assignedSlot: ?HTMLSlotElement;
  attachShadow(shadowRootInitDict: ShadowRootInit): ShadowRoot;
  attributes: NamedNodeMap;
  classList: DOMTokenList;
  className: string;
  clientHeight: number;
  clientLeft: number;
  clientTop: number;
  clientWidth: number;
  id: string;
  innerHTML: string;
  localName: string;
  namespaceURI: ?string;
  nextElementSibling: ?Element;
  outerHTML: string;
  prefix: string | null;
  previousElementSibling: ?Element;
  scrollHeight: number;
  scrollLeft: number;
  scrollTop: number;
  scrollWidth: number;
  tagName: string;

  closest(selectors: string): ?Element;
  dispatchEvent(event: Event): bool;

  getAttribute(name?: string): ?string;
  getAttributeNS(namespaceURI: string | null, localName: string): string | null;
  getAttributeNode(name: string): Attr | null;
  getAttributeNodeNS(namespaceURI: string | null, localName: string): Attr | null;
  getBoundingClientRect(): ClientRect;
  getClientRects(): ClientRect[];
  getElementsByClassName(names: string): HTMLCollection<HTMLElement>;
  getElementsByTagName(name: 'a'): HTMLCollection<HTMLAnchorElement>;
  getElementsByTagName(name: 'audio'): HTMLCollection<HTMLAudioElement>;
  getElementsByTagName(name: 'br'): HTMLCollection<HTMLBRElement>;
  getElementsByTagName(name: 'button'): HTMLCollection<HTMLButtonElement>;
  getElementsByTagName(name: 'canvas'): HTMLCollection<HTMLCanvasElement>;
  getElementsByTagName(name: 'col'): HTMLCollection<HTMLTableColElement>;
  getElementsByTagName(name: 'colgroup'): HTMLCollection<HTMLTableColElement>;
  getElementsByTagName(name: 'data'): HTMLCollection<HTMLDataElement>;
  getElementsByTagName(name: 'datalist'): HTMLCollection<HTMLDataElement>;
  getElementsByTagName(name: 'del'): HTMLCollection<HTMLModElement>;
  getElementsByTagName(name: 'details'): HTMLCollection<HTMLDetailsElement>;
  getElementsByTagName(name: 'dialog'): HTMLCollection<HTMLDialogElement>;
  getElementsByTagName(name: 'div'): HTMLCollection<HTMLDivElement>;
  getElementsByTagName(name: 'dl'): HTMLCollection<HTMLDListElement>;
  getElementsByTagName(name: 'fieldset'): HTMLCollection<HTMLFieldSetElement>;
  getElementsByTagName(name: 'form'): HTMLCollection<HTMLFormElement>;
  getElementsByTagName(name: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'): HTMLCollection<HTMLHeadingElement>;
  getElementsByTagName(name: 'head'): HTMLCollection<HTMLHeadElement>;
  getElementsByTagName(name: 'hr'): HTMLCollection<HTMLHRElement>;
  getElementsByTagName(name: 'iframe'): HTMLCollection<HTMLIFrameElement>;
  getElementsByTagName(name: 'img'): HTMLCollection<HTMLImageElement>;
  getElementsByTagName(name: 'input'): HTMLCollection<HTMLInputElement>;
  getElementsByTagName(name: 'ins'): HTMLCollection<HTMLModElement>;
  getElementsByTagName(name: 'label'): HTMLCollection<HTMLLabelElement>;
  getElementsByTagName(name: 'legend'): HTMLCollection<HTMLLegendElement>;
  getElementsByTagName(name: 'li'): HTMLCollection<HTMLLIElement>;
  getElementsByTagName(name: 'link'): HTMLCollection<HTMLLinkElement>;
  getElementsByTagName(name: 'meta'): HTMLCollection<HTMLMetaElement>;
  getElementsByTagName(name: 'meter'): HTMLCollection<HTMLMeterElement>;
  getElementsByTagName(name: 'object'): HTMLCollection<HTMLObjectElement>;
  getElementsByTagName(name: 'ol'): HTMLCollection<HTMLOListElement>;
  getElementsByTagName(name: 'option'): HTMLCollection<HTMLOptionElement>;
  getElementsByTagName(name: 'optgroup'): HTMLCollection<HTMLOptGroupElement>;
  getElementsByTagName(name: 'p'): HTMLCollection<HTMLParagraphElement>;
  getElementsByTagName(name: 'param'): HTMLCollection<HTMLParamElement>;
  getElementsByTagName(name: 'picture'): HTMLCollection<HTMLPictureElement>;
  getElementsByTagName(name: 'pre'): HTMLCollection<HTMLPreElement>;
  getElementsByTagName(name: 'progress'): HTMLCollection<HTMLProgressElement>;
  getElementsByTagName(name: 'script'): HTMLCollection<HTMLScriptElement>;
  getElementsByTagName(name: 'select'): HTMLCollection<HTMLSelectElement>;
  getElementsByTagName(name: 'source'): HTMLCollection<HTMLSourceElement>;
  getElementsByTagName(name: 'span'): HTMLCollection<HTMLSpanElement>;
  getElementsByTagName(name: 'style'): HTMLCollection<HTMLStyleElement>;
  getElementsByTagName(name: 'textarea'): HTMLCollection<HTMLTextAreaElement>;
  getElementsByTagName(name: 'video'): HTMLCollection<HTMLVideoElement>;
  getElementsByTagName(name: 'table'): HTMLCollection<HTMLTableElement>;
  getElementsByTagName(name: 'title'): HTMLCollection<HTMLTitleElement>;
  getElementsByTagName(name: 'caption'): HTMLCollection<HTMLTableCaptionElement>;
  getElementsByTagName(name: 'thead' | 'tfoot' | 'tbody'): HTMLCollection<HTMLTableSectionElement>;
  getElementsByTagName(name: 'tr'): HTMLCollection<HTMLTableRowElement>;
  getElementsByTagName(name: 'td' | 'th'): HTMLCollection<HTMLTableCellElement>;
  getElementsByTagName(name: 'template'): HTMLCollection<HTMLTemplateElement>;
  getElementsByTagName(name: 'ul'): HTMLCollection<HTMLUListElement>;
  getElementsByTagName(name: string): HTMLCollection<HTMLElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'a'): HTMLCollection<HTMLAnchorElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'audio'): HTMLCollection<HTMLAudioElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'br'): HTMLCollection<HTMLBRElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'button'): HTMLCollection<HTMLButtonElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'canvas'): HTMLCollection<HTMLCanvasElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'col'): HTMLCollection<HTMLTableColElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'colgroup'): HTMLCollection<HTMLTableColElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'data'): HTMLCollection<HTMLDataElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'datalist'): HTMLCollection<HTMLDataListElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'del'): HTMLCollection<HTMLModElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'details'): HTMLCollection<HTMLDetailsElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'dialog'): HTMLCollection<HTMLDialogElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'div'): HTMLCollection<HTMLDivElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'dl'): HTMLCollection<HTMLDListElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'fieldset'): HTMLCollection<HTMLFieldSetElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'form'): HTMLCollection<HTMLFormElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'): HTMLCollection<HTMLHeadingElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'head'): HTMLCollection<HTMLHeadElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'hr'): HTMLCollection<HTMLHRElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'iframe'): HTMLCollection<HTMLIFrameElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'img'): HTMLCollection<HTMLImageElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'input'): HTMLCollection<HTMLInputElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'ins'): HTMLCollection<HTMLModElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'label'): HTMLCollection<HTMLLabelElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'legend'): HTMLCollection<HTMLLegendElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'li'): HTMLCollection<HTMLLIElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'link'): HTMLCollection<HTMLLinkElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'meta'): HTMLCollection<HTMLMetaElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'meter'): HTMLCollection<HTMLMeterElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'object'): HTMLCollection<HTMLObjectElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'ol'): HTMLCollection<HTMLOListElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'option'): HTMLCollection<HTMLOptionElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'optgroup'): HTMLCollection<HTMLOptGroupElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'p'): HTMLCollection<HTMLParagraphElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'param'): HTMLCollection<HTMLParamElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'picture'): HTMLCollection<HTMLPictureElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'pre'): HTMLCollection<HTMLPreElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'progress'): HTMLCollection<HTMLProgressElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'script'): HTMLCollection<HTMLScriptElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'select'): HTMLCollection<HTMLSelectElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'source'): HTMLCollection<HTMLSourceElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'span'): HTMLCollection<HTMLSpanElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'style'): HTMLCollection<HTMLStyleElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'textarea'): HTMLCollection<HTMLTextAreaElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'video'): HTMLCollection<HTMLVideoElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'table'): HTMLCollection<HTMLTableElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'title'): HTMLCollection<HTMLTitleElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'caption'): HTMLCollection<HTMLTableCaptionElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'thead' | 'tfoot' | 'tbody'): HTMLCollection<HTMLTableSectionElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'tr'): HTMLCollection<HTMLTableRowElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'td' | 'th'): HTMLCollection<HTMLTableCellElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'template'): HTMLCollection<HTMLTemplateElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: 'ul'): HTMLCollection<HTMLUListElement>;
  getElementsByTagNameNS(namespaceURI: string | null, localName: string): HTMLCollection<HTMLElement>;
  hasAttribute(name: string): boolean;
  hasAttributeNS(namespaceURI: string | null, localName: string): boolean;
  insertAdjacentElement(position: 'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend', element: Element): void;
  insertAdjacentHTML(position: 'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend', html: string): void;
  insertAdjacentText(position: 'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend', text: string): void;
  matches(selector: string): bool;
  querySelector(selector: string): HTMLElement | null;
  querySelectorAll(selector: string): NodeList<HTMLElement>;
  releasePointerCapture(pointerId: string): void;
  removeAttribute(name?: string): void;
  removeAttributeNode(attributeNode: Attr): Attr;
  removeAttributeNS(namespaceURI: string | null, localName: string): void;
  requestFullscreen(): void;
  requestPointerLock(): void;
  scrollIntoView(arg?: (boolean | { behavior?: ('auto' | 'instant' | 'smooth'), block?: ('start' | 'center' | 'end' | 'nearest'), inline?: ('start' | 'center' | 'end' | 'nearest')  })): void;
  setAttribute(name?: string, value?: string): void;
  toggleAttribute(name?: string, force?: boolean): void;
  setAttributeNS(namespaceURI: string | null, qualifiedName: string, value: string): void;
  setAttributeNode(newAttr: Attr): Attr | null;
  setAttributeNodeNS(newAttr: Attr): Attr | null;
  setPointerCapture(pointerId: string): void;
  shadowRoot?: ShadowRoot;
  slot?: string;

  // from ParentNode interface
  childElementCount: number;
  children: HTMLCollection<HTMLElement>;
  firstElementChild: ?Element;
  lastElementChild: ?Element;
  append(...nodes: Array<string | Node>): void;
  prepend(...nodes: Array<string | Node>): void;

  querySelector(selector: 'a'): HTMLAnchorElement | null;
  querySelector(selector: 'area'): HTMLAreaElement | null;
  querySelector(selector: 'audio'): HTMLAudioElement | null;
  querySelector(selector: 'blockquote'): HTMLQuoteElement | null;
  querySelector(selector: 'body'): HTMLBodyElement | null;
  querySelector(selector: 'br'): HTMLBRElement | null;
  querySelector(selector: 'button'): HTMLButtonElement | null;
  querySelector(selector: 'canvas'): HTMLCanvasElement | null;
  querySelector(selector: 'col'): HTMLTableColElement | null;
  querySelector(selector: 'colgroup'): HTMLTableColElement | null;
  querySelector(selector: 'data'): HTMLDataElement | null;
  querySelector(selector: 'datalist'): HTMLDataListElement | null;
  querySelector(selector: 'del'): HTMLModElement | null;
  querySelector(selector: 'details'): HTMLDetailsElement | null;
  querySelector(selector: 'dialog'): HTMLDialogElement | null;
  querySelector(selector: 'div'): HTMLDivElement | null;
  querySelector(selector: 'dl'): HTMLDListElement | null;
  querySelector(selector: 'embed'): HTMLEmbedElement | null;
  querySelector(selector: 'fieldset'): HTMLFieldSetElement | null;
  querySelector(selector: 'form'): HTMLFormElement | null;
  querySelector(selector: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'): HTMLHeadingElement;
  querySelector(selector: 'head'): HTMLHeadElement | null;
  querySelector(selector: 'hr'): HTMLHRElement | null;
  querySelector(selector: 'html'): HTMLHtmlElement | null;
  querySelector(selector: 'iframe'): HTMLIFrameElement | null;
  querySelector(selector: 'img'): HTMLImageElement | null;
  querySelector(selector: 'ins'): HTMLModElement | null;
  querySelector(selector: 'input'): HTMLInputElement | null;
  querySelector(selector: 'label'): HTMLLabelElement | null;
  querySelector(selector: 'legend'): HTMLLegendElement | null;
  querySelector(selector: 'li'): HTMLLIElement | null;
  querySelector(selector: 'link'): HTMLLinkElement | null;
  querySelector(selector: 'map'): HTMLMapElement | null;
  querySelector(selector: 'meta'): HTMLMetaElement | null;
  querySelector(selector: 'meter'): HTMLMeterElement | null;
  querySelector(selector: 'object'): HTMLObjectElement | null;
  querySelector(selector: 'ol'): HTMLOListElement | null;
  querySelector(selector: 'option'): HTMLOptionElement | null;
  querySelector(selector: 'optgroup'): HTMLOptGroupElement | null;
  querySelector(selector: 'p'): HTMLParagraphElement | null;
  querySelector(selector: 'param'): HTMLParamElement | null;
  querySelector(selector: 'picture'): HTMLPictureElement | null;
  querySelector(selector: 'pre'): HTMLPreElement | null;
  querySelector(selector: 'progress'): HTMLProgressElement | null;
  querySelector(selector: 'q'): HTMLQuoteElement | null;
  querySelector(selector: 'script'): HTMLScriptElement | null;
  querySelector(selector: 'select'): HTMLSelectElement | null;
  querySelector(selector: 'source'): HTMLSourceElement | null;
  querySelector(selector: 'span'): HTMLSpanElement | null;
  querySelector(selector: 'style'): HTMLStyleElement | null;
  querySelector(selector: 'textarea'): HTMLTextAreaElement | null;
  querySelector(selector: 'time'): HTMLTimeElement | null;
  querySelector(selector: 'title'): HTMLTitleElement | null;
  querySelector(selector: 'track'): HTMLTrackElement | null;
  querySelector(selector: 'video'): HTMLVideoElement | null;
  querySelector(selector: 'table'): HTMLTableElement | null;
  querySelector(selector: 'caption'): HTMLTableCaptionElement | null;
  querySelector(selector: 'thead' | 'tfoot' | 'tbody'): HTMLTableSectionElement | null;
  querySelector(selector: 'tr'): HTMLTableRowElement | null;
  querySelector(selector: 'td' | 'th'): HTMLTableCellElement | null;
  querySelector(selector: 'template'): HTMLTemplateElement | null;
  querySelector(selector: 'ul'): HTMLUListElement | null;
  querySelector(selector: string): HTMLElement | null;

  querySelectorAll(selector: 'a'): NodeList<HTMLAnchorElement>;
  querySelectorAll(selector: 'area'): NodeList<HTMLAreaElement>;
  querySelectorAll(selector: 'audio'): NodeList<HTMLAudioElement>;
  querySelectorAll(selector: 'blockquote'): NodeList<HTMLQuoteElement>;
  querySelectorAll(selector: 'body'): NodeList<HTMLBodyElement>;
  querySelectorAll(selector: 'br'): NodeList<HTMLBRElement>;
  querySelectorAll(selector: 'button'): NodeList<HTMLButtonElement>;
  querySelectorAll(selector: 'canvas'): NodeList<HTMLCanvasElement>;
  querySelectorAll(selector: 'col'): NodeList<HTMLTableColElement>;
  querySelectorAll(selector: 'colgroup'): NodeList<HTMLTableColElement>;
  querySelectorAll(selector: 'data'): NodeList<HTMLDataElement>;
  querySelectorAll(selector: 'datalist'): NodeList<HTMLDataListElement>;
  querySelectorAll(selector: 'del'): NodeList<HTMLModElement>;
  querySelectorAll(selector: 'details'): NodeList<HTMLDetailsElement>;
  querySelectorAll(selector: 'dialog'): NodeList<HTMLDialogElement>;
  querySelectorAll(selector: 'div'): NodeList<HTMLDivElement>;
  querySelectorAll(selector: 'dl'): NodeList<HTMLDListElement>;
  querySelectorAll(selector: 'embed'): NodeList<HTMLEmbedElement>;
  querySelectorAll(selector: 'fieldset'): NodeList<HTMLFieldSetElement>;
  querySelectorAll(selector: 'form'): NodeList<HTMLFormElement>;
  querySelectorAll(selector: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'): NodeList<HTMLHeadingElement>;
  querySelectorAll(selector: 'head'): NodeList<HTMLHeadElement>;
  querySelectorAll(selector: 'hr'): NodeList<HTMLHRElement>;
  querySelectorAll(selector: 'html'): NodeList<HTMLHtmlElement>;
  querySelectorAll(selector: 'iframe'): NodeList<HTMLIFrameElement>;
  querySelectorAll(selector: 'img'): NodeList<HTMLImageElement>;
  querySelectorAll(selector: 'input'): NodeList<HTMLInputElement>;
  querySelectorAll(selector: 'ins'): NodeList<HTMLModElement>;
  querySelectorAll(selector: 'label'): NodeList<HTMLLabelElement>;
  querySelectorAll(selector: 'legend'): NodeList<HTMLLegendElement>;
  querySelectorAll(selector: 'li'): NodeList<HTMLLIElement>;
  querySelectorAll(selector: 'link'): NodeList<HTMLLinkElement>;
  querySelectorAll(selector: 'map'): NodeList<HTMLMapElement>;
  querySelectorAll(selector: 'meta'): NodeList<HTMLMetaElement>;
  querySelectorAll(selector: 'meter'): NodeList<HTMLMeterElement>;
  querySelectorAll(selector: 'object'): NodeList<HTMLObjectElement>;
  querySelectorAll(selector: 'ol'): NodeList<HTMLOListElement>;
  querySelectorAll(selector: 'option'): NodeList<HTMLOptionElement>;
  querySelectorAll(selector: 'optgroup'): NodeList<HTMLOptGroupElement>;
  querySelectorAll(selector: 'p'): NodeList<HTMLParagraphElement>;
  querySelectorAll(selector: 'param'): NodeList<HTMLParamElement>;
  querySelectorAll(selector: 'picture'): NodeList<HTMLPictureElement>;
  querySelectorAll(selector: 'pre'): NodeList<HTMLPreElement>;
  querySelectorAll(selector: 'progress'): NodeList<HTMLProgressElement>;
  querySelectorAll(selector: 'q'): NodeList<HTMLQuoteElement>;
  querySelectorAll(selector: 'script'): NodeList<HTMLScriptElement>;
  querySelectorAll(selector: 'select'): NodeList<HTMLSelectElement>;
  querySelectorAll(selector: 'source'): NodeList<HTMLSourceElement>;
  querySelectorAll(selector: 'span'): NodeList<HTMLSpanElement>;
  querySelectorAll(selector: 'style'): NodeList<HTMLStyleElement>;
  querySelectorAll(selector: 'textarea'): NodeList<HTMLTextAreaElement>;
  querySelectorAll(selector: 'time'): NodeList<HTMLTimeElement>;
  querySelectorAll(selector: 'title'): NodeList<HTMLTitleElement>;
  querySelectorAll(selector: 'track'): NodeList<HTMLTrackElement>;
  querySelectorAll(selector: 'video'): NodeList<HTMLVideoElement>;
  querySelectorAll(selector: 'table'): NodeList<HTMLTableElement>;
  querySelectorAll(selector: 'caption'): NodeList<HTMLTableCaptionElement>;
  querySelectorAll(selector: 'thead' | 'tfoot' | 'tbody'): NodeList<HTMLTableSectionElement>;
  querySelectorAll(selector: 'tr'): NodeList<HTMLTableRowElement>;
  querySelectorAll(selector: 'td' | 'th'): NodeList<HTMLTableCellElement>;
  querySelectorAll(selector: 'template'): NodeList<HTMLTemplateElement>;
  querySelectorAll(selector: 'ul'): NodeList<HTMLUListElement>;
  querySelectorAll(selector: string): NodeList<HTMLElement>;

  // from ChildNode interface
  after(...nodes: Array<string | Node>): void;
  before(...nodes: Array<string | Node>): void;
  replaceWith(...nodes: Array<string | Node>): void;
  remove(): void;
}

declare class HTMLElement extends Element {
  blur(): void;
  click(): void;
  focus(): void;
  getBoundingClientRect(): ClientRect;
  forceSpellcheck(): void;
  accessKey: string;
  accessKeyLabel: string;
  className: string;
  contentEditable: string;
  contextMenu: ?HTMLMenuElement;
  dataset: DOMStringMap;
  dir: 'ltr' | 'rtl' | 'auto';
  draggable: bool;
  dropzone: any;
  hidden: boolean;
  id: string;
  innerHTML: string;
  isContentEditable: boolean;
  itemProp: any;
  itemScope: bool;
  itemType: any;
  itemValue: Object;
  lang: string;
  offsetHeight: number;
  offsetLeft: number;
  offsetParent: ?Element;
  offsetTop: number;
  offsetWidth: number;
  onabort: ?Function;
  onblur: ?Function;
  oncancel: ?Function;
  oncanplay: ?Function;
  oncanplaythrough: ?Function;
  onchange: ?Function;
  onclick: ?Function;
  oncontextmenu: ?Function;
  oncuechange: ?Function;
  ondblclick: ?Function;
  ondurationchange: ?Function;
  onemptied: ?Function;
  onended: ?Function;
  onerror: ?Function;
  onfocus: ?Function;
  ongotpointercapture: ?Function,
  oninput: ?Function;
  oninvalid: ?Function;
  onkeydown: ?Function;
  onkeypress: ?Function;
  onkeyup: ?Function;
  onload: ?Function;
  onloadeddata: ?Function;
  onloadedmetadata: ?Function;
  onloadstart: ?Function;
  onlostpointercapture: ?Function,
  onmousedown: ?Function;
  onmouseenter: ?Function;
  onmouseleave: ?Function;
  onmousemove: ?Function;
  onmouseout: ?Function;
  onmouseover: ?Function;
  onmouseup: ?Function;
  onmousewheel: ?Function;
  onpause: ?Function;
  onplay: ?Function;
  onplaying: ?Function;
  onpointercancel: ?Function,
  onpointerdown: ?Function,
  onpointerenter: ?Function,
  onpointerleave: ?Function,
  onpointermove: ?Function,
  onpointerout: ?Function,
  onpointerover: ?Function,
  onpointerup: ?Function,
  onprogress: ?Function;
  onratechange: ?Function;
  onreadystatechange: ?Function;
  onreset: ?Function;
  onresize: ?Function;
  onscroll: ?Function;
  onseeked: ?Function;
  onseeking: ?Function;
  onselect: ?Function;
  onshow: ?Function;
  onstalled: ?Function;
  onsubmit: ?Function;
  onsuspend: ?Function;
  ontimeupdate: ?Function;
  ontoggle: ?Function;
  onvolumechange: ?Function;
  onwaiting: ?Function;
  properties: any;
  spellcheck: boolean;
  style: CSSStyleDeclaration;
  tabIndex: number;
  title: string;
  translate: boolean;
}

declare class HTMLSlotElement extends HTMLElement {
  name: string;
  assignedNodes(options?: {flatten: boolean}): Node[];
}

declare class HTMLTableElement extends HTMLElement {
  caption: HTMLTableCaptionElement;
  tHead: HTMLTableSectionElement;
  tFoot: HTMLTableSectionElement;
  tBodies: HTMLCollection<HTMLTableSectionElement>;
  rows: HTMLCollection<HTMLTableRowElement>;
  createTHead(): HTMLTableSectionElement;
  deleteTHead(): void;
  createTFoot(): HTMLTableSectionElement;
  deleteTFoot(): void;
  createCaption(): HTMLTableCaptionElement;
  deleteCaption(): void;
  insertRow(index: ?number): HTMLTableRowElement;
  deleteRow(index: number): void;
}

declare class HTMLTableCaptionElement extends HTMLElement {

}

declare class HTMLTableSectionElement extends HTMLElement {
  rows: HTMLCollection<HTMLTableRowElement>;
}

declare class HTMLTableCellElement extends HTMLElement {
  colSpan: number;
  rowSpan: number;
  cellIndex: number;
}

declare class HTMLTableRowElement extends HTMLElement {
  align: 'left' | 'right' | 'center';
  rowIndex: number;
  +cells: HTMLCollection<HTMLTableCellElement>;
  deleteCell(index: number): void;
  insertCell(index: number): HTMLTableCellElement;
}

declare class HTMLMenuElement extends HTMLElement {
  getCompact(): bool;
  setCompact(compact: bool): void;
}

declare class HTMLBaseElement extends HTMLElement {
  href: string;
  target: string;
}

declare class HTMLTemplateElement extends HTMLElement {
  content: DocumentFragment;
}

declare class CanvasGradient {
  addColorStop(offset: number, color: string): void;
}

declare class CanvasPattern {
  setTransform(matrix: SVGMatrix): void;
}

declare class ImageBitmap {
  close(): void;
  width: number;
  height: number;
}

type CanvasFillRule = string;

type CanvasImageSource = HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | CanvasRenderingContext2D | ImageBitmap;

declare class HitRegionOptions {
  path?: Path2D,
  fillRule?: CanvasFillRule,
  id?: string,
  parentID?: string;
  cursor?: string;
  control?: Element;
  label: ?string;
  role: ?string;
};

declare class CanvasDrawingStyles {
  lineWidth: number;
  lineCap: string;
  lineJoin: string;
  miterLimit: number;

  // dashed lines
  setLineDash(segments: Array<number>): void;
  getLineDash(): Array<number>;
  lineDashOffset: number;

  // text
  font: string;
  textAlign: string;
  textBaseline: string;
  direction: string;
};

declare class SVGMatrix {
  getComponent(index: number): number;
  mMultiply(secondMatrix: SVGMatrix): SVGMatrix;
  inverse(): SVGMatrix;
  mTranslate(x: number, y: number): SVGMatrix;
  mScale(scaleFactor: number): SVGMatrix;
  mRotate(angle: number): SVGMatrix;
};

declare class TextMetrics {
  // x-direction
  width: number;
  actualBoundingBoxLeft: number;
  actualBoundingBoxRight: number;

  // y-direction
  fontBoundingBoxAscent: number;
  fontBoundingBoxDescent: number;
  actualBoundingBoxAscent: number;
  actualBoundingBoxDescent: number;
  emHeightAscent: number;
  emHeightDescent: number;
  hangingBaseline: number;
  alphabeticBaseline: number;
  ideographicBaseline: number;
};

declare class Path2D {
  constructor(path?: Path2D | string): void;

  addPath(path: Path2D, transformation?: ?SVGMatrix): void;
  addPathByStrokingPath(path: Path2D, styles: CanvasDrawingStyles, transformation?: ?SVGMatrix): void;
  addText(text: string, styles: CanvasDrawingStyles, transformation: ?SVGMatrix, x: number, y: number, maxWidth?: number): void;
  addPathByStrokingText(text: string, styles: CanvasDrawingStyles, transformation: ?SVGMatrix, x: number, y: number, maxWidth?: number): void;
  addText(text: string, styles: CanvasDrawingStyles, transformation: ?SVGMatrix, path: Path2D, maxWidth?: number): void;
  addPathByStrokingText(text: string, styles: CanvasDrawingStyles, transformation: ?SVGMatrix, path: Path2D, maxWidth?: number): void;

  // CanvasPathMethods
  // shared path API methods
  arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
  arcTo(x1: number, y1: number, x2: number, y2: number, radius: number, _: void, _: void): void;
  arcTo(x1: number, y1: number, x2: number, y2: number, radiusX: number, radiusY: number, rotation: number): void;
  bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
  closePath(): void;
  ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
  lineTo(x: number, y: number): void;
  moveTo(x: number, y: number): void;
  quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
  rect(x: number, y: number, w: number, h: number): void;
};

declare class ImageData {
  width: number;
  height: number;
  data: Uint8ClampedArray;

  // constructor methods are used in Worker where CanvasRenderingContext2D
  //  is unavailable.
  // https://html.spec.whatwg.org/multipage/scripting.html#dom-imagedata
  constructor(data: Uint8ClampedArray, width: number, height: number): void;
  constructor(width: number, height: number): void;
};

declare class CanvasRenderingContext2D {
  canvas: HTMLCanvasElement;

  // canvas dimensions
  width: number;
  height: number;

  // for contexts that aren't directly fixed to a specific canvas
  commit(): void;

  // state
  save(): void;
  restore(): void;

  // transformations
  currentTransform: SVGMatrix;
  scale(x: number, y: number): void;
  rotate(angle: number): void;
  translate(x: number, y: number): void;
  transform(a: number, b: number, c: number, d: number, e: number, f: number): void;
  setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void;
  resetTransform(): void;

  // compositing
  globalAlpha: number;
  globalCompositeOperation: string;

  // image smoothing
  imageSmoothingEnabled: boolean;
  imageSmoothingQuality: 'low' | 'medium' | 'high';

  // filters
  filter: string;

  // colours and styles
  strokeStyle: string | CanvasGradient | CanvasPattern;
  fillStyle: string | CanvasGradient | CanvasPattern;
  createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
  createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;
  createPattern(image: CanvasImageSource, repetition: ?string): CanvasPattern;

  // shadows
  shadowOffsetX: number;
  shadowOffsetY: number;
  shadowBlur: number;
  shadowColor: string;

  // rects
  clearRect(x: number, y: number, w: number, h: number): void;
  fillRect(x: number, y: number, w: number, h: number): void;
  strokeRect(x: number, y: number, w: number, h: number): void;

  // path API
  beginPath(): void;
  fill(fillRule?: CanvasFillRule): void;
  fill(path: Path2D, fillRule?: CanvasFillRule): void;
  stroke(): void;
  stroke(path: Path2D): void;
  drawFocusIfNeeded(element: Element): void;
  drawFocusIfNeeded(path: Path2D, element: Element): void;
  scrollPathIntoView(): void;
  scrollPathIntoView(path: Path2D): void;
  clip(fillRule?: CanvasFillRule): void;
  clip(path: Path2D, fillRule?: CanvasFillRule): void;
  resetClip(): void;
  isPointInPath(x: number, y: number, fillRule?: CanvasFillRule): boolean;
  isPointInPath(path: Path2D, x: number, y: number, fillRule?: CanvasFillRule): boolean;
  isPointInStroke(x: number, y: number): boolean;
  isPointInStroke(path: Path2D, x: number, y: number): boolean;

  // text (see also the CanvasDrawingStyles interface)
  fillText(text: string, x: number, y: number, maxWidth?: number): void;
  strokeText(text: string, x: number, y: number, maxWidth?: number): void;
  measureText(text: string): TextMetrics;

  // drawing images
  drawImage(image: CanvasImageSource, dx: number, dy: number): void;
  drawImage(image: CanvasImageSource, dx: number, dy: number, dw: number, dh: number): void;
  drawImage(image: CanvasImageSource, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;

  // hit regions
  addHitRegion(options?: HitRegionOptions): void;
  removeHitRegion(id: string): void;
  clearHitRegions(): void;

  // pixel manipulation
  createImageData(sw: number, sh: number): ImageData;
  createImageData(imagedata: ImageData): ImageData;
  getImageData(sx: number, sy: number, sw: number, sh: number): ImageData;
  putImageData(imagedata: ImageData, dx: number, dy: number): void;
  putImageData(imagedata: ImageData, dx: number, dy: number, dirtyX: number, dirtyY: number, dirtyWidth: number, dirtyHeight: number): void;

  // CanvasDrawingStyles
  // line caps/joins
  lineWidth: number;
  lineCap: string;
  lineJoin: string;
  miterLimit: number;

  // dashed lines
  setLineDash(segments: Array<number>): void;
  getLineDash(): Array<number>;
  lineDashOffset: number;

  // text
  font: string;
  textAlign: string;
  textBaseline: string;
  direction: string;

  // CanvasPathMethods
  // shared path API methods
  closePath(): void;
  moveTo(x: number, y: number): void;
  lineTo(x: number, y: number): void;
  quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
  bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
  arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
  arcTo(x1: number, y1: number, x2: number, y2: number, radiusX: number, radiusY: number, rotation: number): void;
  rect(x: number, y: number, w: number, h: number): void;
  arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
  ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
}


// WebGL idl: https://www.khronos.org/registry/webgl/specs/latest/1.0/webgl.idl

type WebGLContextAttributes = {
  alpha: bool,
  depth: bool,
  stencil: bool,
  antialias: bool,
  premultipliedAlpha: bool,
  preserveDrawingBuffer: bool,
  preferLowPowerToHighPerformance: bool,
  failIfMajorPerformanceCaveat: bool
};

interface WebGLObject {
};

interface WebGLBuffer extends WebGLObject {
};

interface WebGLFramebuffer extends WebGLObject {
};

interface WebGLProgram extends WebGLObject {
};

interface WebGLRenderbuffer extends WebGLObject {
};

interface WebGLShader extends WebGLObject {
};

interface WebGLTexture extends WebGLObject {
};

interface WebGLUniformLocation {
};

interface WebGLActiveInfo {
    size: number;
    type: number;
    name: string;
};

interface WebGLShaderPrecisionFormat {
  rangeMin: number;
  rangeMax: number;
  precision: number;
};

type BufferDataSource = ArrayBuffer | $ArrayBufferView;

type TexImageSource =
  ImageBitmap |
  ImageData |
  HTMLImageElement |
  HTMLCanvasElement |
  HTMLVideoElement;

type VertexAttribFVSource =
  Float32Array |
  Array<number>;

/* flow */
declare class WebGLRenderingContext {
  static DEPTH_BUFFER_BIT               : 0x00000100;
         DEPTH_BUFFER_BIT               : 0x00000100;
  static STENCIL_BUFFER_BIT             : 0x00000400;
         STENCIL_BUFFER_BIT             : 0x00000400;
  static COLOR_BUFFER_BIT               : 0x00004000;
         COLOR_BUFFER_BIT               : 0x00004000;
  static POINTS                         : 0x0000;
         POINTS                         : 0x0000;
  static LINES                          : 0x0001;
         LINES                          : 0x0001;
  static LINE_LOOP                      : 0x0002;
         LINE_LOOP                      : 0x0002;
  static LINE_STRIP                     : 0x0003;
         LINE_STRIP                     : 0x0003;
  static TRIANGLES                      : 0x0004;
         TRIANGLES                      : 0x0004;
  static TRIANGLE_STRIP                 : 0x0005;
         TRIANGLE_STRIP                 : 0x0005;
  static TRIANGLE_FAN                   : 0x0006;
         TRIANGLE_FAN                   : 0x0006;
  static ZERO                           : 0;
         ZERO                           : 0;
  static ONE                            : 1;
         ONE                            : 1;
  static SRC_COLOR                      : 0x0300;
         SRC_COLOR                      : 0x0300;
  static ONE_MINUS_SRC_COLOR            : 0x0301;
         ONE_MINUS_SRC_COLOR            : 0x0301;
  static SRC_ALPHA                      : 0x0302;
         SRC_ALPHA                      : 0x0302;
  static ONE_MINUS_SRC_ALPHA            : 0x0303;
         ONE_MINUS_SRC_ALPHA            : 0x0303;
  static DST_ALPHA                      : 0x0304;
         DST_ALPHA                      : 0x0304;
  static ONE_MINUS_DST_ALPHA            : 0x0305;
         ONE_MINUS_DST_ALPHA            : 0x0305;
  static DST_COLOR                      : 0x0306;
         DST_COLOR                      : 0x0306;
  static ONE_MINUS_DST_COLOR            : 0x0307;
         ONE_MINUS_DST_COLOR            : 0x0307;
  static SRC_ALPHA_SATURATE             : 0x0308;
         SRC_ALPHA_SATURATE             : 0x0308;
  static FUNC_ADD                       : 0x8006;
         FUNC_ADD                       : 0x8006;
  static BLEND_EQUATION                 : 0x8009;
         BLEND_EQUATION                 : 0x8009;
  static BLEND_EQUATION_RGB             : 0x8009;
         BLEND_EQUATION_RGB             : 0x8009;
  static BLEND_EQUATION_ALPHA           : 0x883D;
         BLEND_EQUATION_ALPHA           : 0x883D;
  static FUNC_SUBTRACT                  : 0x800A;
         FUNC_SUBTRACT                  : 0x800A;
  static FUNC_REVERSE_SUBTRACT          : 0x800B;
         FUNC_REVERSE_SUBTRACT          : 0x800B;
  static BLEND_DST_RGB                  : 0x80C8;
         BLEND_DST_RGB                  : 0x80C8;
  static BLEND_SRC_RGB                  : 0x80C9;
         BLEND_SRC_RGB                  : 0x80C9;
  static BLEND_DST_ALPHA                : 0x80CA;
         BLEND_DST_ALPHA                : 0x80CA;
  static BLEND_SRC_ALPHA                : 0x80CB;
         BLEND_SRC_ALPHA                : 0x80CB;
  static CONSTANT_COLOR                 : 0x8001;
         CONSTANT_COLOR                 : 0x8001;
  static ONE_MINUS_CONSTANT_COLOR       : 0x8002;
         ONE_MINUS_CONSTANT_COLOR       : 0x8002;
  static CONSTANT_ALPHA                 : 0x8003;
         CONSTANT_ALPHA                 : 0x8003;
  static ONE_MINUS_CONSTANT_ALPHA       : 0x8004;
         ONE_MINUS_CONSTANT_ALPHA       : 0x8004;
  static BLEND_COLOR                    : 0x8005;
         BLEND_COLOR                    : 0x8005;
  static ARRAY_BUFFER                   : 0x8892;
         ARRAY_BUFFER                   : 0x8892;
  static ELEMENT_ARRAY_BUFFER           : 0x8893;
         ELEMENT_ARRAY_BUFFER           : 0x8893;
  static ARRAY_BUFFER_BINDING           : 0x8894;
         ARRAY_BUFFER_BINDING           : 0x8894;
  static ELEMENT_ARRAY_BUFFER_BINDING   : 0x8895;
         ELEMENT_ARRAY_BUFFER_BINDING   : 0x8895;
  static STREAM_DRAW                    : 0x88E0;
         STREAM_DRAW                    : 0x88E0;
  static STATIC_DRAW                    : 0x88E4;
         STATIC_DRAW                    : 0x88E4;
  static DYNAMIC_DRAW                   : 0x88E8;
         DYNAMIC_DRAW                   : 0x88E8;
  static BUFFER_SIZE                    : 0x8764;
         BUFFER_SIZE                    : 0x8764;
  static BUFFER_USAGE                   : 0x8765;
         BUFFER_USAGE                   : 0x8765;
  static CURRENT_VERTEX_ATTRIB          : 0x8626;
         CURRENT_VERTEX_ATTRIB          : 0x8626;
  static FRONT                          : 0x0404;
         FRONT                          : 0x0404;
  static BACK                           : 0x0405;
         BACK                           : 0x0405;
  static FRONT_AND_BACK                 : 0x0408;
         FRONT_AND_BACK                 : 0x0408;
  static CULL_FACE                      : 0x0B44;
         CULL_FACE                      : 0x0B44;
  static BLEND                          : 0x0BE2;
         BLEND                          : 0x0BE2;
  static DITHER                         : 0x0BD0;
         DITHER                         : 0x0BD0;
  static STENCIL_TEST                   : 0x0B90;
         STENCIL_TEST                   : 0x0B90;
  static DEPTH_TEST                     : 0x0B71;
         DEPTH_TEST                     : 0x0B71;
  static SCISSOR_TEST                   : 0x0C11;
         SCISSOR_TEST                   : 0x0C11;
  static POLYGON_OFFSET_FILL            : 0x8037;
         POLYGON_OFFSET_FILL            : 0x8037;
  static SAMPLE_ALPHA_TO_COVERAGE       : 0x809E;
         SAMPLE_ALPHA_TO_COVERAGE       : 0x809E;
  static SAMPLE_COVERAGE                : 0x80A0;
         SAMPLE_COVERAGE                : 0x80A0;
  static NO_ERROR                       : 0;
         NO_ERROR                       : 0;
  static INVALID_ENUM                   : 0x0500;
         INVALID_ENUM                   : 0x0500;
  static INVALID_VALUE                  : 0x0501;
         INVALID_VALUE                  : 0x0501;
  static INVALID_OPERATION              : 0x0502;
         INVALID_OPERATION              : 0x0502;
  static OUT_OF_MEMORY                  : 0x0505;
         OUT_OF_MEMORY                  : 0x0505;
  static CW                             : 0x0900;
         CW                             : 0x0900;
  static CCW                            : 0x0901;
         CCW                            : 0x0901;
  static LINE_WIDTH                     : 0x0B21;
         LINE_WIDTH                     : 0x0B21;
  static ALIASED_POINT_SIZE_RANGE       : 0x846D;
         ALIASED_POINT_SIZE_RANGE       : 0x846D;
  static ALIASED_LINE_WIDTH_RANGE       : 0x846E;
         ALIASED_LINE_WIDTH_RANGE       : 0x846E;
  static CULL_FACE_MODE                 : 0x0B45;
         CULL_FACE_MODE                 : 0x0B45;
  static FRONT_FACE                     : 0x0B46;
         FRONT_FACE                     : 0x0B46;
  static DEPTH_RANGE                    : 0x0B70;
         DEPTH_RANGE                    : 0x0B70;
  static DEPTH_WRITEMASK                : 0x0B72;
         DEPTH_WRITEMASK                : 0x0B72;
  static DEPTH_CLEAR_VALUE              : 0x0B73;
         DEPTH_CLEAR_VALUE              : 0x0B73;
  static DEPTH_FUNC                     : 0x0B74;
         DEPTH_FUNC                     : 0x0B74;
  static STENCIL_CLEAR_VALUE            : 0x0B91;
         STENCIL_CLEAR_VALUE            : 0x0B91;
  static STENCIL_FUNC                   : 0x0B92;
         STENCIL_FUNC                   : 0x0B92;
  static STENCIL_FAIL                   : 0x0B94;
         STENCIL_FAIL                   : 0x0B94;
  static STENCIL_PASS_DEPTH_FAIL        : 0x0B95;
         STENCIL_PASS_DEPTH_FAIL        : 0x0B95;
  static STENCIL_PASS_DEPTH_PASS        : 0x0B96;
         STENCIL_PASS_DEPTH_PASS        : 0x0B96;
  static STENCIL_REF                    : 0x0B97;
         STENCIL_REF                    : 0x0B97;
  static STENCIL_VALUE_MASK             : 0x0B93;
         STENCIL_VALUE_MASK             : 0x0B93;
  static STENCIL_WRITEMASK              : 0x0B98;
         STENCIL_WRITEMASK              : 0x0B98;
  static STENCIL_BACK_FUNC              : 0x8800;
         STENCIL_BACK_FUNC              : 0x8800;
  static STENCIL_BACK_FAIL              : 0x8801;
         STENCIL_BACK_FAIL              : 0x8801;
  static STENCIL_BACK_PASS_DEPTH_FAIL   : 0x8802;
         STENCIL_BACK_PASS_DEPTH_FAIL   : 0x8802;
  static STENCIL_BACK_PASS_DEPTH_PASS   : 0x8803;
         STENCIL_BACK_PASS_DEPTH_PASS   : 0x8803;
  static STENCIL_BACK_REF               : 0x8CA3;
         STENCIL_BACK_REF               : 0x8CA3;
  static STENCIL_BACK_VALUE_MASK        : 0x8CA4;
         STENCIL_BACK_VALUE_MASK        : 0x8CA4;
  static STENCIL_BACK_WRITEMASK         : 0x8CA5;
         STENCIL_BACK_WRITEMASK         : 0x8CA5;
  static VIEWPORT                       : 0x0BA2;
         VIEWPORT                       : 0x0BA2;
  static SCISSOR_BOX                    : 0x0C10;
         SCISSOR_BOX                    : 0x0C10;
  static COLOR_CLEAR_VALUE              : 0x0C22;
         COLOR_CLEAR_VALUE              : 0x0C22;
  static COLOR_WRITEMASK                : 0x0C23;
         COLOR_WRITEMASK                : 0x0C23;
  static UNPACK_ALIGNMENT               : 0x0CF5;
         UNPACK_ALIGNMENT               : 0x0CF5;
  static PACK_ALIGNMENT                 : 0x0D05;
         PACK_ALIGNMENT                 : 0x0D05;
  static MAX_TEXTURE_SIZE               : 0x0D33;
         MAX_TEXTURE_SIZE               : 0x0D33;
  static MAX_VIEWPORT_DIMS              : 0x0D3A;
         MAX_VIEWPORT_DIMS              : 0x0D3A;
  static SUBPIXEL_BITS                  : 0x0D50;
         SUBPIXEL_BITS                  : 0x0D50;
  static RED_BITS                       : 0x0D52;
         RED_BITS                       : 0x0D52;
  static GREEN_BITS                     : 0x0D53;
         GREEN_BITS                     : 0x0D53;
  static BLUE_BITS                      : 0x0D54;
         BLUE_BITS                      : 0x0D54;
  static ALPHA_BITS                     : 0x0D55;
         ALPHA_BITS                     : 0x0D55;
  static DEPTH_BITS                     : 0x0D56;
         DEPTH_BITS                     : 0x0D56;
  static STENCIL_BITS                   : 0x0D57;
         STENCIL_BITS                   : 0x0D57;
  static POLYGON_OFFSET_UNITS           : 0x2A00;
         POLYGON_OFFSET_UNITS           : 0x2A00;
  static POLYGON_OFFSET_FACTOR          : 0x8038;
         POLYGON_OFFSET_FACTOR          : 0x8038;
  static TEXTURE_BINDING_2D             : 0x8069;
         TEXTURE_BINDING_2D             : 0x8069;
  static SAMPLE_BUFFERS                 : 0x80A8;
         SAMPLE_BUFFERS                 : 0x80A8;
  static SAMPLES                        : 0x80A9;
         SAMPLES                        : 0x80A9;
  static SAMPLE_COVERAGE_VALUE          : 0x80AA;
         SAMPLE_COVERAGE_VALUE          : 0x80AA;
  static SAMPLE_COVERAGE_INVERT         : 0x80AB;
         SAMPLE_COVERAGE_INVERT         : 0x80AB;
  static COMPRESSED_TEXTURE_FORMATS     : 0x86A3;
         COMPRESSED_TEXTURE_FORMATS     : 0x86A3;
  static DONT_CARE                      : 0x1100;
         DONT_CARE                      : 0x1100;
  static FASTEST                        : 0x1101;
         FASTEST                        : 0x1101;
  static NICEST                         : 0x1102;
         NICEST                         : 0x1102;
  static GENERATE_MIPMAP_HINT            : 0x8192;
         GENERATE_MIPMAP_HINT            : 0x8192;
  static BYTE                           : 0x1400;
         BYTE                           : 0x1400;
  static UNSIGNED_BYTE                  : 0x1401;
         UNSIGNED_BYTE                  : 0x1401;
  static SHORT                          : 0x1402;
         SHORT                          : 0x1402;
  static UNSIGNED_SHORT                 : 0x1403;
         UNSIGNED_SHORT                 : 0x1403;
  static INT                            : 0x1404;
         INT                            : 0x1404;
  static UNSIGNED_INT                   : 0x1405;
         UNSIGNED_INT                   : 0x1405;
  static FLOAT                          : 0x1406;
         FLOAT                          : 0x1406;
  static DEPTH_COMPONENT                : 0x1902;
         DEPTH_COMPONENT                : 0x1902;
  static ALPHA                          : 0x1906;
         ALPHA                          : 0x1906;
  static RGB                            : 0x1907;
         RGB                            : 0x1907;
  static RGBA                           : 0x1908;
         RGBA                           : 0x1908;
  static LUMINANCE                      : 0x1909;
         LUMINANCE                      : 0x1909;
  static LUMINANCE_ALPHA                : 0x190A;
         LUMINANCE_ALPHA                : 0x190A;
  static UNSIGNED_SHORT_4_4_4_4         : 0x8033;
         UNSIGNED_SHORT_4_4_4_4         : 0x8033;
  static UNSIGNED_SHORT_5_5_5_1         : 0x8034;
         UNSIGNED_SHORT_5_5_5_1         : 0x8034;
  static UNSIGNED_SHORT_5_6_5           : 0x8363;
         UNSIGNED_SHORT_5_6_5           : 0x8363;
  static FRAGMENT_SHADER                  : 0x8B30;
         FRAGMENT_SHADER                  : 0x8B30;
  static VERTEX_SHADER                    : 0x8B31;
         VERTEX_SHADER                    : 0x8B31;
  static MAX_VERTEX_ATTRIBS               : 0x8869;
         MAX_VERTEX_ATTRIBS               : 0x8869;
  static MAX_VERTEX_UNIFORM_VECTORS       : 0x8DFB;
         MAX_VERTEX_UNIFORM_VECTORS       : 0x8DFB;
  static MAX_VARYING_VECTORS              : 0x8DFC;
         MAX_VARYING_VECTORS              : 0x8DFC;
  static MAX_COMBINED_TEXTURE_IMAGE_UNITS : 0x8B4D;
         MAX_COMBINED_TEXTURE_IMAGE_UNITS : 0x8B4D;
  static MAX_VERTEX_TEXTURE_IMAGE_UNITS   : 0x8B4C;
         MAX_VERTEX_TEXTURE_IMAGE_UNITS   : 0x8B4C;
  static MAX_TEXTURE_IMAGE_UNITS          : 0x8872;
         MAX_TEXTURE_IMAGE_UNITS          : 0x8872;
  static MAX_FRAGMENT_UNIFORM_VECTORS     : 0x8DFD;
         MAX_FRAGMENT_UNIFORM_VECTORS     : 0x8DFD;
  static SHADER_TYPE                      : 0x8B4F;
         SHADER_TYPE                      : 0x8B4F;
  static DELETE_STATUS                    : 0x8B80;
         DELETE_STATUS                    : 0x8B80;
  static LINK_STATUS                      : 0x8B82;
         LINK_STATUS                      : 0x8B82;
  static VALIDATE_STATUS                  : 0x8B83;
         VALIDATE_STATUS                  : 0x8B83;
  static ATTACHED_SHADERS                 : 0x8B85;
         ATTACHED_SHADERS                 : 0x8B85;
  static ACTIVE_UNIFORMS                  : 0x8B86;
         ACTIVE_UNIFORMS                  : 0x8B86;
  static ACTIVE_ATTRIBUTES                : 0x8B89;
         ACTIVE_ATTRIBUTES                : 0x8B89;
  static SHADING_LANGUAGE_VERSION         : 0x8B8C;
         SHADING_LANGUAGE_VERSION         : 0x8B8C;
  static CURRENT_PROGRAM                  : 0x8B8D;
         CURRENT_PROGRAM                  : 0x8B8D;
  static NEVER                          : 0x0200;
         NEVER                          : 0x0200;
  static LESS                           : 0x0201;
         LESS                           : 0x0201;
  static EQUAL                          : 0x0202;
         EQUAL                          : 0x0202;
  static LEQUAL                         : 0x0203;
         LEQUAL                         : 0x0203;
  static GREATER                        : 0x0204;
         GREATER                        : 0x0204;
  static NOTEQUAL                       : 0x0205;
         NOTEQUAL                       : 0x0205;
  static GEQUAL                         : 0x0206;
         GEQUAL                         : 0x0206;
  static ALWAYS                         : 0x0207;
         ALWAYS                         : 0x0207;
  static KEEP                           : 0x1E00;
         KEEP                           : 0x1E00;
  static REPLACE                        : 0x1E01;
         REPLACE                        : 0x1E01;
  static INCR                           : 0x1E02;
         INCR                           : 0x1E02;
  static DECR                           : 0x1E03;
         DECR                           : 0x1E03;
  static INVERT                         : 0x150A;
         INVERT                         : 0x150A;
  static INCR_WRAP                      : 0x8507;
         INCR_WRAP                      : 0x8507;
  static DECR_WRAP                      : 0x8508;
         DECR_WRAP                      : 0x8508;
  static VENDOR                         : 0x1F00;
         VENDOR                         : 0x1F00;
  static RENDERER                       : 0x1F01;
         RENDERER                       : 0x1F01;
  static VERSION                        : 0x1F02;
         VERSION                        : 0x1F02;
  static NEAREST                        : 0x2600;
         NEAREST                        : 0x2600;
  static LINEAR                         : 0x2601;
         LINEAR                         : 0x2601;
  static NEAREST_MIPMAP_NEAREST         : 0x2700;
         NEAREST_MIPMAP_NEAREST         : 0x2700;
  static LINEAR_MIPMAP_NEAREST          : 0x2701;
         LINEAR_MIPMAP_NEAREST          : 0x2701;
  static NEAREST_MIPMAP_LINEAR          : 0x2702;
         NEAREST_MIPMAP_LINEAR          : 0x2702;
  static LINEAR_MIPMAP_LINEAR           : 0x2703;
         LINEAR_MIPMAP_LINEAR           : 0x2703;
  static TEXTURE_MAG_FILTER             : 0x2800;
         TEXTURE_MAG_FILTER             : 0x2800;
  static TEXTURE_MIN_FILTER             : 0x2801;
         TEXTURE_MIN_FILTER             : 0x2801;
  static TEXTURE_WRAP_S                 : 0x2802;
         TEXTURE_WRAP_S                 : 0x2802;
  static TEXTURE_WRAP_T                 : 0x2803;
         TEXTURE_WRAP_T                 : 0x2803;
  static TEXTURE_2D                     : 0x0DE1;
         TEXTURE_2D                     : 0x0DE1;
  static TEXTURE                        : 0x1702;
         TEXTURE                        : 0x1702;
  static TEXTURE_CUBE_MAP               : 0x8513;
         TEXTURE_CUBE_MAP               : 0x8513;
  static TEXTURE_BINDING_CUBE_MAP       : 0x8514;
         TEXTURE_BINDING_CUBE_MAP       : 0x8514;
  static TEXTURE_CUBE_MAP_POSITIVE_X    : 0x8515;
         TEXTURE_CUBE_MAP_POSITIVE_X    : 0x8515;
  static TEXTURE_CUBE_MAP_NEGATIVE_X    : 0x8516;
         TEXTURE_CUBE_MAP_NEGATIVE_X    : 0x8516;
  static TEXTURE_CUBE_MAP_POSITIVE_Y    : 0x8517;
         TEXTURE_CUBE_MAP_POSITIVE_Y    : 0x8517;
  static TEXTURE_CUBE_MAP_NEGATIVE_Y    : 0x8518;
         TEXTURE_CUBE_MAP_NEGATIVE_Y    : 0x8518;
  static TEXTURE_CUBE_MAP_POSITIVE_Z    : 0x8519;
         TEXTURE_CUBE_MAP_POSITIVE_Z    : 0x8519;
  static TEXTURE_CUBE_MAP_NEGATIVE_Z    : 0x851A;
         TEXTURE_CUBE_MAP_NEGATIVE_Z    : 0x851A;
  static MAX_CUBE_MAP_TEXTURE_SIZE      : 0x851C;
         MAX_CUBE_MAP_TEXTURE_SIZE      : 0x851C;
  static TEXTURE0                       : 0x84C0;
         TEXTURE0                       : 0x84C0;
  static TEXTURE1                       : 0x84C1;
         TEXTURE1                       : 0x84C1;
  static TEXTURE2                       : 0x84C2;
         TEXTURE2                       : 0x84C2;
  static TEXTURE3                       : 0x84C3;
         TEXTURE3                       : 0x84C3;
  static TEXTURE4                       : 0x84C4;
         TEXTURE4                       : 0x84C4;
  static TEXTURE5                       : 0x84C5;
         TEXTURE5                       : 0x84C5;
  static TEXTURE6                       : 0x84C6;
         TEXTURE6                       : 0x84C6;
  static TEXTURE7                       : 0x84C7;
         TEXTURE7                       : 0x84C7;
  static TEXTURE8                       : 0x84C8;
         TEXTURE8                       : 0x84C8;
  static TEXTURE9                       : 0x84C9;
         TEXTURE9                       : 0x84C9;
  static TEXTURE10                      : 0x84CA;
         TEXTURE10                      : 0x84CA;
  static TEXTURE11                      : 0x84CB;
         TEXTURE11                      : 0x84CB;
  static TEXTURE12                      : 0x84CC;
         TEXTURE12                      : 0x84CC;
  static TEXTURE13                      : 0x84CD;
         TEXTURE13                      : 0x84CD;
  static TEXTURE14                      : 0x84CE;
         TEXTURE14                      : 0x84CE;
  static TEXTURE15                      : 0x84CF;
         TEXTURE15                      : 0x84CF;
  static TEXTURE16                      : 0x84D0;
         TEXTURE16                      : 0x84D0;
  static TEXTURE17                      : 0x84D1;
         TEXTURE17                      : 0x84D1;
  static TEXTURE18                      : 0x84D2;
         TEXTURE18                      : 0x84D2;
  static TEXTURE19                      : 0x84D3;
         TEXTURE19                      : 0x84D3;
  static TEXTURE20                      : 0x84D4;
         TEXTURE20                      : 0x84D4;
  static TEXTURE21                      : 0x84D5;
         TEXTURE21                      : 0x84D5;
  static TEXTURE22                      : 0x84D6;
         TEXTURE22                      : 0x84D6;
  static TEXTURE23                      : 0x84D7;
         TEXTURE23                      : 0x84D7;
  static TEXTURE24                      : 0x84D8;
         TEXTURE24                      : 0x84D8;
  static TEXTURE25                      : 0x84D9;
         TEXTURE25                      : 0x84D9;
  static TEXTURE26                      : 0x84DA;
         TEXTURE26                      : 0x84DA;
  static TEXTURE27                      : 0x84DB;
         TEXTURE27                      : 0x84DB;
  static TEXTURE28                      : 0x84DC;
         TEXTURE28                      : 0x84DC;
  static TEXTURE29                      : 0x84DD;
         TEXTURE29                      : 0x84DD;
  static TEXTURE30                      : 0x84DE;
         TEXTURE30                      : 0x84DE;
  static TEXTURE31                      : 0x84DF;
         TEXTURE31                      : 0x84DF;
  static ACTIVE_TEXTURE                 : 0x84E0;
         ACTIVE_TEXTURE                 : 0x84E0;
  static REPEAT                         : 0x2901;
         REPEAT                         : 0x2901;
  static CLAMP_TO_EDGE                  : 0x812F;
         CLAMP_TO_EDGE                  : 0x812F;
  static MIRRORED_REPEAT                : 0x8370;
         MIRRORED_REPEAT                : 0x8370;
  static FLOAT_VEC2                     : 0x8B50;
         FLOAT_VEC2                     : 0x8B50;
  static FLOAT_VEC3                     : 0x8B51;
         FLOAT_VEC3                     : 0x8B51;
  static FLOAT_VEC4                     : 0x8B52;
         FLOAT_VEC4                     : 0x8B52;
  static INT_VEC2                       : 0x8B53;
         INT_VEC2                       : 0x8B53;
  static INT_VEC3                       : 0x8B54;
         INT_VEC3                       : 0x8B54;
  static INT_VEC4                       : 0x8B55;
         INT_VEC4                       : 0x8B55;
  static BOOL                           : 0x8B56;
         BOOL                           : 0x8B56;
  static BOOL_VEC2                      : 0x8B57;
         BOOL_VEC2                      : 0x8B57;
  static BOOL_VEC3                      : 0x8B58;
         BOOL_VEC3                      : 0x8B58;
  static BOOL_VEC4                      : 0x8B59;
         BOOL_VEC4                      : 0x8B59;
  static FLOAT_MAT2                     : 0x8B5A;
         FLOAT_MAT2                     : 0x8B5A;
  static FLOAT_MAT3                     : 0x8B5B;
         FLOAT_MAT3                     : 0x8B5B;
  static FLOAT_MAT4                     : 0x8B5C;
         FLOAT_MAT4                     : 0x8B5C;
  static SAMPLER_2D                     : 0x8B5E;
         SAMPLER_2D                     : 0x8B5E;
  static SAMPLER_CUBE                   : 0x8B60;
         SAMPLER_CUBE                   : 0x8B60;
  static VERTEX_ATTRIB_ARRAY_ENABLED        : 0x8622;
         VERTEX_ATTRIB_ARRAY_ENABLED        : 0x8622;
  static VERTEX_ATTRIB_ARRAY_SIZE           : 0x8623;
         VERTEX_ATTRIB_ARRAY_SIZE           : 0x8623;
  static VERTEX_ATTRIB_ARRAY_STRIDE         : 0x8624;
         VERTEX_ATTRIB_ARRAY_STRIDE         : 0x8624;
  static VERTEX_ATTRIB_ARRAY_TYPE           : 0x8625;
         VERTEX_ATTRIB_ARRAY_TYPE           : 0x8625;
  static VERTEX_ATTRIB_ARRAY_NORMALIZED     : 0x886A;
         VERTEX_ATTRIB_ARRAY_NORMALIZED     : 0x886A;
  static VERTEX_ATTRIB_ARRAY_POINTER        : 0x8645;
         VERTEX_ATTRIB_ARRAY_POINTER        : 0x8645;
  static VERTEX_ATTRIB_ARRAY_BUFFER_BINDING : 0x889F;
         VERTEX_ATTRIB_ARRAY_BUFFER_BINDING : 0x889F;
  static IMPLEMENTATION_COLOR_READ_TYPE   : 0x8B9A;
         IMPLEMENTATION_COLOR_READ_TYPE   : 0x8B9A;
  static IMPLEMENTATION_COLOR_READ_FORMAT : 0x8B9B;
         IMPLEMENTATION_COLOR_READ_FORMAT : 0x8B9B;
  static COMPILE_STATUS                 : 0x8B81;
         COMPILE_STATUS                 : 0x8B81;
  static LOW_FLOAT                      : 0x8DF0;
         LOW_FLOAT                      : 0x8DF0;
  static MEDIUM_FLOAT                   : 0x8DF1;
         MEDIUM_FLOAT                   : 0x8DF1;
  static HIGH_FLOAT                     : 0x8DF2;
         HIGH_FLOAT                     : 0x8DF2;
  static LOW_INT                        : 0x8DF3;
         LOW_INT                        : 0x8DF3;
  static MEDIUM_INT                     : 0x8DF4;
         MEDIUM_INT                     : 0x8DF4;
  static HIGH_INT                       : 0x8DF5;
         HIGH_INT                       : 0x8DF5;
  static FRAMEBUFFER                    : 0x8D40;
         FRAMEBUFFER                    : 0x8D40;
  static RENDERBUFFER                   : 0x8D41;
         RENDERBUFFER                   : 0x8D41;
  static RGBA4                          : 0x8056;
         RGBA4                          : 0x8056;
  static RGB5_A1                        : 0x8057;
         RGB5_A1                        : 0x8057;
  static RGB565                         : 0x8D62;
         RGB565                         : 0x8D62;
  static DEPTH_COMPONENT16              : 0x81A5;
         DEPTH_COMPONENT16              : 0x81A5;
  static STENCIL_INDEX                  : 0x1901;
         STENCIL_INDEX                  : 0x1901;
  static STENCIL_INDEX8                 : 0x8D48;
         STENCIL_INDEX8                 : 0x8D48;
  static DEPTH_STENCIL                  : 0x84F9;
         DEPTH_STENCIL                  : 0x84F9;
  static RENDERBUFFER_WIDTH             : 0x8D42;
         RENDERBUFFER_WIDTH             : 0x8D42;
  static RENDERBUFFER_HEIGHT            : 0x8D43;
         RENDERBUFFER_HEIGHT            : 0x8D43;
  static RENDERBUFFER_INTERNAL_FORMAT   : 0x8D44;
         RENDERBUFFER_INTERNAL_FORMAT   : 0x8D44;
  static RENDERBUFFER_RED_SIZE          : 0x8D50;
         RENDERBUFFER_RED_SIZE          : 0x8D50;
  static RENDERBUFFER_GREEN_SIZE        : 0x8D51;
         RENDERBUFFER_GREEN_SIZE        : 0x8D51;
  static RENDERBUFFER_BLUE_SIZE         : 0x8D52;
         RENDERBUFFER_BLUE_SIZE         : 0x8D52;
  static RENDERBUFFER_ALPHA_SIZE        : 0x8D53;
         RENDERBUFFER_ALPHA_SIZE        : 0x8D53;
  static RENDERBUFFER_DEPTH_SIZE        : 0x8D54;
         RENDERBUFFER_DEPTH_SIZE        : 0x8D54;
  static RENDERBUFFER_STENCIL_SIZE      : 0x8D55;
         RENDERBUFFER_STENCIL_SIZE      : 0x8D55;
  static FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE           : 0x8CD0;
         FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE           : 0x8CD0;
  static FRAMEBUFFER_ATTACHMENT_OBJECT_NAME           : 0x8CD1;
         FRAMEBUFFER_ATTACHMENT_OBJECT_NAME           : 0x8CD1;
  static FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL         : 0x8CD2;
         FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL         : 0x8CD2;
  static FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE : 0x8CD3;
         FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE : 0x8CD3;
  static COLOR_ATTACHMENT0              : 0x8CE0;
         COLOR_ATTACHMENT0              : 0x8CE0;
  static DEPTH_ATTACHMENT               : 0x8D00;
         DEPTH_ATTACHMENT               : 0x8D00;
  static STENCIL_ATTACHMENT             : 0x8D20;
         STENCIL_ATTACHMENT             : 0x8D20;
  static DEPTH_STENCIL_ATTACHMENT       : 0x821A;
         DEPTH_STENCIL_ATTACHMENT       : 0x821A;
  static NONE                           : 0;
         NONE                           : 0;
  static FRAMEBUFFER_COMPLETE                      : 0x8CD5;
         FRAMEBUFFER_COMPLETE                      : 0x8CD5;
  static FRAMEBUFFER_INCOMPLETE_ATTACHMENT         : 0x8CD6;
         FRAMEBUFFER_INCOMPLETE_ATTACHMENT         : 0x8CD6;
  static FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT : 0x8CD7;
         FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT : 0x8CD7;
  static FRAMEBUFFER_INCOMPLETE_DIMENSIONS         : 0x8CD9;
         FRAMEBUFFER_INCOMPLETE_DIMENSIONS         : 0x8CD9;
  static FRAMEBUFFER_UNSUPPORTED                   : 0x8CDD;
         FRAMEBUFFER_UNSUPPORTED                   : 0x8CDD;
  static FRAMEBUFFER_BINDING            : 0x8CA6;
         FRAMEBUFFER_BINDING            : 0x8CA6;
  static RENDERBUFFER_BINDING           : 0x8CA7;
         RENDERBUFFER_BINDING           : 0x8CA7;
  static MAX_RENDERBUFFER_SIZE          : 0x84E8;
         MAX_RENDERBUFFER_SIZE          : 0x84E8;
  static INVALID_FRAMEBUFFER_OPERATION  : 0x0506;
         INVALID_FRAMEBUFFER_OPERATION  : 0x0506;
  static UNPACK_FLIP_Y_WEBGL            : 0x9240;
         UNPACK_FLIP_Y_WEBGL            : 0x9240;
  static UNPACK_PREMULTIPLY_ALPHA_WEBGL : 0x9241;
         UNPACK_PREMULTIPLY_ALPHA_WEBGL : 0x9241;
  static CONTEXT_LOST_WEBGL             : 0x9242;
         CONTEXT_LOST_WEBGL             : 0x9242;
  static UNPACK_COLORSPACE_CONVERSION_WEBGL : 0x9243;
         UNPACK_COLORSPACE_CONVERSION_WEBGL : 0x9243;
  static BROWSER_DEFAULT_WEBGL          : 0x9244;
         BROWSER_DEFAULT_WEBGL          : 0x9244;

  canvas: HTMLCanvasElement;
  drawingBufferWidth: number;
  drawingBufferHeight: number;

  getContextAttributes(): ?WebGLContextAttributes;
  isContextLost(): bool;

  getSupportedExtensions(): ?Array<string>;
  getExtension(name: string): any;

  activeTexture(texture: number): void;
  attachShader(program: WebGLProgram, shader: WebGLShader): void;
  bindAttribLocation(program: WebGLProgram, index: number, name: string): void;
  bindBuffer(target: number, buffer: ?WebGLBuffer): void;
  bindFramebuffer(target: number, framebuffer: ?WebGLFramebuffer): void;
  bindRenderbuffer(target: number, renderbuffer: ?WebGLRenderbuffer): void;
  bindTexture(target: number, texture: ?WebGLTexture): void;
  blendColor(red: number, green: number, blue: number, alpha: number): void;
  blendEquation(mode: number): void;
  blendEquationSeparate(modeRGB: number, modeAlpha: number): void;
  blendFunc(sfactor: number, dfactor: number): void;
  blendFuncSeparate(srcRGB: number, dstRGB: number, srcAlpha: number, dstAlpha: number): void;

  bufferData(target: number, size: number, usage: number): void;
  bufferData(target: number, data: ?ArrayBuffer, usage: number): void;
  bufferData(target: number, data: $ArrayBufferView, usage: number): void;
  bufferSubData(target: number, offset: number, data: BufferDataSource): void;

  checkFramebufferStatus(target: number): number;
  clear(mask: number): void;
  clearColor(red: number, green: number, blue: number, alpha: number): void;
  clearDepth(depth: number): void;
  clearStencil(s: number): void;
  colorMask(red: bool, green: bool, blue: bool, alpha: bool): void;
  compileShader(shader: WebGLShader): void;

  compressedTexImage2D(target: number, level: number, internalformat: number,
                       width: number, height: number, border: number,
                       data: $ArrayBufferView): void;

  compressedTexSubImage2D(target: number, level: number,
                          xoffset: number, yoffset: number,
                          width: number, height: number, format: number,
                          data: $ArrayBufferView): void;

  copyTexImage2D(target: number, level: number, internalformat: number,
                x: number, y: number, width: number, height: number,
                border: number): void;
  copyTexSubImage2D(target: number, level: number, xoffset: number, yoffset: number,
                    x: number, y: number, width: number, height: number): void;

  createBuffer(): ?WebGLBuffer;
  createFramebuffer(): ?WebGLFramebuffer;
  createProgram(): ?WebGLProgram;
  createRenderbuffer(): ?WebGLRenderbuffer;
  createShader(type: number): ?WebGLShader;
  createTexture(): ?WebGLTexture;

  cullFace(mode: number): void;

  deleteBuffer(buffer: ?WebGLBuffer): void;
  deleteFramebuffer(framebuffer: ?WebGLFramebuffer): void;
  deleteProgram(program: ?WebGLProgram): void;
  deleteRenderbuffer(renderbuffer: ?WebGLRenderbuffer): void;
  deleteShader(shader: ?WebGLShader): void;
  deleteTexture(texture: ?WebGLTexture): void;

  depthFunc(func: number): void;
  depthMask(flag: bool): void;
  depthRange(zNear: number, zFar: number): void;
  detachShader(program: WebGLProgram, shader: WebGLShader): void;
  disable(cap: number): void;
  disableVertexAttribArray(index: number): void;
  drawArrays(mode: number, first: number, count: number): void;
  drawElements(mode: number, count: number, type: number, offset: number): void;

  enable(cap: number): void;
  enableVertexAttribArray(index: number): void;
  finish(): void;
  flush(): void;
  framebufferRenderbuffer(target: number, attachment: number,
                          renderbuffertarget: number,
                          renderbuffer: ?WebGLRenderbuffer): void;
  framebufferTexture2D(target: number, attachment: number, textarget: number,
                       texture: ?WebGLTexture, level: number): void;
  frontFace(mode: number): void;

  generateMipmap(target: number): void;

  getActiveAttrib(program: WebGLProgram, index: number): ?WebGLActiveInfo;
  getActiveUniform(program: WebGLProgram, index: number): ?WebGLActiveInfo;
  getAttachedShaders(program: WebGLProgram): ?Array<WebGLShader>;

  getAttribLocation(program: WebGLProgram, name: string): number;

  getBufferParameter(target: number, pname: number): any;
  getParameter(pname: number): any;

  getError(): number;

  getFramebufferAttachmentParameter(target: number, attachment: number,
                                    pname: number): any;
  getProgramParameter(program: WebGLProgram, pname: number): any;
  getProgramInfoLog(program: WebGLProgram): ?string;
  getRenderbufferParameter(target: number, pname: number): any;
  getShaderParameter(shader: WebGLShader, pname: number): any;
  getShaderPrecisionFormat(shadertype: number, precisiontype: number): ?WebGLShaderPrecisionFormat;
  getShaderInfoLog(shader: WebGLShader): ?string;

  getShaderSource(shader: WebGLShader): ?string;

  getTexParameter(target: number, pname: number): any;

  getUniform(program: WebGLProgram, location: WebGLUniformLocation): any;

  getUniformLocation(program: WebGLProgram, name: string): ?WebGLUniformLocation;

  getVertexAttrib(index: number, pname: number): any;

  getVertexAttribOffset(index: number, pname: number): number;

  hint(target: number, mode: number): void;
  isBuffer(buffer: ?WebGLBuffer): boolean;
  isEnabled(cap: number): boolean;
  isFramebuffer(framebuffer: ?WebGLFramebuffer): boolean;
  isProgram(program: ?WebGLProgram): boolean;
  isRenderbuffer(renderbuffer: ?WebGLRenderbuffer): boolean;
  isShader(shader: ?WebGLShader): boolean;
  isTexture(texture: ?WebGLTexture): boolean;
  lineWidth(width: number): void;
  linkProgram(program: WebGLProgram): void;
  pixelStorei(pname: number, param: number): void;
  polygonOffset(factor: number, units: number): void;

  readPixels(x: number, y: number, width: number, height: number,
             format: number, type: number, pixels: ?$ArrayBufferView): void;

  renderbufferStorage(target: number, internalformat: number,
                           width: number, height: number): void;
  sampleCoverage(value: number, invert: bool): void;
  scissor(x: number, y: number, width: number, height: number): void;

  shaderSource(shader: WebGLShader, source: string): void;

  stencilFunc(func: number, ref: number, mask: number): void;
  stencilFuncSeparate(face: number, func: number, ref: number, mask: number): void;
  stencilMask(mask: number): void;
  stencilMaskSeparate(face: number, mask: number): void;
  stencilOp(fail: number, zfail: number, zpass: number): void;
  stencilOpSeparate(face: number, fail: number, zfail: number, zpass: number): void;

  texImage2D(target: number, level: number, internalformat: number,
             width: number, height: number, border: number, format: number,
             type: number, pixels: ?$ArrayBufferView): void;
  texImage2D(target: number, level: number, internalformat: number,
             format: number, type: number, source: TexImageSource): void;

  texParameterf(target: number, pname: number, param: number): void;
  texParameteri(target: number, pname: number, param: number): void;

  texSubImage2D(target: number, level: number, xoffset: number, yoffset: number,
                width: number, height: number,
                format: number, type: number, pixels: ?$ArrayBufferView): void;
  texSubImage2D(target: number, level: number, xoffset: number, yoffset: number,
                format: number, type: number, source: TexImageSource): void;

  uniform1f(location: ?WebGLUniformLocation, x: number): void;
  uniform1fv(location: ?WebGLUniformLocation, v: Float32Array): void;
  uniform1fv(location: ?WebGLUniformLocation, v: Array<number>): void;
  uniform1fv(location: ?WebGLUniformLocation, v: [number]): void;
  uniform1i(location: ?WebGLUniformLocation, x: number): void;
  uniform1iv(location: ?WebGLUniformLocation, v: Int32Array): void;
  uniform1iv(location: ?WebGLUniformLocation, v: Array<number>): void;
  uniform1iv(location: ?WebGLUniformLocation, v: [number]): void;
  uniform2f(location: ?WebGLUniformLocation, x: number, y: number): void;
  uniform2fv(location: ?WebGLUniformLocation, v: Float32Array): void;
  uniform2fv(location: ?WebGLUniformLocation, v: Array<number>): void;
  uniform2fv(location: ?WebGLUniformLocation, v: [number, number]): void;
  uniform2i(location: ?WebGLUniformLocation, x: number, y: number): void;
  uniform2iv(location: ?WebGLUniformLocation, v: Int32Array): void;
  uniform2iv(location: ?WebGLUniformLocation, v: Array<number>): void;
  uniform2iv(location: ?WebGLUniformLocation, v: [number, number]): void;
  uniform3f(location: ?WebGLUniformLocation, x: number, y: number, z: number): void;
  uniform3fv(location: ?WebGLUniformLocation, v: Float32Array): void;
  uniform3fv(location: ?WebGLUniformLocation, v: Array<number>): void;
  uniform3fv(location: ?WebGLUniformLocation, v: [number, number, number]): void;
  uniform3i(location: ?WebGLUniformLocation, x: number, y: number, z: number): void;
  uniform3iv(location: ?WebGLUniformLocation, v: Int32Array): void;
  uniform3iv(location: ?WebGLUniformLocation, v: Array<number>): void;
  uniform3iv(location: ?WebGLUniformLocation, v: [number, number, number]): void;
  uniform4f(location: ?WebGLUniformLocation, x: number, y: number, z: number, w: number): void;
  uniform4fv(location: ?WebGLUniformLocation, v: Float32Array): void;
  uniform4fv(location: ?WebGLUniformLocation, v: Array<number>): void;
  uniform4fv(location: ?WebGLUniformLocation, v: [number, number, number, number]): void;
  uniform4i(location: ?WebGLUniformLocation, x: number, y: number, z: number, w: number): void;
  uniform4iv(location: ?WebGLUniformLocation, v: Int32Array): void;
  uniform4iv(location: ?WebGLUniformLocation, v: Array<number>): void;
  uniform4iv(location: ?WebGLUniformLocation, v: [number, number, number, number]): void;

  uniformMatrix2fv(location: ?WebGLUniformLocation, transpose: bool,
                        value: Float32Array): void;
  uniformMatrix2fv(location: ?WebGLUniformLocation, transpose: bool,
                        value: Array<number>): void;
  uniformMatrix3fv(location: ?WebGLUniformLocation, transpose: bool,
                        value: Float32Array): void;
  uniformMatrix3fv(location: ?WebGLUniformLocation, transpose: bool,
                        value: Array<number>): void;
  uniformMatrix4fv(location: ?WebGLUniformLocation, transpose: bool,
                        value: Float32Array): void;
  uniformMatrix4fv(location: ?WebGLUniformLocation, transpose: bool,
                        value: Array<number>): void;

  useProgram(program: ?WebGLProgram): void;
  validateProgram(program: WebGLProgram): void;

  vertexAttrib1f(index: number, x: number): void;
  vertexAttrib1fv(index: number, values: VertexAttribFVSource): void;
  vertexAttrib2f(index: number, x: number, y: number): void;
  vertexAttrib2fv(index: number, values: VertexAttribFVSource): void;
  vertexAttrib3f(index: number, x: number, y: number, z: number): void;
  vertexAttrib3fv(index: number, values: VertexAttribFVSource): void;
  vertexAttrib4f(index: number, x: number, y: number, z: number, w: number): void;
  vertexAttrib4fv(index: number, values: VertexAttribFVSource): void;
  vertexAttribPointer(index: number, size: number, type: number,
                           normalized: bool, stride: number, offset: number): void;

  viewport(x: number, y: number, width: number, height: number): void;
};

declare class WebGLContextEvent extends Event {
  statusMessage: string;
};

// http://www.w3.org/TR/html5/scripting-1.html#renderingcontext
type RenderingContext = CanvasRenderingContext2D | WebGLRenderingContext;

// http://www.w3.org/TR/html5/scripting-1.html#htmlcanvaselement
declare class HTMLCanvasElement extends HTMLElement {
  width: number;
  height: number;
  getContext(contextId: "2d", ...args: any): CanvasRenderingContext2D;
  getContext(contextId: "webgl", contextAttributes?: $Shape<WebGLContextAttributes>): ?WebGLRenderingContext;
  // IE currently only supports "experimental-webgl"
  getContext(contextId: "experimental-webgl", contextAttributes?: $Shape<WebGLContextAttributes>): ?WebGLRenderingContext;
  getContext(contextId: string, ...args: any): ?RenderingContext; // fallback
  toDataURL(type?: string, ...args: any): string;
  toBlob(callback: (v: File) => void, type?: string, ...args: any): void;
  captureStream(frameRate?: number): CanvasCaptureMediaStream;
}

// https://html.spec.whatwg.org/multipage/forms.html#the-details-element
declare class HTMLDetailsElement extends HTMLElement {
  open: boolean;
}

declare class HTMLFormElement extends HTMLElement {
  @@iterator(): Iterator<HTMLElement>;
  [index: number | string]: HTMLElement | null;
  acceptCharset: string;
  action: string;
  elements: HTMLCollection<HTMLElement>;
  encoding: string;
  enctype: string;
  length: number;
  method: string;
  name: string;
  target: string;

  checkValidity(): boolean;
  reportValidity(): boolean;
  reset(): void;
  submit(): void;
}

// https://www.w3.org/TR/html5/forms.html#the-fieldset-element
declare class HTMLFieldSetElement extends HTMLElement {
  disabled: boolean;
  elements: HTMLCollection<HTMLElement>; // readonly
  form: HTMLFormElement | null; // readonly
  name: string;
  type: string; // readonly

  checkValidity(): boolean;
  setCustomValidity(error: string): void;
}

declare class HTMLLegendElement extends HTMLElement {
  form: HTMLFormElement | null; // readonly
}

declare class HTMLIFrameElement extends HTMLElement {
  allowFullScreen: boolean;
  contentDocument: Document;
  contentWindow: any;
  frameBorder: string;
  height: string;
  marginHeight: string;
  marginWidth: string;
  name: string;
  scrolling: string;
  sandbox: DOMTokenList;
  src: string;
  srcdoc: string;
  width: string;
}

declare class HTMLImageElement extends HTMLElement {
  alt: string;
  complete: boolean; // readonly
  crossOrigin: ?string;
  currentSrc: string; // readonly
  height: number;
  isMap: boolean;
  naturalHeight: number; // readonly
  naturalWidth: number; // readonly
  sizes: string;
  src: string;
  srcset: string;
  useMap: string;
  width: number;
}

declare class Image extends HTMLImageElement {
  constructor(width?: number, height?: number): void;
}

declare class MediaError {
  MEDIA_ERR_ABORTED: number;
  MEDIA_ERR_NETWORK: number;
  MEDIA_ERR_DECODE: number;
  MEDIA_ERR_SRC_NOT_SUPPORTED: number;
  code: number;
  message: ?string;
}

declare class TimeRanges {
  length: number;
  start(index: number): number;
  end(index: number): number;
}
declare class Audio extends HTMLAudioElement {
  constructor(URLString?: string): void;
}

declare class AudioTrack {
  id: string;
  kind: string;
  label: string;
  language: string;
  enabled: boolean;
}

declare class AudioTrackList extends EventTarget {
  length: number;
  [index: number]: AudioTrack;

  getTrackById(id: string): ?AudioTrack;

  onchange: (ev: any) => any;
  onaddtrack: (ev: any) => any;
  onremovetrack: (ev: any) => any;
}

declare class VideoTrack {
  id: string;
  kind: string;
  label: string;
  language: string;
  selected: boolean;
}

declare class VideoTrackList extends EventTarget {
  length: number;
  [index: number]: VideoTrack;
  getTrackById(id: string): ?VideoTrack;
  selectedIndex: number;

  onchange: (ev: any) => any;
  onaddtrack: (ev: any) => any;
  onremovetrack: (ev: any) => any;
}

declare class TextTrackCue extends EventTarget {
  constructor(startTime: number, endTime: number, text: string): void;

  track: TextTrack;
  id: string;
  startTime: number;
  endTime: number;
  pauseOnExit: boolean;
  vertical: string;
  snapToLines: boolean;
  lines: number;
  position: number;
  size: number;
  align: string;
  text: string;

  getCueAsHTML(): Node;
  onenter: (ev: any) => any;
  onexit: (ev: any) => any;
}

declare class TextTrackCueList {
  @@iterator(): Iterator<TextTrackCue>;
  length: number;
  [index: number]: TextTrackCue;
  getCueById(id: string): ?TextTrackCue;
}

declare class TextTrack extends EventTarget {
  kind: string;
  label: string;
  language: string;

  mode: string;

  cues: TextTrackCueList;
  activeCues: TextTrackCueList;

  addCue(cue: TextTrackCue): void;
  removeCue(cue: TextTrackCue): void;

  oncuechange: (ev: any) => any;
}

declare class TextTrackList extends EventTarget {
  length: number;
  [index: number]: TextTrack;

  onaddtrack: (ev: any) => any;
  onremovetrack: (ev: any) => any;
}

declare class MediaKeyStatusMap<BufferDataSource, MediaKeyStatus> {
  @@iterator(): Iterator<[BufferDataSource, MediaKeyStatus]>;
  size: number;
  entries(): Iterator<[BufferDataSource, MediaKeyStatus]>;
  forEach(callbackfn: (value: MediaKeyStatus, key: BufferDataSource, map: MediaKeyStatusMap<BufferDataSource, MediaKeyStatus>) => any, thisArg?: any): void;
  get(key: BufferDataSource): MediaKeyStatus;
  has(key: BufferDataSource): boolean;
  keys(): Iterator<BufferDataSource>;
  values(): Iterator<MediaKeyStatus>;
}

declare class MediaKeySession extends EventTarget {
  sessionId: string;
  expiration: number;
  closed: Promise<void>;
  keyStatuses: MediaKeyStatusMap<BufferDataSource, MediaKeyStatus>;

  generateRequest(initDataType: string, initData: BufferDataSource): Promise<void>;
  load(sessionId: string): Promise<boolean>;
  update(response: BufferDataSource): Promise<void>;
  close(): Promise<void>;
  remove(): Promise<void>;

  onkeystatuschange: (ev: any) => any;
  onmessage: (ev: any) => any;
}

declare class MediaKeys {
  createSession(mediaKeySessionType: MediaKeySessionType): MediaKeySession;
  setServerCertificate(serverCertificate: BufferDataSource): Promise<boolean>;
}

declare class HTMLMediaElement extends HTMLElement {
  // error state
  error: ?MediaError;

  // network state
  src: string;
  srcObject: ?any;
  currentSrc: string;
  crossOrigin: ?string;
  NETWORK_EMPTY: number;
  NETWORK_IDLE: number;
  NETWORK_LOADING: number;
  NETWORK_NO_SOURCE: number;
  networkState: number;
  preload: string;
  buffered: TimeRanges;
  load(): void;
  canPlayType(type: string): string;

  // ready state
  HAVE_NOTHING: number;
  HAVE_METADATA: number;
  HAVE_CURRENT_DATA: number;
  HAVE_FUTURE_DATA: number;
  HAVE_ENOUGH_DATA: number;
  readyState: number;
  seeking: boolean;

  // playback state
  currentTime: number;
  duration: number;
  startDate: Date;
  paused: boolean;
  defaultPlaybackRate: number;
  playbackRate: number;
  played: TimeRanges;
  seekable: TimeRanges;
  ended: boolean;
  autoplay: boolean;
  loop: boolean;
  play(): Promise<void>;
  pause(): void;
  fastSeek(): void;
  captureStream(): MediaStream;

  // media controller
  mediaGroup: string;
  controller: ?any;

  // controls
  controls: boolean;
  volume: number;
  muted: boolean;
  defaultMuted: boolean;
  controlsList?: DOMTokenList;

  // tracks
  audioTracks: AudioTrackList;
  videoTracks: VideoTrackList;
  textTracks: TextTrackList;
  addTextTrack(kind: string, label?: string, language?: string): TextTrack;

  // media keys
  mediaKeys?: ?MediaKeys;
  setMediakeys?: (mediakeys: ?MediaKeys) => Promise<?MediaKeys>;
}

declare class HTMLAudioElement extends HTMLMediaElement {
}

declare class HTMLVideoElement extends HTMLMediaElement {
  width: number;
  height: number;
  videoWidth: number;
  videoHeight: number;
  poster: string;
}

declare class HTMLSourceElement extends HTMLElement {
    src: string;
    type: string;

    //when used with the picture element
    srcset: string;
    sizes: string;
    media: string;
}

declare class ValidityState {
  badInput: boolean;
  customError: boolean;
  patternMismatch: boolean;
  rangeOverflow: boolean;
  rangeUnderflow: boolean;
  stepMismatch: boolean;
  tooLong: boolean;
  tooShort: boolean;
  typeMismatch: boolean;
  valueMissing: boolean;
  valid: boolean;
}

// http://www.w3.org/TR/html5/forms.html#dom-textarea/input-setselectionrange
type SelectionDirection = 'backward' | 'forward' | 'none';
type SelectionMode = 'select' | 'start' | 'end' | 'preserve';
declare class HTMLInputElement extends HTMLElement {
  accept: string;
  align: string;
  alt: string;
  autocomplete: string;
  autofocus: boolean;
  border: string;
  checked: boolean;
  complete: boolean;
  defaultChecked: boolean;
  defaultValue: string;
  dirname: string;
  disabled: boolean;
  dynsrc: string;
  files: FileList;
  form: HTMLFormElement | null;
  formAction: string;
  formEncType: string;
  formMethod: string;
  formNoValidate: boolean;
  formTarget: string;
  height: string;
  hspace: number;
  indeterminate: boolean;
  labels: NodeList<HTMLLabelElement>;
  list: HTMLElement | null;
  loop: number;
  lowsrc: string;
  max: string;
  maxLength: number;
  min: string;
  multiple: boolean;
  name: string;
  pattern: string;
  placeholder: string;
  readOnly: boolean;
  required: boolean;
  selectionDirection: SelectionDirection;
  selectionEnd: number;
  selectionStart: number;
  size: number;
  src: string;
  start: string;
  status: boolean;
  step: string;
  tabIndex: number;
  type: string;
  useMap: string;
  validationMessage: string;
  validity: ValidityState;
  value: string;
  valueAsDate: Date;
  valueAsNumber: number;
  vrml: string;
  vspace: number;
  width: string;
  willValidate: boolean;

  blur(): void;
  checkValidity(): boolean;
  reportValidity(): boolean;
  setCustomValidity(error: string): void;
  click(): void;
  createTextRange(): TextRange;
  focus(): void;
  select(): void;
  setRangeText(replacement: string, start?: void, end?: void, selectMode?: void): void;
  setRangeText(replacement: string, start: number, end: number, selectMode?: SelectionMode): void;
  setSelectionRange(start: number, end: number, direction?: SelectionDirection): void;
}

declare class HTMLButtonElement extends HTMLElement {
  autofocus: boolean;
  disabled: boolean;
  form: HTMLFormElement | null;
  labels: NodeList<HTMLLabelElement> | null;
  name: string;
  type: string;
  validationMessage: string;
  validity: ValidityState;
  value: string;
  willValidate: boolean;

  checkValidity(): boolean;
  reportValidity(): boolean;
  setCustomValidity(error: string): void;
}

// http://dev.w3.org/html5/spec-preview/the-textarea-element.html
declare class HTMLTextAreaElement extends HTMLElement {
  autofocus: boolean;
  cols: number;
  dirName: string;
  disabled: boolean;
  form: HTMLFormElement | null;
  maxLength: number;
  name: string;
  placeholder: string;
  readOnly: boolean;
  required: boolean;
  rows: number;
  wrap: string;

  type: string;
  defaultValue: string;
  value: string;
  textLength: number;

  willValidate: boolean;
  validity: ValidityState;
  validationMessage: string;
  checkValidity(): boolean;
  setCustomValidity(error: string): void;

  labels: NodeList<HTMLLabelElement>;

  select(): void;
  selectionStart: number;
  selectionEnd: number;
  selectionDirection: SelectionDirection;
  setSelectionRange(start: number, end: number, direction?: SelectionDirection): void;
}

declare class HTMLSelectElement extends HTMLElement {
  autocomplete: string;
  autofocus: boolean;
  disabled: boolean;
  form: HTMLFormElement | null;
  labels: NodeList<HTMLLabelElement>;
  length: number;
  multiple: boolean;
  name: string;
  options: HTMLOptionsCollection;
  required: boolean;
  selectedIndex: number;
  selectedOptions: HTMLCollection<HTMLOptionElement>;
  size: number;
  type: string;
  validationMessage: string;
  validity: ValidityState;
  value: string;
  willValidate: boolean;

  add(element: HTMLElement, before?: HTMLElement): void;
  checkValidity(): boolean;
  item(index: number): HTMLOptionElement | null;
  namedItem(name: string): HTMLOptionElement | null;
  remove(index?: number): void;
  setCustomValidity(error: string): void;
}

declare class HTMLOptionsCollection extends HTMLCollection<HTMLOptionElement> {
  selectedIndex: number;
  add(element: HTMLOptionElement | HTMLOptGroupElement, before?: HTMLElement | number): void;
  remove(index: number): void;
}

declare class HTMLOptionElement extends HTMLElement {
  defaultSelected: boolean;
  disabled: boolean;
  form: HTMLFormElement | null;
  index: number;
  label: string;
  selected: boolean;
  text: string;
  value: string;
}

declare class HTMLOptGroupElement extends HTMLElement {
  disabled: boolean;
  label: string;
}

declare class HTMLAnchorElement extends HTMLElement {
  charset: string;
  coords: string;
  download: string;
  hash: string;
  host: string;
  hostname: string;
  href: string;
  hreflang: string;
  media: string;
  name: string;
  origin: string;
  password: string;
  pathname: string;
  port: string;
  protocol: string;
  rel: string;
  rev: string;
  search: string;
  shape: string;
  target: string;
  text: string;
  type: string;
  username: string;
}

// http://dev.w3.org/html5/spec-preview/the-label-element.html
declare class HTMLLabelElement extends HTMLElement {
  form: HTMLFormElement | null;
  htmlFor: string;
  control: HTMLElement | null;
}

declare class HTMLLinkElement extends HTMLElement {
  crossOrigin: ?('anonymous' | 'use-credentials');
  href: string;
  hreflang: string;
  media: string;
  rel: string;
  sizes: DOMTokenList;
  type: string;
  as: string;
}

declare class HTMLScriptElement extends HTMLElement {
  async: boolean;
  charset: string;
  crossOrigin?: string;
  defer: boolean;
  src: string;
  text: string;
  type: string;
}

declare class HTMLStyleElement extends HTMLElement {
  disabled: boolean;
  media: string;
  scoped: boolean;
  sheet: ?StyleSheet;
  type: string;
}

declare class HTMLParagraphElement extends HTMLElement {
  align: 'left' | 'center' | 'right' | 'justify'; // deprecated in HTML 4.01
}

declare class HTMLHtmlElement extends HTMLElement {}

declare class HTMLBodyElement extends HTMLElement {}

declare class HTMLHeadElement extends HTMLElement {}

declare class HTMLDivElement extends HTMLElement {}

declare class HTMLSpanElement extends HTMLElement {}

declare class HTMLAppletElement extends HTMLElement {}

declare class HTMLHeadingElement extends HTMLElement {}

declare class HTMLHRElement extends HTMLElement {}

declare class HTMLBRElement extends HTMLElement {}

declare class HTMLDListElement extends HTMLElement {}

declare class HTMLAreaElement extends HTMLElement {
  alt: string;
  coords: string;
  shape: string;
  target: string;
  download: string;
  ping: string;
  rel: string;
  relList: DOMTokenList;
  referrerPolicy: string;
}

declare class HTMLDataElement extends HTMLElement {
  value: string;
}

declare class HTMLDataListElement extends HTMLElement {
  options: HTMLCollection<HTMLOptionElement>;
}

declare class HTMLDialogElement extends HTMLElement {
  open: boolean;
  returnValue: string;
  show(): void;
  showModal(): void;
  close(returnValue: ?string): void;
}

declare class HTMLEmbedElement extends HTMLElement {
  src: string;
  type: string;
  width: string;
  height: string;
  getSVGDocument(): ?Document;
}

declare class HTMLMapElement extends HTMLElement {
  areas: HTMLCollection<HTMLAreaElement>;
  images: HTMLCollection<HTMLImageElement>;
  name: string;
}

declare class HTMLMeterElement extends HTMLElement {
  high: number;
  low: number;
  max: number;
  min: number;
  optimum: number;
  value: number;
  labels: NodeList<HTMLLabelElement>;
}

declare class HTMLModElement extends HTMLElement {
  cite: string;
  dateTime: string;
}

declare class HTMLObjectElement extends HTMLElement {
  contentDocument: ?Document;
  contentWindow: ?WindowProxy;
  data: string;
  form: ?HTMLFormElement;
  height: string;
  name: string;
  type: string;
  typeMustMatch: boolean;
  useMap: string;
  validationMessage: string;
  validity: ValidityState;
  width: string;
  willValidate: boolean;
  checkValidity(): boolean;
  getSVGDocument(): ?Document;
  reportValidity(): boolean;
  setCustomValidity(error: string): void;
}

declare class HTMLOutputElement extends HTMLElement {
  defaultValue: string;
  form: ?HTMLFormElement;
  htmlFor: DOMTokenList;
  labels: NodeList<HTMLLabelElement>;
  name: string;
  type: string;
  validationMessage: string;
  validity: ValidityState;
  value: string;
  willValidate: boolean;
  checkValidity(): boolean;
  reportValidity(): boolean;
  setCustomValidity(error: string): void;
}

declare class HTMLParamElement extends HTMLElement {
  name: string;
  value: string;
}

declare class HTMLProgressElement extends HTMLElement {
  labels: NodeList<HTMLLabelElement>;
  max: number;
  position: number;
  value: number;
}

declare class HTMLPictureElement extends HTMLElement {}

declare class HTMLTableColElement extends HTMLElement {
  span: number;
}

declare class HTMLTimeElement extends HTMLElement {
  dateTime: string;
}

declare class HTMLTitleElement extends HTMLElement {
  text: string;
}

declare class HTMLTrackElement extends HTMLElement {
  static NONE: 0;
  static LOADING: 1;
  static LOADED: 2;
  static ERROR: 3;

  default: boolean;
  kind: string;
  label: string;
  readyState: 0 | 1 | 2 | 3;
  src: string;
  srclang: string;
  track: TextTrack;
}

declare class HTMLQuoteElement extends HTMLElement {
  cite: string;
}

declare class HTMLOListElement extends HTMLElement {
  reversed: boolean;
  start: number;
  type: string;
}

declare class HTMLUListElement extends HTMLElement {}

declare class HTMLLIElement extends HTMLElement {
  value: number;
}

declare class HTMLPreElement extends HTMLElement {}

declare class HTMLMetaElement extends HTMLElement {
  content: string;
  httpEquiv: string;
  name: string;
}

declare class TextRange {
  boundingLeft: number;
  htmlText: string;
  offsetLeft: number;
  boundingWidth: number;
  boundingHeight: number;
  boundingTop: number;
  text: string;
  offsetTop: number;
  moveToPoint(x: number, y: number): void;
  queryCommandValue(cmdID: string): any;
  getBookmark(): string;
  move(unit: string, count?: number): number;
  queryCommandIndeterm(cmdID: string): boolean;
  scrollIntoView(fStart?: boolean): void;
  findText(string: string, count?: number, flags?: number): boolean;
  execCommand(cmdID: string, showUI?: boolean, value?: any): boolean;
  getBoundingClientRect(): ClientRect | DOMRect;
  moveToBookmark(bookmark: string): boolean;
  isEqual(range: TextRange): boolean;
  duplicate(): TextRange;
  collapse(start?: boolean): void;
  queryCommandText(cmdID: string): string;
  select(): void;
  pasteHTML(html: string): void;
  inRange(range: TextRange): boolean;
  moveEnd(unit: string, count?: number): number;
  getClientRects(): ClientRectList | DOMRectList;
  moveStart(unit: string, count?: number): number;
  parentElement(): Element;
  queryCommandState(cmdID: string): boolean;
  compareEndPoints(how: string, sourceRange: TextRange): number;
  execCommandShowHelp(cmdID: string): boolean;
  moveToElementText(element: Element): void;
  expand(Unit: string): boolean;
  queryCommandSupported(cmdID: string): boolean;
  setEndPoint(how: string, SourceRange: TextRange): void;
  queryCommandEnabled(cmdID: string): boolean;
}

declare class ClientRect { // extension
  left: number;
  width: number;
  right: number;
  top: number;
  bottom: number;
  height: number;
}

declare class ClientRectList { // extension
  @@iterator(): Iterator<ClientRect>;
  length: number;
  item(index: number): ClientRect;
  [index: number]: ClientRect;
}

// TODO: HTML*Element

declare class DOMImplementation {
  createDocumentType(qualifiedName: string, publicId: string, systemId: string): DocumentType;
  createDocument(namespaceURI: string | null, qualifiedName: string, doctype?: DocumentType | null): Document;
  hasFeature(feature: string, version?: string): boolean;

  // non-standard
  createHTMLDocument(title?: string): Document;
}

declare class DocumentType extends Node {
  name: string;
  notations: NamedNodeMap;
  systemId: string;
  internalSubset: string;
  entities: NamedNodeMap;
  publicId: string;

  // from ChildNode interface
  after(...nodes: Array<string | Node>): void;
  before(...nodes: Array<string | Node>): void;
  replaceWith(...nodes: Array<string | Node>): void;
  remove(): void;
}

declare class CharacterData extends Node {
  length: number;
  data: string;
  deleteData(offset: number, count: number): void;
  replaceData(offset: number, count: number, arg: string): void;
  appendData(arg: string): void;
  insertData(offset: number, arg: string): void;
  substringData(offset: number, count: number): string;

  // from ChildNode interface
  after(...nodes: Array<string | Node>): void;
  before(...nodes: Array<string | Node>): void;
  replaceWith(...nodes: Array<string | Node>): void;
  remove(): void;
}

declare class Text extends CharacterData {
  assignedSlot?: HTMLSlotElement;
  wholeText: string;
  splitText(offset: number): Text;
  replaceWholeText(content: string): Text;
}

declare class Comment extends CharacterData {
  text: string;
}

declare class URL {
  static createObjectURL(blob: Blob): string;
  static createObjectURL(mediaSource: MediaSource): string;
  static createFor(blob: Blob): string;
  static revokeObjectURL(url: string): void;
  constructor(url: string, base?: string | URL): void;
  hash: string;
  host: string;
  hostname: string;
  href: string;
  origin: string; // readonly
  password: string;
  pathname: string;
  port: string;
  protocol: string;
  search: string;
  searchParams: URLSearchParams; // readonly
  username: string;
}

declare class MediaSource extends EventTarget {
  sourceBuffers: SourceBufferList;
  activeSourceBuffers: SourceBufferList;
  readyState: "closed" | "opened" | "ended";
  duration: number;
  addSourceBuffer(type: string): SourceBuffer;
  removeSourceBuffer(sourceBuffer: SourceBuffer): void;
  endOfStream(error?: string): void;
  static isTypeSupported(type: string): bool;
}

declare class SourceBuffer extends EventTarget {
  mode: "segments" | "sequence";
  updating: bool;
  buffered: TimeRanges;
  timestampOffset: number;
  audioTracks: AudioTrackList;
  videoTracks: VideoTrackList;
  textTracks: TextTrackList;
  appendWindowStart: number;
  appendWindowEnd: number;

  appendBuffer(data: ArrayBuffer | $ArrayBufferView): void;
  // TODO: Add ReadableStream
  // appendStream(stream: ReadableStream, maxSize?: number): void;
  abort(): void;
  remove(start: number, end: number): void;

  trackDefaults: TrackDefaultList;
}

declare class SourceBufferList extends EventTarget {
  @@iterator(): Iterator<SourceBuffer>;
  [index: number]: SourceBuffer;
  length: number;
}

declare class Storage {
  length: number;
  getItem(key: string): ?string;
  setItem(key: string, data: string): void;
  clear(): void;
  removeItem(key: string): void;
  key(index: number): ?string;
  [name: string]: ?string;
}

declare class TrackDefaultList {
  [index: number]: TrackDefault;
  length: number;
}

declare class TrackDefault {
  type: "audio" | "video" | "text";
  byteStreamTrackID: string;
  language: string;
  label: string;
  kinds: Array<string>;
}

// TODO: The use of \`typeof\` makes this function signature effectively
// (node: Node) => number, but it should be (node: Node) => 1|2|3
type NodeFilterCallback = (node: Node) =>
typeof NodeFilter.FILTER_ACCEPT |
typeof NodeFilter.FILTER_REJECT |
typeof NodeFilter.FILTER_SKIP;

type NodeFilterInterface = NodeFilterCallback | { acceptNode: NodeFilterCallback }

// TODO: window.NodeFilter exists at runtime and behaves as a constructor
//       as far as \`instanceof\` is concerned, but it is not callable.
declare class NodeFilter {
  static SHOW_ALL: -1;
  static SHOW_ELEMENT: 1;
  static SHOW_ATTRIBUTE: 2; // deprecated
  static SHOW_TEXT: 4;
  static SHOW_CDATA_SECTION: 8; // deprecated
  static SHOW_ENTITY_REFERENCE: 16; // deprecated
  static SHOW_ENTITY: 32; // deprecated
  static SHOW_PROCESSING_INSTRUCTION: 64;
  static SHOW_COMMENT: 128;
  static SHOW_DOCUMENT: 256;
  static SHOW_DOCUMENT_TYPE: 512;
  static SHOW_DOCUMENT_FRAGMENT: 1024;
  static SHOW_NOTATION: 2048; // deprecated
  static FILTER_ACCEPT: 1;
  static FILTER_REJECT: 2;
  static FILTER_SKIP: 3;
  acceptNode: NodeFilterCallback;
}

// TODO: window.NodeIterator exists at runtime and behaves as a constructor
//       as far as \`instanceof\` is concerned, but it is not callable.
declare class NodeIterator<RootNodeT, WhatToShowT> {
  root: RootNodeT;
  whatToShow: number;
  filter: NodeFilter;
  expandEntityReferences: boolean;
  referenceNode: RootNodeT | WhatToShowT;
  pointerBeforeReferenceNode: boolean;
  detach(): void;
  previousNode(): WhatToShowT | null;
  nextNode(): WhatToShowT | null;
}

// TODO: window.TreeWalker exists at runtime and behaves as a constructor
//       as far as \`instanceof\` is concerned, but it is not callable.
declare class TreeWalker<RootNodeT, WhatToShowT> {
  root: RootNodeT;
  whatToShow: number;
  filter: NodeFilter;
  expandEntityReferences: boolean;
  currentNode: RootNodeT | WhatToShowT;
  parentNode(): WhatToShowT | null;
  firstChild(): WhatToShowT | null;
  lastChild(): WhatToShowT | null;
  previousSibling(): WhatToShowT | null;
  nextSibling(): WhatToShowT | null;
  previousNode(): WhatToShowT | null;
  nextNode(): WhatToShowT | null;
}

/* window */

declare type WindowProxy = any;
declare function alert(message?: any): void;
declare function prompt(message?: any, value?: any): string;
declare function close(): void;
declare function confirm(message?: string): boolean;
declare function getComputedStyle(elt: Element, pseudoElt?: string): any;
declare opaque type AnimationFrameID;
declare function requestAnimationFrame(callback: (timestamp: number) => void): AnimationFrameID;
declare function cancelAnimationFrame(requestId: AnimationFrameID): void;
declare opaque type IdleCallbackID;
declare function requestIdleCallback(
  cb: (deadline: {didTimeout: boolean, timeRemaining: () => number}) => void,
  opts?: {timeout: number},
): IdleCallbackID;
declare function cancelIdleCallback(id: IdleCallbackID): void;
declare var localStorage: Storage;
declare function focus(): void;
declare function onfocus(ev: Event): any;
declare function onmessage(ev: MessageEvent): any;
declare function open(url?: string, target?: string, features?: string, replace?: boolean): any;
declare var parent: WindowProxy;
declare function print(): void;
declare var self: any;
declare var sessionStorage: Storage;
declare var status: string;
declare var top: WindowProxy;
declare function getSelection(): Selection | null;
declare var customElements: CustomElementRegistry;

/* Notification */
type NotificationPermission = 'default' | 'denied' | 'granted';
type NotificationDirection = 'auto' | 'ltr' | 'rtl';
type VibratePattern = number | Array<number>;
type NotificationAction = {action: string, title: string, icon?: string};
type NotificationOptions = {
  dir: NotificationDirection,
  lang: string,
  body: string,
  tag: string,
  image: string,
  icon: string,
  badge: string,
  sound: string,
  vibrate: VibratePattern,
  timestamp: number,
  renotify: boolean,
  silent: boolean,
  requireInteraction: boolean,
  data: ?any,
  actions: Array<NotificationAction>
};

declare class Notification extends EventTarget {
  constructor(title: string, options?: NotificationOptions): void;
  static permission: NotificationPermission;
  static requestPermission(
    callback?: (perm: NotificationPermission) => mixed
  ): Promise<NotificationPermission>;
  static maxActions: number;
  onclick: (evt: Event) => any;
  onerror: (evt: Event) => any;
  title: string;
  dir: NotificationDirection;
  lang: string;
  body: string;
  tag: string;
  image: string;
  icon: string;
  badge: string;
  sound: string;
  vibrate: Array<number>;
  timestamp: number;
  renotify: boolean;
  silent: boolean;
  requireInteraction: boolean;
  data: any;
  actions: Array<NotificationAction>;

  close(): void;
}

`

export const indexeddb = `
// Implemented by window & worker
declare interface IDBEnvironment {
  indexedDB: IDBFactory;
}

type IDBDirection = 'next' | 'nextunique' | 'prev' | 'prevunique';

// Implemented by window.indexedDB & worker.indexedDB
declare interface IDBFactory {
  open(name: string, version?: number): IDBOpenDBRequest;
  deleteDatabase(name: string): IDBOpenDBRequest;
  cmp(a: any, b: any): -1|0|1;
}

declare interface IDBRequest extends EventTarget {
  result: IDBObjectStore;
  error: Error;
  source: ?(IDBIndex | IDBObjectStore | IDBCursor);
  transaction: IDBTransaction;
  readyState: 'pending'|'done';
  onerror: (err: any) => mixed;
  onsuccess: (e: any) => mixed;
}

declare interface IDBOpenDBRequest extends IDBRequest {
  onblocked: (e: any) => mixed;
  onupgradeneeded: (e: any) => mixed;
}

declare interface IDBDatabase extends EventTarget {
  close(): void;
  createObjectStore(name: string, options?: {
    keyPath?: ?(string|string[]),
    autoIncrement?: bool
  }): IDBObjectStore;
  deleteObjectStore(name: string): void;
  transaction(storeNames: string|string[], mode?: 'readonly'|'readwrite'|'versionchange'): IDBTransaction;
  name: string;
  version: number;
  objectStoreNames: string[];
  onabort: (e: any) => mixed;
  onclose: (e: any) => mixed;
  onerror: (e: any) => mixed;
  onversionchange: (e: any) => mixed;
}

declare interface IDBTransaction extends EventTarget {
  abort(): void;
  db: IDBDatabase;
  error: Error;
  mode: 'readonly'|'readwrite'|'versionchange';
  name: string;
  objectStore(name: string): IDBObjectStore;
  onabort: (e: any) => mixed;
  oncomplete: (e: any) => mixed;
  onerror: (e: any) => mixed;
}

declare interface IDBObjectStore {
  add(value: any, key?: any): IDBRequest;
  autoIncrement: bool;
  clear(): IDBRequest;
  createIndex(indexName: string, keyPath: string|string[], optionalParameter?: {
    unique?: bool,
    multiEntry?: bool,
  }): IDBIndex;
  count(keyRange?: any|IDBKeyRange): IDBRequest;
  delete(key: any): IDBRequest;
  deleteIndex(indexName: string): void;
  get(key: any): IDBRequest;
  index(indexName: string): IDBIndex;
  indexNames: string[];
  name: string;
  keyPath: any;
  openCursor(range?: any|IDBKeyRange, direction?: IDBDirection): IDBRequest;
  openKeyCursor(range?: any|IDBKeyRange, direction?: IDBDirection): IDBRequest;
  put(value: any, key?: any): IDBRequest;
  transaction : IDBTransaction;
}

declare interface IDBIndex extends EventTarget {
  count(key?: any|IDBKeyRange): IDBRequest;
  get(key: any|IDBKeyRange): IDBRequest;
  getKey(key: any|IDBKeyRange): IDBRequest;
  openCursor(range?: any|IDBKeyRange, direction?: IDBDirection): IDBRequest;
  openKeyCursor(range?: any|IDBKeyRange, direction?: IDBDirection): IDBRequest;
  name: string;
  objectStore: IDBObjectStore;
  keyPath: any;
  multiEntry: bool;
  unique: bool;
}

declare interface IDBKeyRange {
  bound(lower: any, upper: any, lowerOpen?: bool, upperOpen?: bool): IDBKeyRange;
  only(value: any): IDBKeyRange;
  lowerBound(bound: any, open?: bool): IDBKeyRange;
  upperBound(bound: any, open?: bool): IDBKeyRange;
  lower: any;
  upper: any;
  lowerOpen: bool;
  upperOpen: bool;
}

declare interface IDBCursor {
  advance(count: number): void;
  continue(key?: any): void;
  delete(): IDBRequest;
  update(newValue: any): IDBRequest;
  source: IDBObjectStore|IDBIndex;
  direction: IDBDirection;
  key: any;
  primaryKey: any;
}

declare interface IDBCursorWithValue extends IDBCursor {
  value: any;
}

`

export const intl = `
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

declare var Intl: {
  Collator: Class<Intl$Collator>,
  DateTimeFormat: Class<Intl$DateTimeFormat>,
  NumberFormat: Class<Intl$NumberFormat>,
  PluralRules: ?Class<Intl$PluralRules>,

  getCanonicalLocales?: (locales?: Intl$Locales) => Intl$Locale[]
}

type Intl$Locale = string
type Intl$Locales = Intl$Locale | Intl$Locale[]

declare class Intl$Collator {
  constructor (
    locales?: Intl$Locales,
    options?: Intl$CollatorOptions
  ): Intl$Collator;

  static (
    locales?: Intl$Locales,
    options?: Intl$CollatorOptions
  ): Intl$Collator;

  compare (string, string): number;

  resolvedOptions (): {
    locale: Intl$Locale,
    usage: 'sort' | 'search',
    sensitivity: 'base' | 'accent' | 'case' | 'variant',
    ignorePunctuation: boolean,
    collation: string,
    numeric: boolean,
    caseFirst?: 'upper' | 'lower' | 'false'
  };

  static supportedLocalesOf (locales?: Intl$Locales): Intl$Locale[];
}

declare type Intl$CollatorOptions = {
  localeMatcher?: 'lookup' | 'best fit',
  usage?: 'sort' | 'search',
  sensitivity?: 'base' | 'accent' | 'case' | 'variant',
  ignorePunctuation?: boolean,
  numeric?: boolean,
  caseFirst?: 'upper' | 'lower' | 'false'
}

type FormatToPartsType = | 'day' | 'dayPeriod' | 'era' | 'hour' | 'literal'
  | 'minute' | 'month' | 'second' | 'timeZoneName' | 'weekday' | 'year';

declare class Intl$DateTimeFormat {
  constructor (
    locales?: Intl$Locales,
    options?: Intl$DateTimeFormatOptions
  ): Intl$DateTimeFormat;

  static (
    locales?: Intl$Locales,
    options?: Intl$DateTimeFormatOptions
  ): Intl$DateTimeFormat;

  format (value?: Date | number): string;

  formatToParts (value?: Date | number): Array<{
    type: FormatToPartsType,
    value: string,
  }>;

  resolvedOptions (): {
    locale: Intl$Locale,
    calendar: string,
    numberingSystem: string,
    timeZone?: string,
    hour12: boolean,
    weekday?: 'narrow' | 'short' | 'long',
    era?: 'narrow' | 'short' | 'long',
    year?: 'numeric' | '2-digit',
    month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long',
    day?: 'numeric' | '2-digit',
    hour?: 'numeric' | '2-digit',
    minute?: 'numeric' | '2-digit',
    second?: 'numeric' | '2-digit',
    timeZoneName?: 'short' | 'long'
  };

  static supportedLocalesOf (locales?: Intl$Locales): Intl$Locale[];
}

declare type Intl$DateTimeFormatOptions = {
  localeMatcher?: 'lookup' | 'best fit',
  timeZone?: string,
  hour12?: boolean,
  formatMatcher?: 'basic' | 'best fit',
  weekday?: 'narrow' | 'short' | 'long',
  era?: 'narrow' | 'short' | 'long',
  year?: 'numeric' | '2-digit',
  month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long',
  day?: 'numeric' | '2-digit',
  hour?: 'numeric' | '2-digit',
  minute?: 'numeric' | '2-digit',
  second?: 'numeric' | '2-digit',
  timeZoneName?: 'short' | 'long'
}

declare class Intl$NumberFormat {
  constructor (
    locales?: Intl$Locales,
    options?: Intl$NumberFormatOptions
  ): Intl$NumberFormat;

  static (
    locales?: Intl$Locales,
    options?: Intl$NumberFormatOptions
  ): Intl$NumberFormat;

  format (number): string;

  resolvedOptions (): {
    locale: Intl$Locale,
    numberingSystem: string,
    style: 'decimal' | 'currency' | 'percent',
    currency?: string,
    currencyDisplay?: 'symbol' | 'code' | 'name',
    useGrouping: boolean,
    minimumIntegerDigits?: number,
    minimumFractionDigits?: number,
    maximumFractionDigits?: number,
    minimumSignificantDigits?: number,
    maximumSignificantDigits?: number
  };

  static supportedLocalesOf (locales?: Intl$Locales): Intl$Locale[];
}

declare type Intl$NumberFormatOptions = {
  localeMatcher?: 'lookup' | 'best fit',
  style?: 'decimal' | 'currency' | 'percent',
  currency?: string,
  currencyDisplay?: 'symbol' | 'code' | 'name',
  useGrouping?: boolean,
  minimumIntegerDigits?: number,
  minimumFractionDigits?: number,
  maximumFractionDigits?: number,
  minimumSignificantDigits?: number,
  maximumSignificantDigits?: number
}

declare class Intl$PluralRules {
  constructor (
    locales?: Intl$Locales,
    options?: Intl$PluralRulesOptions
  ): Intl$PluralRules;

  select (number): Intl$PluralRule;

  resolvedOptions (): {
    locale: Intl$Locale,
    type: 'cardinal' | 'ordinal',
    minimumIntegerDigits?: number,
    minimumFractionDigits?: number,
    maximumFractionDigits?: number,
    minimumSignificantDigits?: number,
    maximumSignificantDigits?: number,
    pluralCategories: Intl$PluralRule[],
  };

  static supportedLocalesOf (locales?: Intl$Locales): Intl$Locale[];
}

type Intl$PluralRule = 'zero' | 'one' | 'two' | 'few' | 'many' | 'other'

declare type Intl$PluralRulesOptions = {
  localeMatcher?: 'lookup' | 'best fit',
  type?: 'cardinal' | 'ordinal',
  minimumIntegerDigits?: number,
  minimumFractionDigits?: number,
  maximumFractionDigits?: number,
  minimumSignificantDigits?: number,
  maximumSignificantDigits?: number
}

`

export const node = `
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

interface ErrnoError extends Error {
  address?: string;
  code?: string;
  dest?: string;
  errno?: string | number;
  info?: Object;
  path?: string;
  port?: number;
  syscall?: string;
}

type buffer$NonBufferEncoding =
  'hex' | 'HEX' |
  'utf8' | 'UTF8' | 'utf-8' | 'UTF-8' |
  'ascii' | 'ASCII' |
  'binary' | 'BINARY' |
  'base64' | 'BASE64' |
  'ucs2' | 'UCS2' | 'ucs-2' | 'UCS-2' |
  'utf16le' | 'UTF16LE' | 'utf-16le' | 'UTF-16LE' | 'latin1';
type buffer$Encoding = buffer$NonBufferEncoding | 'buffer'
type buffer$ToJSONRet = { type: string, data: Array<number> }

declare class Buffer extends Uint8Array {
  constructor(
    value: Array<number> | number | string | Buffer | ArrayBuffer,
    encoding?: buffer$Encoding
  ): void;
  [i: number]: number;
  length: number;

  compare(otherBuffer: Buffer): number;
  copy(targetBuffer: Buffer, targetStart?: number, sourceStart?: number, sourceEnd?: number): number;
  entries(): Iterator<[number, number]>;
  equals(otherBuffer: Buffer): boolean;
  fill(value: string | Buffer | number, offset?: number, end?: number, encoding?: string): this;
  fill(value: string, encoding?: string): this;
  includes(
    value: string | Buffer | number,
    offsetOrEncoding?: number | buffer$Encoding,
    encoding?: buffer$Encoding
  ): boolean;
  indexOf(
    value: string | Buffer | number,
    offsetOrEncoding?: number | buffer$Encoding,
    encoding?: buffer$Encoding
  ): number;
  inspect(): string;
  keys(): Iterator<number>,
  lastIndexOf(
    value: string | Buffer | number,
    offsetOrEncoding?: number | buffer$Encoding,
    encoding?: buffer$Encoding
  ): number;
  readDoubleBE(offset: number, noAssert?: boolean): number;
  readDoubleLE(offset: number, noAssert?: boolean): number;
  readFloatBE(offset: number, noAssert?: boolean): number;
  readFloatLE(offset: number, noAssert?: boolean): number;
  readInt16BE(offset: number, noAssert?: boolean): number;
  readInt16LE(offset: number, noAssert?: boolean): number;
  readInt32BE(offset: number, noAssert?: boolean): number;
  readInt32LE(offset: number, noAssert?: boolean): number;
  readInt8(offset: number, noAssert?: boolean): number;
  readIntBE(offset: number, byteLength: number, noAssert?: boolean): number;
  readIntLE(offset: number, byteLength: number, noAssert?: boolean): number;
  readUInt16BE(offset: number, noAssert?: boolean): number;
  readUInt16LE(offset: number, noAssert?: boolean): number;
  readUInt32BE(offset: number, noAssert?: boolean): number;
  readUInt32LE(offset: number, noAssert?: boolean): number;
  readUInt8(offset: number, noAssert?: boolean): number;
  readUIntBE(offset: number, byteLength: number, noAssert?: boolean): number;
  readUIntLE(offset: number, byteLength: number, noAssert?: boolean): number;
  slice(start?: number, end?: number): this;
  swap16(): Buffer;
  swap32(): Buffer;
  swap64(): Buffer;
  toJSON(): buffer$ToJSONRet;
  toString(encoding?: buffer$Encoding, start?: number, end?: number): string;
  values(): Iterator<number>;
  write(string: string, offset?: number, length?: number, encoding?: buffer$Encoding): void;
  writeDoubleBE(value: number, offset: number, noAssert?: boolean): number;
  writeDoubleLE(value: number, offset: number, noAssert?: boolean): number;
  writeFloatBE(value: number, offset: number, noAssert?: boolean): number;
  writeFloatLE(value: number, offset: number, noAssert?: boolean): number;
  writeInt16BE(value: number, offset: number, noAssert?: boolean): number;
  writeInt16LE(value: number, offset: number, noAssert?: boolean): number;
  writeInt32BE(value: number, offset: number, noAssert?: boolean): number;
  writeInt32LE(value: number, offset: number, noAssert?: boolean): number;
  writeInt8(value: number, offset: number, noAssert?: boolean): number;
  writeIntBE(value: number, offset: number, byteLength: number, noAssert?: boolean): number;
  writeIntLE(value: number, offset: number, byteLength: number, noAssert?: boolean): number;
  writeUInt16BE(value: number, offset: number, noAssert?: boolean): number;
  writeUInt16LE(value: number, offset: number, noAssert?: boolean): number;
  writeUInt32BE(value: number, offset: number, noAssert?: boolean): number;
  writeUInt32LE(value: number, offset: number, noAssert?: boolean): number;
  writeUInt8(value: number, offset: number, noAssert?: boolean): number;
  writeUIntBE(value: number, offset: number, byteLength: number, noAssert?: boolean): number;
  writeUIntLE(value: number, offset: number, byteLength: number, noAssert?: boolean): number;

  static alloc(size: number, fill?: string | number, encoding?: buffer$Encoding): Buffer;
  static allocUnsafe(size: number): Buffer;
  static allocUnsafeSlow(size: number): Buffer;
  static byteLength(string: string | Buffer | $TypedArray | DataView | ArrayBuffer, encoding?: buffer$Encoding): number;
  static compare(buf1: Buffer, buf2: Buffer): number;
  static concat(list: Array<Buffer>, totalLength?: number): Buffer;

  static from(value: Buffer): Buffer;
  static from(value: string, encoding?: buffer$Encoding): Buffer;
  static from(value: ArrayBuffer, byteOffset?: number, length?: number): Buffer;
  static from(value: Iterable<number>): this;
  static isBuffer(obj: any): boolean;
  static isEncoding(encoding: string): boolean;
}

declare module "buffer" {
  declare var kMaxLength: number;
  declare var INSPECT_MAX_BYTES: number;
  declare function transcode(source: Buffer, fromEnc: buffer$Encoding, toEnc: buffer$Encoding): Buffer;
  declare var Buffer: typeof global.Buffer;
}

type child_process$execOpts = {
  cwd?: string;
  env?: Object;
  encoding?: string;
  shell?: string;
  timeout?: number;
  maxBuffer?: number;
  killSignal?: string | number;
  uid?: number;
  gid?: number;
  windowsHide?: boolean;
};

declare class child_process$Error extends Error {
  code: number | string | null,
  errno?: string,
  syscall?: string,
  path?: string,
  spawnargs?: Array<string>,
  killed?: boolean,
  signal?: string | null,
  cmd: string,
}

type child_process$execCallback = (error: ?child_process$Error, stdout: string | Buffer, stderr: string | Buffer) => void;

type child_process$execSyncOpts = {
  cwd?: string;
  input?: string | Buffer | $TypedArray | DataView;
  stdio?: string | Array<any>;
  env?: Object;
  shell?: string,
  uid?: number;
  gid?: number;
  timeout?: number;
  killSignal?: string | number;
  maxBuffer?: number;
  encoding?: string;
  windowsHide?: boolean;
};

type child_process$execFileOpts = {
  cwd?: string;
  env?: Object;
  encoding?: string;
  timeout?: number;
  maxBuffer?: number;
  killSignal?: string | number;
  uid?: number;
  gid?: number;
  windowsHide?: boolean;
  windowsVerbatimArguments?: boolean;
  shell?: boolean | string;
};

type child_process$execFileCallback = (error: ?child_process$Error, stdout: string | Buffer, stderr: string | Buffer) => void;

type child_process$execFileSyncOpts = {
  cwd?: string;
  input?: string | Buffer | $TypedArray | DataView;
  stdio?: string | Array<any>;
  env?: Object;
  uid?: number;
  gid?: number;
  timeout?: number;
  killSignal?: string | number;
  maxBuffer?: number;
  encoding?: string;
  windowsHide?: boolean;
  shell?: boolean | string;
};

type child_process$forkOpts = {
  cwd?: string;
  env?: Object;
  execPath?: string;
  execArgv?: Array<string>;
  silent?: boolean;
  stdio?: Array<any> | string;
  windowsVerbatimArguments?: boolean;
  uid?: number;
  gid?: number;
};

type child_process$Handle = any; // TODO

type child_process$spawnOpts = {
  cwd?: string;
  env?: Object;
  argv0?: string;
  stdio?: string | Array<any>;
  detached?: boolean;
  uid?: number;
  gid?: number;
  shell?: boolean | string;
  windowsVerbatimArguments?: boolean;
  windowsHide?: boolean;
};

type child_process$spawnRet = {
  pid: number;
  output: Array<any>;
  stdout: Buffer | string;
  stderr: Buffer | string;
  status: number;
  signal: string;
  error: Error;
};

type child_process$spawnSyncOpts = {
  cwd?: string;
  input?: string | Buffer;
  stdio?: string | Array<any>;
  env?: Object;
  uid?: number;
  gid?: number;
  timeout?: number;
  killSignal?: string;
  maxBuffer?: number;
  encoding?: string;
  shell?: boolean | string;
};

type child_process$spawnSyncRet = child_process$spawnRet;

declare class child_process$ChildProcess extends events$EventEmitter {
  channel: Object;
  connected: boolean;
  killed: boolean;
  pid: number;
  stderr: stream$Readable;
  stdin: stream$Writable;
  stdio: Array<any>;
  stdout: stream$Readable;

  disconnect(): void;
  kill(signal?: string): void;
  send(
    message: Object,
    sendHandleOrCallback?: child_process$Handle,
    optionsOrCallback?: Object | Function,
    callback?: Function
  ): boolean;
  unref(): void;
  ref(): void;
}

declare module "child_process" {
  declare var ChildProcess: typeof child_process$ChildProcess;

  declare function exec(
    command: string,
    optionsOrCallback?: child_process$execOpts | child_process$execCallback,
    callback?: child_process$execCallback
  ): child_process$ChildProcess;

  declare function execSync(
    command: string,
    options: {encoding: buffer$NonBufferEncoding} & child_process$execSyncOpts
  ): string;

  declare function execSync(
    command: string,
    options?: child_process$execSyncOpts
  ): Buffer;

  declare function execFile(
    file: string,
    argsOrOptionsOrCallback?:
      Array<string> | child_process$execFileOpts | child_process$execFileCallback,
    optionsOrCallback?: child_process$execFileOpts | child_process$execFileCallback,
    callback?: child_process$execFileCallback
  ): child_process$ChildProcess;

  declare function execFileSync(
    command: string,
    argsOrOptions?: Array<string> | child_process$execFileSyncOpts,
    options?: child_process$execFileSyncOpts
  ): Buffer | string;

  declare function fork(
    modulePath: string,
    argsOrOptions?: Array<string> | child_process$forkOpts,
    options?: child_process$forkOpts
  ): child_process$ChildProcess;

  declare function spawn(
    command: string,
    argsOrOptions?: Array<string> | child_process$spawnOpts,
    options?: child_process$spawnOpts
  ): child_process$ChildProcess;

  declare function spawnSync(
    command: string,
    argsOrOptions?: Array<string> | child_process$spawnSyncOpts,
    options?: child_process$spawnSyncOpts
  ): child_process$spawnSyncRet;
}

declare class cluster$Worker extends events$EventEmitter {
  id: number;
  process: child_process$ChildProcess;
  suicide: boolean;

  disconnect(): void;
  isConnected(): boolean;
  isDead(): boolean;
  kill(signal?: string): void;
  send(
    message: Object,
    sendHandleOrCallback?: child_process$Handle | Function,
    callback?: Function,
  ): boolean;
}

type cluster$setupMasterOpts = {
  exec?: string;
  args?: Array<string>;
  silent?: boolean;
  stdio?: Array<any>;
}

declare module "cluster" {
  declare class Cluster extends events$EventEmitter {
    isMaster: boolean;
    isWorker: boolean;
    settings: {
      execArgv: Array<string>;
      exec: string;
      args: Array<string>;
      silent: boolean;
      stdio: Array<any>;
      uid: number;
      gid: number;
    };
    worker: cluster$Worker;
    workers: Object;

    disconnect(callback?: () => void): void;
    fork(env?: Object): cluster$Worker;
    setupMaster(settings?: cluster$setupMasterOpts): void;
  }

  declare module.exports: Cluster;
}

type crypto$createCredentialsDetails = any; // TODO

declare class crypto$Cipher extends stream$Duplex {
  final(output_encoding: 'latin1' | 'binary' | 'base64' | 'hex'): string;
  final(output_encoding: void): Buffer;
  getAuthTag(): Buffer;
  setAAD(buffer: Buffer): crypto$Cipher;
  setAuthTag(buffer: Buffer): void;
  setAutoPadding(auto_padding?: boolean): crypto$Cipher;
  update(
    data: string,
    input_encoding: 'utf8' | 'ascii' | 'latin1' | 'binary',
    output_encoding: 'latin1' | 'binary' | 'base64' | 'hex'
  ): string;
  update(
    data: string,
    input_encoding: 'utf8' | 'ascii' | 'latin1' | 'binary',
    output_encoding: void
  ): Buffer;
  update(
    data: Buffer,
    input_encoding: void | 'utf8' | 'ascii' | 'latin1' | 'binary',
    output_encoding: 'latin1' | 'binary' | 'base64' | 'hex'
  ): string;
  update(
    data: Buffer,
    input_encoding: void,
    output_encoding: void
  ): Buffer;
}

type crypto$Credentials = {
  // TODO
}

type crypto$DiffieHellman = {
  computeSecret(
    other_public_key: string,
    input_encoding?: string,
    output_encoding?: string
  ): any;
  generateKeys(encoding?: string): any;
  getGenerator(encoding?: string): any;
  getPrime(encoding?: string): any;
  getPrivateKey(encoding?: string): any;
  getPublicKey(encoding?: string): any;
  setPrivateKey(private_key: any, encoding?: string): void;
  setPublicKey(public_key: any, encoding?: string): void;
}

type crypto$ECDH$Encoding = 'latin1' | 'hex' | 'base64';
type crypto$ECDH$Format = 'compressed' | 'uncompressed';

declare class crypto$ECDH {
  computeSecret(
    other_public_key: Buffer | $TypedArray | DataView
  ): Buffer,
  computeSecret(
    other_public_key: string,
    input_encoding: crypto$ECDH$Encoding
  ): Buffer,
  computeSecret(
    other_public_key: Buffer | $TypedArray | DataView,
    output_encoding: crypto$ECDH$Encoding
  ): string,
  computeSecret(
    other_public_key: string,
    input_encoding: crypto$ECDH$Encoding,
    output_encoding: crypto$ECDH$Encoding
  ): string,
  generateKeys(format?: crypto$ECDH$Format): Buffer,
  generateKeys(encoding: crypto$ECDH$Encoding, format?: crypto$ECDH$Format): string,
  getPrivateKey(): Buffer,
  getPrivateKey(encoding: crypto$ECDH$Encoding): string,
  getPublicKey(format?: crypto$ECDH$Format): Buffer,
  getPublicKey(encoding: crypto$ECDH$Encoding, format?: crypto$ECDH$Format): string,
  setPrivateKey(private_key: Buffer | $TypedArray | DataView): void,
  setPrivateKey(private_key: string, encoding: crypto$ECDH$Encoding): void
}

declare class crypto$Decipher extends stream$Duplex {
  final(output_encoding: 'latin1' | 'binary' | 'ascii' | 'utf8'): string;
  final(output_encoding: void): Buffer;
  getAuthTag(): Buffer;
  setAAD(buffer: Buffer): void;
  setAuthTag(buffer: Buffer): void;
  setAutoPadding(auto_padding?: boolean): crypto$Cipher;
  update(
    data: string,
    input_encoding: 'latin1' | 'binary' | 'base64' | 'hex',
    output_encoding: 'latin1' | 'binary' | 'ascii' | 'utf8',
  ): string;
  update(
    data: string,
    input_encoding: 'latin1' | 'binary' | 'base64' | 'hex',
    output_encoding: void
  ): Buffer;
  update(
    data: Buffer,
    input_encoding: void,
    output_encoding: 'latin1' | 'binary' | 'ascii' | 'utf8',
  ): string;
  update(
    data: Buffer,
    input_encoding: void,
    output_encoding: void
  ): Buffer;
}

declare class crypto$Hash extends stream$Duplex {
  digest(encoding: 'hex' | 'latin1' | 'binary' | 'base64'): string;
  digest(encoding: 'buffer'): Buffer;
  digest(encoding: void): Buffer;
  update(data: string | Buffer, input_encoding?: 'utf8' | 'ascii' | 'latin1' |
  'binary'): crypto$Hash;
}

declare class crypto$Hmac extends stream$Duplex {
  digest(encoding: 'hex' | 'latin1' | 'binary' | 'base64'): string;
  digest(encoding: 'buffer'): Buffer;
  digest(encoding: void): Buffer;
  update(data: string | Buffer, input_encoding?: 'utf8' | 'ascii' | 'latin1' |
  'binary'): crypto$Hmac;
}

type crypto$Sign$private_key = string | {
  key: string,
  passphrase: string,
}
declare class crypto$Sign extends stream$Writable {
  static(algorithm: string, options?: writableStreamOptions): crypto$Sign,
  constructor(algorithm: string, options?: writableStreamOptions): void;
  sign(
    private_key: crypto$Sign$private_key,
    output_format: 'latin1' | 'binary' | 'hex' | 'base64'
  ): string;
  sign(
    private_key: crypto$Sign$private_key,
    output_format: void
  ): Buffer;
  update(data: string | Buffer, input_encoding?: 'utf8' | 'ascii' | 'latin1' |
  'binary'): crypto$Sign;
}

declare class crypto$Verify extends stream$Writable {
  static(algorithm: string, options?: writableStreamOptions): crypto$Verify,
  constructor(algorithm: string, options?: writableStreamOptions): void;
  update(data: string | Buffer, input_encoding?: 'utf8' | 'ascii' | 'latin1' |
  'binary' ): crypto$Verify;
  verify(
    object: string,
    signature: string | Buffer | $TypedArray | DataView,
    signature_format: 'latin1' | 'binary' | 'hex' | 'base64'
  ): boolean;
  verify(object: string, signature: Buffer, signature_format: void): boolean;
}


type crypto$key = string | {
  key: string,
  passphrase?: string,
  padding?: string // TODO: enum type in crypto.constants
};

declare module "crypto" {
  declare var DEFAULT_ENCODING: string;

  declare class Sign extends crypto$Sign {}
  declare class Verify extends crypto$Verify {}

  declare function createCipher(algorithm: string, password: string | Buffer): crypto$Cipher;
  declare function createCipheriv(
    algorithm: string,
    key: string | Buffer,
    iv: string | Buffer
  ): crypto$Cipher;
  declare function createCredentials(
    details?: crypto$createCredentialsDetails
  ): crypto$Credentials
  declare function createDecipher(algorithm: string, password: string | Buffer): crypto$Decipher;
  declare function createDecipheriv(
    algorithm: string,
    key: string | Buffer,
    iv: string | Buffer
  ): crypto$Decipher;
  declare function createDiffieHellman(prime_length: number): crypto$DiffieHellman;
  declare function createDiffieHellman(prime: number, encoding?: string): crypto$DiffieHellman;
  declare function createECDH(curveName: string): crypto$ECDH;
  declare function createHash(algorithm: string): crypto$Hash;
  declare function createHmac(algorithm: string, key: string | Buffer): crypto$Hmac;
  declare function createSign(algorithm: string): crypto$Sign;
  declare function createVerify(algorithm: string): crypto$Verify;
  declare function getCiphers(): Array<string>;
  declare function getCurves(): Array<string>;
  declare function getDiffieHellman(group_name: string): crypto$DiffieHellman;
  declare function getHashes(): Array<string>;
  declare function pbkdf2(
    password: string | Buffer,
    salt: string | Buffer,
    iterations: number,
    keylen: number,
    digestOrCallback: string | ((err: ?Error, derivedKey: Buffer) => void),
    callback?: (err: ?Error, derivedKey: Buffer) => void
  ): void;
  declare function pbkdf2Sync(
    password: string | Buffer,
    salt: string | Buffer,
    iterations: number,
    keylen: number,
    digest?: string
  ): Buffer;
  declare function privateDecrypt(
    private_key: crypto$key,
    buffer: Buffer
  ): Buffer;
  declare function privateEncrypt(
    private_key: crypto$key,
    buffer: Buffer
  ): Buffer;
  declare function publicDecrypt(
    key: crypto$key,
    buffer: Buffer
  ): Buffer;
  declare function publicEncrypt(
    key: crypto$key,
    buffer: Buffer
  ): Buffer;
  // \`UNUSED\` argument strictly enforces arity to enable overloading this
  // function with 1-arg and 2-arg variants.
  declare function pseudoRandomBytes(size: number, UNUSED: void): Buffer;
  declare function pseudoRandomBytes(
    size: number,
    callback: (err: ?Error, buffer: Buffer) => void
  ): void;
  // \`UNUSED\` argument strictly enforces arity to enable overloading this
  // function with 1-arg and 2-arg variants.
  declare function randomBytes(size: number, UNUSED: void): Buffer;
  declare function randomBytes(
    size: number,
    callback: (err: ?Error, buffer: Buffer) => void
  ): void;
  declare function randomFillSync(buffer: Buffer): void
  declare function randomFillSync(buffer: Buffer, offset: number): void
  declare function randomFillSync(
    buffer: Buffer,
    offset: number,
    size: number
  ): void
  declare function randomFill(
    buffer: Buffer,
    callback: (err: ?Error, buffer: Buffer) => void
  ): void
  declare function randomFill(
    buffer: Buffer,
    offset: number,
    callback: (err: ?Error, buffer: Buffer) => void
  ): void
  declare function randomFill(
    buffer: Buffer,
    offset: number,
    size: number,
    callback: (err: ?Error, buffer: Buffer) => void
  ): void
  declare function timingSafeEqual(
    a: Buffer | $TypedArray | DataView,
    b: Buffer | $TypedArray | DataView
  ): boolean;
}

type net$Socket$address = {address: string; family: string; port: number};
type dgram$Socket$rinfo = {address: string; family: 'IPv4' | 'IPv6'; port: number, size: number};

declare class dgram$Socket extends events$EventEmitter {
  addMembership(multicastAddress: string, multicastInterface?: string): void;
  address(): net$Socket$address;
  bind(port?: number, address?: string, callback?: () => void): void;
  close(): void;
  dropMembership(multicastAddress: string, multicastInterface?: string): void;
  ref(): void;
  send(
    msg: Buffer,
    port: number,
    address: string,
    callback?: (err: ?Error, bytes: any) => mixed,
  ): void;
  send(
    msg: Buffer,
    offset: number,
    length: number,
    port: number,
    address: string,
    callback?: (err: ?Error, bytes: any) => mixed,
  ): void;
  setBroadcast(flag: boolean): void;
  setMulticastLoopback(flag: boolean): void;
  setMulticastTTL(ttl: number): void;
  setTTL(ttl: number): void;
  unref(): void;
};

declare module "dgram" {
  declare function createSocket(
    options: string | { type: string },
    callback?: () => void
  ): dgram$Socket;
}

declare module "dns" {
  declare var ADDRGETNETWORKPARAMS: string;
  declare var BADFAMILY: string;
  declare var BADFLAGS: string;
  declare var BADHINTS: string;
  declare var BADQUERY: string;
  declare var BADNAME: string;
  declare var BADRESP: string;
  declare var BADSTR: string;
  declare var CANCELLED: string;
  declare var CONNREFUSED: string;
  declare var DESTRUCTION: string;
  declare var EOF: string;
  declare var FILE: string;
  declare var FORMER: string;
  declare var LOADIPHLPAPI: string;
  declare var NODATA: string;
  declare var NOMEM: string;
  declare var NONAME: string;
  declare var NOTFOUND: string;
  declare var NOTIMP: string;
  declare var NOTINITIALIZED: string;
  declare var REFUSED: string;
  declare var SERVFAIL: string;
  declare var TIMEOUT: string;
  declare var ADDRCONFIG: number;
  declare var V4MAPPED: number;

  declare type LookupOptions = {
    family?: number,
    hints?: number,
    verbatim?: boolean,
    all?: boolean
  };

  declare function lookup(
    domain: string,
    options: number | LookupOptions,
    callback: (err: ?Error, address: string, family: number) => void
  ): void;
  declare function lookup(
    domain: string,
    callback: (err: ?Error, address: string, family: number) => void
  ): void;

  declare function resolve(
    domain: string,
    rrtype?: string,
    callback?: (err: ?Error, addresses: Array<any>) => void
  ): void;

  declare function resolve4(
    domain: string,
    callback: (err: ?Error, addresses: Array<any>) => void
  ): void;

  declare function resolve6(
    domain: string,
    callback: (err: ?Error, addresses: Array<any>) => void
  ): void;

  declare function resolveCname(
    domain: string,
    callback: (err: ?Error, addresses: Array<any>) => void
  ): void;

  declare function resolveMx(
    domain: string,
    callback: (err: ?Error, addresses: Array<any>) => void
  ): void;

  declare function resolveNs(
    domain: string,
    callback: (err: ?Error, addresses: Array<any>) => void
  ): void;

  declare function resolveSrv(
    domain: string,
    callback: (err: ?Error, addresses: Array<any>) => void
  ): void;

  declare function resolveTxt(
    domain: string,
    callback: (err: ?Error, addresses: Array<any>) => void
  ): void;

  declare function reverse(
    ip: string,
    callback: (err: ?Error, domains: Array<any>) => void
  ): void;
  declare function timingSafeEqual(
    a: Buffer | $TypedArray | DataView,
    b: Buffer | $TypedArray | DataView
  ): boolean;
}

declare class events$EventEmitter {
  // deprecated
  static listenerCount(emitter: events$EventEmitter, event: string): number;
  static defaultMaxListeners: number;

  addListener(event: string, listener: Function): this;
  emit(event: string, ...args:Array<any>): boolean;
  eventNames(): Array<string>;
  listeners(event: string): Array<Function>;
  listenerCount(event: string): number;
  on(event: string, listener: Function): this;
  once(event: string, listener: Function): this;
  prependListener(event: string, listener: Function): this;
  prependOnceListener(event: string, listener: Function): this;
  removeAllListeners(event?: string): this;
  removeListener(event: string, listener: Function): this;
  off(event: string, listener: Function): this;
  setMaxListeners(n: number): this;
  getMaxListeners(): number;
  rawListeners(event: string): Array<Function>;
}


declare module "events" {
  // TODO: See the comment above the events$EventEmitter declaration
  declare class EventEmitter extends events$EventEmitter {
    static EventEmitter: typeof EventEmitter;
  }

  declare module.exports: typeof EventEmitter;
}

declare class domain$Domain extends events$EventEmitter {
  members: Array<any>;

  add(emitter: events$EventEmitter): void;
  bind(callback: Function): Function;
  dispose(): void;
  enter(): void;
  exit(): void;
  intercept(callback: Function): Function;
  remove(emitter: events$EventEmitter): void;
  run(fn: Function): void;
}

declare module "domain" {
  declare function create(): domain$Domain;
}

declare module "fs" {
  declare class Stats {
    dev: number;
    ino: number;
    mode: number;
    nlink: number;
    uid: number;
    gid: number;
    rdev: number;
    size: number;
    blksize: number;
    blocks: number;
    atimeMs: number;
    mtimeMs: number;
    ctimeMs: number;
    birthtimeMs: number;
    atime: Date;
    mtime: Date;
    ctime: Date;
    birthtime: Date;

    isFile(): boolean;
    isDirectory(): boolean;
    isBlockDevice(): boolean;
    isCharacterDevice(): boolean;
    isSymbolicLink(): boolean;
    isFIFO(): boolean;
    isSocket(): boolean;
  }

  declare class FSWatcher extends events$EventEmitter {
    close(): void
  }

  declare class ReadStream extends stream$Readable {
    close(): void
  }

  declare class WriteStream extends stream$Writable {
    close(): void
  }

  declare function rename(oldPath: string, newPath: string, callback?: (err: ?ErrnoError) => void): void;
  declare function renameSync(oldPath: string, newPath: string): void;
  declare function ftruncate(fd: number, len: number, callback?: (err: ?ErrnoError) => void): void;
  declare function ftruncateSync(fd: number, len: number): void;
  declare function truncate(path: string, len: number, callback?: (err: ?ErrnoError) => void): void;
  declare function truncateSync(path: string, len: number): void;
  declare function chown(path: string, uid: number, gid: number, callback?: (err: ?ErrnoError) => void): void;
  declare function chownSync(path: string, uid: number, gid: number): void;
  declare function fchown(fd: number, uid: number, gid: number, callback?: (err: ?ErrnoError) => void): void;
  declare function fchownSync(fd: number, uid: number, gid: number): void;
  declare function lchown(path: string, uid: number, gid: number, callback?: (err: ?ErrnoError) => void): void;
  declare function lchownSync(path: string, uid: number, gid: number): void;
  declare function chmod(path: string, mode: number | string, callback?: (err: ?ErrnoError) => void): void;
  declare function chmodSync(path: string, mode: number | string): void;
  declare function fchmod(fd: number, mode: number | string, callback?: (err: ?ErrnoError) => void): void;
  declare function fchmodSync(fd: number, mode: number | string): void;
  declare function lchmod(path: string, mode: number | string, callback?: (err: ?ErrnoError) => void): void;
  declare function lchmodSync(path: string, mode: number | string): void;
  declare function stat(path: string, callback?: (err: ?ErrnoError, stats: Stats) => any): void;
  declare function statSync(path: string): Stats;
  declare function fstat(fd: number, callback?: (err: ?ErrnoError, stats: Stats) => any): void;
  declare function fstatSync(fd: number): Stats;
  declare function lstat(path: string, callback?: (err: ?ErrnoError, stats: Stats) => any): void;
  declare function lstatSync(path: string): Stats;
  declare function link(srcpath: string, dstpath: string, callback?: (err: ?ErrnoError) => void): void;
  declare function linkSync(srcpath: string, dstpath: string): void;
  declare function symlink(srcpath: string, dtspath: string, type?: string, callback?: (err: ?ErrnoError) => void): void;
  declare function symlinkSync(srcpath: string, dstpath: string, type: string): void;
  declare function readlink(path: string, callback: (err: ?ErrnoError, linkString: string) => void): void;
  declare function readlinkSync(path: string): string;
  declare function realpath(path: string, cache?: Object, callback?: (err: ?ErrnoError, resolvedPath: string) => void): void;
  declare function realpathSync(path: string, cache?: Object): string;
  declare function unlink(path: string, callback?: (err: ?ErrnoError) => void): void;
  declare function unlinkSync(path: string): void;
  declare function rmdir(path: string, callback?: (err: ?ErrnoError) => void): void;
  declare function rmdirSync(path: string): void;
  declare function mkdir(path: string, mode?: number | { recursive?: boolean, mode?: number }, callback?: (err: ?ErrnoError) => void): void;
  declare function mkdirSync(path: string, mode?: number | { recursive?: boolean, mode?: number }): void;
  declare function mkdtemp(prefix: string, callback: (err: ?ErrnoError, folderPath: string) => void): void;
  declare function mkdtempSync(prefix: string): string;
  declare function readdir(
    path: string,
    options: string | { encoding: string },
    callback: (err: ?ErrnoError, files: Array<string>) => void
  ): void;
  declare function readdir(
    path: string,
    callback: (err: ?ErrnoError, files: Array<string>) => void
  ): void;
  declare function readdirSync(
    path: string,
    options?: string | { encoding: string }
  ): Array<string>;
  declare function close(fd: number, callback: (err: ?ErrnoError) => void): void;
  declare function closeSync(fd: number): void;
  declare function open(
    path: string | Buffer | URL,
    flags: string | number,
    mode: number,
    callback: (err: ?ErrnoError, fd: number) => void
  ): void;
  declare function open(
    path: string | Buffer | URL,
    flags: string | number,
    callback: (err: ?ErrnoError, fd: number) => void
  ): void;
  declare function openSync(path: string | Buffer, flags: string | number, mode?: number): number;
  declare function utimes(path: string, atime: number, mtime: number, callback?: (err: ?ErrnoError) => void): void;
  declare function utimesSync(path: string, atime: number, mtime: number): void;
  declare function futimes(fd: number, atime: number, mtime: number, callback?: (err: ?ErrnoError) => void): void;
  declare function futimesSync(fd: number, atime: number, mtime: number): void;
  declare function fsync(fd: number, callback?: (err: ?ErrnoError) => void): void;
  declare function fsyncSync(fd: number): void;
  declare function write(
    fd: number,
    buffer: Buffer,
    offset: number,
    length: number,
    position: number,
    callback: (err: ?ErrnoError, write: number, buf: Buffer) => void
  ): void;
  declare function write(
    fd: number,
    buffer: Buffer,
    offset: number,
    length: number,
    callback: (err: ?ErrnoError, write: number, buf: Buffer) => void
  ): void;
  declare function write(
    fd: number,
    buffer: Buffer,
    offset: number,
    callback: (err: ?ErrnoError, write: number, buf: Buffer) => void
  ): void;
  declare function write(
    fd: number,
    buffer: Buffer,
    callback: (err: ?ErrnoError, write: number, buf: Buffer) => void
  ): void;
  declare function write(
    fd: number,
    data: string,
    position: number,
    encoding: string,
    callback: (err: ?ErrnoError, write: number, str: string) => void
  ): void;
  declare function write(
    fd: number,
    data: string,
    position: number,
    callback: (err: ?ErrnoError, write: number, str: string) => void
  ): void;
  declare function write(
    fd: number,
    data: string,
    callback: (err: ?ErrnoError, write: number, str: string) => void
  ): void;
  declare function writeSync(
    fd: number,
    buffer: Buffer,
    offset: number,
    length: number,
    position: number,
  ): number;
  declare function writeSync(
    fd: number,
    buffer: Buffer,
    offset: number,
    length: number,
  ): number;
  declare function writeSync(
    fd: number,
    buffer: Buffer,
    offset?: number,
  ): number;
  declare function writeSync(
    fd: number,
    str: string,
    position: number,
    encoding: string,
  ): number;
  declare function writeSync(
    fd: number,
    str: string,
    position?: number,
  ): number;
  declare function read(
    fd: number,
    buffer: Buffer,
    offset: number,
    length: number,
    position: ?number,
    callback: (err: ?ErrnoError, bytesRead: number, buffer: Buffer) => void
  ): void;
  declare function readSync(
    fd: number,
    buffer: Buffer,
    offset: number,
    length: number,
    position: number
  ): number;
  declare function readFile(
    path: string | Buffer | URL | number,
    callback: (err: ?ErrnoError, data: Buffer) => void
  ): void;
  declare function readFile(
    path: string | Buffer | URL | number,
    encoding: string,
    callback: (err: ?ErrnoError, data: string) => void
  ): void;
  declare function readFile(
    path: string | Buffer | URL | number,
    options: { encoding: string; flag?: string },
    callback: (err: ?ErrnoError, data: string) => void
  ): void;
  declare function readFile(
    path: string | Buffer | URL | number,
    options: { flag?: string },
    callback: (err: ?ErrnoError, data: Buffer) => void
  ): void;
  declare function readFileSync(
    path: string | Buffer | URL | number
  ): Buffer;
  declare function readFileSync(
    path: string | Buffer | URL | number,
    encoding: string
  ): string;
  declare function readFileSync(path: string | Buffer | URL | number, options: { encoding: string, flag?: string }): string;
  declare function readFileSync(path: string | Buffer | URL | number, options: { encoding?: void, flag?: string }): Buffer;
  declare function writeFile(
    filename: string | Buffer | number,
    data: Buffer | string,
    options: string | {
      encoding?: ?string,
      mode?: number,
      flag?: string
    },
    callback: (err: ?ErrnoError) => void
  ): void;
  declare function writeFile(
    filename: string | Buffer | number,
    data: Buffer | string,
    callback?: (err: ?ErrnoError) => void
  ): void;
  declare function writeFileSync(
    filename: string,
    data: Buffer | string,
    options?: string | {
      encoding?: ?string,
      mode?: number,
      flag?: string
    }
  ): void;
  declare function appendFile(
    filename: string | Buffer | number,
    data: string | Buffer,
    options: string | {
      encoding?: ?string,
        mode?: number,
        flag?: string
    },
    callback: (err: ?ErrnoError) => void
  ): void;
  declare function appendFile(
    filename: string | Buffer | number,
    data: string | Buffer,
    callback: (err: ?ErrnoError) => void
  ): void;
  declare function appendFileSync(
    filename: string | Buffer | number,
    data: string | Buffer,
    options?: string | {
      encoding?: ?string,
        mode?: number,
        flag?: string
    }
  ): void;
  declare function watchFile(filename: string, options?: Object, listener?: (curr: Stats, prev: Stats) => void): void;
  declare function unwatchFile(filename: string, listener?: (curr: Stats, prev: Stats) => void): void;
  declare function watch(filename: string, options?: Object, listener?: (event: string, filename: string) => void): FSWatcher;
  declare function exists(path: string, callback?: (exists: boolean) => void): void;
  declare function existsSync(path: string): boolean;
  declare function access(path: string, mode?: number, callback?: (err: ?ErrnoError) => void): void;
  declare function accessSync(path: string, mode?: number): void;
  declare function createReadStream(path: string, options?: Object): ReadStream;
  declare function createWriteStream(path: string, options?: Object): WriteStream;
  declare function fdatasync(fd: number, callback: (err: ?ErrnoError) => void): void;
  declare function fdatasyncSync(fd: number): void;
  declare function copyFile(src: string, dest: string, flags?: number, callback: (err: ErrnoError) => void): void;
  declare function copyFileSync(src: string, dest: string, flags?: number): void;

  declare var F_OK: number;
  declare var R_OK: number;
  declare var W_OK: number;
  declare var X_OK: number;
  // new var from node 6.x
  // https://nodejs.org/dist/latest-v6.x/docs/api/fs.html#fs_fs_constants_1
  declare var constants: {
    F_OK: number, // 0
    R_OK: number, // 4
    W_OK: number, // 2
    X_OK: number, // 1
    COPYFILE_EXCL: number, // 1
    COPYFILE_FICLONE: number, // 2
    COPYFILE_FICLONE_FORCE: number, // 4
    O_RDONLY: number, // 0
    O_WRONLY: number, // 1
    O_RDWR: number, // 2
    S_IFMT: number, // 61440
    S_IFREG: number, // 32768
    S_IFDIR: number, // 16384
    S_IFCHR: number, // 8192
    S_IFBLK: number, // 24576
    S_IFIFO: number, // 4096
    S_IFLNK: number, // 40960
    S_IFSOCK: number, // 49152
    O_CREAT: number, // 64
    O_EXCL: number, // 128
    O_NOCTTY: number, // 256
    O_TRUNC: number, // 512
    O_APPEND: number, // 1024
    O_DIRECTORY: number, // 65536
    O_NOATIME: number, // 262144
    O_NOFOLLOW: number, // 131072
    O_SYNC: number, // 1052672
    O_DSYNC: number, // 4096
    O_SYMLINK: number, // 2097152
    O_DIRECT: number, // 16384
    O_NONBLOCK: number, // 2048
    S_IRWXU: number, // 448
    S_IRUSR: number, // 256
    S_IWUSR: number, // 128
    S_IXUSR: number, // 64
    S_IRWXG: number, // 56
    S_IRGRP: number, // 32
    S_IWGRP: number, // 16
    S_IXGRP: number, // 8
    S_IRWXO: number, // 7
    S_IROTH: number, // 4
    S_IWOTH: number, // 2
    S_IXOTH: number, // 1
  };

  declare type BufferEncoding =
    | 'buffer'
    | {
        encoding: 'buffer',
      };
  declare type EncodingOptions = {
    encoding?: string,
  };
  declare type EncodingFlag = EncodingOptions & {
    flag?: string,
  };
  declare type WriteOptions = EncodingFlag & {
    mode?: number,
  };
  declare class FileHandle {
    appendFile(data: string | Buffer, options: WriteOptions | string): Promise<void>;
    chmod(mode: number): Promise<void>;
    chown(uid: number, guid: number): Promise<void>;
    close(): Promise<void>;
    datasync(): Promise<void>;
    fd: number;
    read<T: Buffer | Uint8Array>(
      buffer: T,
      offset: number,
      length: number,
      position: number
    ): Promise<{ bytesRead: number, buffer: T }>;
    readFile(options: EncodingFlag): Promise<Buffer>;
    readFile(options: string): Promise<string>;
    stat(): Promise<Stats>;
    sync(): Promise<void>;
    truncate(len?: number): Promise<void>;
    utimes(atime: number | string | Date, mtime: number | string | Date): Promise<void>;
    write(buffer: Buffer | Uint8Array, offset: number, length: number, position: number): Promise<void>;
    writeFile(data: string | Buffer | Uint8Array, options: WriteOptions | string): Promise<void>;
  }

  declare type FSPromisePath = string | Buffer | URL;
  declare class FSPromise {
    access(path: FSPromisePath, mode?: number): Promise<void>,
    appendFile(path: FSPromisePath | FileHandle, data: string | Buffer, options: WriteOptions | string): Promise<void>,
    chmod(path: FSPromisePath, mode: number): Promise<void>,
    chown(path: FSPromisePath, uid: number, gid: number): Promise<void>,
    copyFile(src: FSPromisePath, dest: FSPromisePath, flags?: number): Promise<void>,
    fchmod(filehandle: FileHandle, mode: number): Promise<void>,
    fchown(filehandle: FileHandle, uid: number, guid: number): Promise<void>,
    fdatasync(filehandle: FileHandle): Promise<void>,
    fstat(filehandle: FileHandle): Promise<Stats>,
    fsync(filehandle: FileHandle): Promise<void>,
    ftruncate(filehandle: FileHandle, len?: number): Promise<void>,
    futimes(filehandle: FileHandle, atime: number | string | Date, mtime: number | string | Date): Promise<void>,
    lchmod(path: FSPromisePath, mode: number): Promise<void>,
    lchown(path: FSPromisePath, uid: number, guid: number): Promise<void>,
    link(existingPath: FSPromisePath, newPath: FSPromisePath): Promise<void>,
    mkdir(path: FSPromisePath, mode?: number): Promise<void>,
    mkdtemp(prefix: string, options: EncodingOptions): Promise<string>,
    open(path: FSPromisePath, flags?: string | number, mode?: number): Promise<FileHandle>,
    read<T: Buffer | Uint8Array>(
      filehandle: FileHandle,
      buffer: T,
      offset: number,
      length: number,
      position?: number
    ): Promise<{ bytesRead: number, buffer: T }>,
    readdir(path: FSPromisePath, options?: string | EncodingOptions): Promise<string[]>,
    readFile(path: FSPromisePath | FileHandle, options: string): Promise<string>,
    readFile(path: FSPromisePath | FileHandle, options?: EncodingFlag): Promise<Buffer>,
    readlink(path: FSPromisePath, options: BufferEncoding): Promise<Buffer>,
    readlink(path: FSPromisePath, options?: string | EncodingOptions): Promise<string>,
    realpath(path: FSPromisePath, options: BufferEncoding): Promise<Buffer>,
    realpath(path: FSPromisePath, options?: string | EncodingOptions): Promise<string>,
    rename(oldPath: FSPromisePath, newPath: FSPromisePath): Promise<void>,
    rmdir(path: FSPromisePath): Promise<void>,
    stat(path: FSPromisePath): Promise<Stats>,
    symlink(target: FSPromisePath, path: FSPromisePath, type?: 'dir' | 'file' | 'junction'): Promise<void>,
    truncate(path: FSPromisePath, len?: number): Promise<void>,
    unlink(path: FSPromisePath): Promise<void>,
    utimes(path: FSPromisePath, atime: number | string | Date, mtime: number | string | Date): Promise<void>,
    write<T: Buffer | Uint8Array>(
      filehandle: FileHandle,
      buffer: T,
      offset: number,
      length: number,
      position?: number
    ): Promise<{ bytesRead: number, buffer: T }>,
    writeFile(
      FSPromisePath | FileHandle,
      data: string | Buffer | Uint8Array,
      options?: string | WriteOptions
    ): Promise<void>,
  }

  declare var promises: FSPromise;
}

type http$agentOptions = {
  keepAlive?: boolean,
  keepAliveMsecs?: number,
  maxSockets?: number,
  maxFreeSockets?: number,
}

declare class http$Agent<+SocketT = net$Socket> {
  constructor(options: http$agentOptions): void;
  destroy(): void;
  freeSockets: {[name: string]: $ReadOnlyArray<SocketT>};
  getName(options: {host: string, port: number, localAddress: string}): string;
  maxFreeSockets: number;
  maxSockets: number;
  requests: {[name: string]: $ReadOnlyArray<http$ClientRequest<SocketT>>};
  sockets: {[name: string]: $ReadOnlyArray<SocketT>};
}

declare class http$IncomingMessage<SocketT = net$Socket> extends stream$Readable {
  headers: Object;
  rawHeaders: Array<string>;
  httpVersion: string;
  method: string;
  trailers: Object;
  setTimeout(msecs: number, callback: Function): void;
  socket: SocketT;
  statusCode: number;
  statusMessage: string;
  url: string;
}

declare class http$ClientRequest<+SocketT = net$Socket> extends stream$Writable {
  abort(): void;
  aborted: boolean;
  +connection: SocketT | null;
  flushHeaders(): void;
  getHeader(name: string): string;
  removeHeader(name: string): void;
  setHeader(name: string, value: string | Array<string>): void;
  setNoDelay(noDelay?: boolean): void;
  setSocketKeepAlive(enable?: boolean, initialDelay?: number): void;
  setTimeout(msecs: number, callback?: Function): void;
  +socket: SocketT | null;
}

declare class http$ServerResponse extends stream$Writable {
  addTrailers(headers: {[key: string] : string}): void;
  finished: boolean;
  getHeader(name: string): string;
  headersSent: boolean;
  removeHeader(name: string): void;
  sendDate: boolean;
  setHeader(name: string, value: string | Array<string>): void;
  setTimeout(msecs: number, callback?: Function): http$ServerResponse;
  statusCode: number;
  statusMessage: string;
  writeContinue(): void;
  writeHead(status: number, statusMessage?: string, headers?: {[key: string] : string}): void;
  writeHead(status: number, headers?: {[key: string] : string}): void;
}

declare class http$Server extends net$Server {
  listen(port?: number, hostname?: string, backlog?: number, callback?: Function): this;
  // The following signatures are added to allow omitting intermediate arguments
  listen(port?: number, backlog?: number, callback?: Function): this;
  listen(port?: number, hostname?: string, callback?: Function): this;
  listen(port?: number, callback?: Function): this;
  listen(path: string, callback?: Function): this;
  listen(handle: {
    port?: number,
    host?: string,
    path?: string,
    backlog?: number,
    exclusive?: boolean,
    readableAll?: boolean,
    writableAll?: boolean,
    ipv6Only?: boolean,
  }, callback?: Function): this;
  listening: boolean;
  close(callback?: (error: ?Error) => mixed): this;
  maxHeadersCount: number;
  keepAliveTimeout: number;
  setTimeout(msecs: number, callback: Function): this;
  timeout: number;
}

declare class https$Server extends tls$Server {
  listen(port?: number, hostname?: string, backlog?: number, callback?: Function): this;
  // The following signatures are added to allow omitting intermediate arguments
  listen(port?: number, backlog?: number, callback?: Function): this;
  listen(port?: number, hostname?: string, callback?: Function): this;
  listen(port?: number, callback?: Function): this;
  listen(path: string, callback?: Function): this;
  listen(handle: {
    port?: number,
    host?: string,
    path?: string,
    backlog?: number,
    exclusive?: boolean,
    readableAll?: boolean,
    writableAll?: boolean,
    ipv6Only?: boolean,
  }, callback?: Function): this;
  close(callback?: (error: ?Error) => mixed): this;
  keepAliveTimeout: number;
  setTimeout(msecs: number, callback: Function): this;
  timeout: number;
}

declare module "http" {
  declare class Server extends http$Server {}
  declare class Agent extends http$Agent<net$Socket> {
    createConnection(options: net$connectOptions, callback?: Function): net$Socket;
  }
  declare class ClientRequest extends http$ClientRequest<net$Socket> {}
  declare class IncomingMessage extends http$IncomingMessage<net$Socket> {}
  declare class ServerResponse extends http$ServerResponse {}

  declare function createServer(
    requestListener?: (request: IncomingMessage, response: ServerResponse) => void
  ): Server;
  declare function request(
    options: Object | string,
    callback?: (response: IncomingMessage) => void
  ): ClientRequest;
  declare function get(
    options: Object | string,
    callback?: (response: IncomingMessage) => void
  ): ClientRequest;

  declare var METHODS: Array<string>;
  declare var STATUS_CODES: {[key: number]: string};
  declare var globalAgent: Agent;
}

declare module "https" {
  declare class Server extends https$Server {}
  declare class Agent extends http$Agent<tls$TLSSocket> {
    createConnection(port: ?number, host: ?string, options: tls$connectOptions): tls$TLSSocket;
    createConnection(port: ?number, options: tls$connectOptions): tls$TLSSocket;
    createConnection(options: tls$connectOptions): tls$TLSSocket;
  }

  declare class ClientRequest extends http$ClientRequest<tls$TLSSocket> {}
  declare class IncomingMessage extends http$IncomingMessage<tls$TLSSocket> {}
  declare class ServerResponse extends http$ServerResponse {}

  declare function createServer(
    options: Object,
    requestListener?: (request: IncomingMessage, response: ServerResponse) => void
  ): Server;
  declare function request(
    options: Object | string,
    callback?: (response: IncomingMessage) => void
  ): ClientRequest;
  declare function get(
    options: Object | string,
    callback?: (response: IncomingMessage) => void
  ): ClientRequest;

  declare var globalAgent: Agent;
}

declare class net$Socket extends stream$Duplex {
  constructor(options?: Object): void;
  address(): net$Socket$address;
  bufferSize: number;
  bytesRead: number;
  bytesWritten: number;
  connect(options: Object, connectListener?: Function): void;
  destroyed: boolean;
  end(
    chunkOrEncodingOrCallback?: Buffer | Uint8Array | string | (data: any) => void,
    encodingOrCallback?: string | (data: any) => void,
    callback?: (data: any) => void
  ): this;
  localAddress: string;
  localPort: number;
  pause(): this;
  ref(): this;
  remoteAddress: string | void;
  remoteFamily: string;
  remotePort: number;
  resume(): this;
  setEncoding(encoding?: string): this;
  setKeepAlive(enable?: boolean, initialDelay?: number): this;
  setNoDelay(noDelay?: boolean): this;
  setTimeout(timeout: number, callback?: Function): this;
  unref(): this;
  write(
    chunk: Buffer | Uint8Array | string,
    encodingOrCallback?: string | (data: any) => void,
    callback?: (data: any) => void
  ): boolean;
}

declare class net$Server extends events$EventEmitter {
  listen(port?: number, hostname?: string, backlog?: number, callback?: Function): net$Server;
  listen(path: string, callback?: Function): net$Server;
  listen(handle: Object, callback?: Function): net$Server;
  listening: boolean;
  close(callback?: Function): net$Server;
  address(): net$Socket$address;
  connections: number;
  maxConnections: number;
  getConnections(callback: Function): void;
  ref():  net$Server;
  unref():  net$Server;
}


type net$connectOptions = {
  port?: number,
  host?: string,
  localAddress?: string,
  localPort?: number,
  family?: number,
  lookup?: (
    domain: string,
    options?: ?number | ?Object,
    callback?: (err: ?Error, address: string, family: number) => void
  ) => mixed,
  path?: string,
};

declare module "net" {

  declare class Server extends net$Server {}
  declare class Socket extends net$Socket {}

  declare function isIP(input: string): number;
  declare function isIPv4(input: string): boolean;
  declare function isIPv6(input: string): boolean;


  declare type connectionListener = (socket: Socket) => any;
  declare function createServer(
    options?: {
      allowHalfOpen?: boolean,
      pauseOnConnect?: boolean,
    } | connectionListener,
    connectionListener?: connectionListener,
  ): Server;

  declare type connectListener = () => any;
  declare function connect(
    pathOrPortOrOptions:  string | number | net$connectOptions,
    hostOrConnectListener?: string | connectListener,
    connectListener?: connectListener,
  ): Socket;

  declare function createConnection(
    pathOrPortOrOptions:  string | number | net$connectOptions,
    hostOrConnectListener?: string | connectListener,
    connectListener?: connectListener,
  ): Socket;
}

type os$CPU = {
  model: string,
  speed: number,
  times: {
    idle: number,
    irq: number,
    nice: number,
    sys: number,
    user: number,
  }
};

type os$NetIFAddr = {
  address: string,
  family: string,
  internal: boolean,
  mac: string,
  netmask: string
};

type os$UserInfo$buffer = {
  uid: number,
  gid: number,
  username: Buffer,
  homedir: Buffer,
  shell: ?Buffer,
};

type os$UserInfo$string = {
  uid: number,
  gid: number,
  username: string,
  homedir: string,
  shell: ?string,
};

declare module "os" {
  declare function arch(): "x64"|"arm"|"ia32";
  declare function cpus(): Array<os$CPU>;
  declare function endianness(): "BE"|"LE";
  declare function freemem(): number;
  declare function homedir(): string;
  declare function hostname(): string;
  declare function loadavg(): [number, number, number];
  declare function networkInterfaces(): {[ifName: string]: Array<os$NetIFAddr>};
  declare function platform(): string;
  declare function release(): string;
  declare function tmpdir(): string;
  declare function totalmem(): number;
  declare function type(): string;
  declare function uptime(): number;
  declare function userInfo(options: {encoding: 'buffer'}): os$UserInfo$buffer;
  declare function userInfo(options?: {encoding: 'utf8'}): os$UserInfo$string;
  declare var EOL: string;
}

declare module "path" {
  declare function normalize(path: string): string;
  declare function join(...parts: Array<string>): string;
  declare function resolve(...parts: Array<string>): string;
  declare function isAbsolute(path: string): boolean;
  declare function relative(from: string, to: string): string;
  declare function dirname(path: string): string;
  declare function basename(path: string, ext?: string): string;
  declare function extname(path: string): string;
  declare var sep: string;
  declare var delimiter: string;
  declare function parse(pathString: string): {
    root: string;
    dir: string;
    base: string;
    ext: string;
    name: string;
  };
  declare function format(pathObject: {
    root?: string;
    dir?: string;
    base?: string;
    ext?: string;
    name?: string;
  }): string;
  declare var posix: any;
  declare var win32: any;
}

declare module "punycode" {
  declare function decode(string: string): string;
  declare function encode(string: string): string;
  declare function toASCII(domain: string): string;
  declare function toUnicode(domain: string): string;
  declare var ucs2: {
    decode: (str: string) => Array<number>,
    encode: (codePoints: Array<number>) => string
  };
  declare var version : string;
}

declare module "querystring" {
  declare function stringify(
    obj: Object,
    separator?: string,
    equal?: string,
    options?: {
      encodeURIComponent?: (str: string) => string;
    }
  ): string;
  declare function parse(
    str: string,
    separator: ?string,
    equal: ?string,
    options?: {
      decodeURIComponent?: (str: string) => string;
      maxKeys?: number;
    }
  ): any;
  declare function escape(str: string): string;
  declare function unescape(str: string, decodeSpaces?: boolean): string;
}

type readline$InterfaceCompleter =
  | (line: string) => [Array<string>, string]
  | (line: string, (err: ?Error, data: [Array<string>, string]) => void) => void;

declare class readline$Interface extends events$EventEmitter {
  close(): void;
  pause(): void;
  prompt(preserveCursor?: boolean): void;
  question(query: string, callback: (answer: string) => void): void;
  resume(): void;
  setPrompt(prompt: string): void;
  write(val: string | void | null, key?: {
    name: string,
    ctrl?: boolean,
    shift?: boolean,
    meta?: boolean
  }): void;
}

declare module "readline" {
  declare var Interface : typeof readline$Interface;
  declare function clearLine(stream: stream$Stream, dir: -1 | 1 | 0): void;
  declare function clearScreenDown(stream: stream$Stream): void;
  declare function createInterface(opts: {
    input: stream$Readable,
    output?: ?stream$Stream,
    completer?: readline$InterfaceCompleter,
    terminal?: boolean,
    historySize?: number,
    prompt?: string,
    crlfDelay?: number,
    removeHistoryDuplicates?: boolean,
    escapeCodeTimeout?: number,
  }): readline$Interface;
  declare function cursorTo(stream: stream$Stream, x?: number, y?: number): void;
  declare function moveCursor(stream: stream$Stream, dx: number, dy: number): void;
  declare function emitKeypressEvents(stream: stream$Stream, readlineInterface?: readline$Interface): void;
}

declare class stream$Stream extends events$EventEmitter {}

type readableStreamOptions = {
  highWaterMark?: number,
  encoding?: string,
  objectMode?: boolean,
  read?: (size?: number) => void,
  destroy?: (error: ?Error, callback: (error?: Error) => void) => void,
  autoDestroy?: boolean,
};
declare class stream$Readable extends stream$Stream {
  constructor(options?: readableStreamOptions): void;
  destroy(error?: Error): this;
  isPaused(): boolean;
  pause(): this;
  pipe<T: stream$Writable>(dest: T, options?: {end? : boolean}): T;
  read(size?: number): ?(string | Buffer);
  readable: boolean;
  readableHighWaterMark: number;
  readableLength: number;
  resume(): this;
  setEncoding(encoding: string): this;
  unpipe(dest?: stream$Writable): this;
  unshift(chunk: Buffer | Uint8Array | string): void;
  wrap(oldReadable: stream$Stream): this;
  _read(size?: number): void;
  _destroy(error: ?Error, callback: (error?: Error) => void): void;
  push(chunk: ?(Buffer | Uint8Array | string), encoding? : string): boolean;
}

type writableStreamOptions = {
  highWaterMark?: number,
  decodeStrings?: boolean,
  defaultEncoding?: string,
  objectMode?: boolean,
  emitClose?: boolean,
  write?: (chunk: Buffer | string, encoding: string, callback: (error?: Error) => void) => void,
  writev?: (chunks: Array<{chunk: Buffer | string, encoding: string}>, callback: (error?: Error) => void) => void,
  destroy?: (error: ?Error, callback: (error?: Error) => void) => void;
  final?: (callback: (error?: Error) => void) => void;
  autoDestroy?: boolean,
};
declare class stream$Writable extends stream$Stream {
  constructor(options?: writableStreamOptions): void;
  cork(): void;
  destroy(error?: Error): this;
  end(callback?: () => void): this;
  end(chunk?: string | Buffer | Uint8Array, callback?: () => void): this;
  end(chunk?: string | Buffer | Uint8Array, encoding?: string, callback?: () => void): this;
  setDefaultEncoding(encoding: string): this;
  uncork(): void;
  writable: boolean;
  writableHighWaterMark: number;
  writableLength: number;
  write(chunk: string | Buffer | Uint8Array, callback?: (error?: Error) => void): boolean;
  write(chunk: string | Buffer | Uint8Array, encoding?: string,  callback?: (error?: Error) => void): boolean;
  _write(chunk: Buffer | string, encoding: string, callback: (error?: Error) => void): void;
  _writev(chunks: Array<{chunk: Buffer | string, encoding: string}>, callback: (error?: Error) => void): void;
  _destroy(error: ?Error, callback: (error?: Error) => void): void;
  _final(callback: (error?: Error) => void): void;
}

//According to the NodeJS docs:
//"Since JavaScript doesn't have multiple prototypal inheritance, this class
//prototypally inherits from Readable, and then parasitically from Writable."
//Source: <https://nodejs.org/api/stream.html#stream_class_stream_duplex_1
type duplexStreamOptions = writableStreamOptions & readableStreamOptions & {
  allowHalfOpen?: boolean,
  readableObjectMode?: boolean,
  writableObjectMode?: boolean,
  readableHighWaterMark?: number,
  writableHighWaterMark?: number,
};
declare class stream$Duplex extends stream$Readable mixins stream$Writable {
  constructor(options?: duplexStreamOptions): void;
}
type transformStreamOptions = duplexStreamOptions & {
  flush?: (callback: (error: ?Error, data: ?(Buffer | string)) => void) => void,
  transform?: (
    chunk: Buffer | string,
    encoding: string,
    callback: (error: ?Error, data: ?(Buffer | string)) => void,
  ) => void,
};
declare class stream$Transform extends stream$Duplex {
  constructor(options?: transformStreamOptions): void;
  _flush(callback: (error: ?Error, data: ?(Buffer | string)) => void): void;
  _transform(
    chunk: Buffer | string,
    encoding: string,
    callback: (error: ?Error, data: ?(Buffer | string)) => void
  ): void;
}
declare class stream$PassThrough extends stream$Transform {}

declare module "stream" {
  declare var Stream : typeof stream$Stream
  declare var Readable : typeof stream$Readable
  declare var Writable : typeof stream$Writable
  declare var Duplex : typeof stream$Duplex
  declare var Transform : typeof stream$Transform
  declare var PassThrough : typeof stream$PassThrough
  declare function finished(
    stream: stream$Stream,
    callback: (error?: Error) => void,
  ): () => void;
  declare function finished(
    stream: stream$Stream,
    options: ?{error?: boolean, readable?: boolean, writable?: boolean},
    callback: (error?: Error) => void,
  ): () => void;
  declare function pipeline<T: stream$Writable>(
    s1: stream$Readable,
    last: T,
    cb: (error?: Error) => void,
  ): T;
  declare function pipeline<T: stream$Writable>(
    s1: stream$Readable,
    s2: stream$Duplex,
    last: T,
    cb: (error?: Error) => void,
  ): T;
  declare function pipeline<T: stream$Writable>(
    s1: stream$Readable,
    s2: stream$Duplex,
    s3: stream$Duplex,
    last: T,
    cb: (error?: Error) => void,
  ): T;
  declare function pipeline<T: stream$Writable>(
    s1: stream$Readable,
    s2: stream$Duplex,
    s3: stream$Duplex,
    s4: stream$Duplex,
    last: T,
    cb: (error?: Error) => void,
  ): T;
  declare function pipeline<T: stream$Writable>(
    s1: stream$Readable,
    s2: stream$Duplex,
    s3: stream$Duplex,
    s4: stream$Duplex,
    s5: stream$Duplex,
    last: T,
    cb: (error?: Error) => void,
  ): T;
  declare function pipeline<T: stream$Writable>(
    s1: stream$Readable,
    s2: stream$Duplex,
    s3: stream$Duplex,
    s4: stream$Duplex,
    s5: stream$Duplex,
    s6: stream$Duplex,
    last: T,
    cb: (error?: Error) => void,
  ): T;
  declare function pipeline(
    streams: Array<stream$Stream>,
    cb: (error?: Error) => void,
  ): stream$Stream;
}

declare class tty$ReadStream extends net$Socket {
  constructor(fd: number, options?: Object): void;
  isRaw : boolean;
  setRawMode(mode : boolean) : void;
  isTTY : true
}
declare class tty$WriteStream extends net$Socket {
  constructor(fd: number) : void;
  columns : number;
  rows : number;
  isTTY : true
}

declare module "tty" {
  declare function isatty(fd : number) : boolean;
  declare function setRawMode(mode : boolean) : void;
  declare var ReadStream : typeof tty$ReadStream
  declare var WriteStream : typeof tty$WriteStream
}

declare class string_decoder$StringDecoder {
  constructor(encoding?: 'utf8' | 'ucs2' | 'utf16le' | 'base64'): void;
  end(): string;
  write(buffer: Buffer): string;
}

declare module "string_decoder" {
  declare var StringDecoder : typeof string_decoder$StringDecoder;
}

type tls$connectOptions = {
  port?: number,
  host?: string,
  socket?: net$Socket,
  rejectUnauthorized?: boolean,
  path?: string,
  lookup?: (
    domain: string,
    options?: ?number | ?Object,
    callback?: (err: ?Error, address: string, family: number) => void
  ) => mixed,
  requestOCSP?: boolean,
};

declare class tls$TLSSocket extends net$Socket {
  constructor(socket: net$Socket, options?: Object): void;
  authorized: boolean;
  authorizationError: string | null;
  encrypted: true;
  getCipher(): { name: string, version: string } | null;
  getEphemeralKeyInfo(): { type: 'DH', size: number } | { type: 'EDHC', name: string, size: number } | null;
  getPeerCertificate(detailed?: boolean): Object | null;
  getSession(): ?Buffer;
  getTLSTicket(): Buffer | void;
  renegotiate(options: Object, callback: Function): boolean | void;
  setMaxSendFragment(size: number): boolean;
}

declare class tls$Server extends net$Server {
  listen(port?: number, hostname?: string, backlog?: number, callback?: Function): tls$Server;
  listen(path: string, callback?: Function): tls$Server;
  listen(handle: Object, callback?: Function): tls$Server;
  close(callback?: Function): tls$Server;
  addContext(hostname: string, context: Object): void;
  getTicketKeys(): Buffer;
  setTicketKeys(keys: Buffer): void;
}

declare module "tls" {
  declare var CLIENT_RENEG_LIMIT: number;
  declare var CLIENT_RENEG_WINDOW: number;
  declare var SLAB_BUFFER_SIZE: number;
  declare var DEFAULT_CIPHERS: string;
  declare var DEFAULT_ECDH_CURVE: string;
  declare function getCiphers(): Array<string>;
  declare function convertNPNProtocols(NPNProtocols: Array<string>, out: Object): void;
  declare function checkServerIdentity(servername: string, cert: string): Error | void;
  declare function parseCertString(s: string): Object;
  declare function createSecureContext(details: Object): Object;
  declare var SecureContext: Object;
  declare var TLSSocket: typeof tls$TLSSocket;
  declare var Server: typeof tls$Server;
  declare function createServer(options: Object, secureConnectionListener?: Function): tls$Server;
  declare function connect(options: tls$connectOptions, callback?: Function): tls$TLSSocket;
  declare function connect(port: number, host?: string, options?: tls$connectOptions, callback?: Function): tls$TLSSocket;
  declare function createSecurePair(context?: Object, isServer?: boolean, requestCert?: boolean, rejectUnauthorized?: boolean, options?: Object): Object;
}

type url$urlObject = {
  +href?: string;
  +protocol?: string;
  +slashes?: boolean;
  +auth?: string;
  +hostname?: string;
  +port?: string | number;
  +host?: string;
  +pathname?: string;
  +search?: string;
  +query?: Object;
  +hash?: string;
};

declare module "url" {
  declare function parse(
    urlStr: string,
    parseQueryString?: boolean,
    slashesDenoteHost?: boolean
  ): {
    protocol?: string;
    slashes?: boolean;
    auth?: string;
    host?: string;
    port?: string;
    hostname?: string;
    hash?: string;
    search?: string;
    query?: any; // null | string | Object
    pathname?: string;
    path?: string;
    href: string;
  };
  declare function format(urlObj: url$urlObject): string;
  declare function resolve(from: string, to: string): string;
  declare function domainToASCII(domain: string): string;
  declare function domainToUnicode(domain: string): string;
  declare function pathToFileURL(path: string): url$urlObject;
  declare function fileURLToPath(path: url$urlObject | string): url$urlObject;
  declare class URLSearchParams {
    constructor(init?: string | Array<[string, string]> | {[string]: string} ): void;
    append(name: string, value: string): void;
    delete(name: string): void;
    entries(): Iterator<[string, string]>;
    forEach(fn: (value: string, name: string, searchParams: URLSearchParams) => void, thisArg?: any): void;
    get(name: string): string | null;
    getAll(name: string): string[];
    has(name: string): boolean;
    keys(): Iterator<string>;
    set(name: string, value: string): void;
    sort(): void;
    toString(): string;
    values(): Iterator<string>;
    @@iterator(): Iterator<[string, string]>;
  }
  declare class URL {
    constructor(input: string, base?: string | URL): void;
    hash: string;
    host: string;
    hostname: string;
    href: string;
    origin: string;
    password: string;
    pathname: string;
    port: string;
    protocol: string;
    search: string;
    +searchParams: URLSearchParams;
    username: string;
    toString(): string;
    toJSON(): string;
  }
}

type util$InspectOptions = {
  showHidden?: boolean;
  depth?: ?number;
  colors?: boolean;
  customInspect?: boolean;
};

declare module "util" {
  declare function debuglog(section: string): (data: any, ...args: any) => void;
  declare function format(format: string, ...placeholders: any): string;
  declare function log(string: string): void;
  declare function inspect(object: any, options?: util$InspectOptions): string;
  declare function isArray(object: any): boolean;
  declare function isRegExp(object: any): boolean;
  declare function isDate(object: any): boolean;
  declare function isError(object: any): boolean;
  declare function inherits(constructor: Function, superConstructor: Function): void;
  declare function deprecate(f: Function, string: string): Function;
  declare function promisify(f: Function): Function;
  declare function callbackify(f: Function): Function;
}

type vm$ScriptOptions = {
  cachedData?: Buffer,
  columnOffset?: number,
  displayErrors?: boolean,
  filename?: string,
  lineOffset?: number,
  produceCachedData?: boolean,
  timeout?: number,
};

declare class vm$Script {
  constructor(code: string, options: Object): void;
  cachedData: ?Buffer;
  cachedDataRejected: ?boolean;
  cachedDataProduced: ?boolean;
  runInContext(contextifiedSandbox: vm$Context, options?: vm$ScriptOptions): any;
  runInNewContext(sandbox?: Object, options?: vm$ScriptOptions): any;
  runInThisContext(options?: vm$ScriptOptions): any;
}

declare class vm$Context {}

declare module "vm" {
  declare var Script : typeof vm$Script
  declare function createContext(sandbox?: Object): vm$Context;
  declare function isContext(sandbox: any): boolean;
  declare function runInContext(code: string, contextifiedSandbox: vm$Context, options?: vm$ScriptOptions): any;
  declare function runInDebugContext(code: string): any;
  declare function runInNewContext(code: string, sandbox?: Object, options?: vm$ScriptOptions): any;
  declare function runInThisContext(code: string, options?: vm$ScriptOptions): any;
}

type zlib$options = {
  flush?: number;
  chunkSize?: number;
  windowBits?: number;
  level?: number;
  memLevel?: number;
  strategy?: number;
  dictionary?: Buffer;
};

type zlib$syncFn = (
  buffer: string | Buffer,
  options?: zlib$options
) => Buffer;

type zlib$asyncFn = (
  buffer: string | Buffer,
  options?: zlib$options,
  callback?: ((error: ?Error, result: any) => void)
) => void;

// Accessing the constants directly from the module is currently still
// possible but should be considered deprecated.
// ref: https://github.com/nodejs/node/blob/master/doc/api/zlib.md
declare module "zlib" {
  declare var Z_NO_FLUSH: number;
  declare var Z_PARTIAL_FLUSH: number;
  declare var Z_SYNC_FLUSH: number;
  declare var Z_FULL_FLUSH: number;
  declare var Z_FINISH: number;
  declare var Z_BLOCK: number;
  declare var Z_TREES: number;
  declare var Z_OK: number;
  declare var Z_STREAM_END: number;
  declare var Z_NEED_DICT: number;
  declare var Z_ERRNO: number;
  declare var Z_STREAM_ERROR: number;
  declare var Z_DATA_ERROR: number;
  declare var Z_MEM_ERROR: number;
  declare var Z_BUF_ERROR: number;
  declare var Z_VERSION_ERROR: number;
  declare var Z_NO_COMPRESSION: number;
  declare var Z_BEST_SPEED: number;
  declare var Z_BEST_COMPRESSION: number;
  declare var Z_DEFAULT_COMPRESSION: number;
  declare var Z_FILTERED: number;
  declare var Z_HUFFMAN_ONLY: number;
  declare var Z_RLE: number;
  declare var Z_FIXED: number;
  declare var Z_DEFAULT_STRATEGY: number;
  declare var Z_BINARY: number;
  declare var Z_TEXT: number;
  declare var Z_ASCII: number;
  declare var Z_UNKNOWN: number;
  declare var Z_DEFLATED: number;
  declare var Z_NULL: number;
  declare var Z_DEFAULT_CHUNK: number;
  declare var Z_DEFAULT_LEVEL: number;
  declare var Z_DEFAULT_MEMLEVEL: number;
  declare var Z_DEFAULT_WINDOWBITS: number;
  declare var Z_MAX_CHUNK: number;
  declare var Z_MAX_LEVEL: number;
  declare var Z_MAX_MEMLEVEL: number;
  declare var Z_MAX_WINDOWBITS: number;
  declare var Z_MIN_CHUNK: number;
  declare var Z_MIN_LEVEL: number;
  declare var Z_MIN_MEMLEVEL: number;
  declare var Z_MIN_WINDOWBITS: number;
  declare var constants: {
    Z_NO_FLUSH: number;
    Z_PARTIAL_FLUSH: number;
    Z_SYNC_FLUSH: number;
    Z_FULL_FLUSH: number;
    Z_FINISH: number;
    Z_BLOCK: number;
    Z_TREES: number;
    Z_OK: number;
    Z_STREAM_END: number;
    Z_NEED_DICT: number;
    Z_ERRNO: number;
    Z_STREAM_ERROR: number;
    Z_DATA_ERROR: number;
    Z_MEM_ERROR: number;
    Z_BUF_ERROR: number;
    Z_VERSION_ERROR: number;
    Z_NO_COMPRESSION: number;
    Z_BEST_SPEED: number;
    Z_BEST_COMPRESSION: number;
    Z_DEFAULT_COMPRESSION: number;
    Z_FILTERED: number;
    Z_HUFFMAN_ONLY: number;
    Z_RLE: number;
    Z_FIXED: number;
    Z_DEFAULT_STRATEGY: number;
    Z_BINARY: number;
    Z_TEXT: number;
    Z_ASCII: number;
    Z_UNKNOWN: number;
    Z_DEFLATED: number;
    Z_NULL: number;
    Z_DEFAULT_CHUNK: number;
    Z_DEFAULT_LEVEL: number;
    Z_DEFAULT_MEMLEVEL: number;
    Z_DEFAULT_WINDOWBITS: number;
    Z_MAX_CHUNK: number;
    Z_MAX_LEVEL: number;
    Z_MAX_MEMLEVEL: number;
    Z_MAX_WINDOWBITS: number;
    Z_MIN_CHUNK: number;
    Z_MIN_LEVEL: number;
    Z_MIN_MEMLEVEL: number;
    Z_MIN_WINDOWBITS: number;
  };
  declare var codes: {
    Z_OK: number,
    Z_STREAM_END: number,
    Z_NEED_DICT: number,
    Z_ERRNO: number,
    Z_STREAM_ERROR: number,
    Z_DATA_ERROR: number,
    Z_MEM_ERROR: number,
    Z_BUF_ERROR: number,
    Z_VERSION_ERROR: number
  };
  declare class Zlib extends stream$Duplex {
    // TODO
  }
  declare class Deflate extends Zlib {}
  declare class Inflate extends Zlib {}
  declare class Gzip extends Zlib {}
  declare class Gunzip extends Zlib {}
  declare class DeflateRaw extends Zlib {}
  declare class InflateRaw extends Zlib {}
  declare class Unzip extends Zlib {}
  declare function createDeflate(options?: zlib$options): Deflate;
  declare function createInflate(options?: zlib$options): Inflate;
  declare function createDeflateRaw(options?: zlib$options): DeflateRaw;
  declare function createInflateRaw(options?: zlib$options): InflateRaw;
  declare function createGzip(options?: zlib$options): Gzip;
  declare function createGunzip(options?: zlib$options): Gunzip;
  declare function createUnzip(options?: zlib$options): Unzip;
  declare var deflate: zlib$asyncFn;
  declare var deflateSync: zlib$syncFn;
  declare var gzip: zlib$asyncFn;
  declare var gzipSync: zlib$syncFn;
  declare var deflateRaw: zlib$asyncFn;
  declare var deflateRawSync: zlib$syncFn;
  declare var unzip: zlib$asyncFn;
  declare var unzipSync: zlib$syncFn;
  declare var inflate: zlib$asyncFn;
  declare var inflateSync: zlib$syncFn;
  declare var gunzip: zlib$asyncFn;
  declare var gunzipSync: zlib$syncFn;
  declare var inflateRaw: zlib$asyncFn;
  declare var inflateRawSync: zlib$syncFn;
}

declare module "assert" {
  declare class AssertionError extends Error {}
  declare module.exports: {
    (value: any, message?: string): void;
    ok(value: any, message?: string): void;
    fail(message?: string | Error): void;
    // deprecated since v10.15
    fail(actual: any, expected: any, message: string, operator: string): void;
    equal(actual: any, expected: any, message?: string): void;
    notEqual(actual: any, expected: any, message?: string): void;
    deepEqual(actual: any, expected: any, message?: string): void;
    notDeepEqual(actual: any, expected: any, message?: string): void;
    strictEqual(actual: any, expected: any, message?: string): void;
    notStrictEqual(actual: any, expected: any, message?: string): void;
    deepStrictEqual(actual: any, expected: any, message?: string): void;
    notDeepStrictEqual(actual: any, expected: any, message?: string): void;
    throws(
      block: Function,
      error?: Function | RegExp | (err: any) => boolean,
      message?: string
    ): void;
    doesNotThrow(block: Function, message?: string): void;
    ifError(value: any): void;
    AssertionError: typeof AssertionError;
  }
}

type HeapStatistics = {
  total_heap_size: number,
  total_heap_size_executable: number,
  total_physical_size: number,
  total_available_size: number,
  used_heap_size: number,
  heap_size_limit: number,
  malloced_memory: number,
  peak_malloced_memory: number,
  does_zap_garbage: number
}

type HeapSpaceStatistics = {
  space_name: string,
  space_size: number,
  space_used_size: number,
  space_available_size: number,
  physical_space_size: number
}

declare module "v8" {
  declare function getHeapStatistics() : HeapStatistics;
  declare function getHeapSpaceStatistics() : Array<HeapSpaceStatistics>
  declare function setFlagsFromString(flags: string) : void;
}

type repl$DefineCommandOptions =
  | (...args: Array<any>) => void
  | { action: (...args: Array<any>) => void, help?: string };

declare class $SymbolReplModeMagic mixins Symbol {}
declare class $SymbolReplModeSloppy mixins Symbol {}
declare class $SymbolReplModeStrict mixins Symbol {}

declare module 'repl' {
  declare var REPL_MODE_MAGIC: $SymbolReplModeMagic;
  declare var REPL_MODE_SLOPPY: $SymbolReplModeSloppy;
  declare var REPL_MODE_STRICT: $SymbolReplModeStrict;

  declare class REPLServer extends readline$Interface {
    context: vm$Context;
    defineCommand(command: string, options: repl$DefineCommandOptions): void;
    displayPrompt(preserveCursor?: boolean): void;
  }

  declare function start(prompt: string): REPLServer;
  declare function start(options: {
    prompt?: string;
    input?: stream$Readable;
    output?: stream$Writable;
    terminal?: boolean,
    eval?: Function;
    useColors?: boolean;
    useGlobal?: boolean;
    ignoreUndefined?: boolean;
    writer?: (object: any, options?: util$InspectOptions) => string;
    completer?: readline$InterfaceCompleter;
    replMode?: $SymbolReplModeMagic | $SymbolReplModeSloppy | $SymbolReplModeStrict;
    breakEvalOnSigint?: boolean;
  }): REPLServer;

  declare class Recoverable extends SyntaxError {
    constructor(err: Error): Recoverable;
  }
}

/* globals: https://nodejs.org/api/globals.html */

type process$CPUUsage = {
  user: number,
  system: number
}

declare class Process extends events$EventEmitter {
  abort() : void;
  arch : string;
  argv : Array<string>;
  chdir(directory : string) : void;
  config : Object;
  connected : boolean;
  cpuUsage(previousValue?: process$CPUUsage) : process$CPUUsage;
  cwd() : string;
  disconnect? : () => void;
  domain? : domain$Domain;
  env : { [key: string] : ?string };
  emitWarning(warning: string | Error): void;
  emitWarning(warning: string, typeOrCtor: string | (...empty) => mixed): void;
  emitWarning(warning: string, type: string, codeOrCtor: string | (...empty) => mixed): void;
  emitWarning(
    warning: string,
    type: string,
    code: string,
    ctor?: (...empty) => mixed
  ): void;
  execArgv : Array<string>;
  execPath : string;
  exit(code? : number) : void;
  exitCode? : number;
  getegid? : () => number;
  geteuid? : () => number;
  getgid? : () => number;
  getgroups? : () => Array<number>;
  getuid? : () => number;
  hrtime(time?: [ number, number ]) : [ number, number ];
  initgroups? : (user : number | string, extra_group : number | string) => void;
  kill(pid : number, signal? : string | number) : void;
  mainModule : Object;
  memoryUsage() : {
    rss : number;
    heapTotal : number;
    heapUsed : number;
    external : number;
  };
  nextTick: <T>(cb: (...T) => mixed, ...T) => void;
  pid : number;
  platform : string;
  release : {
    name : string;
    lts? : string;
    sourceUrl : string;
    headersUrl : string;
    libUrl : string;
  };
  send? : (message : any,
           sendHandleOrCallback? : net$Socket | net$Server | Function,
           callback? : Function) => void;
  setegid? : (id : number | string) => void;
  seteuid? : (id : number | string) => void;
  setgid? : (id : number | string) => void;
  setgroups? : <Group: string | number>(groups : Array<Group>) => void;
  setuid? : (id : number | string) => void;
  stderr : stream$Writable | tty$WriteStream;
  stdin : stream$Readable | tty$ReadStream;
  stdout : stream$Writable | tty$WriteStream;
  title : string;
  umask(mask? : number) : number;
  uptime() : number;
  version : string;
  versions : {
    node : string;
    v8 : string;
    [key: string] : ?string;
  };
}
declare var process: Process;

declare var __filename: string;
declare var __dirname: string;

declare function setImmediate(callback: ((...args: Array<any>) => mixed), ...args: Array<any>): Object;
declare function clearImmediate(immediateObject: any): Object;

`

export const react = `
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * A UI node that can be rendered by React. React can render most primitives in
 * addition to elements and arrays of nodes.
 */

declare type React$Node =
  | null
  | boolean
  | number
  | string
  | React$Element<any>
  | React$Portal
  | Iterable<?React$Node>;

/**
 * Base class of ES6 React classes, modeled as a polymorphic class whose main
 * type parameters are Props and State.
 */
declare class React$Component<Props, State = void> {
  // fields

  props: Props;
  state: State;

  // action methods

  setState(
    partialState: ?$Shape<State> | ((State, Props) => ?$Shape<State>),
    callback?: () => mixed,
  ): void;

  forceUpdate(callback?: () => void): void;

  // lifecycle methods

  constructor(props?: Props, context?: any): void;
  render(): React$Node;
  componentWillMount(): mixed;
  UNSAFE_componentWillMount(): mixed;
  componentDidMount(): mixed;
  componentWillReceiveProps(
    nextProps: Props,
    nextContext: any,
  ): mixed;
  UNSAFE_componentWillReceiveProps(
    nextProps: Props,
    nextContext: any,
  ): mixed;
  shouldComponentUpdate(
    nextProps: Props,
    nextState: State,
    nextContext: any,
  ): boolean;
  componentWillUpdate(
    nextProps: Props,
    nextState: State,
    nextContext: any,
  ): mixed;
  UNSAFE_componentWillUpdate(
    nextProps: Props,
    nextState: State,
    nextContext: any,
  ): mixed;
  componentDidUpdate(
    prevProps: Props,
    prevState: State,
    prevContext: any,
  ): mixed;
  componentWillUnmount(): mixed;
  componentDidCatch(
    error: Error,
    info: {
      componentStack: string,
    }
  ): mixed;

  // long tail of other stuff not modeled very well

  refs: any;
  context: any;
  getChildContext(): any;
  static displayName?: ?string;
  static childContextTypes: any;
  static contextTypes: any;
  static propTypes: any;

  // We don't add a type for \`defaultProps\` so that its type may be entirely
  // inferred when we diff the type for \`defaultProps\` with \`Props\`. Otherwise
  // the user would need to define a type (which would be redundant) to override
  // the type we provide here in the base class.
  //
  // static defaultProps: $Shape<Props>;
}

declare class React$PureComponent<Props, State = void>
  extends React$Component<Props, State> {
  // TODO: Due to bugs in Flow's handling of React.createClass, some fields
  // already declared in the base class need to be redeclared below. Ideally
  // they should simply be inherited.

  props: Props;
  state: State;
}

/**
 * Base class of legacy React classes, which extends the base class of ES6 React
 * classes and supports additional methods.
 */
declare class LegacyReactComponent<Props, State>
  extends React$Component<Props, State> {
  // additional methods

  replaceState(state: State, callback?: () => void): void;

  isMounted(): bool;

  // TODO: Due to bugs in Flow's handling of React.createClass, some fields
  // already declared in the base class need to be redeclared below. Ideally
  // they should simply be inherited.

  props: Props;
  state: State;
}

declare type React$AbstractComponentStatics = {
  displayName?: ?string,
  // This is only on function components, but trying to access name when
  // displayName is undefined is a common pattern.
  name?: ?string,
};

/**
 * The type of a stateless functional component. In most cases these components
 * are a single function. However, they may have some static properties that we
 * can type check.
 */
declare type React$StatelessFunctionalComponent<Props> = {
  (props: Props, context: any): React$Node,
  displayName?: ?string,
  propTypes?: any,
  contextTypes?: any
};

/**
 * The type of a component in React. A React component may be a:
 *
 * - Stateless functional components. Functions that take in props as an
 *   argument and return a React node.
 * - ES6 class component. Components with state defined either using the ES6
 *   class syntax, or with the legacy \`React.createClass()\` helper.
 */
declare type React$ComponentType<-Config> = React$AbstractComponent<Config, any>;

/**
 * The type of an element in React. A React element may be a:
 *
 * - String. These elements are intrinsics that depend on the React renderer
 *   implementation.
 * - React component. See \`ComponentType\` for more information about its
 *   different variants.
 */
declare type React$ElementType =
  | string
  | React$AbstractComponent<any, any>;

/**
 * Type of a React element. React elements are commonly created using JSX
 * literals, which desugar to React.createElement calls (see below).
 */
declare type React$Element<+ElementType: React$ElementType> = {|
  +type: ElementType,
  +props: React$ElementProps<ElementType>,
  +key: React$Key | null,
  +ref: any,
|};

/**
 * The type of the key that React uses to determine where items in a new list
 * have moved.
 */
declare type React$Key = string | number;

/**
 * The type of the ref prop available on all React components.
 */
declare type React$Ref<ElementType: React$ElementType> =
  | {-current: React$ElementRef<ElementType> | null}
  | ((React$ElementRef<ElementType> | null) => mixed)
  | number | string;

/**
 * The type of a React Context.  React Contexts are created by calling
 * createContext() with a default value.
 */
declare type React$Context<T> = {
  Provider: React$ComponentType<{ value: T, children?: ?React$Node }>,
  Consumer: React$ComponentType<{ children: (value: T) => ?React$Node }>,

  // Optional, user-specified value for custom display label in React DevTools.
  displayName?: string,
}

/**
 * A React portal node. The implementation of the portal node is hidden to React
 * users so we use an opaque type.
 */
declare opaque type React$Portal;

declare module react {
  declare export var DOM: any;
  declare export var PropTypes: ReactPropTypes;
  declare export var version: string;

  declare export function checkPropTypes<V>(
    propTypes : any,
    values: V,
    location: string,
    componentName: string,
    getStack: ?(() => ?string)
  ) : void;

  declare export var createClass: React$CreateClass;
  declare export function createContext<T>(
    defaultValue: T,
    calculateChangedBits: ?(a: T, b: T) => number,
  ): React$Context<T>;
  declare export var createElement: React$CreateElement;
  declare export var cloneElement: React$CloneElement;
  declare export function createFactory<ElementType: React$ElementType>(
    type: ElementType,
  ): React$ElementFactory<ElementType>;
  declare export function createRef<T>(
  ): {|current: null | T|};

  declare export function isValidElement(element: any): boolean;

  declare export var Component: typeof React$Component;
  declare export var PureComponent: typeof React$PureComponent;
  declare export type StatelessFunctionalComponent<P> =
    React$StatelessFunctionalComponent<P>;
  declare export type ComponentType<-P> = React$ComponentType<P>;
  declare export type AbstractComponent<
    -Config,
    +Instance = mixed,
  > = React$AbstractComponent<Config, Instance>;
  declare export type ElementType = React$ElementType;
  declare export type Element<+C> = React$Element<C>;
  declare export var Fragment: ({children: ?React$Node}) => React$Node;
  declare export type Key = React$Key;
  declare export type Ref<C> = React$Ref<C>;
  declare export type Node = React$Node;
  declare export type Context<T> = React$Context<T>;
  declare export type Portal = React$Portal;
  declare export var ConcurrentMode: ({children: ?React$Node}) => React$Node; // 16.7+
  declare export var StrictMode: ({children: ?React$Node}) => React$Node;

  declare export var Suspense: React$ComponentType<{
    children?: ?React$Node,
    fallback?: React$Node,
    maxDuration?: number
  }>; // 16.6+

  declare export type ElementProps<C> = React$ElementProps<C>;
  declare export type ElementConfig<C> = React$ElementConfig<C>;
  declare export type ElementRef<C> = React$ElementRef<C>;
  declare export type Config<Props, DefaultProps> = React$Config<Props, DefaultProps>;

  declare export type ChildrenArray<+T> = $ReadOnlyArray<ChildrenArray<T>> | T;
  declare export var Children: {
    map<T, U>(
      children: ChildrenArray<T>,
      fn: (child: $NonMaybeType<T>, index: number) => U,
      thisArg?: mixed,
    ): Array<$NonMaybeType<U>>;
    forEach<T>(
      children: ChildrenArray<T>,
      fn: (child: T, index: number) => mixed,
      thisArg?: mixed,
    ): void;
    count(children: ChildrenArray<any>): number;
    only<T>(children: ChildrenArray<T>): $NonMaybeType<T>;
    toArray<T>(children: ChildrenArray<T>): Array<$NonMaybeType<T>>;
  };

  declare export function forwardRef<Config, Instance>(
    render: (
      props: Config,
      ref: {current: null | Instance} | ((null | Instance) => mixed),
    ) => React$Node,
  ): React$AbstractComponent<Config, Instance>;

  declare export function memo<P>(
    component: React$ComponentType<P>,
    equal?: (P, P) => boolean,
  ): React$ComponentType<P>;

  declare export function lazy<P>(
    component: () => Promise<{ default: React$ComponentType<P> }>,
  ): React$ComponentType<P>;

  declare type MaybeCleanUpFn = void | (() => void);

  declare export function useContext<T>(
    context: React$Context<T>,
    observedBits: void | number | boolean,
  ): T;

  declare export function useState<S>(
    initialState: (() => S) | S,
  ): [S, ((S => S) | S) => void];

  declare type Dispatch<A> = (A) => void;

  declare export function useReducer<S, A>(
    reducer: (S, A) => S,
    initialState: S,
  ): [S, Dispatch<A>];

  declare export function useReducer<S, A>(
    reducer: (S, A) => S,
    initialState: S,
    init: void,
  ): [S, Dispatch<A>];

  declare export function useReducer<S, A, I>(
    reducer: (S, A) => S,
    initialArg: I,
    init: (I) => S,
  ): [S, Dispatch<A>];

  declare export function useRef<T>(initialValue: T): {|current: T|};

  declare export function useDebugValue(value: any): void;

  declare export function useEffect(
    create: () => MaybeCleanUpFn,
    inputs: ?$ReadOnlyArray<mixed>,
  ): void;

  declare export function useLayoutEffect(
    create: () => MaybeCleanUpFn,
    inputs: ?$ReadOnlyArray<mixed>,
  ): void;

  declare export function useCallback<T: (...args: $ReadOnlyArray<empty>) => mixed>(
    callback: T,
    inputs: ?$ReadOnlyArray<mixed>,
  ): T;

  declare export function useMemo<T>(
    create: () => T,
    inputs: ?$ReadOnlyArray<mixed>,
  ): T;

  declare export function useImperativeHandle<T>(
    ref: {current: T | null} | ((inst: T | null) => mixed) | null | void,
    create: () => T,
    inputs: ?$ReadOnlyArray<mixed>,
  ): void;

  declare export default {|
    +DOM: typeof DOM,
    +PropTypes: typeof PropTypes,
    +version: typeof version,
    +checkPropTypes: typeof checkPropTypes,
    +memo: typeof memo,
    +lazy: typeof lazy,
    +createClass: typeof createClass,
    +createContext: typeof createContext,
    +createElement: typeof createElement,
    +cloneElement: typeof cloneElement,
    +createFactory: typeof createFactory,
    +createRef: typeof createRef,
    +forwardRef: typeof forwardRef,
    +isValidElement: typeof isValidElement,
    +Component: typeof Component,
    +PureComponent: typeof PureComponent,
    +Fragment: typeof Fragment,
    +Children: typeof Children,
    +ConcurrentMode: typeof ConcurrentMode,
    +StrictMode: typeof StrictMode,
    +Suspense: typeof Suspense,
    +useContext: typeof useContext,
    +useState: typeof useState,
    +useReducer: typeof useReducer,
    +useRef: typeof useRef,
    +useEffect: typeof useEffect,
    +useLayoutEffect: typeof useLayoutEffect,
    +useCallback: typeof useCallback,
    +useMemo: typeof useMemo,
    +useImperativeHandle: typeof useImperativeHandle,
  |};
}

// TODO Delete this once https://github.com/facebook/react/pull/3031 lands
// and "react" becomes the standard name for this module
declare module React {
  declare module.exports: $Exports<'react'>;
}

type ReactPropsCheckType = (
  props: any,
  propName: string,
  componentName: string,
  href?: string) => ?Error;

type ReactPropsChainableTypeChecker = {
  isRequired: ReactPropsCheckType;
  (props: any, propName: string, componentName: string, href?: string): ?Error;
};

type React$PropTypes$arrayOf =
  (typeChecker: ReactPropsCheckType) => ReactPropsChainableTypeChecker;
type React$PropTypes$instanceOf =
  (expectedClass: any) => ReactPropsChainableTypeChecker;
type React$PropTypes$objectOf =
  (typeChecker: ReactPropsCheckType) => ReactPropsChainableTypeChecker;
type React$PropTypes$oneOf =
  (expectedValues: Array<any>) => ReactPropsChainableTypeChecker;
type React$PropTypes$oneOfType =
  (arrayOfTypeCheckers: Array<ReactPropsCheckType>) =>
    ReactPropsChainableTypeChecker;
type React$PropTypes$shape =
  (shapeTypes: { [key: string]: ReactPropsCheckType }) =>
    ReactPropsChainableTypeChecker;

type ReactPropTypes = {
  array: React$PropType$Primitive<Array<any>>;
  bool: React$PropType$Primitive<boolean>;
  func: React$PropType$Primitive<Function>;
  number: React$PropType$Primitive<number>;
  object: React$PropType$Primitive<Object>;
  string: React$PropType$Primitive<string>;
  any: React$PropType$Primitive<any>;
  arrayOf: React$PropType$ArrayOf;
  element: React$PropType$Primitive<any>; /* TODO */
  instanceOf: React$PropType$InstanceOf;
  node: React$PropType$Primitive<any>; /* TODO */
  objectOf: React$PropType$ObjectOf;
  oneOf: React$PropType$OneOf;
  oneOfType: React$PropType$OneOfType;
  shape: React$PropType$Shape;
}

`

export const streams = `
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

type TextEncodeOptions = {options?: boolean};

declare class TextEncoder {
  encode(buffer: string, options?: TextEncodeOptions): Uint8Array,
}

declare class ReadableStreamController {
  constructor(
    stream: ReadableStream,
    underlyingSource: UnderlyingSource,
    size: number,
    highWaterMark: number,
  ): void,

  desiredSize: number,

  close(): void,
  enqueue(chunk: any): void,
  error(error: Error): void,
}

declare class ReadableStreamBYOBRequest {
  constructor(controller: ReadableStreamController, view: $TypedArray): void,

  view: $TypedArray,

  respond(bytesWritten: number): ?any,
  respondWithNewView(view: $TypedArray): ?any,
}

declare class ReadableByteStreamController extends ReadableStreamController {
  constructor(
    stream: ReadableStream,
    underlyingSource: UnderlyingSource,
    highWaterMark: number,
  ): void,

  byobRequest: ReadableStreamBYOBRequest,
}

declare class ReadableStreamReader {
  constructor(stream: ReadableStream): void,

  closed: boolean,

  cancel(reason: string): void,
  read(): Promise<{value: ?any, done: boolean}>,
  releaseLock(): void,
}

declare interface UnderlyingSource {
  autoAllocateChunkSize?: number,
  type?: string,

  start?: (controller: ReadableStreamController) => ?Promise<void>,
  pull?: (controller: ReadableStreamController) => ?Promise<void>,
  cancel?: (reason: string) => ?Promise<void>,
}

declare class TransformStream {
  readable: ReadableStream,
  writable: WritableStream,
};

type PipeToOptions = {
  preventClose?: boolean,
  preventAbort?: boolean,
  preventCancel?: boolean,
};

type QueuingStrategy  = {
  highWaterMark: number,

  size(chunk: ?any): number,
};

declare class ReadableStream {
  constructor(
    underlyingSource: ?UnderlyingSource,
    queuingStrategy: ?QueuingStrategy,
  ): void,

  locked: boolean,

  cancel(reason: string): void,
  getReader(): ReadableStreamReader,
  pipeThrough(transform: TransformStream, options: ?any): void,
  pipeTo(dest: WritableStream, options: ?PipeToOptions): void,
  tee(): [ReadableStream, ReadableStream],
};

declare interface WritableStreamController {
  error(error: Error): void,
}

declare interface UnderlyingSink {
  autoAllocateChunkSize?: number,
  type?: string,

  abort?: (reason: string) => ?Promise<void>,
  close?: (controller: WritableStreamController) => ?Promise<void>,
  start?: (controller: WritableStreamController) => ?Promise<void>,
  write?: (chunk: any, controller: WritableStreamController) => ?Promise<void>,
}

declare interface WritableStreamWriter {
  closed: Promise<any>,
  desiredSize?: number,
  ready: Promise<any>,

  abort(reason: string): ?Promise<any>,
  close(): Promise<any>,
  releaseLock(): void,
  write(chunk: any): Promise<any>,
}

declare class WritableStream {
  constructor(
    underlyingSink: ?UnderlyingSink,
    queuingStrategy: QueuingStrategy,
  ): void,

  locked: boolean,

  abort(reason: string): void,
  getWriter(): WritableStreamWriter,
}

`