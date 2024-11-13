<script lang="ts">


    import SoundControl from "$lib/components/SoundControl.svelte";
    import type {instrumentCardType} from "$lib/types/types";
    import MidiBoardGrid from "$lib/components/MidiBoardGrid.svelte";
    import MusicControl from "$lib/components/MusicControl.svelte";
    import GIF from '$lib/components/GIF.svelte';
    import { goto } from '$app/navigation';

    let {
        instruments,
        active_tile_list,
        pause_tile_list,
        board_bg_color = "bg-[#252525]",
        track_source,
        correct_instrument_id,

    }:{
        instruments:Array<instrumentCardType>,
        active_tile_list:Array<boolean>,
        pause_tile_list:Array<boolean>,
        onmouseup:(end_of_song:boolean,id:number) => void,
        board_bg_color?:string,
        track_source:string,
        track_paused?:boolean,
        correct_instrument_id:number,

    } = $props();


    let sound_level_float:number = $state(0.4);


    function handle_instrument_buttons(end_of_sound:boolean,id:number):void{
        time_running = false;
        track_paused = true;
        game_won = id == correct_instrument_id;
        game_ended = true;
        sound_effect_paused = false




    }


    function handle_next_repeat_button():void{

        if(game_won){

          goto("/")
        }else{

          tries++
          time_running = true;
          game_ended = false;


        }



    }

    let track_paused = $state(false);
    let sound_effect_paused:boolean = $state(false);
    let game_ended:boolean = $state(false);
    let game_won:boolean = $state(false);





    let time:number= $state(0);
    let time_running:boolean = $state(true);
    let tries:number = $state(0);
    let repeats:number = $state(0);


    function start() {

      setInterval(() => {
        if(time_running){

          time++
        }

      }, 1000)

	 }

    start();

</script>




<div class="
            flex
            flex-row
            justify-evenly
            rounded-2xl
            {board_bg_color}
            w-full
            h-full
            p-3
            lg:p-10
            border-b-gray-600
            border-l-gray-200
            border-t-gray-400
            border-r-gray-400
            border-b-[20px]
            border-l-[10px]
            border-r-[10px]
            border-t-[10px]
            shadow-2xl [rotate-y-20deg]">


        <div class="basis-2/12">
            <MusicControl

                time={time}
                track_source = {track_source}
                bind:sound_level_float = {sound_level_float}
                bind:track_paused = {track_paused}
                tries={tries}
                repeats={repeats}
                >
            </MusicControl>
        </div>

        <div class="basis-8/12 ">
            <MidiBoardGrid
                    bind:sound_level_float = {sound_level_float}
                    active_tile_list = {active_tile_list}
                    pause_tile_list = {pause_tile_list}
                    use_tile_sounds = {false}
                    instruments = {instruments}
                    onmouseup = {handle_instrument_buttons}
            ></MidiBoardGrid>
        </div>

        <div class="basis-1/12 " >
            <SoundControl
                    bind:sound_level_float={sound_level_float}
            ></SoundControl>
        </div>

</div>
{#if game_ended}
<div class="absolute top-0 left-0">
  <GIF
    bind:success = {game_won}
    onclick={handle_next_repeat_button}
    bind:gif_sound_pause = {sound_effect_paused}
    bind:volume = {sound_level_float}


  ></GIF>
</div>
{/if}
