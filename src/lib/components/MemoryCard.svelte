<script lang="ts">
  import { base } from '$app/paths';

  interface component_prop {

		isRotated: boolean;
		paused: boolean;
		onmouseup: (...args: any[]) => any;
		audioSource: string;
		finished: boolean;


	}

	let {

		isRotated,
		paused = $bindable(true),
		onmouseup,
		audioSource,
		finished

	}: component_prop = $props();


</script>

<div class="flex flex-col items-center justify-center justify-items-center">

	<button
		class="flex cursor-pointer flex-col items-center justify-center w-[200px] h-[200px] perspective-1000"
		onmouseup={onmouseup}
	>
		<!-- 3D Container -->
		<div
			class={`absolute w-full h-full transform-style-3d transition-transform duration-500 ${
      isRotated ? 'rotate-y-180' : ''
    }`}
		>
			<!-- Front Side -->
			<div class="absolute h-full w-full rounded-xl border-8 border-blue-900 backface-hidden">
				<img
					alt="Front"
					class="h-full w-full object-cover shadow-lg"
					src={base+"/icons/Memory/200w/Front200.webp"}
				/>
			</div>

			<!-- Back Side -->
			<div
				class="absolute w-full h-full backface-hidden transform rotate-y-180 rounded-xl border-8 {finished?'border-gray-600': 'border-green-700'}">
				<img
					alt="Back"
					class="h-full w-full object-cover shadow-lg"
					src={finished?base+"/icons/Memory/200w/Back-Gray200.webp":base+"/icons/Memory/200w/Back200.webp"}
				/>
			</div>
		</div>
		<audio

			bind:paused
			src={base+audioSource}
		></audio>
	</button>

</div>

<style>
    .perspective-1000 {
        perspective: 1000px;
    }

    .transform-style-3d {
        transform-style: preserve-3d;
    }

    .backface-hidden {
        backface-visibility: hidden;
    }

    .rotate-y-180 {
        transform: rotateY(180deg);
    }
</style>
