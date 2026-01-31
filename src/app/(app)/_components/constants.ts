/**
 * 카카오맵 기본 중심 좌표 (제주도)
 */
export const DEFAULT_CENTER = {
  LAT: 33.450701,
  LNG: 126.570667,
  LEVEL: 3,
} as const;

/**
 * 카카오맵 Script 로드 설정
 */
export const KAKAO_SCRIPT = {
  URL: `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JS_KEY}&autoload=false&libraries=clusterer` as const,
  STRATEGY: "afterInteractive" as const,
} as const;

/**
 * Map 생성 옵션 (kakao.maps.Map options)
 * @see https://apis.map.kakao.com/web/documentation/#Map
 */
export const MAP_OPTIONS = {
  /** 중심 좌표 (필수) */
  center: { lat: DEFAULT_CENTER.LAT, lng: DEFAULT_CENTER.LNG },
  /** 확대 수준 1~14, 작을수록 확대 (기본: 3) */
  level: DEFAULT_CENTER.LEVEL,
  /** 지도 종류: ROADMAP | SKYVIEW | HYBRID (기본: ROADMAP) */
  mapTypeId: "ROADMAP" as const,
  /** 마우스 드래그/휠/터치로 이동·확대·축소 가능 (기본: true) */
  draggable: true,
  /** 마우스 휠/터치로 확대·축소 가능 (기본: true) */
  scrollwheel: true,
  /** 더블클릭 이벤트 및 더블클릭 확대 가능 (기본: true) */
  disableDoubleClick: false,
  /** 더블클릭 확대만 비활성화 (기본: false) */
  disableDoubleClickZoom: false,
  /** 투영법: WCONG | NONE (기본: WCONG) */
  projectionId: "WCONG" as const,
  /** 타일 애니메이션 (기본: true) */
  tileAnimation: true,
  /** 키보드 방향키, +,- 로 이동·확대·축소 (기본: false) */
  keyboardShortcuts: false,
  /** 지도 이동 속도 */
  speed: 1,
} as const;

/**
 * 컨트롤 위치 (kakao.maps.ControlPosition)
 */
export const CONTROL_POSITION = {
  TOP: "TOP" as const,
  TOPLEFT: "TOPLEFT" as const,
  TOPRIGHT: "TOPRIGHT" as const,
  LEFT: "LEFT" as const,
  RIGHT: "RIGHT" as const,
  BOTTOM: "BOTTOM" as const,
  BOTTOMLEFT: "BOTTOMLEFT" as const,
  BOTTOMRIGHT: "BOTTOMRIGHT" as const,
} as const;

/**
 * 지도 타입 ID (kakao.maps.MapTypeId)
 * 베이스: ROADMAP, SKYVIEW, HYBRID
 * 오버레이: TRAFFIC, TERRAIN, BICYCLE 등
 */
export const MAP_TYPE_ID = {
  ROADMAP: "ROADMAP" as const,
  SKYVIEW: "SKYVIEW" as const,
  HYBRID: "HYBRID" as const,
  TRAFFIC: "TRAFFIC" as const,
  TERRAIN: "TERRAIN" as const,
  BICYCLE: "BICYCLE" as const,
} as const;

/**
 * 샘플 마커/오버레이용 좌표
 */
export const SAMPLE_POSITIONS = {
  center: { lat: 33.450701, lng: 126.570667 },
  offset1: { lat: 33.45178, lng: 126.57093 },
  offset2: { lat: 33.45234, lng: 126.56878 },
  seoul: { lat: 37.566826, lng: 126.9786567 },
  busan: { lat: 35.1795543, lng: 129.0756416 },
  incheon: { lat: 37.4562557, lng: 126.7052062 },
} as const;

/**
 * 여러 마커용 좌표 배열 (클러스터링 테스트)
 */
export const MULTI_MARKER_POSITIONS = [
  { lat: 33.450701, lng: 126.570667 },
  { lat: 33.45178, lng: 126.57093 },
  { lat: 33.45234, lng: 126.56878 },
  { lat: 33.45058, lng: 126.57494 },
  { lat: 33.45139, lng: 126.57167 },
] as const;

/**
 * 폴리라인 경로 (선 그리기)
 */
export const POLYLINE_PATH = [
  { lat: 33.450701, lng: 126.570667 },
  { lat: 33.45178, lng: 126.57093 },
  { lat: 33.45234, lng: 126.56878 },
  { lat: 33.45058, lng: 126.57494 },
] as const;

/**
 * 폴리곤 경로 (다각형)
 */
export const POLYGON_PATH = [
  { lat: 33.450701, lng: 126.570667 },
  { lat: 33.45178, lng: 126.57093 },
  { lat: 33.45234, lng: 126.56878 },
  { lat: 33.45058, lng: 126.57494 },
] as const;

/**
 * 커스텀 마커 이미지 URL (예시)
 */
export const CUSTOM_MARKER_IMAGE = {
  red: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png",
  blue: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_blue.png",
  green: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_green.png",
} as const;

/**
 * Circle 옵션 (반지름 m, 스타일)
 */
export const CIRCLE_OPTIONS = {
  radius: 100,
  strokeWeight: 2,
  strokeColor: "#3182F6",
  strokeOpacity: 0.8,
  strokeStyle: "solid" as const,
  fillColor: "#3182F6",
  fillOpacity: 0.2,
} as const;

/**
 * 인포윈도우 기본 내용
 */
export const INFOWINDOW_CONTENT = `<div style="padding: 8px 12px; min-width: 120px; font-size: 13px;">
  <strong>카카오맵 데모</strong><br/>
  클릭·드래그·확대축소 가능
</div>`;
