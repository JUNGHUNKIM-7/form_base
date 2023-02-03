<script lang="ts">
    import { hasErrPage0, formStore } from '../../utils/inputs_store'
    import { FORMCOUNT, pageStore, visitedStore } from '../../utils/page_stores'
</script>

<div>
    {#if $pageStore !== 0 && $pageStore !== FORMCOUNT - 1}
        <button
            on:click={() => {
                visitedStore.prev($pageStore)
                pageStore.prev()
            }}>back</button
        >
    {/if}

    {#if $pageStore !== FORMCOUNT - 2 && $pageStore !== FORMCOUNT - 1}
        {#if !$hasErrPage0}
            <button
                on:click={() => {
                    visitedStore.next($pageStore)
                    pageStore.next()
                    formStore.save()
                }}>next</button
            >
        {/if}
    {/if}

    {#if $pageStore === FORMCOUNT - 2}
        <button
            on:click={() => {
                visitedStore.goResult($pageStore)
                pageStore.goResult()
            }}>go booking</button
        >
    {/if}

    {#if $pageStore === FORMCOUNT - 1}
        <!-- form Submit to db -->
        <!-- clear all data -->
        <button
            on:click={() => {
                formStore.clearSaved()
                formStore.clearFields()
                visitedStore.goHome()
                pageStore.home()
            }}>submit</button
        >
    {/if}
</div>

<style lang="scss">
    button {
        @apply ml-2 border-slate-500 text-slate-400;
    }
</style>
