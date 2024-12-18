<script lang="ts">
	import SoundControl from '$lib/components/SoundControl.svelte';
	import type { Instrument } from '$lib/types/types';
	import MidiBoardGrid from '$lib/components/MidiBoardGrid.svelte';

	let {
		instruments,
		activeTileList,
		pauseTileList,
		onmouseup,
		useTileSounds = true
	}: {
		instruments: Instrument[];
		activeTileList: boolean[];
		pauseTileList: boolean[];
		onmouseup: (endOfSong: boolean, id: number) => any;
		useTileSounds?: boolean;
	} = $props();
	let volume: number = $state(0.4);
</script>

<div
	class="
            flex
            h-full
            w-full
            justify-stretch
            rounded-2xl
            border-x-[10px]
            border-b-[20px]
            border-t-[10px]
			border-b-gray-600
            border-l-gray-200
            border-r-gray-400
            border-t-gray-400
            bg-[#d1d5db]
            p-3
			lg:p-10"
>
	<div class="basis-11/12">
		<MidiBoardGrid
			{volume}
			{activeTileList}
			{pauseTileList}
			{useTileSounds}
			{instruments}
			{onmouseup}
		/>
	</div>
	{#if useTileSounds}
		<div class="basis-1/12">
			<SoundControl bind:volume />
		</div>
	{/if}
</div>
