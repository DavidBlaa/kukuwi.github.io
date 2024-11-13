<script lang="ts">
	import {failGifs,successGifs,successGifsSound,failGifsSound} from '$lib/data/data';
	import {getRandomObject} from '$lib/utils/helperfunctions';
	import { base } from '$app/paths';

	interface component_prop_type {
		success: boolean;
		onclick: () => void;
		gif_sound_pause?: boolean;
		volume:number;

	}

	let {

		success = $bindable(true),
		onclick,
		gif_sound_pause = $bindable(true),
		volume=$bindable(0.5)


	}:component_prop_type = $props()


	function getGif():string{

		if(success){
			return base+"/gifs/"+getRandomObject(successGifs);
		}else{
			return base+"/gifs/"+getRandomObject(failGifs);
		}

	}

		function getAudio():string{

		if(success){
			return base+"/audios/gif-sounds/"+getRandomObject(successGifsSound);
		}else{
			return base+"/audios/gif-sounds/"+getRandomObject(failGifsSound);
		}

	}

	let gif:string = $state(getGif())
	let sound:string = $state(getAudio())


</script>
<div class="fixed top-0 bottom-0 w-screen h-screen flex-col justify-start items-center">
	<div class="fixed top-0 bottom-0 flex flex-col justify-start items-center h-full w-full z-50 p-7">

		<img class="h-5/6 {success?'border-green-800':'border-red-600'} border-8 shadow-2xl"
				 src={gif}
				 alt={success?"Gewonnen!!!":"Verloren :("}/>

			<button class='
							flex
							flex-col
							justify-center
							bg-amber-500
							h-1/6
							w-fit
							rounded-lg
							cursor-pointer
							select-none
							active:translate-y-2  active:[box-shadow:0_0px_0_0_#d1870a,0_0px_0_0_#1b70f841]
							active:border-b-[0px]
							transition-all duration-150 [box-shadow:0_8px_0_0_#d1870a,0_13px_0_0_#1b70f841]
							border-[1px]
							mt-3
							text-3xl
							font-extrabold
							py-2
							px-7
					'
					onclick={onclick}
					>
					{success?"RICHTIG :)":" leider falsch :("}
					<br>
					{success?"weiter":"nochmal?"}

					</button>
					<audio
						src={sound}
						bind:paused={gif_sound_pause}
						bind:volume={volume}
					></audio>
	</div>
	<div class="fixed top-0 bottom-0 flex flex-col justify-center items-center h-screen w-screen  z-15 opacity-80 bg-gray-500"></div>
</div>