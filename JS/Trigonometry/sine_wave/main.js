window.onload = function(){

    var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight

    context.translate(0, height / 2); // Bring center of the cordinates to center of screen
	context.scale(1, -1); // transforming the left hand cordinates to the right hand cordinates. So sinewave looks the textbook one
    var x_cods = [] 
    var y_cods = []
    var speed = 0.01

    context.beginPath();
    context.moveTo(0,0)
    context.lineTo(width * 0.9, 0);
    context.stroke();
    for (var angle = 0; angle <= 2 * Math.PI; angle += speed){
        let x = angle * 200; // Horizontal scaling
        let y = Math.sin(angle) * 200; // Vertical scaling
        x_cods.push(x) // Add x cordinates
        y_cods.push(y) // Add y cordinates
        context.fillRect(x, y, 5, 5) // Add small rect to that cordinates
    }
    centerX = width * .9, 
    angle = 0;
    var index = 0;
    render()
    
    // We will animate the point moving on the sine graph to demonstrate why circle moves up and down when used sinewabe motion
    function render() {     

        // If reached to the end of cordinates return
        if(index == y_cods.length){
            return;
        }

        // Update x and y cordinates
        document.getElementById('time').textContent ="X:" + index.toString()
        document.getElementById('position').textContent ="  Y:" + y_cods[index].toString()

        // Fill the previous rect since we clear it 
        if(index > 0){
            context.fillStyle = "black";
            context.fillRect(x_cods[index-1], y_cods[index-1], 5, 5);     
        }

        // Change color to orange for the moving point
        context.fillStyle = "orange";
		context.beginPath();
		context.fillRect(x_cods[index], y_cods[index], 5, 5);

        // Change color to red for circle
        context.fillStyle = "red";
        context.clearRect(centerX - 50, -height/2 , width - centerX, height) 
        context.arc(centerX, y_cods[index], 50, 0 , Math.PI * 2, false);
		context.fill();
		index++;
		requestAnimationFrame(render);
	}
}