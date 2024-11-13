
<script lang="ts">

    import MidiButton from "$lib/components/MidiButton.svelte";
    import SoundControl from "$lib/components/SoundControl.svelte";
    import type {instrumentCardType} from "$lib/types/types";
    import Vinyl from "$lib/components/Vinyl.svelte";
    import MidiBoardGrid from "$lib/components/MidiBoardGrid.svelte";

    let {
        instruments,
        active_tile_list,
        pause_tile_list,
        use_sound_level = true,
        onmouseup,
        board_bg_color = "bg-[#252525]",
        use_tile_sounds = true,

    }:{
        instruments:Array<instrumentCardType>,
        active_tile_list:Array<boolean>,
        pause_tile_list:Array<boolean>,
        use_sound_level?:boolean,
        onmouseup:(end_of_song:boolean,id:number) => any,
        board_bg_color?:string,
        use_tile_sounds?:boolean,


    } = $props();
    let sound_level_float:number = $state(0.4);
</script>




<div class="
            flex
            flex-row
            justify-stretch
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

        <div class="basis-11/12 ">
            <MidiBoardGrid
                    bind:sound_level_float = {sound_level_float}
                    active_tile_list = {active_tile_list}
                    pause_tile_list = {pause_tile_list}
                    use_tile_sounds = {use_tile_sounds}
                    instruments = {instruments}
                    onmouseup = {onmouseup}
            ></MidiBoardGrid>
        </div>
    {#if use_sound_level}
        <div class="basis-1/12" >
            <SoundControl
                    bind:sound_level_float={sound_level_float}
            ></SoundControl>
        </div>
    {/if}
</div>

