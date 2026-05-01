"use client"

import * as THREE from "three"

type Cleanup = () => void

const thumbCtx = { count: 0, max: 8 }

export function initHeroScene(canvas: HTMLCanvasElement): Cleanup {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 200)
  camera.position.z = 40

  function resize() {
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    if (w === 0 || h === 0) return
    renderer.setSize(w, h, false)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
  }
  resize()
  const ro = new ResizeObserver(resize)
  ro.observe(canvas)

  const N = 280
  const positions = new Float32Array(N * 3)
  const velocities = new Float32Array(N * 3)
  for (let i = 0; i < N; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 80
    positions[i * 3 + 1] = (Math.random() - 0.5) * 50
    positions[i * 3 + 2] = (Math.random() - 0.5) * 30
    velocities[i * 3] = (Math.random() - 0.5) * 0.02
    velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02
    velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.01
  }
  const pGeo = new THREE.BufferGeometry()
  pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3))
  const pMat = new THREE.PointsMaterial({
    color: 0x8fc4ff,
    size: 0.18,
    transparent: true,
    opacity: 0.7,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  })
  const points = new THREE.Points(pGeo, pMat)
  scene.add(points)

  let mx = 0
  let my = 0
  let tx = 0
  let ty = 0
  const onMove = (e: MouseEvent) => {
    mx = (e.clientX / window.innerWidth) * 2 - 1
    my = (e.clientY / window.innerHeight) * 2 - 1
  }
  window.addEventListener("mousemove", onMove)

  const clock = new THREE.Clock()
  let raf = 0
  function tick() {
    const t = clock.getElapsedTime()
    const arr = pGeo.attributes.position.array as Float32Array
    for (let i = 0; i < N; i++) {
      arr[i * 3] += velocities[i * 3]
      arr[i * 3 + 1] += velocities[i * 3 + 1]
      arr[i * 3 + 2] += velocities[i * 3 + 2]
      if (arr[i * 3] > 40) arr[i * 3] = -40
      if (arr[i * 3] < -40) arr[i * 3] = 40
      if (arr[i * 3 + 1] > 25) arr[i * 3 + 1] = -25
      if (arr[i * 3 + 1] < -25) arr[i * 3 + 1] = 25
      if (arr[i * 3 + 2] > 15) arr[i * 3 + 2] = -15
      if (arr[i * 3 + 2] < -15) arr[i * 3 + 2] = 15
    }
    pGeo.attributes.position.needsUpdate = true

    tx += (mx - tx) * 0.04
    ty += (my - ty) * 0.04
    camera.position.x = tx * 6
    camera.position.y = -ty * 4
    camera.lookAt(0, 0, 0)

    points.rotation.z = t * 0.02

    renderer.render(scene, camera)
    raf = requestAnimationFrame(tick)
  }
  tick()

  return () => {
    cancelAnimationFrame(raf)
    ro.disconnect()
    window.removeEventListener("mousemove", onMove)
    pGeo.dispose()
    pMat.dispose()
    renderer.dispose()
  }
}

export function initContactScene(canvas: HTMLCanvasElement): Cleanup {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 200)
  camera.position.z = 30

  function resize() {
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    if (w === 0 || h === 0) return
    renderer.setSize(w, h, false)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
  }
  resize()
  const ro = new ResizeObserver(resize)
  ro.observe(canvas)

  const N = 1200
  const pos = new Float32Array(N * 3)
  const col = new Float32Array(N * 3)
  const c1 = new THREE.Color("#5d9eff")
  const c2 = new THREE.Color("#1e4fa8")
  for (let i = 0; i < N; i++) {
    const r = Math.random() * 30
    const a = Math.random() * Math.PI * 2
    pos[i * 3] = Math.cos(a) * r
    pos[i * 3 + 1] = (Math.random() - 0.5) * 20
    pos[i * 3 + 2] = Math.sin(a) * r - 10
    const cm = c1.clone().lerp(c2, r / 30)
    col[i * 3] = cm.r
    col[i * 3 + 1] = cm.g
    col[i * 3 + 2] = cm.b
  }
  const g = new THREE.BufferGeometry()
  g.setAttribute("position", new THREE.BufferAttribute(pos, 3))
  g.setAttribute("color", new THREE.BufferAttribute(col, 3))
  const m = new THREE.PointsMaterial({
    size: 0.12,
    vertexColors: true,
    transparent: true,
    opacity: 0.7,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  })
  const pts = new THREE.Points(g, m)
  scene.add(pts)

  const clock = new THREE.Clock()
  let raf = 0
  function tick() {
    const t = clock.getElapsedTime()
    pts.rotation.y = t * 0.08
    pts.rotation.x = Math.sin(t * 0.1) * 0.1
    renderer.render(scene, camera)
    raf = requestAnimationFrame(tick)
  }
  tick()

  return () => {
    cancelAnimationFrame(raf)
    ro.disconnect()
    g.dispose()
    m.dispose()
    renderer.dispose()
  }
}

export type ThumbKind = "sphere" | "torus" | "cube" | "particles" | "galaxy"

