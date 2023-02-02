<script lang="ts">
    import {
        emailVal,
        nameVal,
        phoneVal,
        additionalVal,
        emailVal2,
        nameVal2,
        vaildateEmail,
        validateName,
    } from '../../utils/inputs_store'
    import { pageStore } from '../../utils/page_stores'
    import { toggleStore } from '../../utils/value_store'
    import ErrorCard from './components/ErrorCard.svelte'
</script>

<div class:invisible={!$toggleStore}>
    {#if $pageStore === 0}
        <div>
            {#if !$emailVal}
                <ErrorCard errMsg="email should be empty" />
            {:else if !$vaildateEmail}
                <ErrorCard errMsg="email should contain @" />
            {/if}

            {#if !$nameVal}
                <ErrorCard errMsg="name should be empty" />
            {:else if !$validateName}
                <ErrorCard errMsg="name len should more 6" />
            {/if}

            {#if !$phoneVal}
                <ErrorCard errMsg="phone should be empty" />
            {/if}

            {#if !$additionalVal}
                <ErrorCard errMsg="additional should be empty" />
            {/if}
            <button on:click={toggleStore.toggle}>close</button>
        </div>
    {:else if $pageStore === 1}
        <div>
            {#if !$emailVal2}
                <ErrorCard errMsg="2should be empty" />
            {/if}

            {#if !$nameVal2}
                <ErrorCard errMsg="2name should be empty" />
            {/if}
            <button on:click={toggleStore.toggle}>close</button>
        </div>
    {/if}
</div>

<style lang="scss">
    div {
        div {
            @apply absolute bottom-0 left-0 z-10 flex w-full flex-col gap-4 rounded-t-md bg-black bg-opacity-90 p-5 text-white md:left-48 md:bottom-20 md:w-auto md:rounded-md;
            button {
                @apply my-2 w-fit self-center uppercase;
            }
        }
    }
</style>
