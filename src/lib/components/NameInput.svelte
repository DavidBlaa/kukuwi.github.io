<script lang="ts">
	import { highscore_table } from '$lib/stores/HighscoreStore.ts';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import Button3d from '$lib/components/Button3d.svelte';

	let { score = 4000 }: { score?: number } = $props();

	let username: string = $state('');

	function addUserScore() {
		if (highscore_table) {
			highscore_table.update((currentData) => {
				for (const entry of currentData) {
					entry.highlight = false;
				}

				currentData.push({ name: username, points: score, highlight: true });

				return currentData;
			});
		}

		goto(base + '/Bestenliste');
	}
</script>

<div class="fixed inset-0 z-50 flex items-center justify-center">
	<div class="absolute inset-0 bg-black opacity-50"></div>
	<div
		class="z-50 flex h-3/5 w-2/5 flex-col items-center justify-evenly rounded-2xl bg-kukuwi-blue shadow-xl"
	>
		<div class="text-center">
			<h2 class="text-4xl font-bold text-white">Punktzahl:</h2>
			<h2
				class="mt-5 text-8xl font-extrabold text-yellow-500 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]"
			>
				{score}
			</h2>
		</div>
		<input
			bind:value={username}
			class="z-60 basis-1/12 rounded-2xl border-black bg-white text-center text-2xl"
			placeholder="Spielername eingeben"
		/>

		<div class="flex flex-col gap-y-4 text-3xl text-white">
			<Button3d
				bgBack={'bg-green-600'}
				bgFront={'bg-green-500'}
				onclick={addUserScore}
				padding={'p-3'}
			>
				Abschicken
			</Button3d>
			<Button3d
				bgBack={'bg-red-600'}
				bgFront={'bg-red-500'}
				onclick={() => goto(base + '/')}
				padding={'p-3'}
			>
				Überspringen
			</Button3d>
		</div>
	</div>
</div>
