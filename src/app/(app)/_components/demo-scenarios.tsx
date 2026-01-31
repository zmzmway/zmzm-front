"use client";

import { useState, useRef } from "react";
import { Button, Card } from "@/components";
import type { MapInitResult } from "./utils";
import type {
  KakaoMarkerInstance,
  KakaoPolylineInstance,
  KakaoPolygonInstance,
  KakaoRectangleInstance,
  KakaoEllipseInstance,
  KakaoCustomOverlayInstance,
  KakaoMarkerClustererInstance,
  KakaoLatLngBoundsInstance,
} from "./type";
import {
  SAMPLE_POSITIONS,
  MAP_TYPE_ID,
  MULTI_MARKER_POSITIONS,
  POLYLINE_PATH,
  POLYGON_PATH,
  CUSTOM_MARKER_IMAGE,
} from "./constants";

export type EventLogEntry = {
  t: number;
  type: string;
  lat?: number;
  lng?: number;
  level?: number;
};

type DemoScenariosProps = {
  mapResult: MapInitResult | null;
  eventLog: EventLogEntry[];
  onClearLog: () => void;
};

export function DemoScenarios({
  mapResult,
  eventLog,
  onClearLog,
}: DemoScenariosProps) {
  const kakao = typeof window !== "undefined" ? window.kakao : null;
  const hasMap = !!mapResult?.map;

  // 오버레이 상태 관리
  const [customMarkers, setCustomMarkers] = useState<KakaoMarkerInstance[]>([]);
  const [polylines, setPolylines] = useState<KakaoPolylineInstance[]>([]);
  const [polygons, setPolygons] = useState<KakaoPolygonInstance[]>([]);
  const [rectangles, setRectangles] = useState<KakaoRectangleInstance[]>([]);
  const [ellipses, setEllipses] = useState<KakaoEllipseInstance[]>([]);
  const [customOverlays, setCustomOverlays] = useState<
    KakaoCustomOverlayInstance[]
  >([]);
  const clustererRef = useRef<KakaoMarkerClustererInstance | null>(null);
  const clusterMarkersRef = useRef<KakaoMarkerInstance[]>([]);

  if (!kakao || !mapResult) {
    return null;
  }

  const { map, kakao: kakaoInstance } = mapResult;

  // === 지도 기본 ===
  const setCenter = (lat: number, lng: number) => {
    if (!kakao || !map) return;
    const pos = new kakao.maps.LatLng(lat, lng);
    map.setCenter(pos);
  };

  const setLevel = (level: number, animate?: boolean) => {
    if (!map) return;
    map.setLevel(level, animate ? { animate: true } : undefined);
  };

  const setMapTypeId = (typeId: keyof typeof MAP_TYPE_ID) => {
    if (!kakao || !map) return;
    const id = kakao.maps.MapTypeId?.[typeId];
    if (id != null) map.setMapTypeId(id);
  };

  const panBy = (dx: number, dy: number) => {
    if (!map) return;
    map.panBy(dx, dy);
  };

  const panTo = (lat: number, lng: number) => {
    if (!kakao || !map) return;
    const pos = new kakao.maps.LatLng(lat, lng);
    map.panTo(pos);
  };

  const jump = (lat: number, lng: number, level: number) => {
    if (!kakao || !map) return;
    const pos = new kakao.maps.LatLng(lat, lng);
    map.jump(pos, level);
  };

  const getBounds = (): KakaoLatLngBoundsInstance | null => {
    if (!map) return null;
    return map.getBounds() as KakaoLatLngBoundsInstance;
  };

  const setBounds = () => {
    if (!kakao || !map) return;
    const sw = new kakao.maps.LatLng(33.45, 126.56);
    const ne = new kakao.maps.LatLng(33.46, 126.58);
    const bounds = new kakao.maps.LatLngBounds(sw, ne);
    map.setBounds(bounds);
  };

  const getCenterInfo = () => {
    if (!map) return null;
    const c = map.getCenter();
    return c ? { lat: c.getLat(), lng: c.getLng() } : null;
  };

  const getLevelInfo = () => (map ? map.getLevel() : null);

  const getBoundsInfo = () => {
    const bounds = getBounds();
    if (!bounds) return null;
    const sw = bounds.getSouthWest();
    const ne = bounds.getNorthEast();
    return {
      sw: { lat: sw.getLat(), lng: sw.getLng() },
      ne: { lat: ne.getLat(), lng: ne.getLng() },
    };
  };

  // === 커스텀 마커 ===
  const addCustomMarker = (
    color: "red" | "blue" | "green",
    lat: number,
    lng: number,
  ) => {
    if (!kakao || !map) return;
    const pos = new kakao.maps.LatLng(lat, lng);
    const imageSrc = CUSTOM_MARKER_IMAGE[color];
    const imageSize = new kakao.maps.Size(24, 35);
    const imageOption = { offset: new kakao.maps.Point(12, 35) };
    const markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption,
    );
    const marker = new kakao.maps.Marker({
      map,
      position: pos,
      image: markerImage,
      title: `${color} 마커`,
    }) as KakaoMarkerInstance;
    setCustomMarkers((prev) => [...prev, marker]);
  };

  const removeAllCustomMarkers = () => {
    customMarkers.forEach((m) => m.setMap(null));
    setCustomMarkers([]);
  };

  // === 여러 마커 ===
  const addMultipleMarkers = () => {
    if (!kakao || !map) return;
    const markers: KakaoMarkerInstance[] = [];
    MULTI_MARKER_POSITIONS.forEach((pos) => {
      const latlng = new kakao.maps.LatLng(pos.lat, pos.lng);
      const marker = new kakao.maps.Marker({
        map,
        position: latlng,
        title: `마커 ${markers.length + 1}`,
      }) as KakaoMarkerInstance;
      markers.push(marker);
    });
    clusterMarkersRef.current = markers;
  };

  const removeMultipleMarkers = () => {
    clusterMarkersRef.current.forEach((m) => m.setMap(null));
    clusterMarkersRef.current = [];
    if (clustererRef.current) {
      clustererRef.current.clear();
      clustererRef.current = null;
    }
  };

  // === 클러스터링 ===
  const addClusterer = () => {
    if (!kakao || !map || clusterMarkersRef.current.length === 0) {
      addMultipleMarkers();
    }
    if (!kakao || !map) return;
    if (clustererRef.current) return; // 이미 있으면 스킵
    if (!kakao.maps.MarkerClusterer) {
      alert(
        "MarkerClusterer 라이브러리가 로드되지 않았습니다. KAKAO_SCRIPT URL에 &libraries=clusterer를 추가하세요.",
      );
      return;
    }

    const clusterer = new kakao.maps.MarkerClusterer({
      map,
      markers: clusterMarkersRef.current,
      gridSize: 60,
      averageCenter: true,
      minLevel: 3,
    }) as KakaoMarkerClustererInstance;
    clustererRef.current = clusterer;
  };

  const removeClusterer = () => {
    if (clustererRef.current) {
      clustererRef.current.clear();
      clustererRef.current = null;
    }
  };

  // === Polyline ===
  const addPolyline = () => {
    if (!kakao || !map) return;
    const path = POLYLINE_PATH.map((p) => new kakao.maps.LatLng(p.lat, p.lng));
    const polyline = new kakao.maps.Polyline({
      map,
      path,
      strokeWeight: 3,
      strokeColor: "#3182F6",
      strokeOpacity: 0.8,
      strokeStyle: "solid",
      endArrow: true,
    }) as KakaoPolylineInstance;
    setPolylines((prev) => [...prev, polyline]);
  };

  const removeAllPolylines = () => {
    polylines.forEach((p) => p.setMap(null));
    setPolylines([]);
  };

  // === Polygon ===
  const addPolygon = () => {
    if (!kakao || !map) return;
    const path = POLYGON_PATH.map((p) => new kakao.maps.LatLng(p.lat, p.lng));
    const polygon = new kakao.maps.Polygon({
      map,
      path,
      strokeWeight: 2,
      strokeColor: "#3182F6",
      strokeOpacity: 0.8,
      strokeStyle: "dashed",
      fillColor: "#3182F6",
      fillOpacity: 0.3,
    }) as KakaoPolygonInstance;
    setPolygons((prev) => [...prev, polygon]);
  };

  const removeAllPolygons = () => {
    polygons.forEach((p) => p.setMap(null));
    setPolygons([]);
  };

  // === Rectangle ===
  const addRectangle = () => {
    if (!kakao || !map) return;
    const sw = new kakao.maps.LatLng(33.45, 126.56);
    const ne = new kakao.maps.LatLng(33.46, 126.58);
    const bounds = new kakao.maps.LatLngBounds(sw, ne);
    const rectangle = new kakao.maps.Rectangle({
      map,
      bounds,
      strokeWeight: 2,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      fillColor: "#FF0000",
      fillOpacity: 0.2,
    }) as KakaoRectangleInstance;
    setRectangles((prev) => [...prev, rectangle]);
  };

  const removeAllRectangles = () => {
    rectangles.forEach((r) => r.setMap(null));
    setRectangles([]);
  };

  // === Ellipse ===
  const addEllipse = () => {
    if (!kakao || !map) return;
    const center = new kakao.maps.LatLng(
      SAMPLE_POSITIONS.center.lat,
      SAMPLE_POSITIONS.center.lng,
    );
    const ellipse = new kakao.maps.Ellipse({
      map,
      center,
      rx: 200,
      ry: 300,
      strokeWeight: 2,
      strokeColor: "#00FF00",
      strokeOpacity: 0.8,
      fillColor: "#00FF00",
      fillOpacity: 0.2,
    }) as KakaoEllipseInstance;
    setEllipses((prev) => [...prev, ellipse]);
  };

  const removeAllEllipses = () => {
    ellipses.forEach((e) => e.setMap(null));
    setEllipses([]);
  };

  // === CustomOverlay ===
  const addCustomOverlay = () => {
    if (!kakao || !map) return;
    const pos = new kakao.maps.LatLng(
      SAMPLE_POSITIONS.offset1.lat,
      SAMPLE_POSITIONS.offset1.lng,
    );
    const content = document.createElement("div");
    content.innerHTML =
      '<div style="padding:8px;background:#fff;border:2px solid #3182F6;border-radius:4px;">커스텀 오버레이</div>';
    const overlay = new kakao.maps.CustomOverlay({
      map,
      position: pos,
      content,
      xAnchor: 0.5,
      yAnchor: 1,
    }) as KakaoCustomOverlayInstance;
    setCustomOverlays((prev) => [...prev, overlay]);
  };

  const removeAllCustomOverlays = () => {
    customOverlays.forEach((o) => o.setMap(null));
    setCustomOverlays([]);
  };

  // === 지도 오버레이 (TRAFFIC, TERRAIN 등) ===
  const addOverlayMapType = (typeId: keyof typeof MAP_TYPE_ID) => {
    if (!kakao || !map) return;
    const id = kakao.maps.MapTypeId?.[typeId];
    if (id != null) map.addOverlayMapTypeId(id);
  };

  const removeOverlayMapType = (typeId: keyof typeof MAP_TYPE_ID) => {
    if (!kakao || !map) return;
    const id = kakao.maps.MapTypeId?.[typeId];
    if (id != null) map.removeOverlayMapTypeId(id);
  };

  // === 기타 ===
  const toggleMarker = (visible: boolean) => {
    if (!mapResult?.marker) return;
    mapResult.marker.setVisible(visible);
  };

  const openInfowindow = () => {
    if (!mapResult?.map || !mapResult?.infowindow || !mapResult?.marker) return;
    mapResult.infowindow.open(mapResult.map, mapResult.marker);
  };

  const closeInfowindow = () => {
    if (!mapResult?.infowindow) return;
    mapResult.infowindow.close();
  };

  const toggleCircle = (show: boolean) => {
    if (!mapResult?.circle || !mapResult?.map) return;
    mapResult.circle.setMap(show ? mapResult.map : null);
  };

  const setCircleRadius = (radius: number) => {
    if (!mapResult?.circle) return;
    mapResult.circle.setRadius(radius);
  };

  const setDraggable = (v: boolean) => {
    if (!map) return;
    map.setDraggable(v);
  };

  const setZoomable = (v: boolean) => {
    if (!map) return;
    map.setZoomable(v);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-title-3 font-bold text-gray-900 border-b border-gray-200 pb-2 sticky top-0 bg-white z-10">
        기능 테스트 시나리오
      </h2>

      {/* 시나리오 1: 지도 기본 */}
      <Card className="p-4 space-y-3">
        <h3 className="text-title-3 font-semibold text-gray-900">
          1. 지도 기본
        </h3>
        <p className="text-caption-3 text-text-caption">
          중심 이동, 레벨 변경, 드래그·줌 설정
        </p>
        <div className="flex flex-wrap gap-1.5">
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={() =>
              setCenter(
                SAMPLE_POSITIONS.center.lat,
                SAMPLE_POSITIONS.center.lng,
              )
            }
          >
            중심: 기본(제주)
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={() =>
              setCenter(SAMPLE_POSITIONS.seoul.lat, SAMPLE_POSITIONS.seoul.lng)
            }
          >
            중심: 서울
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={() =>
              setCenter(SAMPLE_POSITIONS.busan.lat, SAMPLE_POSITIONS.busan.lng)
            }
          >
            중심: 부산
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={() =>
              panTo(SAMPLE_POSITIONS.center.lat, SAMPLE_POSITIONS.center.lng)
            }
          >
            panTo 기본
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={() => panBy(100, 50)}
          >
            panBy (100, 50)
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={() =>
              jump(SAMPLE_POSITIONS.seoul.lat, SAMPLE_POSITIONS.seoul.lng, 5)
            }
          >
            jump 서울 레벨5
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={() => setLevel(1)}
          >
            레벨 1
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={() => setLevel(5)}
          >
            레벨 5
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={() => setLevel(10)}
          >
            레벨 10
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={() => setLevel(3, true)}
          >
            레벨 3 (애니메이션)
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={() => setDraggable(true)}
          >
            드래그 ON
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={() => setDraggable(false)}
          >
            드래그 OFF
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={() => setZoomable(true)}
          >
            휠 줌 ON
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={() => setZoomable(false)}
          >
            휠 줌 OFF
          </Button>
        </div>
        {hasMap && (
          <p className="text-caption-3 text-text-caption">
            중심: {JSON.stringify(getCenterInfo())} / 레벨:{" "}
            {getLevelInfo() ?? "-"}
          </p>
        )}
      </Card>

      {/* 시나리오 2: 지도 타입 */}
      <Card className="p-4 space-y-3">
        <h3 className="text-title-3 font-semibold text-gray-900">
          2. 지도 타입
        </h3>
        <p className="text-caption-3 text-text-caption">
          setMapTypeId: ROADMAP, SKYVIEW, HYBRID
        </p>
        <div className="flex flex-wrap gap-1.5">
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={() => setMapTypeId("ROADMAP")}
          >
            일반지도
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={() => setMapTypeId("SKYVIEW")}
          >
            스카이뷰
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={() => setMapTypeId("HYBRID")}
          >
            하이브리드
          </Button>
        </div>
      </Card>

      {/* 시나리오 3: 지도 오버레이 */}
      <Card className="p-4 space-y-3">
        <h3 className="text-title-3 font-semibold text-gray-900">
          3. 지도 오버레이
        </h3>
        <p className="text-caption-3 text-text-caption">
          addOverlayMapTypeId: TRAFFIC, TERRAIN, BICYCLE
        </p>
        <div className="flex flex-wrap gap-1.5">
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={() => addOverlayMapType("TRAFFIC")}
          >
            교통정보 추가
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={() => removeOverlayMapType("TRAFFIC")}
          >
            교통정보 제거
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={() => addOverlayMapType("TERRAIN")}
          >
            지형도 추가
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={() => removeOverlayMapType("TERRAIN")}
          >
            지형도 제거
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={() => addOverlayMapType("BICYCLE")}
          >
            자전거도로 추가
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={() => removeOverlayMapType("BICYCLE")}
          >
            자전거도로 제거
          </Button>
        </div>
      </Card>

      {/* 시나리오 4: Bounds */}
      <Card className="p-4 space-y-3">
        <h3 className="text-title-3 font-semibold text-gray-900">
          4. Bounds (영역)
        </h3>
        <p className="text-caption-3 text-text-caption">
          getBounds, setBounds, sw/ne 좌표
        </p>
        <div className="flex flex-wrap gap-1.5">
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={setBounds}
          >
            setBounds (영역 설정)
          </Button>
        </div>
        {hasMap && getBoundsInfo() && (
          <p className="text-caption-3 text-text-caption">
            SW: ({getBoundsInfo()!.sw.lat.toFixed(5)},{" "}
            {getBoundsInfo()!.sw.lng.toFixed(5)}) / NE: (
            {getBoundsInfo()!.ne.lat.toFixed(5)},{" "}
            {getBoundsInfo()!.ne.lng.toFixed(5)})
          </p>
        )}
      </Card>

      {/* 시나리오 5: 마커 / 인포윈도우 */}
      <Card className="p-4 space-y-3">
        <h3 className="text-title-3 font-semibold text-gray-900">
          5. 마커 · 인포윈도우
        </h3>
        <p className="text-caption-3 text-text-caption">
          마커 표시/숨김, 인포윈도우 열기/닫기
        </p>
        <div className="flex flex-wrap gap-1.5">
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={() => toggleMarker(true)}
          >
            마커 표시
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={() => toggleMarker(false)}
          >
            마커 숨김
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={openInfowindow}
          >
            인포윈도우 열기
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={closeInfowindow}
          >
            인포윈도우 닫기
          </Button>
        </div>
      </Card>

      {/* 시나리오 6: 커스텀 마커 */}
      <Card className="p-4 space-y-3">
        <h3 className="text-title-3 font-semibold text-gray-900">
          6. 커스텀 마커
        </h3>
        <p className="text-caption-3 text-text-caption">
          MarkerImage로 색상별 마커 추가
        </p>
        <div className="flex flex-wrap gap-1.5">
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={() =>
              addCustomMarker(
                "red",
                SAMPLE_POSITIONS.offset1.lat,
                SAMPLE_POSITIONS.offset1.lng,
              )
            }
          >
            빨간 마커 추가
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={() =>
              addCustomMarker(
                "blue",
                SAMPLE_POSITIONS.offset2.lat,
                SAMPLE_POSITIONS.offset2.lng,
              )
            }
          >
            파란 마커 추가
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={() =>
              addCustomMarker(
                "green",
                SAMPLE_POSITIONS.center.lat,
                SAMPLE_POSITIONS.center.lng,
              )
            }
          >
            초록 마커 추가
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={removeAllCustomMarkers}
          >
            커스텀 마커 모두 제거
          </Button>
        </div>
        <p className="text-caption-3 text-text-caption">
          현재 커스텀 마커: {customMarkers.length}개
        </p>
      </Card>

      {/* 시나리오 7: 여러 마커 */}
      <Card className="p-4 space-y-3">
        <h3 className="text-title-3 font-semibold text-gray-900">
          7. 여러 마커
        </h3>
        <p className="text-caption-3 text-text-caption">
          여러 위치에 마커 추가
        </p>
        <div className="flex flex-wrap gap-1.5">
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={addMultipleMarkers}
          >
            여러 마커 추가
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={removeMultipleMarkers}
          >
            여러 마커 제거
          </Button>
        </div>
        <p className="text-caption-3 text-text-caption">
          현재 마커: {clusterMarkersRef.current.length}개
        </p>
      </Card>

      {/* 시나리오 8: 클러스터링 */}
      <Card className="p-4 space-y-3">
        <h3 className="text-title-3 font-semibold text-gray-900">
          8. 마커 클러스터링
        </h3>
        <p className="text-caption-3 text-text-caption">
          MarkerClusterer로 마커 그룹화
        </p>
        <div className="flex flex-wrap gap-1.5">
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={addClusterer}
          >
            클러스터링 적용
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={removeClusterer}
          >
            클러스터링 제거
          </Button>
        </div>
        <p className="text-caption-3 text-text-caption">
          클러스터링: {clustererRef.current ? "활성" : "비활성"}
        </p>
      </Card>

      {/* 시나리오 9: Circle */}
      <Card className="p-4 space-y-3">
        <h3 className="text-title-3 font-semibold text-gray-900">9. Circle</h3>
        <p className="text-caption-3 text-text-caption">
          원 표시/숨김, 반지름 변경
        </p>
        <div className="flex flex-wrap gap-1.5">
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={() => toggleCircle(true)}
          >
            Circle 표시
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={() => toggleCircle(false)}
          >
            Circle 숨김
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={() => setCircleRadius(50)}
          >
            반지름 50m
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={() => setCircleRadius(100)}
          >
            반지름 100m
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={() => setCircleRadius(200)}
          >
            반지름 200m
          </Button>
        </div>
      </Card>

      {/* 시나리오 10: Polyline */}
      <Card className="p-4 space-y-3">
        <h3 className="text-title-3 font-semibold text-gray-900">
          10. Polyline (선)
        </h3>
        <p className="text-caption-3 text-text-caption">
          경로를 따라 선 그리기
        </p>
        <div className="flex flex-wrap gap-1.5">
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={addPolyline}
          >
            Polyline 추가
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={removeAllPolylines}
          >
            Polyline 모두 제거
          </Button>
        </div>
        <p className="text-caption-3 text-text-caption">
          현재 Polyline: {polylines.length}개
        </p>
      </Card>

      {/* 시나리오 11: Polygon */}
      <Card className="p-4 space-y-3">
        <h3 className="text-title-3 font-semibold text-gray-900">
          11. Polygon (다각형)
        </h3>
        <p className="text-caption-3 text-text-caption">
          경로로 다각형 영역 그리기
        </p>
        <div className="flex flex-wrap gap-1.5">
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={addPolygon}
          >
            Polygon 추가
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={removeAllPolygons}
          >
            Polygon 모두 제거
          </Button>
        </div>
        <p className="text-caption-3 text-text-caption">
          현재 Polygon: {polygons.length}개
        </p>
      </Card>

      {/* 시나리오 12: Rectangle */}
      <Card className="p-4 space-y-3">
        <h3 className="text-title-3 font-semibold text-gray-900">
          12. Rectangle (사각형)
        </h3>
        <p className="text-caption-3 text-text-caption">
          Bounds로 사각형 영역 그리기
        </p>
        <div className="flex flex-wrap gap-1.5">
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={addRectangle}
          >
            Rectangle 추가
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={removeAllRectangles}
          >
            Rectangle 모두 제거
          </Button>
        </div>
        <p className="text-caption-3 text-text-caption">
          현재 Rectangle: {rectangles.length}개
        </p>
      </Card>

      {/* 시나리오 13: Ellipse */}
      <Card className="p-4 space-y-3">
        <h3 className="text-title-3 font-semibold text-gray-900">
          13. Ellipse (타원)
        </h3>
        <p className="text-caption-3 text-text-caption">
          중심과 rx, ry로 타원 그리기
        </p>
        <div className="flex flex-wrap gap-1.5">
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={addEllipse}
          >
            Ellipse 추가
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={removeAllEllipses}
          >
            Ellipse 모두 제거
          </Button>
        </div>
        <p className="text-caption-3 text-text-caption">
          현재 Ellipse: {ellipses.length}개
        </p>
      </Card>

      {/* 시나리오 14: CustomOverlay */}
      <Card className="p-4 space-y-3">
        <h3 className="text-title-3 font-semibold text-gray-900">
          14. CustomOverlay
        </h3>
        <p className="text-caption-3 text-text-caption">
          커스텀 HTML 요소를 지도에 오버레이
        </p>
        <div className="flex flex-wrap gap-1.5">
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={addCustomOverlay}
          >
            CustomOverlay 추가
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!hasMap}
            onClick={removeAllCustomOverlays}
          >
            CustomOverlay 모두 제거
          </Button>
        </div>
        <p className="text-caption-3 text-text-caption">
          현재 CustomOverlay: {customOverlays.length}개
        </p>
      </Card>

      {/* 시나리오 15: 이벤트 로그 */}
      <Card className="p-4 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h3 className="text-title-3 font-semibold text-gray-900">
              15. 이벤트 로그
            </h3>
            <p className="text-caption-3 text-text-caption">
              click, center_changed, zoom_changed (최대 50개)
            </p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClearLog}>
            비우기
          </Button>
        </div>
        <div className="rounded-lg border border-border-default bg-gray-50 p-2 max-h-48 overflow-y-auto font-mono text-caption-3">
          {eventLog.length === 0 ? (
            <p className="text-text-caption">
              지도를 클릭·이동·줌하면 로그가 쌓입니다.
            </p>
          ) : (
            <ul className="space-y-1">
              {[...eventLog].reverse().map((e, i) => (
                <li key={`${e.t}-${i}`} className="text-gray-700">
                  [{new Date(e.t).toLocaleTimeString()}] {e.type}
                  {e.lat != null &&
                    ` (${e.lat.toFixed(5)}, ${e.lng?.toFixed(5)})`}
                  {e.level != null && ` level=${e.level}`}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Card>
    </div>
  );
}
