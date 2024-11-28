<script lang="ts">

	let {
		pattern_array,
		instrument_names


	}: {
		pattern_array: boolean[];
		instrument_names: string[];
	} = $props();


	const color_array: string[] = $state([]);
	
	for (const [index, element] of pattern_array.entries()) {


		if (element) {
			if (index % 16 <= 3 || (8 <= index % 16 && index % 16 <= 11)) {

				color_array.push('bg-green-600');

			} else {

				color_array.push('bg-green-700');

			}

		} else {

			if (index % 16 <= 3 || (8 <= index % 16 && index % 16 <= 11)) {

				color_array.push('bg-gray-300');

			} else {

				color_array.push('bg-gray-400');

			}
		}


	}


</script>
<div class="flex h-full w-full flex-row border-4 border-gray-700 shadow-2xl roundGed">

	<div class="grid basis-1/6 grid-cols-1">
		{#each instrument_names as n}
			<p class="flex h-full flex-row items-center justify-center border border-black bg-gray-300">{n}</p>
		{/each}
	</div>

	<div class="grid basis-5/6 grid-cols-16">

		{#each color_array as c}

			<div class="h-full  {c} border-black border"></div>

		{/each}
	</div>


</div>