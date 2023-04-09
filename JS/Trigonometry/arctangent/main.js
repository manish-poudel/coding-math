window.onload = function () {

    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight
    

    var arrowX = width / 2;
    var arrowY = height / 2;
    var angle = 0
    var dx, dy
    var arrowEndPoint = 100


    render()


    function render() {

        // Clear the screen for the current frame
        context.clearRect(0, 0 , width, height)
        context.save()
        // Remaps the centers position on the canvas
        context.translate(arrowX, arrowY)
        context.rotate(angle) // Rotates the canvas by the degree. "Concept of matrix transformation"
       
        // Draw arrow
        context.beginPath();
        context.moveTo(0, 0)
        context.lineTo(arrowEndPoint, 0)
        context.moveTo(arrowEndPoint, 0)
        context.lineTo(80, 30)
        context.moveTo(arrowEndPoint, 0)
        context.lineTo(80, -30)
        context.stroke()

        context.beginPath();
        context.moveTo(20, 0)
        context.lineTo(-20, 0)
        context.moveTo(20, 0)
        context.lineTo(10, -10)
        context.moveTo(20, 0)
        context.lineTo(10, 10)
        context.stroke()
       
       

        // Listen to mouse coordinates
        document.body.addEventListener("mousemove", function(event){
            dx = event.clientX - arrowX
            dy = event.clientY - arrowY
            angle = Math.atan2(dy, dx)
        });

        context.restore()
        requestAnimationFrame(render);

    }
}