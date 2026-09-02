/**
 * AAYUSH PATIDAR — 3D WEBGL INTERACTIVE SCENE
 * Powered by Three.js
 */

(function () {
  'use strict';

  // Check if Three.js is available
  if (typeof THREE === 'undefined') {
    console.warn('Three.js not loaded. Falling back to ambient background.');
    return;
  }

  const container = document.getElementById('webgl-canvas-container');
  if (!container) return;

  // Scene, Camera, Renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 25;

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  // Group for all interactive 3D elements
  const mainGroup = new THREE.Group();
  scene.add(mainGroup);

  // 1. Particle Cloud System
  const particleCount = window.innerWidth < 768 ? 400 : 900;
  const particleGeometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  const color1 = new THREE.Color(0x06b6d4); // Cyan
  const color2 = new THREE.Color(0x6366f1); // Indigo
  const color3 = new THREE.Color(0xa855f7); // Purple

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 80;
    positions[i3 + 1] = (Math.random() - 0.5) * 80;
    positions[i3 + 2] = (Math.random() - 0.5) * 60;

    // Gradient mix colors
    const mixedColor = color1.clone();
    const ratio = Math.random();
    if (ratio < 0.5) {
      mixedColor.lerp(color2, ratio * 2);
    } else {
      mixedColor.lerp(color3, (ratio - 0.5) * 2);
    }

    colors[i3] = mixedColor.r;
    colors[i3 + 1] = mixedColor.g;
    colors[i3 + 2] = mixedColor.b;
  }

  particleGeometry.setAttribute(
    'position',
    new THREE.BufferAttribute(positions, 3)
  );
  particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  // Particle Material
  const particleMaterial = new THREE.PointsMaterial({
    size: 0.28,
    vertexColors: true,
    transparent: true,
    opacity: 0.75,
    blending: THREE.AdditiveBlending
  });

  const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
  mainGroup.add(particleSystem);

  // 2. Holographic Geometric Core (Torus Knot + Icosahedron Wireframe)
  const coreGroup = new THREE.Group();
  coreGroup.position.set(10, 0, -5);

  // Outer wireframe icosahedron
  const icoGeo = new THREE.IcosahedronGeometry(5, 1);
  const icoMat = new THREE.MeshBasicMaterial({
    color: 0x22d3ee,
    wireframe: true,
    transparent: true,
    opacity: 0.25
  });
  const icoMesh = new THREE.Mesh(icoGeo, icoMat);
  coreGroup.add(icoMesh);

  // Inner glowing knot
  const knotGeo = new THREE.TorusKnotGeometry(2.4, 0.45, 100, 16);
  const knotMat = new THREE.MeshStandardMaterial({
    color: 0x6366f1,
    emissive: 0x38bdf8,
    emissiveIntensity: 0.4,
    roughness: 0.2,
    metalness: 0.8,
    wireframe: true
  });
  const knotMesh = new THREE.Mesh(knotGeo, knotMat);
  coreGroup.add(knotMesh);

  // Orbital Ring 1
  const ring1Geo = new THREE.RingGeometry(7, 7.08, 64);
  const ring1Mat = new THREE.MeshBasicMaterial({
    color: 0x8b5cf6,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.35
  });
  const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
  ring1.rotation.x = Math.PI / 3;
  coreGroup.add(ring1);

  // Orbital Ring 2
  const ring2Geo = new THREE.RingGeometry(8.5, 8.58, 64);
  const ring2Mat = new THREE.MeshBasicMaterial({
    color: 0x06b6d4,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.3
  });
  const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
  ring2.rotation.x = -Math.PI / 4;
  ring2.rotation.y = Math.PI / 6;
  coreGroup.add(ring2);

  mainGroup.add(coreGroup);

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  const pointLight1 = new THREE.PointLight(0x06b6d4, 2, 50);
  pointLight1.position.set(10, 10, 10);
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(0xa855f7, 2, 50);
  pointLight2.position.set(-10, -10, 10);
  scene.add(pointLight2);

  // Mouse Interactivity (Smoothed Parallax)
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  function onPointerMove(event) {
    mouseX = (event.clientX - windowHalfX) * 0.001;
    mouseY = (event.clientY - windowHalfY) * 0.001;
  }

  window.addEventListener('pointermove', onPointerMove, { passive: true });

  // Scroll Interactivity
  let scrollY = 0;
  function onScroll() {
    scrollY = window.scrollY || window.pageYOffset;
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  // Window Resize
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Responsive layout adjustments for 3D core
    if (window.innerWidth < 1024) {
      coreGroup.position.set(0, 0, -10);
      coreGroup.scale.set(0.65, 0.65, 0.65);
    } else {
      coreGroup.position.set(10, 0, -5);
      coreGroup.scale.set(1, 1, 1);
    }
  }

  window.addEventListener('resize', onWindowResize);
  onWindowResize();

  // Animation Loop
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    const elapsedTime = clock.getElapsedTime();

    // Lerp mouse
    targetX += (mouseX - targetX) * 0.05;
    targetY += (mouseY - targetY) * 0.05;

    // Rotate main particle cloud
    particleSystem.rotation.y = elapsedTime * 0.03 + targetX * 0.5;
    particleSystem.rotation.x = elapsedTime * 0.015 - targetY * 0.5;

    // Rotate core geometry
    icoMesh.rotation.x = elapsedTime * 0.15;
    icoMesh.rotation.y = elapsedTime * 0.2;

    knotMesh.rotation.x = -elapsedTime * 0.3;
    knotMesh.rotation.y = elapsedTime * 0.25;

    ring1.rotation.z = elapsedTime * 0.1;
    ring2.rotation.z = -elapsedTime * 0.08;

    // Subtle scroll movement
    mainGroup.position.y = -scrollY * 0.012;

    // Render
    renderer.render(scene, camera);
  }

  animate();
})();
