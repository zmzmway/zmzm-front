import {
  DEFAULT_CENTER,
  MAP_OPTIONS,
  CONTROL_POSITION,
  SAMPLE_POSITIONS,
  CIRCLE_OPTIONS,
  INFOWINDOW_CONTENT,
} from "./constants";
import type {
  KakaoMapInstance,
  KakaoMarkerInstance,
  KakaoInfoWindowInstance,
  KakaoCircleInstance,
  LatLngLike,
} from "./type";

export type MapInitResult = {
  map: KakaoMapInstance;
  marker: KakaoMarkerInstance;
  infowindow: KakaoInfoWindowInstance;
  circle: KakaoCircleInstance;
  kakao: NonNullable<typeof window.kakao>;
  removeListeners: () => void;
};

function createMap(
  kakao: NonNullable<typeof window.kakao>,
  container: HTMLDivElement,
  onReady: (result: MapInitResult) => void
): void {
  const listeners: Array<{ target: unknown; type: string; handler: () => void }> = [];

  const center = new kakao.maps.LatLng(DEFAULT_CENTER.LAT, DEFAULT_CENTER.LNG);

  const mapTypeId =
    kakao.maps.MapTypeId?.[MAP_OPTIONS.mapTypeId] ?? kakao.maps.MapTypeId?.ROADMAP;
  const options = {
    center,
    level: MAP_OPTIONS.level,
    mapTypeId,
    draggable: MAP_OPTIONS.draggable,
    scrollwheel: MAP_OPTIONS.scrollwheel,
    disableDoubleClick: MAP_OPTIONS.disableDoubleClick,
    disableDoubleClickZoom: MAP_OPTIONS.disableDoubleClickZoom,
    tileAnimation: MAP_OPTIONS.tileAnimation,
    keyboardShortcuts: MAP_OPTIONS.keyboardShortcuts,
  };

  const map = new kakao.maps.Map(container, options) as KakaoMapInstance;

  // 컨트롤: 줌, 지도타입
  const zoomControl = new kakao.maps.ZoomControl();
  map.addControl(zoomControl, kakao.maps.ControlPosition?.[CONTROL_POSITION.RIGHT] ?? 7);
  const mapTypeControl = new kakao.maps.MapTypeControl();
  map.addControl(mapTypeControl, kakao.maps.ControlPosition?.[CONTROL_POSITION.TOPRIGHT] ?? 3);

  // 마커
  const markerPosition = new kakao.maps.LatLng(
    SAMPLE_POSITIONS.center.lat,
    SAMPLE_POSITIONS.center.lng
  );
  const marker = new kakao.maps.Marker({
    map,
    position: markerPosition,
    title: "카카오맵 데모",
    draggable: false,
    clickable: true,
  }) as KakaoMarkerInstance;

  // 인포윈도우
  const infowindow = new kakao.maps.InfoWindow({
    position: markerPosition,
    content: INFOWINDOW_CONTENT,
    removable: true,
  }) as KakaoInfoWindowInstance;
  infowindow.open(map, marker);

  const onMarkerClick = () => infowindow.open(map, marker);
  kakao.maps.event.addListener(marker, "click", onMarkerClick);
  listeners.push({ target: marker, type: "click", handler: onMarkerClick });

  // Circle
  const circle = new kakao.maps.Circle({
    map,
    center: markerPosition,
    radius: CIRCLE_OPTIONS.radius,
    strokeWeight: CIRCLE_OPTIONS.strokeWeight,
    strokeColor: CIRCLE_OPTIONS.strokeColor,
    strokeOpacity: CIRCLE_OPTIONS.strokeOpacity,
    strokeStyle: CIRCLE_OPTIONS.strokeStyle,
    fillColor: CIRCLE_OPTIONS.fillColor,
    fillOpacity: CIRCLE_OPTIONS.fillOpacity,
  }) as KakaoCircleInstance;

  // 지도 이벤트
  const onCenterChanged = () => {};
  const onZoomChanged = () => {};
  const onClick = (e?: { latLng?: LatLngLike }) => {
    if (e?.latLng) console.info("[Kakao Map] click", e.latLng.getLat(), e.latLng.getLng());
  };
  kakao.maps.event.addListener(map, "center_changed", onCenterChanged);
  kakao.maps.event.addListener(map, "zoom_changed", onZoomChanged);
  kakao.maps.event.addListener(map, "click", onClick);
  listeners.push(
    { target: map, type: "center_changed", handler: onCenterChanged },
    { target: map, type: "zoom_changed", handler: onZoomChanged },
    { target: map, type: "click", handler: onClick }
  );

  const removeListeners = () => {
    listeners.forEach(({ target, type, handler }) => {
      kakao.maps.event.removeListener(target, type, handler);
    });
  };

  onReady({ map, marker, infowindow, circle, kakao, removeListeners });
}

/**
 * 카카오맵 초기화
 * - Map 옵션: center, level, mapTypeId, draggable, scrollwheel, disableDoubleClick, tileAnimation, keyboardShortcuts
 * - 컨트롤: ZoomControl(RIGHT), MapTypeControl(TOPRIGHT)
 * - 마커 + 인포윈도우, Circle, 이벤트(click, center_changed, zoom_changed)
 * @param container 지도가 그려질 DOM
 * @param onReady 초기화 완료 시 호출 (map, marker, infowindow, circle, removeListeners 전달)
 */
export function init(
  container: HTMLDivElement | null,
  onReady?: (result: MapInitResult) => void
): void {
  const kakao = window.kakao;
  if (!kakao?.maps || !container) {
    return;
  }

  kakao.maps.load(() => {
    createMap(kakao, container, onReady ?? (() => {}));
  });
}
