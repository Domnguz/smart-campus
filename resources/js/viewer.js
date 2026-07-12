import { Viewer } from '@photo-sphere-viewer/core';
import '@photo-sphere-viewer/core/index.css';

window.addEventListener('DOMContentLoaded', () => {

    const container = document.getElementById('viewer');

    if (!container) {
        console.error('No se encontró el contenedor #viewer');
        return;
    }

    // Obtener la imagen desde el atributo data-panorama
    const panorama = container.dataset.panorama;

    if (!panorama) {
        console.error('No se especificó un panorama.');
        return;
    }

    new Viewer({
        container: container,
        panorama: panorama,
        navbar: [
            'zoom',
            'move',
            'fullscreen'
        ]
    });

});