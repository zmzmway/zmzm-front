/**
 * Kakao Maps API 타입 정의
 * @see https://apis.map.kakao.com/web/documentation
 */

export type LatLngLike = { getLat: () => number; getLng: () => number };

export interface MapOptions {
  center: LatLngLike;
  level?: number;
  mapTypeId?: number;
  draggable?: boolean;
  scrollwheel?: boolean;
  disableDoubleClick?: boolean;
  disableDoubleClickZoom?: boolean;
  projectionId?: string;
  tileAnimation?: boolean;
  keyboardShortcuts?: boolean | object;
  speed?: number;
}

export interface KakaoMaps {
  maps: {
    load: (callback: () => void) => void;
    LatLng: new (lat: number, lng: number) => LatLngLike;
    LatLngBounds: new (sw: LatLngLike, ne: LatLngLike) => KakaoLatLngBoundsInstance;
    Map: new (container: HTMLElement, options: MapOptions) => KakaoMapInstance;
    MapTypeId: Record<string, number>;
    ControlPosition: Record<string, number>;
    ZoomControl: new () => unknown;
    MapTypeControl: new () => unknown;
    Marker: new (options: MarkerOptions) => KakaoMarkerInstance;
    MarkerImage: new (
      src: string,
      size: KakaoSizeInstance,
      options?: MarkerImageOptions
    ) => KakaoMarkerImageInstance;
    InfoWindow: new (options: InfoWindowOptions) => KakaoInfoWindowInstance;
    Circle: new (options: CircleOptions) => KakaoCircleInstance;
    Polyline: new (options: PolylineOptions) => KakaoPolylineInstance;
    Polygon: new (options: PolygonOptions) => KakaoPolygonInstance;
    Rectangle: new (options: RectangleOptions) => KakaoRectangleInstance;
    Ellipse: new (options: EllipseOptions) => KakaoEllipseInstance;
    CustomOverlay: new (options: CustomOverlayOptions) => KakaoCustomOverlayInstance;
    MarkerClusterer?: new (options: MarkerClustererOptions) => KakaoMarkerClustererInstance;
    Size: new (width: number, height: number) => KakaoSizeInstance;
    Point: new (x: number, y: number) => KakaoPointInstance;
    event: {
      addListener: (
        target: unknown,
        type: string,
        handler: (e?: { latLng?: LatLngLike }) => void
      ) => unknown;
      removeListener: (
        target: unknown,
        type: string,
        handler: (e?: { latLng?: LatLngLike }) => void
      ) => void;
    };
  };
}

export interface KakaoMapInstance {
  setCenter: (latlng: LatLngLike) => void;
  getCenter: () => LatLngLike;
  setLevel: (level: number, options?: { animate?: boolean | { duration?: number }; anchor?: LatLngLike }) => void;
  getLevel: () => number;
  setMapTypeId: (mapTypeId: number) => void;
  getMapTypeId: () => number;
  setDraggable: (draggable: boolean) => void;
  getDraggable: () => boolean;
  setZoomable: (zoomable: boolean) => void;
  getZoomable: () => boolean;
  setBounds: (bounds: KakaoLatLngBoundsInstance, paddingTop?: number, paddingRight?: number, paddingBottom?: number, paddingLeft?: number) => void;
  getBounds: () => KakaoLatLngBoundsInstance;
  panBy: (dx: number, dy: number) => void;
  panTo: (latlng_or_bounds: LatLngLike | KakaoLatLngBoundsInstance, padding?: number) => void;
  jump: (center: LatLngLike, level: number, options?: { animate?: boolean | { duration?: number } }) => void;
  setMinLevel: (minLevel: number) => void;
  setMaxLevel: (maxLevel: number) => void;
  addControl: (control: unknown, position: number) => void;
  removeControl: (control: unknown, position: number) => void;
  addOverlayMapTypeId: (mapTypeId: number) => void;
  removeOverlayMapTypeId: (mapTypeId: number) => void;
  getProjection: () => unknown;
  relayout: () => void;
}

export interface MarkerOptions {
  map?: KakaoMapInstance;
  position: LatLngLike;
  title?: string;
  draggable?: boolean;
  clickable?: boolean;
  zIndex?: number;
  opacity?: number;
  image?: KakaoMarkerImageInstance;
}

export interface KakaoMarkerInstance {
  setMap: (map: KakaoMapInstance | null) => void;
  getMap: () => KakaoMapInstance | null;
  setPosition: (position: LatLngLike) => void;
  getPosition: () => LatLngLike;
  setTitle: (title: string) => void;
  setVisible: (visible: boolean) => void;
  setImage: (image: KakaoMarkerImageInstance) => void;
  setZIndex: (zIndex: number) => void;
  setOpacity: (opacity: number) => void;
  setDraggable: (draggable: boolean) => void;
}

export interface InfoWindowOptions {
  map?: KakaoMapInstance;
  position: LatLngLike;
  content: string | HTMLElement;
  removable?: boolean;
  zIndex?: number;
}

export interface KakaoInfoWindowInstance {
  open: (map: KakaoMapInstance, marker?: KakaoMarkerInstance) => void;
  close: () => void;
  setContent: (content: string | HTMLElement) => void;
  setPosition: (position: LatLngLike) => void;
}

export interface KakaoLatLngBoundsInstance {
  getSouthWest: () => LatLngLike;
  getNorthEast: () => LatLngLike;
  extend: (latlng: LatLngLike) => void;
  contain: (latlng: LatLngLike) => boolean;
  toString: () => string;
}

