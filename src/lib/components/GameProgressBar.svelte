<script lang="ts">
	import { Icon } from 'svelte-icons-pack';
	import { FaSolidPlay } from 'svelte-icons-pack/fa';

	let { roundHistory, round }: { roundHistory: (boolean | undefined)[]; round: number } = $props();
</script>

<div class="flex w-4/5">
	{#each roundHistory as roundResult, index}
		<div
			class={`mx-[0.2rem] flex h-8 w-[10%] items-center justify-center border-2 border-neutral-600 ${roundResult ? 'bg-green-500' : roundResult === false ? 'bg-red-500' : 'bg-neutral-100'}`}
		>
			{#if index === round - 1}
				<Icon size="80%" color="#525252" src={FaSolidPlay}></Icon>
			{/if}
		</div>
	{/each}
</div>
