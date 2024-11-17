<script lang="ts">
    import {base} from "$app/paths";
    import MidiButton from "$lib/components/MidiButton.svelte";
    import type {instrumentCardType} from "$lib/types/types";

    interface ComponentsProps {
            sound_level_float:number;
            active_tile_list:boolean[];
            pause_tile_list:boolean[];
            use_tile_sounds:boolean;
            instruments:Array<instrumentCardType>;
            onmouseup:(end_of_song:boolean,id:number) => any;
            grid_layout?:string;

        }

    let {
        sound_level_float = $bindable(),
        active_tile_list,
        pause_tile_list,
        use_tile_sounds,
        instruments,
        onmouseup,
        grid_layout="grid-cols-6 lg:grid-cols-5"

    }:ComponentsProps = $props();

    function get_random_element(arr:Array<any>):any {
        return arr[(Math.floor(Math.random() * arr.length))];
    }

</script>
<div class="
        grid
        {grid_layout}
        items-stretch
        w-full
        h-full
        gap-x-5
        gap-y-5
        ld:gap-x-12
        ld:gap-y-20
        p-3">
                    {#each instruments as instrument,i}
                        <MidiButton
                                img_url={base+"/images/Instrumente_neu/"+instrument["image"]}
                                is_active={active_tile_list[i]}
                                use_audio={use_tile_sounds}
                                audio_url={use_tile_sounds?base+"/audios/"+get_random_element(instrument["audios"]):""}
                                name={instrument["name"]}
                                use_header={true}
                                paused={pause_tile_list[i]}
                                onmouseup={() => onmouseup(false,i)}
                                volume={sound_level_float}
                        ></MidiButton>
                    {/each}
                </div>