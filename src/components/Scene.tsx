import { useEffect, useRef } from "react";
import * as THREE from "three";

/** A procedural sculpture: no remote assets or model downloads. */
export default function Scene({ enabled }: { enabled: boolean }) {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = host.current;
    if (!container || !enabled) return;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "low-power",
      });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0, 0, 9);
    scene.add(new THREE.AmbientLight(0xe1d9cb, 2.2));
    const key = new THREE.DirectionalLight(0xffeee0, 5);
    key.position.set(3, 5, 4);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0xff5b28, 6);
    rim.position.set(-4, -1, 2);
    scene.add(rim);
    const cool = new THREE.DirectionalLight(0xa4c6dd, 3);
    cool.position.set(1, 2, -3);
    scene.add(cool);
    const sculpture = new THREE.Group();
    scene.add(sculpture);
    const geometry = new THREE.TorusGeometry(1.5, 0.085, 12, 112);
    const materials: THREE.MeshStandardMaterial[] = [];
    const rings = Array.from({ length: 15 }, (_, i) => {
      const material = new THREE.MeshStandardMaterial({
        color: i % 4 === 0 ? 0xfe642c : 0x8b9293,
        metalness: 0.8,
        roughness: 0.23,
      });
      materials.push(material);
      const ring = new THREE.Mesh(geometry, material);
      ring.rotation.x = (i * Math.PI) / 15;
      sculpture.add(ring);
      return ring;
    });
    const coreGeometry = new THREE.IcosahedronGeometry(0.58, 1);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0xff632e,
      emissive: 0xff3b0b,
      emissiveIntensity: 0.3,
      metalness: 0.65,
      roughness: 0.32,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    sculpture.add(core);
    let visible = true,
      frame = 0,
      progress = 0,
      target = 0;
    const pointer = { x: 0, y: 0 };
    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      renderer.setSize(width, height);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };
    const scroll = () => {
      target = Math.min(window.scrollY / window.innerHeight, 2);
    };
    const move = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 0.3;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 0.2;
    };
    const render = (time: number) => {
      if (!visible || document.hidden) {
        frame = 0;
        return;
      }
      progress += (target - progress) * 0.045;
      sculpture.rotation.set(
        0.32 + pointer.y + progress * 0.5,
        time * 0.000075 + pointer.x + progress * 0.6,
        -0.32 + progress * 0.2,
      );
      rings.forEach((ring, i) => {
        ring.position.y = (i - 7) * progress * 0.075;
        ring.rotation.y = progress * (i - 7) * 0.09;
      });
      core.rotation.y = time * 0.0002;
      renderer.render(scene, camera);
      frame = requestAnimationFrame(render);
    };
    const restart = () => {
      if (visible && !document.hidden && !frame)
        frame = requestAnimationFrame(render);
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      restart();
    });
    observer.observe(container);
    const sizes = new ResizeObserver(resize);
    sizes.observe(container);
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("visibilitychange", restart);
    const contextLost = (event: Event) => {
      event.preventDefault();
      visible = false;
      container.dataset.lost = "true";
    };
    renderer.domElement.addEventListener("webglcontextlost", contextLost);
    resize();
    scroll();
    restart();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      sizes.disconnect();
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("visibilitychange", restart);
      renderer.domElement.removeEventListener("webglcontextlost", contextLost);
      geometry.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      materials.forEach((m) => m.dispose());
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [enabled]);
  return (
    <div className="sculpture" aria-hidden="true">
      <div className="orb-fallback">
        <i />
        <i />
        <i />
        <i />
        <i />
        <span />
      </div>
      <div ref={host} className="canvas-host" />
    </div>
  );
}
