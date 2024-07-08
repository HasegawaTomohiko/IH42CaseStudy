// components/LeafletMap.js
import React from 'react';
import dynamic from 'next/dynamic';
// クライアントサイドでのみレンダリングするためにdynamicを使用
const Map = dynamic(() => import('./Map'), {
  ssr: false
});

const LeafletMap = () => {
  return (
    <div style={{ height: "600px", width: "100%" }}>
      <Map />
    </div>
  );
};

export default LeafletMap;
