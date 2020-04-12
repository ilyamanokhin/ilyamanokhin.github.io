(() => {
    const cnv = document.querySelector('canvas');
    const ctx = cnv.getContext('2d');

    const numberOfRings = 3;
    const ringRadiusOffset = 10;
    const ringRadius = 325;
    const waveOffset = 15;
    const colors = document.querySelectorAll('.theme-color');
    let startAngle = 0;

    const maxWavesAmplitude = 17;
    const numberOfWaves = 7;

    let centerX;
    let centerY;

    function init() {
        // cnv.width = innerWidth-5;
        cnv.width = cnv.offsetParent.offsetWidth;
        cnv.height = innerHeight - document.querySelector('.header').offsetHeight * 2;

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjYW52YW5zLXJpbmdzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIigoKSA9PiB7XG4gICAgY29uc3QgY252ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XG4gICAgY29uc3QgY3R4ID0gY252LmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBjb25zdCBudW1iZXJPZlJpbmdzID0gMztcbiAgICBjb25zdCByaW5nUmFkaXVzT2Zmc2V0ID0gMTA7XG4gICAgY29uc3QgcmluZ1JhZGl1cyA9IDMyNTtcbiAgICBjb25zdCB3YXZlT2Zmc2V0ID0gMTU7XG4gICAgY29uc3QgY29sb3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRoZW1lLWNvbG9yJyk7XG4gICAgbGV0IHN0YXJ0QW5nbGUgPSAwO1xuXG4gICAgY29uc3QgbWF4V2F2ZXNBbXBsaXR1ZGUgPSAxNztcbiAgICBjb25zdCBudW1iZXJPZldhdmVzID0gNztcblxuICAgIGxldCBjZW50ZXJYO1xuICAgIGxldCBjZW50ZXJZO1xuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgLy8gY252LndpZHRoID0gaW5uZXJXaWR0aC01O1xuICAgICAgICBjbnYud2lkdGggPSBjbnYub2Zmc2V0UGFyZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICBjbnYuaGVpZ2h0ID0gaW5uZXJIZWlnaHQgLSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykub2Zmc2V0SGVpZ2h0ICogMjtcblxuICAgICAgICBjZW50ZXJYID0gY252LndpZHRoIC8gMjtcbiAgICAgICAgY2VudGVyWSA9IGNudi5oZWlnaHQgLyAyO1xuICAgIH1cbiAgICBcbiAgICBpbml0KCk7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVSaW5ncygpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG51bWJlck9mUmluZ3M7IGkrKyl7XG4gICAgICAgICAgICBsZXQgcmFkaXVzID0gaSAqIHJpbmdSYWRpdXNPZmZzZXQgKyByaW5nUmFkaXVzO1xuICAgICAgICAgICAgbGV0IG9mZnNldEFuZ2xlID0gaSAqIHdhdmVPZmZzZXQgKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgICAgICAgZHJhd1JpbmcocmFkaXVzLCBjb2xvcnNbaV0sIG9mZnNldEFuZ2xlKTtcbiAgICAgICAgfVxuICAgICAgICBzdGFydEFuZ2xlID49IDM2MCA/IHN0YXJ0QW5nbGUgPSAwIDogc3RhcnRBbmdsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYXdSaW5nKHJhZGl1cywgY29sb3IsIG9mZnNldEFuZ2xlKXtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShjb2xvcikuY29sb3I7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAxMTtcblxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIFxuXG4gICAgICAgIGZvciggbGV0IGogPSAtMTgwOyBqIDwgMTgwOyBqKyspe1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRBbmdsZSA9IChqICsgc3RhcnRBbmdsZSkgKiBNYXRoLlBJIC8gMTgwOyBcbiAgICAgICAgICAgIGxldCBkaXNwbGFjZW1lbnQgPSAwOyBcbiAgICAgICAgICAgIGxldCBub3cgPSBNYXRoLmFicyhqKTtcbiAgICAgICAgICAgIGlmKG5vdyA+IDcwICl7XG4gICAgICAgICAgICAgICAgZGlzcGxhY2VtZW50ID0gKG5vdyAtIDcwKSAvIDcwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoZGlzcGxhY2VtZW50ID49IDEgKXtcbiAgICAgICAgICAgICAgICBkaXNwbGFjZW1lbnQgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHdhdmVBbXBsaXR1ZGUgPSByYWRpdXMgKyBkaXNwbGFjZW1lbnQgKiBNYXRoLnNpbigoY3VycmVudEFuZ2xlICsgb2Zmc2V0QW5nbGUpICAqIG51bWJlck9mV2F2ZXMpICogbWF4V2F2ZXNBbXBsaXR1ZGU7XG4gICAgICAgICAgICBsZXQgeCA9IGNlbnRlclggKyBNYXRoLmNvcyhjdXJyZW50QW5nbGUpICogd2F2ZUFtcGxpdHVkZTtcbiAgICAgICAgICAgIGxldCB5ID0gY2VudGVyWSArIE1hdGguc2luKGN1cnJlbnRBbmdsZSkgKiB3YXZlQW1wbGl0dWRlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBqID4gLTE4MCA/IGN0eC5saW5lVG8oeCwgeSkgOiBjdHgubW92ZVRvKHgsIHkpO1xuICAgICAgICB9XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvb3AoKSB7XG4gICAgICAgIC8vIGNudi53aWR0aCA9IDA7ICAvLyBcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjbnYud2lkdGgsIGNudi5oZWlnaHQpO1xuICAgICAgICB1cGRhdGVSaW5ncygpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gICAgfVxuICAgIGxvb3AoKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpbml0KTtcbn0pKCk7Il0sImZpbGUiOiJjYW52YW5zLXJpbmdzLmpzIn0=
