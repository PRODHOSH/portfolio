/**
 * WebGL Particles Implementation - Galaxy Stars Effect
 */

class SimpleParticles {
    constructor(canvas, options = {}) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: 0, y: 0 };
        this.animationId = null;
        this.time = 0;
        
        // Default options
        this.options = {
            particleCount: 300,
            particleSize: 2,
            particleSpeed: 0.5,
            particleColors: ['#ffffff'],
            connectionDistance: 100,
            connectionOpacity: 0.1,
            mouseRepulsion: true,
            repulsionStrength: 2,
            ...options
        };
        
        this.init();
    }

    init() {
        this.createParticles();
        this.setupEventListeners();
        this.resize();
        this.animate();
    }

    initWebGL() {
        const gl = this.gl;
        
        // Vertex shader - creates 3D particle positions with animation
        const vertexShaderSource = `
            attribute vec3 position;
            attribute vec4 random;
            attribute float size;
            
            uniform float uTime;
            uniform vec2 uMouse;
            uniform float uMouseInfluence;
            
            varying float vBrightness;
            varying vec4 vRandom;
            
            void main() {
                vRandom = random;
                
                // Animated position
                vec3 pos = position;
                pos.x += sin(uTime * random.z + 6.28 * random.w) * 0.3;
                pos.y += sin(uTime * random.y + 6.28 * random.x) * 0.3;
                pos.z += sin(uTime * random.w + 6.28 * random.y) * 0.2;
                
                // Mouse interaction
                vec2 mouseEffect = uMouse * uMouseInfluence;
                pos.x += mouseEffect.x * random.x * 0.5;
                pos.y += mouseEffect.y * random.y * 0.5;
                
                gl_Position = vec4(pos, 1.0);
                gl_PointSize = size * (1.0 + random.x * 0.5);
                
                // Twinkle effect
                vBrightness = 0.3 + abs(sin(uTime * 2.0 + random.y * 6.28)) * 0.7;
            }
        `;
        
        // Fragment shader - renders glowing particles
        const fragmentShaderSource = `
            precision mediump float;
            varying float vBrightness;
            varying vec4 vRandom;
            
            void main() {
                vec2 center = gl_PointCoord - vec2(0.5);
                float dist = length(center);
                
                // Soft glow
                float alpha = smoothstep(0.5, 0.0, dist) * vBrightness;
                
                gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
            }
        `;
        
        // Compile shaders
        const vertexShader = this.createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
        const fragmentShader = this.createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
        
        // Create program
        this.program = this.createProgram(gl, vertexShader, fragmentShader);
        
        // Get attribute and uniform locations
        this.positionLocation = gl.getAttribLocation(this.program, 'position');
        this.randomLocation = gl.getAttribLocation(this.program, 'random');
        this.sizeLocation = gl.getAttribLocation(this.program, 'size');
        this.timeLocation = gl.getUniformLocation(this.program, 'uTime');
        this.mouseLocation = gl.getUniformLocation(this.program, 'uMouse');
        this.mouseInfluenceLocation = gl.getUniformLocation(this.program, 'uMouseInfluence');
        
        // Create particle data
        this.createWebGLParticles();
        
        // Setup event listeners and start animation
        this.setupEventListeners();
        this.resize();
        this.animateWebGL();
    }
    
    createShader(gl, type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error('Shader compile error:', gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }
        
        return shader;
    }
    
    createProgram(gl, vertexShader, fragmentShader) {
        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error('Program link error:', gl.getProgramInfoLog(program));
            gl.deleteProgram(program);
            return null;
        }
        
        return program;
    }
    
    createWebGLParticles() {
        const gl = this.gl;
        const count = this.options.particleCount;
        
        const positions = new Float32Array(count * 3);
        const randoms = new Float32Array(count * 4);
        const sizes = new Float32Array(count);
        
        for (let i = 0; i < count; i++) {
            // Distribute particles in 3D sphere
            let x, y, z, len;
            do {
                x = Math.random() * 2 - 1;
                y = Math.random() * 2 - 1;
                z = Math.random() * 2 - 1;
                len = x * x + y * y + z * z;
            } while (len > 1 || len === 0);
            
            const r = Math.cbrt(Math.random());
            positions[i * 3] = x * r;
            positions[i * 3 + 1] = y * r;
            positions[i * 3 + 2] = z * r * 0.1; // Flatten Z for 2D look
            
            randoms[i * 4] = Math.random();
            randoms[i * 4 + 1] = Math.random();
            randoms[i * 4 + 2] = Math.random();
            randoms[i * 4 + 3] = Math.random();
            
            sizes[i] = Math.random() < 0.7 ? 2 + Math.random() * 2 : 3 + Math.random() * 4;
        }
        
        // Create buffers
        this.positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
        
        this.randomBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.randomBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, randoms, gl.STATIC_DRAW);
        
        this.sizeBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.sizeBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, sizes, gl.STATIC_DRAW);
        
        this.particleCount = count;
    }
    
    animateWebGL() {
        const gl = this.gl;
        
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
        
        gl.useProgram(this.program);
        
        // Update uniforms
        this.time += 0.001 * this.options.particleSpeed;
        gl.uniform1f(this.timeLocation, this.time);
        gl.uniform2f(this.mouseLocation, this.mouse.x, this.mouse.y);
        gl.uniform1f(this.mouseInfluenceLocation, this.options.mouseRepulsion ? 0.1 : 0.0);
        
        // Bind attributes
        gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
        gl.enableVertexAttribArray(this.positionLocation);
        gl.vertexAttribPointer(this.positionLocation, 3, gl.FLOAT, false, 0, 0);
        
        gl.bindBuffer(gl.ARRAY_BUFFER, this.randomBuffer);
        gl.enableVertexAttribArray(this.randomLocation);
        gl.vertexAttribPointer(this.randomLocation, 4, gl.FLOAT, false, 0, 0);
        
        gl.bindBuffer(gl.ARRAY_BUFFER, this.sizeBuffer);
        gl.enableVertexAttribArray(this.sizeLocation);
        gl.vertexAttribPointer(this.sizeLocation, 1, gl.FLOAT, false, 0, 0);
        
        // Draw particles
        gl.drawArrays(gl.POINTS, 0, this.particleCount);
        
        this.animationId = requestAnimationFrame(() => this.animateWebGL());
    }
    
    createParticles() {
        this.particles = [];
        for (let i = 0; i < this.options.particleCount; i++) {
            // Create star-like particles with varying sizes
            const size = Math.random() < 0.7 ? Math.random() * 1.5 + 0.5 : Math.random() * 3 + 2;
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * this.options.particleSpeed * 0.3,
                vy: (Math.random() - 0.5) * this.options.particleSpeed * 0.3,
                size: size,
                color: '#ffffff',
                opacity: Math.random() * 0.8 + 0.2,
                twinkleSpeed: Math.random() * 0.02 + 0.01,
                twinklePhase: Math.random() * Math.PI * 2
            });
        }
    }

    setupEventListeners() {
        window.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mouse.x = e.clientX - rect.left;
            this.mouse.y = e.clientY - rect.top;
        });

        window.addEventListener('resize', () => {
            this.resize();
        });
    }

    resize() {
        const rect = this.canvas.parentElement ? this.canvas.parentElement.getBoundingClientRect() : this.canvas.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
        this.createParticles();
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw particles
        this.particles.forEach((particle, index) => {
            // Update position (slow drift)
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Twinkle effect
            particle.twinklePhase += particle.twinkleSpeed;
            particle.opacity = 0.3 + Math.abs(Math.sin(particle.twinklePhase)) * 0.7;
            
            // Minimal mouse interaction (just slight movement)
            if (this.options.mouseRepulsion) {
                const dx = this.mouse.x - particle.x;
                const dy = this.mouse.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    const force = (100 - distance) / 100;
                    const repulsionForce = force * 0.5;
                    particle.x -= (dx / distance) * repulsionForce;
                    particle.y -= (dy / distance) * repulsionForce;
                }
            }
            
            // Bounce off edges
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
            
            // Keep particles in bounds
            particle.x = Math.max(0, Math.min(this.canvas.width, particle.x));
            particle.y = Math.max(0, Math.min(this.canvas.height, particle.y));
            
            // Draw star particle with glow
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            
            // Add glow effect
            const gradient = this.ctx.createRadialGradient(
                particle.x, particle.y, 0,
                particle.x, particle.y, particle.size * 3
            );
            gradient.addColorStop(0, `rgba(255, 255, 255, ${particle.opacity})`);
            gradient.addColorStop(0.5, `rgba(255, 255, 255, ${particle.opacity * 0.3})`);
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            
            this.ctx.fillStyle = gradient;
            this.ctx.fill();
            
            // Bright core
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
            this.ctx.fill();
        });
        
        // Draw subtle connections (fewer and fainter)
        this.drawConnections();
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }

    drawConnections() {
        this.ctx.globalAlpha = 0.05;
        this.ctx.strokeStyle = '#ffffff';
        this.ctx.lineWidth = 0.5;
        
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 80) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }
        
        this.ctx.globalAlpha = 1;
    }

    updateOptions(newOptions) {
        this.options = { ...this.options, ...newOptions };
        this.createParticles();
    }

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SimpleParticles;
} else if (typeof window !== 'undefined') {
    window.SimpleParticles = SimpleParticles;
}
