<script lang="ts">
	import { highscore_table } from '$lib/stores/HighscoreStore.ts';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import Button3d from '$lib/components/Button3d.svelte';

	let { points = 4000 }: { points?: number } = $props();

	let username: string = $state('');

	function addUserScore() {
		if (highscore_table) {
			highscore_table.update(currentData => {

				for (const entry of currentData) {

					entry.highlight = false;


				}

				currentData.push({ name: username, points: points, highlight: true });


				return currentData;
			});
		}

		goto(base + '/Bestenliste');

	}

</script>

<div class="fixed top-0 bottom-0 h-screen w-screen flex-col items-center justify-start">

	<div
		class="fixed top-0 bottom-0 flex h-screen w-screen flex-col items-center justify-center bg-gray-500 opacity-90 z-20"
	>

		<div
			class="flex w-1/2 basis-9/12 flex-col items-center justify-evenly rounded-2xl shadow-xl b-3 bg-kukuwi-blue opacity-100 ">
			<div class="text-center text-white">
				<h2 class="text-4xl font-bold">Punktzahl:</h2>
				<h2 class="text-8xl mt-5 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] text-yellow-500 font-extrabold">{points}</h2>
			</div>
			<input bind:value={username} class="basis-1/12 rounded-2xl border-black bg-white text-center text-2xl z-60"
						 placeholder="Spielername eingeben" />

			<div class="flex flex-col text-3xl text-white gap-y-4 ">
				<Button3d bgBack={"bg-green-600"} bgFront={"bg-green-500"} onclick={()=>addUserScore()} padding={"p-3"}>
					Abschicken
				</Button3d>
				<Button3d bgBack={"bg-red-600"} bgFront={"bg-red-500"} onmousedown={()=> goto(base+"/")} padding={"p-3"}>
					Überspringen
				</Button3d>
			</div>
		</div>
	</div>
</div>