(() => {
    const cnv = document.querySelector('canvas');
    const ctx = cnv.getContext('2d');

    const numberOfRings = 3;
    const ringRadiusOffset = 10;
    const ringRadius = 300;
    const waveOffset = 15;
    const colors = document.querySelectorAll('.theme-color');
    let startAngle = 0;

    const maxWavesAmplitude = 17;
    const numberOfWaves = 7;

    let centerX;
    let centerY;

    function init() {
        cnv.width = innerWidth;
        cnv.height = innerHeight;

        centerX = cnv.width / 2;
        centerY = cnv.height / 2;
    }
    
    init();

    function updateRings() {
        for(let i = 0; i < numberOfRings; i++){
            let radius = i * ringRadiusOffset + ringRadius;
            let offsetAngle = i * waveOffset * Math.PI / 180;
            drawRing(radius, colors[i], offsetAngle);
        }
        startAngle >= 360 ? startAngle = 0 : startAngle++;
    }

    function drawRing(radius, color, offsetAngle){
        ctx.strokeStyle = getComputedStyle(color).color;
        ctx.lineWidth = 11;

        ctx.beginPath();
        

        for( let j = -180; j < 180; j++){
            let currentAngle = (j + startAngle) * Math.PI / 180; 
            let displacement = 0; 
            let now = Math.abs(j);
            if(now > 70 ){
                displacement = (now - 70) / 70;
            }
            if(displacement >= 1 ){
                displacement = 1;
            }
            let waveAmplitude = radius + displacement * Math.sin((currentAngle + offsetAngle)  * numberOfWaves) * maxWavesAmplitude;
            let x = centerX + Math.cos(currentAngle) * waveAmplitude;
            let y = centerY + Math.sin(currentAngle) * waveAmplitude;
            
            j > -180 ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
    }

    function loop() {
        // cnv.width = 0;  // 
        ctx.clearRect(0, 0, cnv.width, cnv.height);
        updateRings();
        requestAnimationFrame(loop);
    }
    loop();

    window.addEventListener('resize', init);
})();