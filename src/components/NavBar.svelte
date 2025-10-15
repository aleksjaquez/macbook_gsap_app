<script>
    import { navLinks } from "../constants";

    

</script>

<header>
    <nav>
        <img src="/logo.svg" alt="Apple Logo">
        <ul>
            {#each navLinks as {label} (label)}
                <li><a href={label}>{label}</a></li>
            {/each}
        </ul>
        <div class="flex-center gap-3">
            <button>
                <img src="/search.svg" alt="Search">
            </button>
            <button>
                <img src="/cart.svg" alt="Cart">
            </button>
        </div>
    </nav>
</header>