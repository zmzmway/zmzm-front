"use client";

import { useState, useCallback, useEffect } from "react";
import { Maps } from "./_components/maps";
import { DemoScenarios, type EventLogEntry } from "./_components/demo-scenarios";
import type { MapInitResult } from "./_components/utils";

const MAX_EVENT_LOG = 50;

function useMapEventLog(mapResult: MapInitResult | null) {
  const [eventLog, setEventLog] = useState<EventLogEntry[]>([]);

  useEffect(() => {
    if (!mapResult?.map || typeof window === "undefined" || !window.kakao) return;
    const kakao = window.kakao;

    const hClick = (e?: { latLng?: { getLat: () => number; getLng: () => number } }) => {
      setEventLog((prev) =>
        [...prev.slice(-(MAX_EVENT_LOG - 1)), {
          t: Date.now(),
          type: "click",
          lat: e?.latLng?.getLat(),
          lng: e?.latLng?.getLng(),
        }].slice(-MAX_EVENT_LOG)
      );
    };
    const hCenter = () => {
      setEventLog((prev) =>
        [...prev.slice(-(MAX_EVENT_LOG - 1)), { t: Date.now(), type: "center_changed" }].slice(
          -MAX_EVENT_LOG
        )
      );
    };
    const hZoom = () => {
      const level = mapResult.map.getLevel();
      setEventLog((prev) =>
        [...prev.slice(-(MAX_EVENT_LOG - 1)), { t: Date.now(), type: "zoom_changed", level }].slice(
          -MAX_EVENT_LOG
        )
      );
    };

    kakao.maps.event.addListener(mapResult.map, "click", hClick);
    kakao.maps.event.addListener(mapResult.map, "center_changed", hCenter);
    kakao.maps.event.addListener(mapResult.map, "zoom_changed", hZoom);

    return () => {
      kakao.maps.event.removeListener(mapResult.map, "click", hClick);
      kakao.maps.event.removeListener(mapResult.map, "center_changed", hCenter);
      kakao.maps.event.removeListener(mapResult.map, "zoom_changed", hZoom);
    };
  }, [mapResult?.map]);

  const clearLog = useCallback(() => setEventLog([]), []);

  return { eventLog, clearLog };
}

export default function RootPage() {
  const [mapResult, setMapResult] = useState<MapInitResult | null>(null);
  const { eventLog, clearLog } = useMapEventLog(mapResult);

  return (
    <div className="h-screen flex flex-col bg-gray-50 overflow-hidden">
      <header className="border-b border-gray-200 bg-white px-4 py-3 shrink-0">
        <h1 className="text-title-2 font-bold text-gray-900">기능 테스트 데모</h1>
        <p className="text-caption-2 text-text-caption mt-1">
          카카오맵 시나리오: 지도 기본, 지도 타입, 마커·인포윈도우, Circle, 이벤트 로그
        </p>
      </header>

      <main className="flex-1 flex overflow-hidden">
        {/* 지도 영역 - 왼쪽 풀 화면 */}
        <section className="flex-1 relative">
          <Maps onMapReady={setMapResult} />
        </section>

        {/* 시나리오 카드 - 오른쪽 사이드바 */}
        <section className="w-[420px] border-l border-gray-200 bg-white overflow-y-auto shrink-0">
          <div className="p-4">
            <DemoScenarios mapResult={mapResult} eventLog={eventLog} onClearLog={clearLog} />
          </div>
        </section>
      </main>
    </div>
  );
}
