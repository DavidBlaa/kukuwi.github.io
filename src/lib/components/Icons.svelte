<script>
    export let viewBox = "0 0 48 48"; // Standard Ansicht für das Icon
    export let className = ""; // Optionale CSS-Klassen (für Größensteuerung)
    export let src; 
  </script>
  
  <svg
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    class={className}
    role="img">
    <image href={src} width="100%" height="100%" preserveAspectRatio="xMidyMid meet"/>
  </svg>
    
  
  