import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

export default component$(() => {
    const canvasRef = useSignal(undefined);

    useVisibleTask$(async () => {
        if (canvasRef.value) {
            const canvas = canvasRef.value;
            console.log(canvasRef);
            console.log(canvasRef.value);
            const ctx = canvas.getContext('2d');

            let smoke = [];
            let width,height;

            let mouseX = -1;
            let mouseY = -1;
            // let mouseXVel = -1;
            // let mouseYVel = -1;
            // let mouseYFly = -1;

            let scaleWithWidth=Math.min(1.4, (window.screen.width/1280))*0.8;


            let resizeCanvas = function () {
                width = window.innerWidth;
                height = window.innerHeight;
                canvas.width = width;
                canvas.height = height;
                scaleWithWidth=Math.min(1.4, (window.screen.width/1280))*0.8;
            }
            
            resizeCanvas();

            window.addEventListener("mousemove", mousePos);

            window.addEventListener('resize', function () {
                resizeCanvas();
            });

            function mousePos(e) {
                mouseX = e.clientX;
                mouseY = e.clientY;
            }

            function Smoke(x, y) {
                this.x = x + Math.random() * 25*scaleWithWidth;
                this.y = y + Math.random() * 25*scaleWithWidth;
                this.xs = (Math.random() - 0.5) * 3 / 4 *scaleWithWidth;
                this.ys = ((Math.random()) + 1) *scaleWithWidth;
                this.shade = `${((Math.random() + 2) * 35)}`;
                this.sizeScale = 18;
                this.size = (this.sizeScale / (this.ys))*scaleWithWidth**2;
                this.toRemove = false;
                this.lifetime = 0;
                this.maxLifetime = 300; //300/60fps = 5 seconds
                this.fadevalue = this.maxLifetime;
            }

            Smoke.prototype.checkCollisions = function () {
                const distX = mouseX - this.x, 
                      distY = mouseY - this.y,
                      minDist = 10,
                      reduction = 1500;
                if (Math.sqrt(Math.abs(distX) + Math.abs(distY)) < minDist) {
                    this.xs += (minDist - distX)/(reduction);
                    this.ys -= (minDist - distY)/(reduction);
                }
            }

            Smoke.prototype.update = function () {
                this.checkCollisions()
                this.x += this.xs + windIntensity*scaleWithWidth;
                this.y -= this.ys;

                this.lifetime += 1;

                if (this.lifetime > this.maxLifetime) {
                    this.toRemove = true;
                }

                if (this.lifetime > this.maxLifetime / 2) {
                    this.fade();
                }
            }

            Smoke.prototype.fade = function () {
                this.fadevalue -= 2;
                this.size+=0.05;
            }

            Smoke.prototype.draw = function () {
                ctx.fillStyle = `rgba(${this.shade},${this.shade},${this.shade}, ${this.fadevalue / this.maxLifetime})`;
                ctx.beginPath();
                ctx.ellipse(this.x, this.y, this.size, this.size, 0, 0, 2 * Math.PI)
                ctx.fill();
            }

            requestAnimationFrame(update);

            function animateSmoke() {
                for (let i = 0; i < smoke.length; i++) {
                    smoke[i].update();
                    smoke[i].draw();
                }
            }

            function removeOutliers() {
                smoke = smoke.filter((val, i) => !val.toRemove);
            }

            let loopIteration = 0;
            let spawnLimiter = 2; // Higher number is slower speed

            let windIntensity = 0;
            let newWindIntensity = -0.3;

            function tryCreateSmoke(){
                if (loopIteration == 0) {
                    let newSmoke = new Smoke((width * 73 / 100), height* 95/ 100);
                    smoke.push(newSmoke);
                }

                loopIteration++;

                if (loopIteration > spawnLimiter) loopIteration = 0;
            }

            //Preload 4 seconds of smoke to prevent delay
            for(let preload=0; preload<240; preload++){
                tryCreateSmoke();
                ctx.clearRect(0, 0, width, height);
                animateSmoke();
            }

            function update() {
                setTimeout(function () {
                    windIntensity += windIntensity > newWindIntensity ? -0.001 : 0.001;
                    if (Math.abs(newWindIntensity - windIntensity) < 0.001) newWindIntensity = Math.random() - 0.5;

                    tryCreateSmoke();
                    ctx.clearRect(0, 0, width, height);
                    animateSmoke();
                    removeOutliers();
                    requestAnimationFrame(update);
                }, 1000 / 60)
            }
        }
    });

    return <canvas class="absolute left-0 top-0" ref={canvasRef} width={1000} height={400} />
});