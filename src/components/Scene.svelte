<script lang="ts">
    import { macbookStore } from "../store";
    import { T } from "@threlte/core";
    import { useGltf, OrbitControls } from "@threlte/extras";

    const gltf = useGltf("models/macbook-14.glb");
</script>

<T.PerspectiveCamera makeDefault position={[5, 5, 5]} fov={50}>
    <OrbitControls />
</T.PerspectiveCamera>

<T.DirectionalLight position={[10, 10, 5]} intensity={1} />
<T.AmbientLight intensity={0.5} />

{#await gltf}
    <!-- Placeholder mientras carga -->
    <T.Mesh position={[0, 0.5, 0]} scale={10 * $macbookStore.scale}>
        <T.BoxGeometry args={[1, 1, 1]} />
        <T.MeshStandardMaterial color={$macbookStore.color} />
    </T.Mesh>
{:then { scene }}
    <!-- Tu modelo cargado -->
    <T is={scene} scale={1} />
{/await}