export function makeProjectThumb(canvas: HTMLCanvasElement, kind: ThumbKind, color: string): Cleanup {
  let renderer: THREE.WebGLRenderer | null = null
  let scene: THREE.Scene | null = null
  let camera: THREE.PerspectiveCamera | null = null
  let mesh: THREE.Mesh | THREE.Points | null = null
  let raf = 0
  let ro: ResizeObserver | null = null
  let active = false

  function start() {
    if (active) return
    if (thumbCtx.count >= thumbCtx.max) return
    active = true
    thumbCtx.count++

    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25))
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
    camera.position.z = 5

    function resize() {
      if (!renderer || !camera) return
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      if (w === 0 || h === 0) return
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    resize()
    ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const c = new THREE.Color(color || "#5d9eff")

    if (kind === "sphere") {
      mesh = new THREE.Mesh(
        new THREE.SphereGeometry(1.6, 24, 24),
        new THREE.MeshBasicMaterial({ color: c, wireframe: true, transparent: true, opacity: 0.7 }),
      )
    } else if (kind === "torus") {
      mesh = new THREE.Mesh(
        new THREE.TorusKnotGeometry(1.2, 0.4, 80, 12),
        new THREE.MeshBasicMaterial({ color: c, wireframe: true, transparent: true, opacity: 0.7 }),
      )
    } else if (kind === "cube") {
      mesh = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.6, 1),
        new THREE.MeshBasicMaterial({ color: c, wireframe: true, transparent: true, opacity: 0.7 }),
      )
    } else if (kind === "particles") {
      const N = 300
      const pp = new Float32Array(N * 3)
      for (let i = 0; i < N; i++) {
        const r = 1.5 + Math.random() * 0.6
        const tt = Math.random() * Math.PI * 2
        const p = Math.acos(2 * Math.random() - 1)
        pp[i * 3] = r * Math.sin(p) * Math.cos(tt)
        pp[i * 3 + 1] = r * Math.sin(p) * Math.sin(tt)
        pp[i * 3 + 2] = r * Math.cos(p)
      }
      const g = new THREE.BufferGeometry()
      g.setAttribute("position", new THREE.BufferAttribute(pp, 3))
      mesh = new THREE.Points(
        g,
        new THREE.PointsMaterial({ color: c, size: 0.05, transparent: true, opacity: 0.9 }),
      )
    } else if (kind === "galaxy") {
      const N = 800
      const pp = new Float32Array(N * 3)
      const cc = new Float32Array(N * 3)
      const c1 = new THREE.Color("#8fc4ff")
      const c2 = new THREE.Color("#5d9eff")
      for (let i = 0; i < N; i++) {
        const r = Math.random() * 2
        const branch = (i % 3) * ((Math.PI * 2) / 3)
        const a = branch + r * 1.4 + (Math.random() - 0.5) * 0.4
        pp[i * 3] = Math.cos(a) * r
        pp[i * 3 + 1] = (Math.random() - 0.5) * 0.3
        pp[i * 3 + 2] = Math.sin(a) * r
        const cm = c1.clone().lerp(c2, r / 2)
        cc[i * 3] = cm.r
        cc[i * 3 + 1] = cm.g
        cc[i * 3 + 2] = cm.b
      }
      const g = new THREE.BufferGeometry()
      g.setAttribute("position", new THREE.BufferAttribute(pp, 3))
      g.setAttribute("color", new THREE.BufferAttribute(cc, 3))
      mesh = new THREE.Points(
        g,
        new THREE.PointsMaterial({
          size: 0.04,
          vertexColors: true,
          transparent: true,
          opacity: 0.9,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        }),
      )
    } else {
      mesh = new THREE.Mesh(
        new THREE.OctahedronGeometry(1.6, 0),
        new THREE.MeshBasicMaterial({ color: c, wireframe: true, transparent: true, opacity: 0.7 }),
      )
    }
    scene.add(mesh)

    const clock = new THREE.Clock()
    function tick() {
      if (!mesh || !renderer || !scene || !camera) return
      const t = clock.getElapsedTime()
      mesh.rotation.x = t * 0.3
      mesh.rotation.y = t * 0.4
      renderer.render(scene, camera)
      raf = requestAnimationFrame(tick)
    }
    tick()
  }

  function stop() {
    if (!active) return
    active = false
    thumbCtx.count--
    cancelAnimationFrame(raf)
    if (ro) ro.disconnect()
    if (mesh) {
      const geom = (mesh as THREE.Mesh).geometry
      const mat = (mesh as THREE.Mesh).material as THREE.Material | THREE.Material[]
      if (geom) geom.dispose()
      if (Array.isArray(mat)) mat.forEach((m) => m.dispose())
      else if (mat) mat.dispose()
    }
    if (renderer) {
      renderer.dispose()
      const gl = renderer.getContext()
      const ext = gl.getExtension("WEBGL_lose_context")
      if (ext) ext.loseContext()
    }
    renderer = null
    scene = null
    camera = null
    mesh = null
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) start()
        else stop()
      })
    },
    { rootMargin: "200px" },
  )
  io.observe(canvas)

  return () => {
    io.disconnect()
    stop()
  }
}
