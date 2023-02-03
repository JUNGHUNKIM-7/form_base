<script lang="ts">
    import { pageStore, progress, visitedStore } from '../../utils/page_stores'

    const labels = ['info', 'date', 'service', 'additional', 'result']
</script>

<main>
    <div>
        {#each $visitedStore as bool, i (i)}
            {#if bool}
                <ul>
                    <li><i class="fi fi-sr-thumbs-up bg-green-500" /></li>
                    <li class:selected={$pageStore === i}>{labels[i]}</li>
                </ul>
            {:else}
                <ul>
                    <li>
                        <i
                            class="fi fi-sr-thumbs-down bg-slate-500 text-white"
                        />
                    </li>
                    <li class:selected={$pageStore === i}>{labels[i]}</li>
                </ul>
            {/if}
        {/each}
    </div>
    <progress value={$progress} />
    <slot />
</main>

<style lang="scss">
    main {
        @apply mx-4 h-screen md:mx-20;
        div {
            @apply my-4 flex justify-between;
            ul {
                @apply flex flex-col;
                li {
                    &:last-child {
                        @apply mt-2 text-center text-xs md:text-h6;
                    }
                    i {
                        @apply h-full w-full rounded-full px-2 py-2 text-h6 md:text-h3;
                    }
                }
            }
        }
        progress {
            @apply absolute top-7 left-0 -z-10 h-3 w-full rounded-sm bg-transparent md:top-9;
        }
        .selected {
            @apply font-bold underline decoration-dashed underline-offset-4;
        }
    }
</style>
