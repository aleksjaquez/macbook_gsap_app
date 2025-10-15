<script>
    import { mackookStore, setColor, setScale } from "../store";
    import { clsx } from "clsx";
</script>

<section id="product-viewer">
    <h2>Take a closer look</h2>
    <div class="controls">
        <p class="info">Macbook Pro 16" in {$mackookStore.color}</p>

        <div class="flex-center gap-5 mt-5">
            <div class="color-control">
                <div
                    class={clsx(
                        "bg-neutral-300",
                        $mackookStore.color === "#adb5bd" && "active"
                    )}
                    onclick={() => setColor("#adb5bd")}
                ></div>
                <div
                    class={clsx(
                        "bg-neutral-900",
                        $mackookStore.color === "#2e2c2e" && "active"
                    )}
                    onclick={() => setColor("#2e2c2e")}
                ></div>
            </div>
            <div class="size-control">
                <div
                    onclick={() => setScale(0.06)}
                    class={clsx(
                        $mackookStore.scale === 0.06
                            ? "bg-white text-black"
                            : "bg-transparent text-white"
                    )}
                >
                    <p>14"</p>
                </div>
                <div
                    onclick={() => setScale(0.08)}
                    class={clsx(
                        $mackookStore.scale === 0.08
                            ? "bg-white text-black"
                            : "bg-transparent text-white"
                    )}
                >
                    <p>16"</p>
                </div>
            </div>
        </div>
    </div>
    <p class="text-white text-4xl">Render Canvas</p>
</section>
