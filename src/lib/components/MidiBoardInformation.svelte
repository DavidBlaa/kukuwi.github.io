

<script lang="ts">

    interface ComponentProps {
      time: number;
      tries:number;
      repeats:number

    }

    let {
      time= $bindable(0),
      tries = $bindable(0),
      repeats = $bindable(0),
    }:ComponentProps = $props();




</script>



<div class="grid grid-cols-2 bg-blue-200 border-gray-500 border-2 text-xs lg:text-2xl">

      <span class="border-2 p-1  border-gray-500">Gehört</span>
      <span class="border-2 p-1 items-center border-gray-500">{repeats}</span>

        <span class="border-2 p-1  border-gray-500">Versuche</span>
      <span class="border-2 p-1 items-center  border-gray-500">{tries}</span>

        <span class="border-2 p-1  border-gray-500">Zeit</span>
      <span class="border-2 p-1 items-center border-gray-500">{time}</span>


</div>
