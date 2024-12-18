<script lang="ts">
	import Button3d from "./Button3d.svelte";



    interface ComponentsProps {
        sound_level_float:number;
    }

    let {
        sound_level_float = $bindable(),
    }:ComponentsProps = $props();


    const sound_level_list: boolean[] = $state(Array(10).fill(false));

    let sound_level:number = 40

    for(let i:number=0;i<sound_level/10;i++ ){
        sound_level_list[i] = true;
    }


    function handle_volume_buttons(increase:boolean){


        if(increase){
            if(sound_level>=100){
                return;
            }
            sound_level+=10;
            sound_level_list[(sound_level/10)-1] = true;
            sound_level_float=sound_level/100
        }else{

            if(sound_level<=0){
                return;
            }
            sound_level_list[(sound_level/10)-1] = false;
            sound_level-=10;
            sound_level_float=sound_level/100
        }

    }



</script>



<div class="flex flex-col justify-end items-center space-y-5 w-full h-full">

    <div class="flex flex-col-reverse justify-center w-4/6 lg:w-1/3 h-full mb-5 rounded-2xl">
        {#each sound_level_list as s}

            <div class="{s ? 'bg-green-500':'bg-green-100'} w-full h-full border-2 lg:border-4 border-gray-500"></div>

        {/each}
    </div>
    <Button3d 
    bgFront="bg-amber-500"
    bgBack="bg-amber-700"
    onmouseup={() => {}}
    onclick={() => handle_volume_buttons(true)}
    class="w-5/6 lg:w-3/5 aspect-square rounded-full cursor-pointer select-none
    active:translate-y-2 active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px] transition-all duration-150 [box-shadow:0_8px_0_0_#b07209,0_13px_0_0_#1b70f841] border-[1px]"
>
    <span 
        class="flex justify-center items-center h-full text-white font-bold text-6xl leading-none"
        style="width: 1.0em; height: 1.0em;">
        +
    </span>
</Button3d>

<Button3d 
    bgFront="bg-amber-500"
    bgBack="bg-amber-700"
    onmouseup={() => {}}
    onclick={() => handle_volume_buttons(false)}
    class="w-5/6 lg:w-3/5 aspect-square rounded-full cursor-pointer select-none
    active:translate-y-2 active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px] transition-all duration-150 [box-shadow:0_8px_0_0_#b07209,0_13px_0_0_#1b70f841] border-[1px]"
>
    <span 
        class="flex justify-center items-center h-full text-white font-bold text-6xl leading-none"
        style="width: 1.0em; height: 1.0em;">
        -
    </span>
</Button3d>


</div>