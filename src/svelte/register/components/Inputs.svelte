<script lang="ts">
    import {
        emailVal,
        nameVal,
        phoneVal,
        additionalVal,
        emailVal2,
        nameVal2,
    } from '../../../utils/inputs_store'
    import { pageStore } from '../../../utils/page_stores'
</script>

<aside>
    {#if $pageStore === 0}
        <div>
            <label for="email">email</label>
            <input
                autocomplete="off"
                type="text"
                name="email"
                id="email"
                bind:value={$emailVal}
            />
        </div>
        <div>
            <label for="name">name</label>
            <input
                autocomplete="off"
                type="text"
                name="name"
                id="name"
                bind:value={$nameVal}
            />
        </div>
        <div>
            <label for="phone">phone</label>
            <input
                autocomplete="off"
                type="text"
                name="phone"
                id="phone"
                bind:value={$phoneVal}
            />
        </div>
        <div>
            <label for="additional">additional</label>
            <input
                type="text"
                name="additional"
                id="additional"
                autocomplete="off"
                bind:value={$additionalVal}
            />
        </div>
    {/if}

    {#if $pageStore === 1}
        <div>
            <label for="email">email</label>
            <input
                type="text"
                name="email"
                id="email"
                bind:value={$emailVal2}
            />
        </div>
        <div>
            <label for="name">name</label>
            <input type="text" name="name" id="name" bind:value={$nameVal2} />
        </div>
    {/if}
</aside>

<style lang="scss">
    aside {
        @apply flex flex-col;
        div {
            @apply flex flex-col;
            label {
                @apply mt-4 first-letter:uppercase;
            }
        }
    }
</style>
