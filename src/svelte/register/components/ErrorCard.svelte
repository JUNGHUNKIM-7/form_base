<script lang="ts">
    export let errMsg: string
</script>

<div>
    <div>warning</div>
    <h6>{errMsg}</h6>
</div>

<style lang="scss">
    div {
        @apply my-2 mx-2 flex items-center rounded-md border-2 border-gray-700 px-2 text-xs md:py-1 md:text-p;
        div {
            @apply mx-2 rounded-sm border border-yellow-400 capitalize text-yellow-400;
        }
        h6 {
            @apply px-4 text-sm first-letter:uppercase md:text-p;
        }
    }
</style>
