<script lang="ts">
	import MidiButton from '$lib/components/MidiButton.svelte';
	import type { Instrument, KlangQuizInstrument } from '$lib/types/types';
	import { base } from '$app/paths';

	interface ComponentProps {
		volume: number;
		activeTileList: boolean[];
		pauseTileList: boolean[];
		useTileSounds: boolean;
		instruments: KlangQuizInstrument[] | Instrument[];
		onmouseup: (endOfSong: boolean, index: number) => void;
		grid_layout?: string;
	}

	let {
		volume = $bindable(),
		activeTileList,
		pauseTileList,
		useTileSounds,
		instruments,
		onmouseup,
		grid_layout = 'grid-cols-4'
	}: ComponentProps = $props();
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
	{#each instruments as instrument, index}
		<MidiButton
			img_url={base + '/icons/instruments/' + instrument.image}
			is_active={activeTileList[index]}
			use_audio={useTileSounds}
			audio_url={useTileSounds
				? 'audio' in instrument
					? `${base}/audios/${instrument.audio}`
					: `${base}/audios/${instrument.audios[0]}`
				: ''}
			name={instrument.name}
			use_header={true}
			paused={pauseTileList[index]}
			onmouseup={() => onmouseup(false, index)}
			{volume}
		/>
	{/each}
</div>
