window.onload = function () {

    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight

    // context.translate(0, height / 2); // Bring center of the cordinates to center of screen
    // context.scale(1, -1);
    var x_cods = []
    var y_cods = []
    var xspeed = 0.01
    var yspeed = 0.0131
    var xradius = 200
    var yradius = 400
    var centerX = width/4
    var centerY = height/2.5
    var xangle = 0
    var yangle = 0

    context.beginPath();
   
    context.stroke();

    // Generate x cods 
    for (var angle = 0; angle <= 2 * Math.PI; angle += xspeed) {
        let x = centerX + Math.sin(angle) * xradius;
        x_cods.push(x) // Add x cordinates
    }

    // Generate y cods
    for (var angle = 0; angle <= 2 * Math.PI; angle += yspeed) {
        let y = centerY + Math.sin(angle) * yradius;
        y_cods.push(y) // Add y cordinates
    }

    // Draw the lassijous curve

    for(var position = 0; position <= x_cods.length; position++){
        context.fillRect(x_cods[position], y_cods[position], 5, 5) // Add small rect to that cordinates
    }

    // centerX = width * .9,
    //     angle = 0;
    var index = 0;
    render()

    // We will animate the point moving on the sine graph to demonstrate why circle moves up and down when used sinewabe motion
    function render() {

        // If reached to the end of cordinates return
        if (index == y_cods.length) {
            index = 0
        }

        // // Update x and y cordinates
        // document.getElementById('time').textContent = "X:" + index.toString()
        // document.getElementById('position').textContent = "  Y:" + y_cods[index].toString()

        // Fill the previous rect since we clear it 
        if (index > 0) {
            context.fillStyle = "black";
            context.fillRect(x_cods[index - 1], y_cods[index - 1], 5, 5);
        }

        // Change color to orange for the moving point
        context.fillStyle = "orange";
        context.beginPath();
        context.fillRect(x_cods[index], y_cods[index], 5, 5);

        // // Change color to red for circle
        // context.fillStyle = "red";
       
        // context.arc(centerX, y_cods[index], 50, 0, Math.PI * 2, false);
        context.fill();
        index++;

        context.clearRect((width/2) -180, 0, width, height)
        let x = (width/1.2) + Math.sin(xangle) * xradius;
        let y = centerY + Math.sin(yangle) * yradius;
        context.beginPath();
        context.arc(x, y, 10, 0, Math.PI * 2, false)
        context.fill()

        xangle += xspeed
        yangle += yspeed

        requestAnimationFrame(render);

    
        



    }
}