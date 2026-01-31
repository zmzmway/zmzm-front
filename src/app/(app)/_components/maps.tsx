"use client";

import { useRef, useCallback } from "react";
import Script from "next/script";
import { init } from "./utils";
import type { MapInitResult } from "./utils";
import { KAKAO_SCRIPT } from "./constants";

type MapsProps = {
  onMapReady?: (result: MapInitResult) => void;
};

export const Maps = ({ onMapReady }: MapsProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  const handleMapReady = useCallback(
    (result: MapInitResult) => {
      onMapReady?.(result);
    },
    [onMapReady]
  );

  return (
    <>
      <div ref={mapRef} className="w-full h-full bg-bg-neutral" />
      <Script
        src={KAKAO_SCRIPT.URL}
        strategy={KAKAO_SCRIPT.STRATEGY}
        onReady={() => init(mapRef.current, handleMapReady)}
      />
    </>
  );
};