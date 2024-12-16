<script lang="ts">
	import { gameRoundList } from '$lib/data/playtrough';
	import GuessingGame from '$lib/components/GuessingGame.svelte';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import GameProgressBar from '$lib/components/GameProgressBar.svelte';
	import PatternGame from '$lib/components/PatternGame.svelte';
	import NameInput from '$lib/components/NameInput.svelte';

	const gameLength = gameRoundList.length;
	let round = $state(1);
	let gameRound = $derived(gameRoundList[round - 1]);
	let gameFinished = $state(false);
	let volume = $state(0.4);
	let totalScore = $state(0);
	let roundHistory: (boolean | undefined)[] = $state(Array(gameLength).fill(undefined));
	let betweenRounds = $state(true);

	onMount(() => handleMidRound());

	function handleMidRound() {
		betweenRounds = true;
		setTimeout(endLevelBeginScreen, 2000);

		function endLevelBeginScreen() {
			betweenRounds = false;
		}
	}

	function handleNextRound(roundScore: number) {
		totalScore += roundScore;
		roundHistory[round - 1] = roundScore !== 0;

		if (round === gameLength) {
			gameFinished = true;
		} else {
			round++;
			handleMidRound();
		}
	}

	const GIFButtonTextSuccess = $derived(round === gameLength ? 'Zum Ergebnis' : 'Nächste Runde');
	const GIFButtonTextFailure = $derived(GIFButtonTextSuccess);
</script>

<main class="h-screen w-screen bg-blue-200 p-5">
	{#if betweenRounds}
		<div class="flex size-full flex-col items-center justify-center gap-28">
			<h1 class="text-9xl font-extrabold text-neutral-600">RUNDE {round}</h1>
			<GameProgressBar {roundHistory} {round} />
		</div>
	{:else if gameRound.game === 'klangQuiz'}
		<GuessingGame
			difficulty={gameRound.difficulty}
			{handleNextRound}
			bind:volume
			{GIFButtonTextSuccess}
			{GIFButtonTextFailure}
		/>
		{#if gameFinished}
			<NameInput score={totalScore} />
		{/if}
	{:else if gameRound.game === 'pattern'}
		<PatternGame
			difficulty={gameRound.difficulty}
			{handleNextRound}
			{volume}
			{GIFButtonTextSuccess}
			{GIFButtonTextFailure}
		/>
		{#if gameFinished}
			<NameInput score={totalScore} />
		{/if}
	{:else}
		<p>Wrong game specified in playthrough.ts!</p>
	{/if}
</main>
