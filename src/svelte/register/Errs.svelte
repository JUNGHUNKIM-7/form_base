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
        hasErrPage0,
    } from '../../utils/inputs_store'
    import { pageStore } from '../../utils/page_stores'
    import ErrorCard from './components/ErrorCard.svelte'
</script>

<div class:hidden={!$hasErrPage0}>
    {#if $pageStore === 0}
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
    {:else if $pageStore === 1}
        {#if !$emailVal2}
            <ErrorCard errMsg="2should be empty" />
        {/if}

        {#if !$nameVal2}
            <ErrorCard errMsg="2name should be empty" />
        {/if}
    {/if}
</div>

<style lang="scss">
    div {
        @apply absolute bottom-20 right-0 z-10 w-full rounded-t-md bg-black bg-opacity-95 text-slate-400 md:bottom-20 md:w-auto md:rounded-t-md;
    }
</style>
