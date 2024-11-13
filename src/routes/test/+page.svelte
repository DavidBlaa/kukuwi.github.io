<script lang="ts">

	 import GIF from '$lib/components/GIF.svelte';

	 let ready:boolean = $state(true)

</script>


<div class="flex flex-col justify-center items-center w-screen h-screen bg-red-600 z-10">
	<button
		class="w-40 h-40 bg-blue-500 z-1"
		onclick={() => {ready=true}}

	>Lets Go</button>
</div>


{#if ready}

		<GIF success={true}></GIF>

{/if}
