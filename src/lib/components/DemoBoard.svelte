<script lang="ts">
	import SoundControl from '$lib/components/SoundControl.svelte';
	import type { Instrument } from '$lib/types/types';
	import MidiBoardGrid from '$lib/components/MidiBoardGrid.svelte';

	let {
		instruments,
		active_tile_list,
		pause_tile_list,
		use_sound_level = true,
		onmouseup,
		board_bg_color = 'bg-[#252525]',
		use_tile_sounds = true
	}: {
		instruments: Instrument[];
		active_tile_list: boolean[];
		pause_tile_list: boolean[];
		use_sound_level?: boolean;
		onmouseup: (end_of_song: boolean, id: number) => any;
		board_bg_color?: string;
		use_tile_sounds?: boolean;
	} = $props();
	let sound_level_float: number = $state(0.4);
</script>

<div
	class="
            flex
            justify-stretch
            rounded-2xl
            {board_bg_color}
            h-full
            w-full
            border-x-[10px]
            border-b-[20px]
            border-t-[10px]
            border-b-gray-600
            border-l-gray-200
            border-r-gray-400
            border-t-gray-400
            p-3
						lg:p-10"
>
	<div class="basis-11/12">
		<MidiBoardGrid
			bind:sound_level_float
			{active_tile_list}
			{pause_tile_list}
			{use_tile_sounds}
			{instruments}
			{onmouseup}
		/>
	</div>
	{#if use_sound_level}
		<div class="basis-1/12">
			<SoundControl bind:sound_level_float />
		</div>
	{/if}
</div>
