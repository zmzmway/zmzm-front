'use client';

import Script from 'next/script';
import { useRef } from 'react';

interface KakaoMaps {
  maps: {
    load: (callback: () => void) => void;
    LatLng: new (lat: number, lng: number) => { lat: () => number; lng: () => number };
    Map: new (container: HTMLElement, options: { center: { lat: () => number; lng: () => number }; level: number }) => unknown;
  };
}

declare global {
  interface Window {
    kakao: KakaoMaps;
  }
}

export default function MapsPage() {
  const mapRef = useRef<HTMLDivElement>(null);

  const initMap = () => {
    if (window.kakao && window.kakao.maps) {
      window.kakao.maps.load(() => {
        if (mapRef.current) {
          const options = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
          };
          new window.kakao.maps.Map(mapRef.current, options);
        }
      });
    }
  };

  return (
    <div className="w-full h-[calc(100vh-80px)] p-4 flex flex-col gap-4">
      <h1 className="text-title-2 font-bold">Kakao Map Demo</h1>
      <div 
        ref={mapRef} 
        className="w-full flex-1 rounded-xl border border-gray-200 shadow-sm bg-gray-100"
      />
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JS_KEY}&autoload=false`}
        strategy="afterInteractive"
        onReady={initMap}
      />
    </div>
  );
}
