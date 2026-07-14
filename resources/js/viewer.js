import { Viewer } from '@photo-sphere-viewer/core';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';

import '@photo-sphere-viewer/core/index.css';
import '@photo-sphere-viewer/markers-plugin/index.css';


window.addEventListener('DOMContentLoaded', () => {


    const container = document.getElementById('viewer');


    if (!container) {

        console.error('No se encontró el contenedor #viewer');
        return;

    }



    const panorama = container.dataset.panorama;


    if (!panorama) {

        console.error('No se especificó un panorama');
        return;

    }



    let nombrePanorama = panorama
        .split('/')
        .pop()
        .replace('.jpg','');



    const viewer = new Viewer({

        container,

        panorama,


        plugins: [

            [MarkersPlugin]

        ],


        navbar: [

            'zoom',
            'move',
            'fullscreen'

        ]

    });



    const markersPlugin = viewer.getPlugin(MarkersPlugin);



    // Mostrar coordenadas

    viewer.addEventListener('click', ({ data }) => {

        console.log('Yaw:', data.yaw);
        console.log('Pitch:', data.pitch);

    });




    // Rutas del recorrido

    const rutas = {


        "1": {

            siguiente: "2",

            yaw: 5.15042828340878,

            pitch: -0.10866516272190041

        },


        "2": {

            siguiente: "3",

            yaw: 3.412857002300507,

            pitch: -0.09005997272127364

        },


        "3": {

            siguiente: "4",

            yaw: 3.336047161315536,

            pitch: -0.14193718992938553

        },


        "4": {

            siguiente: "5",

            yaw: 3.3171976891321786,

            pitch: -0.09827533325422388

        }


    };




    // Crear flecha

    function crearFlecha(numero) {


        markersPlugin.clearMarkers();


        const ruta = rutas[numero];


        if (!ruta) {

            return;

        }



        markersPlugin.addMarker({


            id: 'next',


            image: '/images/icons/arrow.png',


            size: {

                width: 80,

                height: 80

            },


            anchor: 'center center',


            position: {

                yaw: ruta.yaw,

                pitch: ruta.pitch

            }


        });


    }




    // Primera flecha

    crearFlecha(nombrePanorama);





    // Cuando se presiona la flecha

    markersPlugin.addEventListener('select-marker', (e) => {


        if (e.marker.id === 'next') {


            const siguiente = rutas[nombrePanorama].siguiente;



            viewer.setPanorama(

                `/panoramas/${siguiente}.jpg`

            );



            viewer.addEventListener('panorama-loaded', () => {



                nombrePanorama = siguiente;



                crearFlecha(nombrePanorama);



            }, { once: true });



        }


    });



});