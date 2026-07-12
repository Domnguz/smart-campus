import { Viewer } from '@photo-sphere-viewer/core';
import '@photo-sphere-viewer/core/index.css';

window.addEventListener('DOMContentLoaded', () => {

    const container = document.getElementById('viewer');

    if (!container) {
        console.error('No se encontró el contenedor #viewer');
        return;
    }

    new Viewer({
        container: container,
        panorama: '/panoramas/tecno1.jpg',
        navbar: [
            'zoom',
            'move',
            'fullscreen'
        ]
    });

});