export interface KakaoSizeInstance {
  getWidth: () => number;
  getHeight: () => number;
}

export interface KakaoPointInstance {
  getX: () => number;
  getY: () => number;
}

export interface MarkerImageOptions {
  offset?: KakaoPointInstance;
  alt?: string;
  shape?: string;
  coords?: string;
  spriteOrigin?: KakaoPointInstance;
  spriteSize?: KakaoSizeInstance;
}

export type KakaoMarkerImageInstance = object;

export interface KakaoCircleInstance {
  setMap: (map: KakaoMapInstance | null) => void;
  setPosition: (position: LatLngLike) => void;
  setRadius: (radius: number) => void;
  getRadius: () => number;
  getBounds: () => KakaoLatLngBoundsInstance;
  setOptions: (options: Partial<CircleOptions>) => void;
}

export interface PolylineOptions {
  map?: KakaoMapInstance;
  path: LatLngLike[] | LatLngLike[][];
  strokeWeight?: number;
  strokeColor?: string;
  strokeOpacity?: number;
  strokeStyle?: string;
  endArrow?: boolean;
  zIndex?: number;
}

export interface KakaoPolylineInstance {
  setMap: (map: KakaoMapInstance | null) => void;
  setPath: (path: LatLngLike[] | LatLngLike[][]) => void;
  getPath: () => LatLngLike[];
  setOptions: (options: Partial<PolylineOptions>) => void;
  getLength: () => number;
}

export interface PolygonOptions {
  map?: KakaoMapInstance;
  path: LatLngLike[] | LatLngLike[][];
  strokeWeight?: number;
  strokeColor?: string;
  strokeOpacity?: number;
  strokeStyle?: string;
  fillColor?: string;
  fillOpacity?: number;
  zIndex?: number;
}

export interface KakaoPolygonInstance {
  setMap: (map: KakaoMapInstance | null) => void;
  setPath: (path: LatLngLike[] | LatLngLike[][]) => void;
  getPath: () => LatLngLike[];
  setOptions: (options: Partial<PolygonOptions>) => void;
  getLength: () => number;
  getArea: () => number;
}

export interface RectangleOptions {
  map?: KakaoMapInstance;
  bounds: KakaoLatLngBoundsInstance;
  strokeWeight?: number;
  strokeColor?: string;
  strokeOpacity?: number;
  strokeStyle?: string;
  fillColor?: string;
  fillOpacity?: number;
  zIndex?: number;
}

export interface KakaoRectangleInstance {
  setMap: (map: KakaoMapInstance | null) => void;
  setBounds: (bounds: KakaoLatLngBoundsInstance) => void;
  getBounds: () => KakaoLatLngBoundsInstance;
  setOptions: (options: Partial<RectangleOptions>) => void;
}

export interface EllipseOptions {
  map?: KakaoMapInstance;
  center: LatLngLike;
  rx: number;
  ry: number;
  strokeWeight?: number;
  strokeColor?: string;
  strokeOpacity?: number;
  strokeStyle?: string;
  fillColor?: string;
  fillOpacity?: number;
  zIndex?: number;
}

export interface KakaoEllipseInstance {
  setMap: (map: KakaoMapInstance | null) => void;
  setPosition: (position: LatLngLike) => void;
  setRadius: (rx: number, ry: number) => void;
  getRadius: () => { rx: number; ry: number };
  getBounds: () => KakaoLatLngBoundsInstance;
  setOptions: (options: Partial<EllipseOptions>) => void;
}

export interface CustomOverlayOptions {
  map?: KakaoMapInstance;
  position: LatLngLike;
  content: string | HTMLElement;
  xAnchor?: number;
  yAnchor?: number;
  zIndex?: number;
  clickable?: boolean;
}

export interface KakaoCustomOverlayInstance {
  setMap: (map: KakaoMapInstance | null) => void;
  setPosition: (position: LatLngLike) => void;
  setContent: (content: string | HTMLElement) => void;
  setVisible: (visible: boolean) => void;
  getVisible: () => boolean;
}

export interface MarkerClustererOptions {
  map: KakaoMapInstance;
  markers: KakaoMarkerInstance[];
  gridSize?: number;
  averageCenter?: boolean;
  minLevel?: number;
  minClusterSize?: number;
  styles?: Array<Record<string, string>>;
  texts?: string[] | ((size: number) => string);
  calculator?: number[] | ((size: number) => number);
  disableClickZoom?: boolean;
  clickable?: boolean;
  hoverable?: boolean;
}

export interface KakaoMarkerClustererInstance {
  addMarker: (marker: KakaoMarkerInstance) => void;
  removeMarker: (marker: KakaoMarkerInstance) => void;
  addMarkers: (markers: KakaoMarkerInstance[]) => void;
  removeMarkers: (markers: KakaoMarkerInstance[]) => void;
  clear: () => void;
  redraw: () => void;
}

export interface CircleOptions {
  map?: KakaoMapInstance;
  center: LatLngLike;
  radius: number;
  strokeWeight?: number;
  strokeColor?: string;
  strokeOpacity?: number;
  strokeStyle?: string;
  fillColor?: string;
  fillOpacity?: number;
  zIndex?: number;
}

declare global {
  interface Window {
    kakao?: KakaoMaps;
  }
}
