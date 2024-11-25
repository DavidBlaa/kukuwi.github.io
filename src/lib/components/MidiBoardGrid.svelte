<script lang="ts">
	import MidiButton from '$lib/components/MidiButton.svelte';
	import type { Instrument, KlangQuizInstrument } from '$lib/types/types';
	import { base } from '$app/paths';

	interface ComponentsProps {
		sound_level_float: number;
		active_tile_list: boolean[];
		pause_tile_list: boolean[];
		use_tile_sounds: boolean;
		instruments: KlangQuizInstrument[] | Instrument[];
		onmouseup: (end_of_song: boolean, id: number) => any;
		grid_layout?: string;
	}

	let {
		sound_level_float = $bindable(),
		active_tile_list,
		pause_tile_list,
		use_tile_sounds,
		instruments,
		onmouseup,
		grid_layout = 'grid-cols-6 lg:grid-cols-5'
	}: ComponentsProps = $props();
</script>

<div
	class="
        grid
        {grid_layout}
        h-full
        w-full
        items-stretch
        gap-5
				p-3
				lg:gap-x-12
        lg:gap-y-20"
>
	{#each instruments as instrument, i}
		<MidiButton
			img_url={base + '/icons/instruments/' + instrument.image}
			is_active={active_tile_list[i]}
			use_audio={use_tile_sounds}
			audio_url={use_tile_sounds
				? 'audio' in instrument
					? `${base}/audios/${instrument.audio}`
					: `${base}/audios/${instrument.audios[0]}`
				: ''}
			name={instrument.name}
			use_header={true}
			paused={pause_tile_list[i]}
			onmouseup={() => onmouseup(false, i)}
			volume={sound_level_float}
		/>
	{/each}
</div>
