<script lang="ts">
	import { klangQuizLevels } from '$lib/data/klangQuizLevels';
	import GuessingGame from '$lib/components/GuessingGame.svelte';
	import type { KlangQuizInstrument } from '$lib/types/types';
	import { getKlangQuizInstruments, selectInstrumentToBeFound } from '$lib/utils/helperfunctions';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	let victory = $state(false);

	let level = 0;
	let klangQuizLevel = klangQuizLevels[level];
	let usedInstruments = $state<KlangQuizInstrument[]>();
	let correctInstrument = $state<KlangQuizInstrument>();
	onMount(() => {
		usedInstruments = getKlangQuizInstruments(
			klangQuizLevel.instruments,
			klangQuizLevel.sameCategory
		);
		correctInstrument = selectInstrumentToBeFound(usedInstruments);
	});

	let correctIndex = $derived(correctInstrument?.index);
	let n_instruments = $derived(usedInstruments?.length);
	const active_tile_list: boolean[] = $derived(Array(n_instruments).fill(false));
	const pause_tile_list: boolean[] = $derived(Array(n_instruments).fill(true));
	let track_source = $derived(base + '/audios/' + correctInstrument?.audio);

	function handle_music_tile_click(end_of_song: boolean = false, index: number): void {
		active_tile_list[index] = !active_tile_list[index];

		if (index == correctIndex && !end_of_song) {
			victory = true;
		}
	}
</script>

{#if usedInstruments && correctIndex}
	<div class="h-screen w-screen bg-blue-200 p-5">
		<GuessingGame
			instruments={usedInstruments}
			{active_tile_list}
			{pause_tile_list}
			board_bg_color="bg-gray-300"
			onmouseup={handle_music_tile_click}
			{track_source}
			correct_instrument_id={correctIndex}
		/>
		{#if victory}
			<h1>Gewonnen</h1>
		{/if}
	</div>
{/if}
