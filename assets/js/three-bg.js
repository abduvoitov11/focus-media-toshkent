/* ==========================================================================
   FOCUS MEDIA — Three.js Dynamic Cyber-Sphere & Interactive Particle Network
   ========================================================================== */

(function () {
  'use strict';

  const canvas = document.getElementById('three-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 28;

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Particle System
  const particleCount = 140;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  const velocities = [];

  const cyan = new THREE.Color(0x00e5ff);
  const blue = new THREE.Color(0x2563eb);
  const gold = new THREE.Color(0xf59e0b);

  for (let i = 0; i < particleCount; i++) {
    const x = (Math.random() - 0.5) * 55;
    const y = (Math.random() - 0.5) * 45;
    const z = (Math.random() - 0.5) * 35;

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;

    velocities.push({
      x: (Math.random() - 0.5) * 0.025,
      y: (Math.random() - 0.5) * 0.025,
      z: (Math.random() - 0.5) * 0.02
    });

    const rnd = Math.random();
    let col = cyan;
    if (rnd > 0.6) col = blue;
    else if (rnd > 0.4) col = gold;

    colors[i * 3] = col.r;
    colors[i * 3 + 1] = col.g;
    colors[i * 3 + 2] = col.b;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  // Particle Material
  const pMaterial = new THREE.PointsMaterial({
    size: 0.65,
    vertexColors: true,
    transparent: true,
    opacity: 0.75,
    blending: THREE.AdditiveBlending
  });

  const particleMesh = new THREE.Points(geometry, pMaterial);
  scene.add(particleMesh);

  // Connecting Lines Material
  const lineMaterial = new THREE.LineBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 0.18,
    blending: THREE.AdditiveBlending
  });

  const linesGeometry = new THREE.BufferGeometry();
  const lineMesh = new THREE.LineSegments(linesGeometry, lineMaterial);
  scene.add(lineMesh);

  // Central Rotating Icosahedron Frame
  const icoGeo = new THREE.IcosahedronGeometry(7.5, 1);
  const icoMat = new THREE.MeshBasicMaterial({
    color: 0x00e5ff,
    wireframe: true,
    transparent: true,
    opacity: 0.12
  });
  const icoMesh = new THREE.Mesh(icoGeo, icoMat);
  icoMesh.position.set(0, 0, -8);
  scene.add(icoMesh);

  // Mouse Parallax
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX - window.innerWidth / 2) * 0.0006;
    mouseY = (e.clientY - window.innerHeight / 2) * 0.0006;
  }, { passive: true });

  // Window Resize Handling
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  // Animation Loop
  let frame = 0;
  function animate() {
    requestAnimationFrame(animate);
    frame++;

    targetX += (mouseX - targetX) * 0.05;
    targetY += (mouseY - targetY) * 0.05;

    camera.position.x = targetX * 10;
    camera.position.y = -targetY * 10;
    camera.lookAt(scene.position);

    icoMesh.rotation.x += 0.0018;
    icoMesh.rotation.y += 0.0028;

    const pos = geometry.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] += velocities[i].x;
      pos[i * 3 + 1] += velocities[i].y;
      pos[i * 3 + 2] += velocities[i].z;

      // Bounce boundaries
      if (Math.abs(pos[i * 3]) > 28) velocities[i].x *= -1;
      if (Math.abs(pos[i * 3 + 1]) > 22) velocities[i].y *= -1;
      if (Math.abs(pos[i * 3 + 2]) > 18) velocities[i].z *= -1;
    }
    geometry.attributes.position.needsUpdate = true;

    // Connect close particles with lines
    const linePositions = [];
    const lineColors = [];
    const maxDist = 7.5;

    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < maxDist) {
          const alpha = 1.0 - (dist / maxDist);
          linePositions.push(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]);
          linePositions.push(pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]);

          lineColors.push(0.0, 0.9 * alpha, 1.0 * alpha);
          lineColors.push(0.0, 0.9 * alpha, 1.0 * alpha);
        }
      }
    }

    linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    linesGeometry.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));

    renderer.render(scene, camera);
  }

  animate();
})();
