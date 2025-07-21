/**
 * CLARION NEURAL NETWORK ANIMATIONS
 * 
 * Modular D3.js-powered neural network logo with:
 * - Organic breathing animation
 * - Smooth brain-wave pulses  
 * - Text rotation with neural responses
 * - Futuristic network visualization
 * 
 * Dependencies: D3.js v7+
 */

class ClarionNeuralNetwork {
    constructor() {
        this.textElement = null;
        this.svg = null;
        this.currentIndex = 1; // Start at 1 since SVG already shows "context engine" (index 0)
        this.animationConfig = this.initAnimationConfig();
        this.nodes = this.initNodes();
        this.links = this.initLinks();
        
        // Initialize when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initialize());
        } else {
            this.initialize();
        }
    }
    
    initAnimationConfig() {
        return {
            phrases: [
                'context engine',
                'knowledge retention', 
                'asset management',
                'digital twin'
            ],
            waveTargets: {
                'context engine': {
                    targets: ['.cls-6', '.cls-5', '.cls-2'],
                    color: 'context-engine'
                },
                'knowledge retention': {
                    targets: ['.cls-6', '.cls-5', '.cls-2'],
                    color: 'knowledge-retention'
                },
                'asset management': {
                    targets: ['.cls-6', '.cls-5', '.cls-2'],
                    color: 'asset-management'
                },
                'digital twin': {
                    targets: ['.cls-6', '.cls-5', '.cls-2'],
                    color: 'digital-twin'
                }
            },
            breathing: {
                duration: 3000,
                amplitude: 2
            },
            neuralPulse: {
                baseFilter: 'drop-shadow(0 0 8px rgba(96, 165, 250, 0.6))',
                peakFilter: 'drop-shadow(0 0 11px rgba(96, 165, 250, 0.7)) drop-shadow(0 0 18px rgba(96, 165, 250, 0.25))',
                duration: 2000
            }
        };
    }
    
    initNodes() {
        return [
            { id: 'node-6', x: 44.19, y: 26.75, r: 10, class: 'cls-6', breathingPhase: 0 },
            { id: 'node-5', x: 115.19, y: 8.75, r: 8, class: 'cls-5', breathingPhase: 0.2 },
            { id: 'node-2', x: 230.52, y: 61.75, r: 12, class: 'cls-2', breathingPhase: 0.4 },
            { id: 'node-4', x: 393.02, y: 147.83, r: 9, class: 'cls-4', breathingPhase: 0.6 },
            { id: 'node-1', x: 315.02, y: 192.67, r: 11, class: 'cls-1', breathingPhase: 0.8 },
            { id: 'node-8', x: 352.85, y: 59.33, r: 7, class: 'cls-8', breathingPhase: 1.0 },
            { id: 'node-3', x: 171.44, y: 153.33, r: 4.15, class: 'cls-3', breathingPhase: 1.2, isEllipse: true },
            { id: 'node-7', x: 277.19, y: 106.83, r: 22, class: 'cls-7', breathingPhase: 1.4 }
        ];
    }
    
    initLinks() {
        return [
            { id: 'link-18', source: 'node-2', target: 'node-6', class: 'cls-18' },
            { id: 'link-10', source: 'node-6', target: 'node-7', class: 'cls-10' },
            { id: 'link-17', source: 'node-6', target: 'node-5', class: 'cls-17' },
            { id: 'link-13', source: 'node-5', target: 'node-2', class: 'cls-13' },
            { id: 'link-12', source: 'node-5', target: 'node-7', class: 'cls-12' },
            { id: 'link-14', source: 'node-3', target: 'node-1', class: 'cls-14' },
            { id: 'link-19', source: 'node-1', target: 'node-4', class: 'cls-19' },
            { id: 'link-11', source: 'node-8', target: 'node-7', class: 'cls-11' },
            { id: 'link-20', source: 'node-8', target: 'node-4', class: 'cls-20' },
            { id: 'link-15', source: 'node-3', target: 'node-7', class: 'cls-15' }
        ];
    }
    
    initialize() {
        console.log('🧠 Initializing Clarion Neural Network...');
        
        // Get DOM elements
        this.textElement = document.querySelector('.cls-22');
        this.svg = d3.select('#Layer_1');
        
        if (!this.textElement || this.svg.empty()) {
            console.warn('Neural network elements not found - initialization aborted');
            return;
        }
        
        // Setup network structure
        this.createNetworkElements();
        this.setupTextEnhancements();
        
        // Start animations
        this.startBreathingAnimation();
        this.startTextRotation();
        
        console.log('✅ Neural network initialized successfully');
    }
    
    createNetworkElements() {
        // Create link elements first (behind nodes)
        this.links.forEach(link => {
            let linkElement = this.svg.select(`#${link.id}`);
            if (linkElement.empty()) {
                const sourceNode = this.nodes.find(n => n.id === link.source);
                const targetNode = this.nodes.find(n => n.id === link.target);
                
                linkElement = this.svg.append('path')
                    .attr('id', link.id)
                    .attr('class', `link ${link.class}`)
                    .attr('d', `M ${sourceNode.x} ${sourceNode.y} L ${targetNode.x} ${targetNode.y}`);
            }
        });
        
        // Create node elements (in front of links)
        this.nodes.forEach(node => {
            let nodeElement = this.svg.select(`#${node.id}`);
            if (nodeElement.empty()) {
                if (node.isEllipse) {
                    nodeElement = this.svg.append('ellipse')
                        .attr('id', node.id)
                        .attr('class', `node ${node.class}`)
                        .attr('cx', node.x)
                        .attr('cy', node.y)
                        .attr('rx', node.r)
                        .attr('ry', node.r);
                } else {
                    nodeElement = this.svg.append('circle')
                        .attr('id', node.id)
                        .attr('class', `node ${node.class}`)
                        .attr('cx', node.x)
                        .attr('cy', node.y)
                        .attr('r', node.r);
                }
            }
        });
    }
    
    setupTextEnhancements() {
        // Move text elements to front
        const textElements = this.svg.selectAll('text');
        textElements.each(function() {
            this.parentNode.appendChild(this);
        });
        
        // Replace dotted "i" with dotless "ı" in Clarion
        const clarionText = this.svg.select('.cls-21');
        if (!clarionText.empty()) {
            const iTspan = clarionText.select('tspan:nth-child(3)');
            if (!iTspan.empty()) {
                iTspan.text('arıon');
            }
        }
    }
    
    startBreathingAnimation() {
        const { duration, amplitude } = this.animationConfig.breathing;
        
        const animate = () => {
            const time = Date.now() / duration;
            
            // Update node positions with breathing motion
            this.nodes.forEach(node => {
                // Keep center node static
                if (node.id === 'node-7') {
                    const nodeElement = this.svg.select(`#${node.id}`);
                    if (!nodeElement.empty()) {
                        nodeElement
                            .attr('cx', node.x)
                            .attr('cy', node.y)
                            .style('transform', 'none');
                    }
                    return;
                }
                
                const breathingOffset = Math.sin((time + node.breathingPhase) * 2 * Math.PI) * amplitude;
                const newX = node.x + breathingOffset * 0.5;
                const newY = node.y + breathingOffset * 0.5;
                
                const nodeElement = this.svg.select(`#${node.id}`);
                if (node.isEllipse) {
                    nodeElement.attr('cx', newX).attr('cy', newY);
                } else {
                    nodeElement.attr('cx', newX).attr('cy', newY);
                }
            });
            
            // Update link positions
            this.links.forEach(link => {
                const sourceNode = this.nodes.find(n => n.id === link.source);
                const targetNode = this.nodes.find(n => n.id === link.target);
                
                let sourceX, sourceY, targetX, targetY;
                
                if (sourceNode.id === 'node-7') {
                    sourceX = sourceNode.x;
                    sourceY = sourceNode.y;
                } else {
                    const sourceOffset = Math.sin((time + sourceNode.breathingPhase) * 2 * Math.PI) * amplitude;
                    sourceX = sourceNode.x + sourceOffset * 0.5;
                    sourceY = sourceNode.y + sourceOffset * 0.5;
                }
                
                if (targetNode.id === 'node-7') {
                    targetX = targetNode.x;
                    targetY = targetNode.y;
                } else {
                    const targetOffset = Math.sin((time + targetNode.breathingPhase) * 2 * Math.PI) * amplitude;
                    targetX = targetNode.x + targetOffset * 0.5;
                    targetY = targetNode.y + targetOffset * 0.5;
                }
                
                this.svg.select(`#${link.id}`)
                    .attr('d', `M ${sourceX} ${sourceY} L ${targetX} ${targetY}`);
            });
            
            requestAnimationFrame(animate);
        };
        
        animate();
    }
    
    animateNeuralPulse(phrase) {
        console.log('🧠 Network propagation triggered for:', phrase);
        const waveConfig = this.animationConfig.waveTargets[phrase];
        if (!waveConfig) return;
        
        // PHASE 2: Network Propagation Following Connection Topology
        // Start from center node (node-7) and propagate along actual connections
        
        // Define propagation waves based on network topology
        const propagationWaves = this.calculatePropagationPaths('node-7');
        console.log('📡 Propagation paths calculated:', propagationWaves);
        
        // Full network propagation following connection topology
        console.log('🌊 Full propagation waves:', propagationWaves);
        
        // Animate both nodes AND synapses (connection lines)
        propagationWaves.forEach((wave, waveIndex) => {
            wave.nodes.forEach((nodeId, nodeIndex) => {
                const nodeElement = this.svg.select(`#${nodeId}`);
                if (nodeElement.empty()) return;
                
                // Staggered delays: each wave gets more time, nodes within wave are close together
                const delay = (waveIndex * 1200) + (nodeIndex * 300);
                
                // SYNAPSE TRAVELING EFFECT: Animate connections leading TO this node
                const incomingConnections = this.getIncomingConnections(nodeId);
                incomingConnections.forEach((linkId, linkIndex) => {
                    this.animateSynapseTravel(linkId, delay - 600); // Start before node activation
                });
                
                setTimeout(() => {
                    console.log(`🧠 Wave ${waveIndex} reaching ${nodeId}`);
                    
                    // Clear any existing transitions
                    nodeElement.interrupt();
                    
                    // Organic glow that's noticeable but not overwhelming
                    const baselineGlow = 'drop-shadow(0 0 8px rgba(96, 165, 250, 0.6))';
                    const waveGlow = 'drop-shadow(0 0 12px rgba(96, 165, 250, 0.8)) drop-shadow(0 0 20px rgba(96, 165, 250, 0.35))';
                    
                    // Smooth wave cycle
                    nodeElement
                        .transition('propagation-rise')
                        .duration(1500)  // 1.5 second rise
                        .ease(d3.easeSinInOut)
                        .style('filter', waveGlow)
                        .transition('propagation-fall')
                        .duration(1800)  // 1.8 second return
                        .ease(d3.easeSinOut)
                        .style('filter', baselineGlow)
                        .on('end', function() {
                            console.log(`✅ ${nodeId} propagation complete`);
                        });
                        
                }, delay);
            });
        });
        
        console.log('🌊 Neural network propagation initiated');
    }
    
    calculatePropagationPaths(startNodeId) {
        // Calculate propagation waves from center node following actual connections
        const visited = new Set();
        const waves = [];
        let currentWave = [startNodeId];
        
        visited.add(startNodeId);
        
        while (currentWave.length > 0) {
            const nextWave = [];
            
            // For each node in current wave, find connected nodes
            currentWave.forEach(nodeId => {
                const connectedNodes = this.getConnectedNodes(nodeId);
                connectedNodes.forEach(connectedNodeId => {
                    if (!visited.has(connectedNodeId)) {
                        visited.add(connectedNodeId);
                        nextWave.push(connectedNodeId);
                    }
                });
            });
            
            if (nextWave.length > 0) {
                waves.push({ nodes: nextWave, distance: waves.length + 1 });
                currentWave = nextWave;
            } else {
                break;
            }
        }
        
        return waves;
    }
    
    getConnectedNodes(nodeId) {
        // Find all nodes connected to the given node via links
        const connected = [];
        
        this.links.forEach(link => {
            if (link.source === nodeId && !connected.includes(link.target)) {
                connected.push(link.target);
            }
            if (link.target === nodeId && !connected.includes(link.source)) {
                connected.push(link.source);
            }
        });
        
        return connected;
    }
    
    getIncomingConnections(targetNodeId) {
        // Find all connection lines that lead TO this node
        const incomingLinks = [];
        
        this.links.forEach(link => {
            if (link.target === targetNodeId) {
                incomingLinks.push(link.id);
            }
        });
        
        return incomingLinks;
    }
    
    animateSynapseTravel(linkId, delay) {
        if (delay < 0) return; // Don't animate connections before the start
        
        setTimeout(() => {
            console.log(`⚡ Neural signal flowing along ${linkId}`);
            
            const originalLink = this.svg.select(`#${linkId}`);
            if (originalLink.empty()) return;
            
            // Calculate path directly from node positions for perfect alignment
            const link = this.links.find(l => l.id === linkId);
            const sourceNode = this.nodes.find(n => n.id === link.source);
            const targetNode = this.nodes.find(n => n.id === link.target);
            
            if (!sourceNode || !targetNode) return;
            
            // Create exact path from current node positions (accounting for breathing animation)
            const exactPath = `M ${sourceNode.x} ${sourceNode.y} L ${targetNode.x} ${targetNode.y}`;
            const linkLength = this.calculateLinkLength(linkId);
            
            // Create overlay line with EXACT same styling as original links
            const flowId = `${linkId}-flow`;
            const flowingLine = this.svg.insert('path', '.node') // Insert before nodes but after original links
                .attr('id', flowId)
                .attr('d', exactPath) // Use calculated path for perfect alignment
                .attr('class', 'neural-flow')
                .style('fill', 'none')
                .style('stroke', '#60a5fa')
                .style('stroke-width', '2.5px') // Match original link width exactly
                .style('opacity', '0')
                .style('filter', 'drop-shadow(0 0 15px rgba(96, 165, 250, 1)) drop-shadow(0 0 30px rgba(96, 165, 250, 0.7))')
                .style('stroke-linecap', 'butt') // Match original line caps
                .style('stroke-dasharray', `0 ${linkLength}`); // Start with no visible line
            
            // Animate the flowing effect - line draws from start to end
            flowingLine
                .transition('flow-appear')
                .duration(100)
                .ease(d3.easeQuadIn)
                .style('opacity', '0.8')
                .transition('flow-draw')
                .duration(1200) // Smooth drawing animation
                .ease(d3.easeQuadInOut)
                .style('stroke-dasharray', `${linkLength} 0`) // Full line visible
                .transition('flow-fade')
                .duration(600)
                .ease(d3.easeQuadOut)
                .style('opacity', '0')
                .on('end', function() {
                    // Clean up - remove the flowing line overlay
                    flowingLine.remove();
                    console.log(`✅ Neural flow completed along ${linkId}`);
                });
                
        }, delay);
    }
    
    calculateLinkLength(linkId) {
        // Calculate approximate length of the connection line
        const link = this.links.find(l => l.id === linkId);
        if (!link) return 100; // Default length
        
        const sourceNode = this.nodes.find(n => n.id === link.source);
        const targetNode = this.nodes.find(n => n.id === link.target);
        
        if (!sourceNode || !targetNode) return 100;
        
        const dx = targetNode.x - sourceNode.x;
        const dy = targetNode.y - sourceNode.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    
    updateText() {
        const nextPhrase = this.animationConfig.phrases[this.currentIndex];
        
        // Fade out text
        this.textElement.style.opacity = '0';
        
        setTimeout(() => {
            // Update text content
            this.textElement.textContent = nextPhrase;
            
            // Update text color based on phrase
            const waveConfig = this.animationConfig.waveTargets[nextPhrase];
            if (waveConfig) {
                // Remove all color classes
                this.textElement.classList.remove('context-engine', 'knowledge-retention', 'asset-management', 'digital-twin');
                // Add new color class
                this.textElement.classList.add(waveConfig.color);
            }
            
            // Fade in text
            this.textElement.style.opacity = '1';
            
            // Trigger neural pulse animation
            this.animateNeuralPulse(nextPhrase);
            
        }, 300);
        
        // Move to next phrase
        this.currentIndex = (this.currentIndex + 1) % this.animationConfig.phrases.length;
    }
    
    startTextRotation() {
        // Start the text animation cycle - balanced timing for neural wave appreciation
        setInterval(() => this.updateText(), 5000);
    }
}

// Initialize the neural network when script loads
const clarionNeuralNetwork = new ClarionNeuralNetwork();

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ClarionNeuralNetwork;
} 