```javascript
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SketchPad = () => {
    const mountRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const drawingRef = useRef(false);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();

        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);

        scene.add(cube);

        camera.position.z = 5;

        const animate = function () {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        animate();

        const onMouseDown = () => {
            drawingRef.current = true;
        };

        const onMouseUp = () => {
            drawingRef.current = false;
        };

        const onMouseMove = (event) => {
            if (drawingRef.current) {
                const canvasBounds = mountRef.current.getBoundingClientRect();
                mouseRef.current.x = ((event.clientX - canvasBounds.left) / canvasBounds.width) * 2 - 1;
                mouseRef.current.y = -((event.clientY - canvasBounds.top) / canvasBounds.height) * 2 + 1;

                const drawingGeometry = new THREE.CircleGeometry(0.1, 32);
                const drawingMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
                const drawing = new THREE.Mesh(drawingGeometry, drawingMaterial);
                drawing.position.x = mouseRef.current.x;
                drawing.position.y = mouseRef.current.y;

                scene.add(drawing);

                renderer.render(scene, camera);
            }
        };

        mountRef.current.addEventListener('mousedown', onMouseDown);
        mountRef.current.addEventListener('mouseup', onMouseUp);
        mountRef.current.addEventListener('mousemove', onMouseMove);

        return () => {
            mountRef.current.removeChild(renderer.domElement);
            mountRef.current.removeEventListener('mousedown', onMouseDown);
            mountRef.current.removeEventListener('mouseup', onMouseUp);
            mountRef.current.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return <div ref={mountRef} />;
};

export default SketchPad;
```