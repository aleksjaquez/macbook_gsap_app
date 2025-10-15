<script>
let playBackRate = 2
</script>

<section id="hero">
    <div>
        <h1>Macbook Pro</h1>
        <img src="/title.png" alt="Macbook Title">
    </div>

    <video bind:playbackRate={playBackRate} src="/videos/hero.mp4" autoPlay muted playsinline > </video>

    <button>Buy</button>
    <p>From $1599 or 133/mo for 12 months </p>
</section>