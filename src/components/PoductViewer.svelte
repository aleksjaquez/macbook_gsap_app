<script>
    import { macbookStore, setColor, setScale } from "../store";
    import { clsx } from "clsx";
    import { Canvas } from "@threlte/core";
    import Scene from "./Scene.svelte";
</script>

<section id="product-viewer">
    <h2>Take a closer look</h2>
    <div class="controls">
        <p class="info">
            Macbook Pro {$macbookStore.scale} in {$macbookStore.color}
        </p>

        <div class="flex-center gap-5 mt-5">
            <div class="color-control">
                <button
                    aria-label="silver"
                    class={clsx(
                        "bg-neutral-300",
                        $macbookStore.color === "#adb5bd" && "active"
                    )}
                    onclick={() => setColor("#adb5bd")}
                ></button>
                <button
                    aria-label="space gray"
                    class={clsx(
                        "bg-neutral-900",
                        $macbookStore.color === "#2e2c2e" && "active"
                    )}
                    onclick={() => setColor("#2e2c2e")}
                ></button>
            </div>
            <div class="size-control">
                <button
                    onclick={() => setScale(0.06)}
                    class={clsx(
                        $macbookStore.scale === 0.06
                            ? "bg-white text-black"
                            : "bg-transparent text-white"
                    )}
                >
                    <p>14"</p>
                </button>
                <button
                    onclick={() => setScale(0.08)}
                    class={clsx(
                        $macbookStore.scale === 0.08
                            ? "bg-white text-black"
                            : "bg-transparent text-white"
                    )}
                >
                    <p>16"</p>
                </button>
            </div>
        </div>
    </div>
    <div id="canvas">
        <Canvas>
            <Scene />
        </Canvas>
    </div>
</section>
