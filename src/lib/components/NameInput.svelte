<script lang="ts">
	import { highscore_table } from '$lib/stores/HighscoreStore.ts';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	let { points = 4000 }: { points?: number } = $props();

	let username: string = $state('');

	function addUserScore() {
		highscore_table.update(currentData => {

			for (const entry of currentData) {

				entry.highlight = false;


			}

			currentData.push({ name: username, points: points, highlight: true });


			return currentData;
		});

		goto(base + '/Bestenliste');

	}

</script>

<div class="fixed top-0 bottom-0 h-screen w-screen flex-col items-center justify-start">

	<div
		class="fixed top-0 bottom-0 z-0 flex h-screen w-screen flex-col items-center justify-center bg-gray-500 opacity-80"
	>

		<div class="flex w-1/2 basis-9/12 flex-col items-center justify-evenly rounded-2xl shadow-xl b-3 bg-kukuwi-blue">
			<div class="text-center text-white">
				<h2 class="text-4xl font-bold">Punktzahl:</h2>
				<h2 class="text-8xl mt-5 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] text-yellow-500 font-extrabold">{points}</h2>
			</div>
			<input bind:value={username} class="basis-1/12 rounded-2xl border-black bg-white text-center text-2xl z-60"
						 placeholder="Spielername eingeben" />

			<div class="flex flex-col">
				<button class="rounded-2xl bg-green-700 p-3 text-3xl text-white" onmousedown={()=>addUserScore()}>Abschicken
				</button>
				<button class="mt-3 rounded-2xl p-3 text-3xl text-white bg-kukuwi-red-dark" onmousedown={()=> goto(base+"/")}>
					Überspringen
				</button>
			</div>
		</div>
	</div>
</div>