<script lang="ts">
	import MidiButton from '$lib/components/MidiButton.svelte';
	import type { Instrument, KlangQuizInstrument } from '$lib/types/types';
	import { base } from '$app/paths';
	import ResetButton from './ResetButton.svelte';

	interface ComponentProps {
		volume: number;
		activeTileList: boolean[];
		pauseTileList: boolean[];
		useTileSounds: boolean;
		instruments: KlangQuizInstrument[] | Instrument[];
		onmouseup: (endOfSong: boolean, index: number) => void;
	}

	let {
		volume = $bindable(),
		activeTileList,
		pauseTileList,
		useTileSounds,
		instruments,
		onmouseup
	}: ComponentProps = $props();
</script>

<div class={`flex h-[90%] flex-wrap self-center p-3 ${instruments.length > 4 ? '' : 'w-[46%]'}`}>
	{#each instruments as instrument, index}
		<div
			class={`flex max-h-[50%] flex-col items-center justify-center ${instruments.length > 4 ? 'basis-1/4 px-8' : 'basis-1/2 px-16'}`}
		>
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
		</div>
	{/each}
</div>

<div class="absolute left-6 top-0 m-3 mt-10">
	<ResetButton></ResetButton>
</div>
