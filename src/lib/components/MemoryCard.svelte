<script lang="ts">
  import { base } from '$app/paths';

  interface component_prop  {

    isRotated: boolean;
    paused:boolean;
    onmouseup: (...args: any[]) => any;
    audioSource:string;
    finished:boolean


  }

  let {

    isRotated,
    paused = $bindable(true),
    onmouseup,
    audioSource,
    finished

  }:component_prop = $props()



</script>

<div class="flex flex-col justify-center items-center justify-items-center">

<button
  class="w-[100px] h-[100px]  cursor-pointer perspective-1000 flex flex-col justify-center items-center"
  onmouseup={onmouseup}
>
  <!-- 3D Container -->
  <div
    class={`absolute w-full h-full transform-style-3d transition-transform duration-500 ${
      isRotated ? 'rotate-y-180' : ''
    }`}
  >
    <!-- Front Side -->
    <div class="absolute w-full h-full backface-hidden border-blue-900 border-8 rounded-xl">
      <img
        src={base+"/icons/Memory/Front.png"}
        alt="Front"
        class="w-full h-full object-cover rounded-lg shadow-lg"
      />
    </div>

    <!-- Back Side -->
    <div class="absolute w-full h-full backface-hidden transform rotate-y-180 rounded-xl border-8 {finished?'border-gray-600': 'border-green-700'}">
      <img
        src={finished?base+"/icons/Memory/Back_deactivated.png":base+"/icons/Memory/Back.png"}
        alt="Back"
        class="w-full h-full object-cover rounded-lg shadow-lg"
      />
    </div>
  </div>
  <audio

    src={base+audioSource}
    bind:paused
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
