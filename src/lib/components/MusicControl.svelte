<script lang="ts">
	import Vinyl from '$lib/components/Vinyl.svelte';
	import { Icon } from 'svelte-icons-pack';
	import { FaSolidPlay } from 'svelte-icons-pack/fa';
	import MidiBoardInformation from '$lib/components/MidiBoardInformation.svelte';

	let {
		trackSource,
		volume = 0.5,
		trackPaused = $bindable(true),
		time = 0,
		tries = 0,
		repeats = 0
	}: {
		trackSource: string;
		volume?: number;
		trackPaused: any;
		time: number;
		tries: number;
		repeats: number;
	} = $props();

	let trackDuration: number = $state(0);
	let trackCurrentTime: number = $state(0);

	function handlePlayButton(): void {
		trackCurrentTime = 0;
		trackPaused = false;
		repeats++;
	}

	function formatTrackTime(time: number) {
		if (isNaN(time)) return '...';

		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);

		return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
	}
</script>

<div class="flex h-full w-full flex-col items-center justify-evenly">
	<div class="h-52 w-52 max-lg:hidden">
		<Vinyl spinning={!trackPaused}></Vinyl>
	</div>
	<div class="flex flex-row items-stretch justify-evenly">
		<span
			class="ml-1 h-fit w-full border-4 border-gray-500 bg-green-500 p-1 text-xl font-bold text-white"
			>{formatTrackTime(trackCurrentTime)}</span
		>
		<span
			class="h-fit w-full border-4 border-gray-500 bg-green-500 p-1 text-xl font-bold text-white"
			>{formatTrackTime(trackDuration)}</span
		>
	</div>

	<div>
		<MidiBoardInformation bind:time bind:repeats bind:tries></MidiBoardInformation>
	</div>

	<button
		class="
            flex
            h-1/6
            w-5/6
            cursor-pointer
            select-none
            flex-col
            justify-center
            rounded-lg
            border-[1px]
            bg-blue-400 p-3
            transition-all
            duration-150 [box-shadow:0_8px_0_0_#477aba,0_13px_0_0_#1b70f841] active:translate-y-2
            active:border-b-[0px]
            active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
        "
		onclick={() => handlePlayButton()}
	>
		<Icon size="100%" color="white" src={FaSolidPlay}></Icon>
	</button>

	<audio
		src={trackSource}
		bind:currentTime={trackCurrentTime}
		bind:duration={trackDuration}
		bind:paused={trackPaused}
		{volume}
	></audio>
</div>
