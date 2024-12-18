<script lang="ts">
	interface ComponentProps {
		volume: number;
	}

	let { volume = $bindable() }: ComponentProps = $props();

	const soundLevelList: boolean[] = $state(Array(10).fill(false));

	let soundLevel: number = volume * 100;

	for (let i: number = 0; i < soundLevel / 10; i++) {
		soundLevelList[i] = true;
	}

	function handleVolumeButtons(increase: boolean) {
		if (increase) {
			if (soundLevel >= 100) {
				return;
			}
			soundLevel += 10;
			soundLevelList[soundLevel / 10 - 1] = true;
			volume = soundLevel / 100;
		} else {
			if (soundLevel <= 0) {
				return;
			}
			soundLevelList[soundLevel / 10 - 1] = false;
			soundLevel -= 10;
			volume = soundLevel / 100;
		}
	}
</script>

<div class="flex h-full w-full flex-col items-center justify-end">
	<div class="mb-5 flex h-full w-4/6 flex-col-reverse justify-center rounded-2xl lg:w-1/3">
		{#each soundLevelList as s}
			<div
				class="{s
					? 'bg-green-500'
					: 'bg-green-100'} h-full w-full border-2 border-gray-500 lg:border-4"
			></div>
		{/each}
	</div>
	<button
		class="aspect-square w-5/6 cursor-pointer select-none rounded-full border-[1px] bg-amber-500
    transition-all duration-150
    [box-shadow:0_8px_0_0_#b07209,0_13px_0_0_#1b70f841]
    active:translate-y-2 active:border-b-[0px] active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    lg:w-3/5
    "
		onclick={() => handleVolumeButtons(true)}
	>
		<span
			class="flex h-full flex-col items-center justify-center pb-3 text-6xl font-bold text-white"
			>+</span
		>
	</button>

	<button
		class="aspect-square mt-5 w-5/6 cursor-pointer select-none rounded-full border-[1px] bg-amber-500
    transition-all duration-150
    [box-shadow:0_8px_0_0_#b07209,0_13px_0_0_#1b70f841]
    active:translate-y-2 active:border-b-[0px] active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    lg:w-3/5
    "
		onclick={() => handleVolumeButtons(false)}
	>
		<span
			class="flex h-full flex-col items-center justify-center pb-3 text-6xl font-bold text-white"
			>-</span
		>
	</button>
</div>
