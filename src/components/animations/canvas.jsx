import { component$, useSignal, useTask$, useVisibleTask$ } from "@builder.io/qwik";

export default component$(() => {
    const canvasRef = useSignal(undefined);

    useVisibleTask$(async () => {
        if (canvasRef.value) {
            const canvas = canvasRef.value;
            console.log(canvasRef);
            console.log(canvasRef.value);
            const ctx = canvas.getContext('2d');

            let width = window.innerWidth;
            let height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;

            let smoke = [];

            let mouseX = -1;
            let mouseY = -1;
            let mouseXVel = -1;
            let mouseYVel = -1;
            let mouseYFly = -1;


            window.addEventListener("mousemove", mousePos);

            function mousePos(e) {
                mouseXVel = (mouseX - e.clientX);
                mouseYVel = (mouseY - e.clientY);

                mouseX = e.clientX;
                mouseY = e.clientY;
            }

            function Smoke(x, y) {
                this.x = x + Math.random() * 25;
                this.y = y + Math.random() * 25;
                this.xs = (Math.random() - 0.5) * 3 / 4;
                this.ys = ((Math.random()) + 1);
                this.shade = `${((Math.random() + 2) * 35)}`;
                this.sizeScale = 18;
                this.size = (this.sizeScale / (this.ys));
                this.toRemove = false;
                this.lifetime = 0;
                this.maxLifetime = 240; //300/60fps = 5 seconds
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

                    // this.xs -= mouseXVel ? mouseXVel/(reduction/2) : 0;
                    // this.ys += mouseYVel ? mouseYVel/(reduction/2) : 0;
                }
            }

            Smoke.prototype.update = function () {
                this.checkCollisions()
                this.x += this.xs + windIntensity;
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
            let spawnLimiter = 3; // Higher number is slower speed

            let windIntensity = 0;
            let newWindIntensity = -0.3;

            function update() {
                setTimeout(function () {

                    windIntensity += windIntensity > newWindIntensity ? -0.001 : 0.001;

                    if (Math.abs(newWindIntensity - windIntensity) < 0.001) newWindIntensity = Math.random() - 0.5;

                    if (loopIteration == 0) {
                        let newSmoke = new Smoke((width * 73 / 100), height - 50);
                        smoke.push(newSmoke);
                    }

                    loopIteration++;

                    if (loopIteration > spawnLimiter) loopIteration = 0;

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