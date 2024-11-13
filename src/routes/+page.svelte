<script>
	import { goto } from "$app/navigation";
//Für Weiterleitung auf Start- bzw. Übungsseite
	function goToUebung(){
		goto('/uebung') 
	}

	function goToStart(){
		goto('/start')
	}
</script>

<main>
	<!-- Aufteilung des Bildschirms in zwei gleichgroße Hälften vertikal-->
	<div class="flex flex-col h-screen">
		<!--Obere Hälfte mit dem KukuWi Logo-->
		<div class="h-3/5 flex items-center justify-center">
			<img src="/images/logo.png" alt="logo" class="max-w-full max-h-full object-contain">
		</div> 
	    <!-- Unter Hälfte mit den Buttons -->
	    <div class="h-2/5 flex">
	        <!--Unter Hälfte wird nochmal geteilt für Trainings- und Übungsbutton-->
				<div class="w-1/2 flex items-center justify-center">
					<div class="flex flex-col items-center">
							<img src="/images/Hut_2.png" alt="Hut" class="w-20 h-20 object-cover">
						<div>
							<button class="flex items-center" on:click={goToUebung}>
								<span class="text-6xl font-bold">Üben</span>
							</button>
						</div>
					</div>
				</div>
				<div class="w-1/2 flex items-center justify-center">
					<div class="flex flex-col items-center">
                        <div>
							<img src="/images/Pokal.jpg" alt="Pokal" class="w-20 h-20">
						</div>
						<div>
							<button class="flex items-center" on:click={goToStart}>
								<span class="text-6xl font-bold">Start</span>
							</button>
						</div>
					</div>
				</div>
	    </div>
</main>
