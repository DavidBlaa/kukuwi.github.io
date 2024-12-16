<script lang="ts">
	import { page } from '$app/stores';
	import PatternGame from '$lib/components/PatternGame.svelte';

	let volume = $state(0.4);
	let round = $state(1);
	const difficulty = $page.url.searchParams.get('difficulty');
	if (difficulty === null) {
		throw Error('No difficulty defined in search params.');
	}

	function handleNextRound(roundScore: number) {
		if (roundScore !== 0) {
			round++;
		}
	}

	const GIFButtonTextSuccess = 'Nächste Runde';
	const GIFButtonTextFailure = 'Erneuter Versuch';
</script>

<main class="h-screen w-screen bg-blue-200 p-5">
	{#key round}
		<PatternGame
			difficulty={parseInt(difficulty)}
			{handleNextRound}
			{volume}
			{GIFButtonTextSuccess}
			{GIFButtonTextFailure}
		/>
	{/key}
</main>
