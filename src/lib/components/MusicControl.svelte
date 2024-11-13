<script lang="ts">
    import Vinyl from "$lib/components/Vinyl.svelte";
    import { Icon } from 'svelte-icons-pack';
    import { FaSolidPlay } from "svelte-icons-pack/fa";
    import MidiBoardInformation from "$lib/components/MidiBoardInformation.svelte";


    let {
        track_source,
        sound_level_float = $bindable(0.5),
        track_paused=$bindable(true),
        time = 0,
        tries = 0,
        repeats = 0,

    }:{

        track_source:string,
        sound_level_float?:number,
        track_paused:any,
        time: number;
        tries:number;
        repeats:number




    } = $props();

    let track_duration:number = $state(0);
    let track_current_time:number = $state(0);

    function handle_play_button():void{

        track_current_time = 0;
        track_paused = false;
        repeats++;



    }

    function format_track_time(time:number) {
		if (isNaN(time)) return '...';

		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);

		return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
	}

</script>

<div class="flex flex-col justify-evenly items-center h-full w-full">


        <div class="h-52  w-52 max-lg:hidden">
            <Vinyl spinning={!track_paused}></Vinyl>
        </div>
        <div class="flex flex-row justify-evenly items-stretch">
            <span class="h-fit w-full bg-green-500 text-white text-xl font-bold border-4 border-gray-500 p-1 ml-1">{format_track_time(track_current_time)}</span>
            <span class="h-fit w-full bg-green-500 text-white text-xl font-bold border-4 border-gray-500 p-1">{format_track_time(track_duration)}</span>
        </div>

        <div>

            <MidiBoardInformation
                    bind:time
                    bind:repeats
                    bind:tries
            ></MidiBoardInformation>

        </div>



        <button class='
            flex
            flex-col
            justify-center
            w-5/6
            h-1/6
            bg-blue-400
            rounded-lg
            cursor-pointer
            select-none
            active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
            active:border-b-[0px]
            transition-all duration-150 [box-shadow:0_8px_0_0_#477aba,0_13px_0_0_#1b70f841]
            border-[1px]
            p-3
        '
        onclick={()=>handle_play_button()}
        >
            <Icon size="100%" color="white" src={FaSolidPlay}></Icon>

        </button>

        <audio
            src = {track_source}
            bind:currentTime={track_current_time}
            bind:duration={track_duration}
            bind:paused={track_paused}
            bind:volume={sound_level_float}
        ></audio>

</div>