<script lang="ts">
    import { FORMCOUNT, pageStore } from '../../utils/page_stores'
    import Page1 from './page/Page1.svelte'
    import Page2 from './page/Page2.svelte'
    import Page3 from './page/Page3.svelte'
    import Page4 from './page/Page4.svelte'
    import Result from './page/Result.svelte'
</script>

{#if $pageStore === 0}
    <Page1 />
{:else if $pageStore === FORMCOUNT - 4}
    <Page2 />
{:else if $pageStore === FORMCOUNT - 3}
    <Page3 />
{:else if $pageStore === FORMCOUNT - 2}
    <Page4 />
{:else if $pageStore === FORMCOUNT - 1}
    <Result />
{/if}
