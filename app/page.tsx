import { useEffect } from "react";
import * as THREE from 'three';

export default function Home() {
  useEffect(() => {
    const loader = new THREE.Loader();
    loader.load('model.json', function (geometry) {
        const material = new THREE.MeshBasicMaterial();
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
    });
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <canvas></canvas>
    </main>
  );
}
