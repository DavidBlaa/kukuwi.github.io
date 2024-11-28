<script lang="ts">
	import { onMount } from 'svelte';
	import * as midiManager from 'midi-file';
	import { base } from '$app/paths';
	import Pattern from '$lib/components/Pattern.svelte';

	const patterns: boolean[] = [];

	const instrument_names : string[] = ['height-hat',"snare","cymbal"];

	let loaded:boolean = $state(false);

	const loadMidiFile = async () => {
		const response = await fetch(base + '/src/lib/midis/test.mid');
		const arrayBuffer = await response.arrayBuffer();
		const uintArr = new Uint8Array(arrayBuffer);
		const parsed = midiManager.parseMidi(uintArr);
		const tick_delta: number = 24;
		const events: { [key: number]: number[] } = {};

		let time_delta: number = 0;

		for (const event of parsed.tracks[0]) {
			time_delta += event.deltaTime;
			if (event.type == 'noteOn') {
				if (!(event.noteNumber in events)) {
					events[event.noteNumber] = [];
				}
				events[event.noteNumber].push(time_delta);
			}
		}

		for (const [, value] of Object.entries(events)) {
			for (let t: number = 0; t < 16; t++) {
				patterns.push(value.includes(t * tick_delta));
			}
		}

		console.log(patterns)

		loaded = true;

	};

	onMount(() => {

		loadMidiFile();



	});


</script>

{#if loaded}
<Pattern
pattern_array={patterns}
instrument_names={instrument_names}
/>
{/if}