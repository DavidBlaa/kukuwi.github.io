<script lang="ts">

	import { onMount } from 'svelte';
	import { base } from '$app/paths';


	let pattern_array:boolean[] = $state([]);
	const color_array:string[] = $state([]);
	const instrument_names:string[] = $state(["Cymbal","snare","tom"]);

	onMount(async () => {
		const response = await fetch(base+'/api/patterns');
		pattern_array = await response.json();
		console.log(pattern_array)









		for (const [index, element] of pattern_array.entries()) {
			console.log(element);

			if (element) {
				if (index%16 <= 3 || (8 <= index%16 && index%16 <= 11)) {

						color_array.push("bg-green-600")

					} else {

						color_array.push("bg-green-700")

					}

			} else {

					if (index%16 <= 3 || (8 <= index%16 && index%16 <= 11)) {

						color_array.push("bg-gray-300")

					} else {

						color_array.push("bg-gray-400")

					}
			}


		}});




</script>
<div class="flex flex-row  w-full h-full rounded border-4 border-gray-700 shadow-2xl">

		<div class="basis-1/6 grid grid-cols-1">
		{#each instrument_names as n}
		<p class="flex flex-row items-center justify-center h-full bg-gray-300 border-black border">{n}</p>
			{/each}
		</div>

	<div class="basis-5/6 grid grid-cols-16">

	{#each color_array as c}

		<div class="h-full  {c} border-black border"></div>

	{/each}
	</div>


</div>