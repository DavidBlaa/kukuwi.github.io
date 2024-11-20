<script>
	import { goto } from "$app/navigation";
	import {base} from '$app/paths';
//Für Weiterleitung auf Start- bzw. Übungsseite
	function goToUebung(){
		goto('/uebung') 
	}

	function goToStart(){
		goto('/raten')
	}
</script>

<main>
	<!-- Aufteilung des Bildschirms in zwei gleichgroße Hälften vertikal-->
	<div class="flex flex-col h-screen bg-blue-200">
		<!--Obere Hälfte mit dem KukuWi Logo-->
		<div class="h-3/5 flex items-center justify-center">
			<img src="/images/logo.png" alt="logo" class="max-w-full max-h-full object-contain">
		</div> 
	    <!-- Unter Hälfte mit den Buttons -->
	    <div class="h-2/5 flex">
	        <!--Unter Hälfte wird nochmal geteilt für Trainings- und Übungsbutton-->
				<div class="w-1/2 flex items-center justify-center">
					<div class="flex flex-col items-center rounded-2xl">
					  <button class="flex flex-col items-center justify-center
						border-b-gray-600
                     border-l-gray-200
                     border-t-gray-400
                     border-r-gray-400
					  border-b-[20px]
                      border-l-[10px]
                      border-r-[10px]
                      border-t-[10px]
                      shadow-2xl [rotate-y-20deg]
					  bg-gray-300"
					  on:click={goToUebung}>
					    <img src="/images/Hut_2.png" alt="Hut" class="w-20 h-20 object-cover">
					     <span class="text-6xl font-bold">Üben</span>
					   </button>
					</div>
				</div>
				<div class="w-1/2 flex items-center justify-center">
					<div class="flex flex-col items-center rounded-2xl">
						<button class="flex flex-col items-center justify-center
						 border-b-gray-600
                         border-l-gray-200
                         border-t-gray-400
                         border-r-gray-400
					       border-b-[20px]
                           border-l-[10px]
                           border-r-[10px]
                           border-t-[10px]
                           shadow-2xl [rotate-y-20deg]
						   bg-gray-300"
						   on:click={goToStart}>
                           <img src={base+"/images/Pokal.png"} alt="Pokal" class="w-20 h-20">
						   <span class="text-6xl font-bold">Start</span>
							</button>
						
					</div>
				</div>
	    </div>
</main>
