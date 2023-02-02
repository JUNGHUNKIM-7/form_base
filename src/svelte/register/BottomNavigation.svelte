<script lang="ts">
    import { hasErrPage0 } from '../../utils/inputs_store'
    import { toggleStore } from '../../utils/value_store'
</script>

<nav>
    <!-- vali 1 || vali2 || vali3 .. -->
    {#if $hasErrPage0}
        <header class="bad">
            <i class="fi fi-rr-megaphone warning">
                <input on:click={toggleStore.toggle} type="button" />
            </i>
            <h3>there are some errors!</h3>
        </header>
    {:else}
        <header class="good">
            <i class="fi fi-br-check success" />
            <h3>everything is good!</h3>
        </header>
    {/if}
    <slot />
</nav>

<style lang="scss">
    nav {
        @apply sticky bottom-0 flex h-20 w-full items-center justify-between bg-black px-4 opacity-90 md:px-40 md:py-6;
        .success {
            @apply text-green-500;
        }
        .warning {
            @apply text-yellow-500;
        }
        header {
            @apply flex items-center text-p capitalize md:text-h3;
            h3 {
                @apply text-p md:text-h3;
            }

            i {
                @apply relative mr-4 flex w-fit text-h3 md:mr-10 md:text-h1;
                input {
                    @apply absolute right-0 bottom-0 z-10 h-full w-full;
                }
            }
        }
    }
    .good {
        @apply text-green-500;
    }
    .bad {
        @apply text-yellow-500;
    }
    .success {
        @apply text-green-500;
    }
    .warning {
        @apply text-yellow-500;
        &:after {
            content: '';
            border-radius: 10px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            height: 10px;
            position: absolute;
            right: -7px;
            top: -10px;
            width: 10px;
            @apply bg-red-500;
        }
    }
</style>
