
<script lang="ts">


     interface ComponentProps {

        img_url:string;
        is_active:boolean;
        audio_url:string;
        name:string;
        onmouseup:(...args : any[]) => any;
        paused:boolean;
        width?:string;
        height?:string;
        active_color_top?:string;
        active_color_bottom?:string;
        passiv_color_top?:string;
        passiv_color_bottom?:string;
        use_audio?:boolean;
        use_header?:boolean;
        volume?:number;

    }


    let {
        img_url,
        is_active,
        audio_url,
        name,
        onmouseup,
        paused = true,
        active_color_top = "bg-blue-400",
        active_color_bottom = "[box-shadow:0_10px_0_0_#4e81bf,0_15px_0_0_#1b70f841]",
        passiv_color_top = "bg-blue-100",
        passiv_color_bottom = "[box-shadow:0_10px_0_0_#b0b1b5,0_15px_0_0_#1b70f841]",
        use_audio = true,
        use_header = true,
        volume =0.5,


    }:ComponentProps = $props();



    export function handle_music_tile_click (end_of_song:boolean=false):void {

        is_active=!is_active;

        if(!end_of_song) {
            paused = !paused;
        }
    }

</script>





<div class="flex flex-col h-full">
    {#if use_header}
        <p class="flex flex-col w-fit justify-center items-start  text-xs px-1  lg:text-xl {is_active ? active_color_top:passiv_color_top} font-bold rounded-sm mb-1">{name}</p>
    {/if}
	<button {onmouseup}
            class='flex flex-col h-full justify-center items-center {is_active ? active_color_top:passiv_color_top} rounded-lg cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px] order-[1px]
    transition-all duration-150 {is_active ? active_color_bottom:passiv_color_bottom}
    border-b-[1px] border-white'
             >


    <img class="flex flex-col justify-center items-center  p-2 lg:p-0 rounded-xl" alt={name} src={img_url}>
    {#if use_audio}
        <audio
        src={audio_url}
        bind:paused
        bind:volume
        onended={()=>handle_music_tile_click(true)}
        ></audio>
    {/if}
    </button>
    </div>