<script lang="ts">
	import type { Highscore_type } from '$lib/types/types';
	import Crown from '$lib/components/icons/Crown.svelte';
	import { highscore_table } from '$lib/stores/HighscoreStore';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let data_out: { rank: number; name: string; points: number; highlight: boolean }[] = $state([]);

	function create_highscore_table() {
		if (browser && $highscore_table) {
			$highscore_table.sort((a: Highscore_type, b: Highscore_type) =>
				a.points > b.points ? -1 : 1
			);

			let rank: number = 0;
			let score_before: number = 100000000;
			let same_rank: number = 1;

			for (const [index, element] of $highscore_table.entries()) {
				if (element.points < score_before) {
					score_before = element.points;

					if (same_rank > 1) {
						same_rank = 1;
					}

					rank += same_rank;
				} else {
					++same_rank;
				}
				if (index < 10) {
					data_out.push({
						rank: rank,
						name: element.name,
						points: element.points,
						highlight: element.highlight
					});
				}
				if (index > 10 && element.highlight) {
					data_out[9] = {
						rank: rank,
						name: element.name,
						points: element.points,
						highlight: element.highlight
					};
				}
			}
		}
	}

	onMount(() => {
		create_highscore_table();
	});

	function on_key_down(event: KeyboardEvent): void {
		if (event.key == 'o' && highscore_table) {
			highscore_table.update((currentData) => {
				currentData = [];

				return currentData;
			});
			create_highscore_table();
			data_out = [];
		}
	}
</script>

<svelte:window on:keydown={on_key_down} />

<div
	class="h-fit w-full overflow-auto rounded-2xl border-2 border-gray-200 bg-kukuwi-blue py-4 shadow-xl"
>
	<h1
		class="flex flex-row items-center justify-center text-center font-mono text-7xl font-extrabold text-white"
	>
		Bestenliste
		<Crown></Crown>
	</h1>
	<table class="h-full w-full">
		<thead>
			<tr class="text-2xl uppercase text-white">
				<th class="px-4 py-6 underline">Rang</th>
				<th class="px-4 py-6 underline">Name</th>
				<th class="px-4 py-6 underline">Punkte</th>
			</tr>
		</thead>
		<tbody>
			{#each data_out as row}
				<tr class="text-center text-white {row.highlight ? 'bg-green-500' : ''}">
					<td class="px-2 py-3">{row.rank}</td>
					<td class="px-2 py-3">{row.name}</td>
					<td class="px-2 py-3">{row.points}</td>
				</tr>
			{/each}
		</tbody>
	</table>
	{#if data_out.length === 0}
		<div class="text-center text-2xl text-white">Bisher noch keine Einträge</div>
		>
	{/if}
</div>
