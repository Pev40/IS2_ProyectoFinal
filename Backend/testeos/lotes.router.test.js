const axios = require('axios');

const apiUrl = 'http://localhost:3015/api_gestordepagos/lotes/anidado';

async function obtenerLotes() {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
}

describe('Prueba de la API de lotes', () => {
  test('Debe obtener la lista de lotes correctamente', async () => {
    const respuestaEsperada = [
        {
            "idLote": 496,
            "Lote": "A-1",
            "Area": 120,
            "Precio": 240,
            "Nombre": "Disponible"
        },
        {
            "idLote": 497,
            "Lote": "A-2",
            "Area": 120,
            "Precio": 240,
            "Nombre": "Disponible"
        },
        {
            "idLote": 498,
            "Lote": "A-3",
            "Area": 120,
            "Precio": 240,
            "Nombre": "Disponible"
        },
        {
            "idLote": 500,
            "Lote": "A-5",
            "Area": 120,
            "Precio": 240,
            "Nombre": "Disponible"
        },
        {
            "idLote": 501,
            "Lote": "A-6",
            "Area": 120,
            "Precio": 240,
            "Nombre": "Disponible"
        },
        {
            "idLote": 527,
            "Lote": "A-32",
            "Area": 90,
            "Precio": 200,
            "Nombre": "Disponible"
        },
        {
            "idLote": 530,
            "Lote": "A-35",
            "Area": 90,
            "Precio": 200,
            "Nombre": "Disponible"
        },
        {
            "idLote": 531,
            "Lote": "A-36",
            "Area": 110.62,
            "Precio": 200,
            "Nombre": "Disponible"
        },
        {
            "idLote": 533,
            "Lote": "C-2",
            "Area": 105,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 536,
            "Lote": "C-5",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 539,
            "Lote": "C-8",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 540,
            "Lote": "C-9",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 542,
            "Lote": "C-11",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 543,
            "Lote": "C-12",
            "Area": 121.48,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 544,
            "Lote": "C-13",
            "Area": 121.47,
            "Precio": 210,
            "Nombre": "Disponible"
        },
        {
            "idLote": 545,
            "Lote": "C-14",
            "Area": 101.19,
            "Precio": 210,
            "Nombre": "Disponible"
        },
        {
            "idLote": 552,
            "Lote": "C-21",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 556,
            "Lote": "C-25",
            "Area": 121.48,
            "Precio": 250,
            "Nombre": "Disponible"
        },
        {
            "idLote": 558,
            "Lote": "D-2",
            "Area": 114.82,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 559,
            "Lote": "D-3",
            "Area": 115,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 562,
            "Lote": "D-6",
            "Area": 110,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 563,
            "Lote": "D-7",
            "Area": 110,
            "Precio": 250,
            "Nombre": "Disponible"
        },
        {
            "idLote": 564,
            "Lote": "D-8",
            "Area": 108.62,
            "Precio": 250,
            "Nombre": "Disponible"
        },
        {
            "idLote": 566,
            "Lote": "E-1",
            "Area": 108.73,
            "Precio": 250,
            "Nombre": "Disponible"
        },
        {
            "idLote": 573,
            "Lote": "E-8",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 576,
            "Lote": "E-11",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 577,
            "Lote": "E-12",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 578,
            "Lote": "E-13",
            "Area": 108.74,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 579,
            "Lote": "E-14",
            "Area": 105.23,
            "Precio": 200,
            "Nombre": "Disponible"
        },
        {
            "idLote": 580,
            "Lote": "E-15",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 581,
            "Lote": "E-16",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 592,
            "Lote": "E-27",
            "Area": 100,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 593,
            "Lote": "E-28",
            "Area": 105.22,
            "Precio": 250,
            "Nombre": "Disponible"
        },
        {
            "idLote": 595,
            "Lote": "F-2",
            "Area": 100,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 597,
            "Lote": "F-4",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 600,
            "Lote": "F-7",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 601,
            "Lote": "F-8",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 602,
            "Lote": "F-9",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 603,
            "Lote": "F-10",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 604,
            "Lote": "F-11",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 605,
            "Lote": "F-12",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 606,
            "Lote": "F-13",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 607,
            "Lote": "F-14",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 608,
            "Lote": "F-15",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 609,
            "Lote": "F-16",
            "Area": 125.85,
            "Precio": 220,
            "Nombre": "Disponible"
        },
        {
            "idLote": 610,
            "Lote": "F-17",
            "Area": 116.87,
            "Precio": 220,
            "Nombre": "Disponible"
        },
        {
            "idLote": 611,
            "Lote": "F-18",
            "Area": 110,
            "Precio": 200,
            "Nombre": "Disponible"
        },
        {
            "idLote": 612,
            "Lote": "F-19",
            "Area": 110,
            "Precio": 200,
            "Nombre": "Disponible"
        },
        {
            "idLote": 615,
            "Lote": "F-22",
            "Area": 110,
            "Precio": 200,
            "Nombre": "Disponible"
        },
        {
            "idLote": 616,
            "Lote": "F-23",
            "Area": 110,
            "Precio": 200,
            "Nombre": "Disponible"
        },
        {
            "idLote": 617,
            "Lote": "F-24",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 618,
            "Lote": "F-25",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 619,
            "Lote": "F-26",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 620,
            "Lote": "F-27",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 621,
            "Lote": "F-28",
            "Area": 110,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 622,
            "Lote": "F-29",
            "Area": 110,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 623,
            "Lote": "F-30",
            "Area": 116.88,
            "Precio": 250,
            "Nombre": "Disponible"
        },
        {
            "idLote": 626,
            "Lote": "G-3",
            "Area": 105,
            "Precio": 250,
            "Nombre": "Disponible"
        },
        {
            "idLote": 627,
            "Lote": "G-4",
            "Area": 105,
            "Precio": 220,
            "Nombre": "Disponible"
        },
        {
            "idLote": 628,
            "Lote": "G-5",
            "Area": 105,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 629,
            "Lote": "G-6",
            "Area": 105,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 630,
            "Lote": "G-7",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 631,
            "Lote": "G-8",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 632,
            "Lote": "G-9",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 633,
            "Lote": "G-10",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 634,
            "Lote": "G-11",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 635,
            "Lote": "G-12",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 636,
            "Lote": "G-13",
            "Area": 105,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 639,
            "Lote": "G-16",
            "Area": 105,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 640,
            "Lote": "G-17",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 641,
            "Lote": "G-18",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 642,
            "Lote": "G-19",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 643,
            "Lote": "G-20",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 644,
            "Lote": "G-21",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 645,
            "Lote": "G-22",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 646,
            "Lote": "G-23",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 647,
            "Lote": "G-24",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 650,
            "Lote": "G-27",
            "Area": 105,
            "Precio": 220,
            "Nombre": "Disponible"
        },
        {
            "idLote": 652,
            "Lote": "H-1",
            "Area": 110,
            "Precio": 210,
            "Nombre": "Disponible"
        },
        {
            "idLote": 662,
            "Lote": "H-11",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 663,
            "Lote": "H-12",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 664,
            "Lote": "H-13",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 665,
            "Lote": "H-14",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 666,
            "Lote": "H-15",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 667,
            "Lote": "H-16",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 668,
            "Lote": "H-17",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 669,
            "Lote": "H-18",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 670,
            "Lote": "H-19",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 671,
            "Lote": "H-20",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 672,
            "Lote": "H-21",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 673,
            "Lote": "H-22",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 674,
            "Lote": "H-23",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 675,
            "Lote": "H-24",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 676,
            "Lote": "H-25",
            "Area": 110,
            "Precio": 210,
            "Nombre": "Disponible"
        },
        {
            "idLote": 677,
            "Lote": "H-26",
            "Area": 110,
            "Precio": 210,
            "Nombre": "Disponible"
        },
        {
            "idLote": 678,
            "Lote": "H-27",
            "Area": 110,
            "Precio": 210,
            "Nombre": "Disponible"
        },
        {
            "idLote": 679,
            "Lote": "H-28",
            "Area": 110,
            "Precio": 250,
            "Nombre": "Disponible"
        },
        {
            "idLote": 682,
            "Lote": "I-2",
            "Area": 115,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 683,
            "Lote": "I-3",
            "Area": 105,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 685,
            "Lote": "I-5",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 686,
            "Lote": "I-6",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 687,
            "Lote": "I-7",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 688,
            "Lote": "I-8",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 689,
            "Lote": "I-9",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 690,
            "Lote": "I-10",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 691,
            "Lote": "I-11",
            "Area": 105,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 692,
            "Lote": "I-12",
            "Area": 105,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 693,
            "Lote": "I-13",
            "Area": 105,
            "Precio": 200,
            "Nombre": "Disponible"
        },
        {
            "idLote": 694,
            "Lote": "I-14",
            "Area": 105,
            "Precio": 200,
            "Nombre": "Disponible"
        },
        {
            "idLote": 695,
            "Lote": "I-15",
            "Area": 105,
            "Precio": 200,
            "Nombre": "Disponible"
        },
        {
            "idLote": 696,
            "Lote": "I-16",
            "Area": 105,
            "Precio": 200,
            "Nombre": "Disponible"
        },
        {
            "idLote": 698,
            "Lote": "I-18",
            "Area": 105,
            "Precio": 200,
            "Nombre": "Disponible"
        },
        {
            "idLote": 699,
            "Lote": "I-19",
            "Area": 115,
            "Precio": 200,
            "Nombre": "Disponible"
        },
        {
            "idLote": 701,
            "Lote": "I-21",
            "Area": 104.9,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 702,
            "Lote": "I-22",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 703,
            "Lote": "I-23",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 704,
            "Lote": "I-24",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 705,
            "Lote": "I-25",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 706,
            "Lote": "I-26",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 707,
            "Lote": "I-27",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 708,
            "Lote": "I-28",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 709,
            "Lote": "I-29",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 710,
            "Lote": "I-30",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 711,
            "Lote": "I-31",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 713,
            "Lote": "I-33",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 714,
            "Lote": "I-34",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 715,
            "Lote": "I-35",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 720,
            "Lote": "J-1",
            "Area": 105,
            "Precio": 210,
            "Nombre": "Disponible"
        },
        {
            "idLote": 721,
            "Lote": "J-2",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 722,
            "Lote": "J-3",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 723,
            "Lote": "J-4",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 724,
            "Lote": "J-5",
            "Area": 118.87,
            "Precio": 210,
            "Nombre": "Disponible"
        },
        {
            "idLote": 725,
            "Lote": "J-6",
            "Area": 123.38,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 726,
            "Lote": "J-7",
            "Area": 112,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 727,
            "Lote": "J-8",
            "Area": 112,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 728,
            "Lote": "J-9",
            "Area": 112,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 730,
            "Lote": "J-11",
            "Area": 213.46,
            "Precio": 210,
            "Nombre": "Disponible"
        },
        {
            "idLote": 732,
            "Lote": "J-13",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 733,
            "Lote": "J-14",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 734,
            "Lote": "J-15",
            "Area": 123.66,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 735,
            "Lote": "K-1",
            "Area": 113.46,
            "Precio": 210,
            "Nombre": "Disponible"
        },
        {
            "idLote": 736,
            "Lote": "K-2",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 737,
            "Lote": "K-3",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 738,
            "Lote": "K-4",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 739,
            "Lote": "K-5",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 740,
            "Lote": "K-6",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 741,
            "Lote": "K-7",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 742,
            "Lote": "K-8",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 743,
            "Lote": "K-9",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 744,
            "Lote": "K-10",
            "Area": 113.45,
            "Precio": 210,
            "Nombre": "Disponible"
        },
        {
            "idLote": 746,
            "Lote": "K-12",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 747,
            "Lote": "K-13",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 748,
            "Lote": "K-14",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 749,
            "Lote": "K-15",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 750,
            "Lote": "K-16",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 751,
            "Lote": "K-17",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 752,
            "Lote": "K-18",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 753,
            "Lote": "K-19",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 754,
            "Lote": "K-20",
            "Area": 109,
            "Precio": 210,
            "Nombre": "Disponible"
        },
        {
            "idLote": 755,
            "Lote": "L-1",
            "Area": 106,
            "Precio": 210,
            "Nombre": "Disponible"
        },
        {
            "idLote": 756,
            "Lote": "L-2",
            "Area": 103,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 757,
            "Lote": "L-3",
            "Area": 103,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 758,
            "Lote": "L-4",
            "Area": 103,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 759,
            "Lote": "L-5",
            "Area": 103,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 760,
            "Lote": "L-6",
            "Area": 103,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 761,
            "Lote": "L-7",
            "Area": 103,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 762,
            "Lote": "L-8",
            "Area": 103,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 763,
            "Lote": "L-9",
            "Area": 103,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 764,
            "Lote": "L-10",
            "Area": 103,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 765,
            "Lote": "L-11",
            "Area": 106.32,
            "Precio": 210,
            "Nombre": "Disponible"
        },
        {
            "idLote": 767,
            "Lote": "L-13",
            "Area": 107,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 768,
            "Lote": "L-14",
            "Area": 107,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 769,
            "Lote": "L-15",
            "Area": 107,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 770,
            "Lote": "L-16",
            "Area": 107,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 771,
            "Lote": "L-17",
            "Area": 107,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 772,
            "Lote": "L-18",
            "Area": 107,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 773,
            "Lote": "L-19",
            "Area": 107,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 774,
            "Lote": "L-20",
            "Area": 107,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 775,
            "Lote": "L-21",
            "Area": 107,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 776,
            "Lote": "L-22",
            "Area": 111,
            "Precio": 210,
            "Nombre": "Disponible"
        },
        {
            "idLote": 779,
            "Lote": "M-3",
            "Area": 107,
            "Precio": 200,
            "Nombre": "Disponible"
        },
        {
            "idLote": 780,
            "Lote": "M-4",
            "Area": 107,
            "Precio": 200,
            "Nombre": "Disponible"
        },
        {
            "idLote": 781,
            "Lote": "M-5",
            "Area": 107,
            "Precio": 200,
            "Nombre": "Disponible"
        },
        {
            "idLote": 782,
            "Lote": "M-6",
            "Area": 107,
            "Precio": 200,
            "Nombre": "Disponible"
        },
        {
            "idLote": 783,
            "Lote": "M-7",
            "Area": 107,
            "Precio": 200,
            "Nombre": "Disponible"
        },
        {
            "idLote": 784,
            "Lote": "M-8",
            "Area": 107,
            "Precio": 200,
            "Nombre": "Disponible"
        },
        {
            "idLote": 785,
            "Lote": "M-9",
            "Area": 107,
            "Precio": 200,
            "Nombre": "Disponible"
        },
        {
            "idLote": 786,
            "Lote": "M-10",
            "Area": 107,
            "Precio": 200,
            "Nombre": "Disponible"
        },
        {
            "idLote": 787,
            "Lote": "M-11",
            "Area": 107,
            "Precio": 200,
            "Nombre": "Disponible"
        },
        {
            "idLote": 803,
            "Lote": "N-2",
            "Area": 150,
            "Precio": 220,
            "Nombre": "Disponible"
        },
        {
            "idLote": 804,
            "Lote": "N-3",
            "Area": 150,
            "Precio": 220,
            "Nombre": "Disponible"
        },
        {
            "idLote": 805,
            "Lote": "N-4",
            "Area": 150,
            "Precio": 220,
            "Nombre": "Disponible"
        },
        {
            "idLote": 806,
            "Lote": "N-5",
            "Area": 104.8,
            "Precio": 220,
            "Nombre": "Disponible"
        },
        {
            "idLote": 807,
            "Lote": "N-6",
            "Area": 104,
            "Precio": 220,
            "Nombre": "Disponible"
        },
        {
            "idLote": 808,
            "Lote": "N-7",
            "Area": 104,
            "Precio": 220,
            "Nombre": "Disponible"
        },
        {
            "idLote": 809,
            "Lote": "N-8",
            "Area": 104,
            "Precio": 220,
            "Nombre": "Disponible"
        },
        {
            "idLote": 810,
            "Lote": "N-9",
            "Area": 104,
            "Precio": 220,
            "Nombre": "Disponible"
        },
        {
            "idLote": 811,
            "Lote": "N-10",
            "Area": 104,
            "Precio": 220,
            "Nombre": "Disponible"
        },
        {
            "idLote": 812,
            "Lote": "N-11",
            "Area": 104,
            "Precio": 220,
            "Nombre": "Disponible"
        },
        {
            "idLote": 813,
            "Lote": "N-12",
            "Area": 100,
            "Precio": 220,
            "Nombre": "Disponible"
        },
        {
            "idLote": 814,
            "Lote": "N-13",
            "Area": 100,
            "Precio": 220,
            "Nombre": "Disponible"
        },
        {
            "idLote": 815,
            "Lote": "N-14",
            "Area": 100,
            "Precio": 220,
            "Nombre": "Disponible"
        },
        {
            "idLote": 817,
            "Lote": "O-1",
            "Area": 120,
            "Precio": 250,
            "Nombre": "Disponible"
        },
        {
            "idLote": 818,
            "Lote": "O-2",
            "Area": 110,
            "Precio": 250,
            "Nombre": "Disponible"
        },
        {
            "idLote": 819,
            "Lote": "O-3",
            "Area": 125,
            "Precio": 250,
            "Nombre": "Disponible"
        },
        {
            "idLote": 820,
            "Lote": "O-4",
            "Area": 125,
            "Precio": 250,
            "Nombre": "Disponible"
        },
        {
            "idLote": 822,
            "Lote": "O-6",
            "Area": 125,
            "Precio": 250,
            "Nombre": "Disponible"
        },
        {
            "idLote": 823,
            "Lote": "O-7",
            "Area": 120,
            "Precio": 250,
            "Nombre": "Disponible"
        },
        {
            "idLote": 824,
            "Lote": "O-8",
            "Area": 120,
            "Precio": 250,
            "Nombre": "Disponible"
        },
        {
            "idLote": 825,
            "Lote": "O-9",
            "Area": 120,
            "Precio": 250,
            "Nombre": "Disponible"
        },
        {
            "idLote": 827,
            "Lote": "O-11",
            "Area": 120,
            "Precio": 250,
            "Nombre": "Disponible"
        },
        {
            "idLote": 828,
            "Lote": "O-12",
            "Area": 120,
            "Precio": 250,
            "Nombre": "Disponible"
        },
        {
            "idLote": 829,
            "Lote": "O-13",
            "Area": 120,
            "Precio": 250,
            "Nombre": "Disponible"
        },
        {
            "idLote": 833,
            "Lote": "O-17",
            "Area": 125,
            "Precio": 250,
            "Nombre": "Disponible"
        },
        {
            "idLote": 834,
            "Lote": "O-18",
            "Area": 125,
            "Precio": 250,
            "Nombre": "Disponible"
        },
        {
            "idLote": 835,
            "Lote": "O-19",
            "Area": 125,
            "Precio": 250,
            "Nombre": "Disponible"
        },
        {
            "idLote": 837,
            "Lote": "O-21",
            "Area": 105,
            "Precio": 250,
            "Nombre": "Disponible"
        },
        {
            "idLote": 840,
            "Lote": "O-24",
            "Area": 120,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 841,
            "Lote": "O-25",
            "Area": 120,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 842,
            "Lote": "O-26",
            "Area": 120,
            "Precio": 210,
            "Nombre": "Disponible"
        },
        {
            "idLote": 843,
            "Lote": "O-27",
            "Area": 120,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 844,
            "Lote": "O-28",
            "Area": 117.19,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 845,
            "Lote": "O-29",
            "Area": 115,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 846,
            "Lote": "O-30",
            "Area": 110,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 847,
            "Lote": "O-31",
            "Area": 110,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 848,
            "Lote": "O-32",
            "Area": 110,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 849,
            "Lote": "O-33",
            "Area": 110,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 850,
            "Lote": "O-34",
            "Area": 110,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 851,
            "Lote": "O-35",
            "Area": 110,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 852,
            "Lote": "O-36",
            "Area": 110,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 853,
            "Lote": "O-37",
            "Area": 110,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 854,
            "Lote": "O-38",
            "Area": 110,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 855,
            "Lote": "O-39",
            "Area": 110,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 856,
            "Lote": "O-40",
            "Area": 110,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 857,
            "Lote": "O-41",
            "Area": 110,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 858,
            "Lote": "O-42",
            "Area": 110,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 859,
            "Lote": "O-43",
            "Area": 125,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 860,
            "Lote": "O-44",
            "Area": 125,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 861,
            "Lote": "O-45",
            "Area": 125,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 862,
            "Lote": "O-46",
            "Area": 135,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 864,
            "Lote": "O-48",
            "Area": 115,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 866,
            "Lote": "O-50",
            "Area": 105,
            "Precio": 200,
            "Nombre": "Disponible"
        },
        {
            "idLote": 867,
            "Lote": "O-51",
            "Area": 115,
            "Precio": 200,
            "Nombre": "Disponible"
        },
        {
            "idLote": 868,
            "Lote": "P-1",
            "Area": 118.18,
            "Precio": 210,
            "Nombre": "Disponible"
        },
        {
            "idLote": 869,
            "Lote": "P-2",
            "Area": 117,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 870,
            "Lote": "P-3",
            "Area": 100,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 871,
            "Lote": "P-4",
            "Area": 100,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 872,
            "Lote": "P-5",
            "Area": 100,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 873,
            "Lote": "P-6",
            "Area": 100,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 874,
            "Lote": "P-7",
            "Area": 100,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 875,
            "Lote": "P-8",
            "Area": 100,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 876,
            "Lote": "P-9",
            "Area": 100,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 877,
            "Lote": "P-10",
            "Area": 100,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 878,
            "Lote": "P-11",
            "Area": 100,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 879,
            "Lote": "P-12",
            "Area": 100,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 880,
            "Lote": "P-13",
            "Area": 100,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 881,
            "Lote": "P-14",
            "Area": 117,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 882,
            "Lote": "P-15",
            "Area": 118.18,
            "Precio": 210,
            "Nombre": "Disponible"
        },
        {
            "idLote": 883,
            "Lote": "P-16",
            "Area": 109.21,
            "Precio": 210,
            "Nombre": "Disponible"
        },
        {
            "idLote": 884,
            "Lote": "P-17",
            "Area": 106,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 885,
            "Lote": "P-18",
            "Area": 106,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 886,
            "Lote": "P-19",
            "Area": 106,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 887,
            "Lote": "P-20",
            "Area": 106,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 888,
            "Lote": "P-21",
            "Area": 106,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 889,
            "Lote": "P-22",
            "Area": 106,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 890,
            "Lote": "P-23",
            "Area": 106,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 891,
            "Lote": "P-24",
            "Area": 106,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 895,
            "Lote": "P-28",
            "Area": 109.21,
            "Precio": 210,
            "Nombre": "Disponible"
        },
        {
            "idLote": 898,
            "Lote": "Q-3",
            "Area": 105,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 899,
            "Lote": "Q-4",
            "Area": 105,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 900,
            "Lote": "Q-5",
            "Area": 105,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 901,
            "Lote": "Q-6",
            "Area": 103.87,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 902,
            "Lote": "Q-7",
            "Area": 105,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 903,
            "Lote": "Q-8",
            "Area": 105,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 904,
            "Lote": "Q-9",
            "Area": 105,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 905,
            "Lote": "Q-10",
            "Area": 105,
            "Precio": 210,
            "Nombre": "Disponible"
        },
        {
            "idLote": 907,
            "Lote": "Q-12",
            "Area": 110,
            "Precio": 200,
            "Nombre": "Disponible"
        },
        {
            "idLote": 908,
            "Lote": "Q-13",
            "Area": 106,
            "Precio": 200,
            "Nombre": "Disponible"
        },
        {
            "idLote": 909,
            "Lote": "Q-14",
            "Area": 108.48,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 910,
            "Lote": "Q-15",
            "Area": 106,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 911,
            "Lote": "Q-16",
            "Area": 106,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 912,
            "Lote": "Q-17",
            "Area": 110,
            "Precio": 200,
            "Nombre": "Disponible"
        },
        {
            "idLote": 914,
            "Lote": "R-1",
            "Area": 120,
            "Precio": 210,
            "Nombre": "Disponible"
        },
        {
            "idLote": 915,
            "Lote": "R-2",
            "Area": 115.15,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 916,
            "Lote": "R-3",
            "Area": 115,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 917,
            "Lote": "R-4",
            "Area": 129.24,
            "Precio": 220,
            "Nombre": "Disponible"
        },
        {
            "idLote": 918,
            "Lote": "R-5",
            "Area": 115,
            "Precio": 220,
            "Nombre": "Disponible"
        },
        {
            "idLote": 919,
            "Lote": "R-6",
            "Area": 115.45,
            "Precio": 220,
            "Nombre": "Disponible"
        },
        {
            "idLote": 921,
            "Lote": "R-8",
            "Area": 115,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 922,
            "Lote": "R-9",
            "Area": 115,
            "Precio": 190,
            "Nombre": "Disponible"
        },
        {
            "idLote": 936,
            "Lote": "S-14",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 938,
            "Lote": "S-16",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 939,
            "Lote": "S-17",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 940,
            "Lote": "S-18",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 941,
            "Lote": "S-19",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Disponible"
        },
        {
            "idLote": 943,
            "Lote": "S-21",
            "Area": 110,
            "Precio": 220,
            "Nombre": "Disponible"
        },
        {
            "idLote": 499,
            "Lote": "A-4",
            "Area": 120,
            "Precio": 240,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 502,
            "Lote": "A-7",
            "Area": 120,
            "Precio": 190,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 503,
            "Lote": "A-8",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 504,
            "Lote": "A-9",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 505,
            "Lote": "A-10",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 506,
            "Lote": "A-11",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 507,
            "Lote": "A-12",
            "Area": 90,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 508,
            "Lote": "A-13",
            "Area": 90,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 509,
            "Lote": "A-14",
            "Area": 90,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 510,
            "Lote": "A-15",
            "Area": 90,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 511,
            "Lote": "A-16",
            "Area": 90,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 512,
            "Lote": "A-17",
            "Area": 90,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 513,
            "Lote": "A-18",
            "Area": 90,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 514,
            "Lote": "A-19",
            "Area": 90,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 515,
            "Lote": "A-20",
            "Area": 90,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 516,
            "Lote": "A-21",
            "Area": 90,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 517,
            "Lote": "A-22",
            "Area": 90,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 518,
            "Lote": "A-23",
            "Area": 90,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 519,
            "Lote": "A-24",
            "Area": 90,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 520,
            "Lote": "A-25",
            "Area": 90,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 521,
            "Lote": "A-26",
            "Area": 108.54,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 522,
            "Lote": "A-27",
            "Area": 90,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 523,
            "Lote": "A-28",
            "Area": 90,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 524,
            "Lote": "A-29",
            "Area": 90,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 525,
            "Lote": "A-30",
            "Area": 90,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 526,
            "Lote": "A-31",
            "Area": 90,
            "Precio": 200,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 528,
            "Lote": "A-33",
            "Area": 90,
            "Precio": 200,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 529,
            "Lote": "A-34",
            "Area": 90,
            "Precio": 200,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 532,
            "Lote": "C-1",
            "Area": 121.47,
            "Precio": 250,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 534,
            "Lote": "C-3",
            "Area": 105,
            "Precio": 190,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 535,
            "Lote": "C-4",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 537,
            "Lote": "C-6",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 538,
            "Lote": "C-7",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 541,
            "Lote": "C-10",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 546,
            "Lote": "C-15",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 547,
            "Lote": "C-16",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 548,
            "Lote": "C-17",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 549,
            "Lote": "C-18",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 550,
            "Lote": "C-19",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 551,
            "Lote": "C-20",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 553,
            "Lote": "C-22",
            "Area": 100,
            "Precio": 190,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 554,
            "Lote": "C-23",
            "Area": 100,
            "Precio": 190,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 555,
            "Lote": "C-24",
            "Area": 100,
            "Precio": 250,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 557,
            "Lote": "D-1",
            "Area": 133.3,
            "Precio": 250,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 560,
            "Lote": "D-4",
            "Area": 110,
            "Precio": 210,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 561,
            "Lote": "D-5",
            "Area": 110,
            "Precio": 190,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 565,
            "Lote": "D-9",
            "Area": 105,
            "Precio": 250,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 567,
            "Lote": "E-2",
            "Area": 105,
            "Precio": 190,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 568,
            "Lote": "E-3",
            "Area": 105,
            "Precio": 190,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 569,
            "Lote": "E-4",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 570,
            "Lote": "E-5",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 571,
            "Lote": "E-6",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 572,
            "Lote": "E-7",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 574,
            "Lote": "E-9",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 575,
            "Lote": "E-10",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 582,
            "Lote": "E-17",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 583,
            "Lote": "E-18",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 584,
            "Lote": "E-19",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 585,
            "Lote": "E-20",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 586,
            "Lote": "E-21",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 587,
            "Lote": "E-22",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 588,
            "Lote": "E-23",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 589,
            "Lote": "E-24",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 590,
            "Lote": "E-25",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 591,
            "Lote": "E-26",
            "Area": 100,
            "Precio": 190,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 594,
            "Lote": "F-1",
            "Area": 125.84,
            "Precio": 250,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 596,
            "Lote": "F-3",
            "Area": 100,
            "Precio": 190,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 598,
            "Lote": "F-5",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 599,
            "Lote": "F-6",
            "Area": 100,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 613,
            "Lote": "F-20",
            "Area": 110,
            "Precio": 200,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 614,
            "Lote": "F-21",
            "Area": 110,
            "Precio": 200,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 624,
            "Lote": "G-1",
            "Area": 105,
            "Precio": 250,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 625,
            "Lote": "G-2",
            "Area": 105,
            "Precio": 250,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 637,
            "Lote": "G-14",
            "Area": 105,
            "Precio": 240,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 638,
            "Lote": "G-15",
            "Area": 105,
            "Precio": 240,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 648,
            "Lote": "G-25",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 649,
            "Lote": "G-26",
            "Area": 105,
            "Precio": 190,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 651,
            "Lote": "G-28",
            "Area": 105,
            "Precio": 240,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 653,
            "Lote": "H-2",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 654,
            "Lote": "H-3",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 655,
            "Lote": "H-4",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 656,
            "Lote": "H-5",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 657,
            "Lote": "H-6",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 658,
            "Lote": "H-7",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 659,
            "Lote": "H-8",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 660,
            "Lote": "H-9",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 661,
            "Lote": "H-10",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 680,
            "Lote": "H-29",
            "Area": 120,
            "Precio": 260,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 681,
            "Lote": "I-1",
            "Area": 115.12,
            "Precio": 260,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 684,
            "Lote": "I-4",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 697,
            "Lote": "I-17",
            "Area": 105,
            "Precio": 200,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 700,
            "Lote": "I-20",
            "Area": 115.12,
            "Precio": 220,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 712,
            "Lote": "I-32",
            "Area": 105,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 716,
            "Lote": "I-36",
            "Area": 105,
            "Precio": 190,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 717,
            "Lote": "I-37",
            "Area": 105,
            "Precio": 190,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 718,
            "Lote": "I-38",
            "Area": 105,
            "Precio": 200,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 719,
            "Lote": "I-39",
            "Area": 105,
            "Precio": 260,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 729,
            "Lote": "J-10",
            "Area": 112,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 731,
            "Lote": "J-12",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 745,
            "Lote": "K-11",
            "Area": 110.26,
            "Precio": 210,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 766,
            "Lote": "L-12",
            "Area": 111.46,
            "Precio": 210,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 777,
            "Lote": "M-1",
            "Area": 107,
            "Precio": 210,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 778,
            "Lote": "M-2",
            "Area": 107,
            "Precio": 200,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 788,
            "Lote": "M-12",
            "Area": 117.17,
            "Precio": 230,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 789,
            "Lote": "M-13",
            "Area": 106.1,
            "Precio": 260,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 790,
            "Lote": "M-14",
            "Area": 105,
            "Precio": 260,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 791,
            "Lote": "M-15",
            "Area": 105,
            "Precio": 270,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 792,
            "Lote": "M-16",
            "Area": 100,
            "Precio": 260,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 793,
            "Lote": "M-17",
            "Area": 100,
            "Precio": 260,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 794,
            "Lote": "M-18",
            "Area": 105,
            "Precio": 260,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 795,
            "Lote": "M-19",
            "Area": 105,
            "Precio": 260,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 796,
            "Lote": "M-20",
            "Area": 105,
            "Precio": 260,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 797,
            "Lote": "M-21",
            "Area": 105,
            "Precio": 260,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 798,
            "Lote": "M-22",
            "Area": 105,
            "Precio": 260,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 799,
            "Lote": "M-23",
            "Area": 105,
            "Precio": 260,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 800,
            "Lote": "M-24",
            "Area": 105,
            "Precio": 260,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 801,
            "Lote": "M-25",
            "Area": 105,
            "Precio": 270,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 802,
            "Lote": "N-1",
            "Area": 150,
            "Precio": 250,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 816,
            "Lote": "N-15",
            "Area": 100,
            "Precio": 250,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 821,
            "Lote": "O-5",
            "Area": 125,
            "Precio": 250,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 826,
            "Lote": "O-10",
            "Area": 120,
            "Precio": 250,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 830,
            "Lote": "O-14",
            "Area": 120,
            "Precio": 250,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 831,
            "Lote": "O-15",
            "Area": 120,
            "Precio": 250,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 832,
            "Lote": "O-16",
            "Area": 120,
            "Precio": 250,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 836,
            "Lote": "O-20",
            "Area": 125,
            "Precio": 250,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 838,
            "Lote": "O-22",
            "Area": 105,
            "Precio": 250,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 839,
            "Lote": "O-23",
            "Area": 118.2,
            "Precio": 250,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 863,
            "Lote": "O-47",
            "Area": 115,
            "Precio": 210,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 865,
            "Lote": "O-49",
            "Area": 128.6,
            "Precio": 190,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 892,
            "Lote": "P-25",
            "Area": 106,
            "Precio": 190,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 893,
            "Lote": "P-26",
            "Area": 106,
            "Precio": 190,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 894,
            "Lote": "P-27",
            "Area": 106,
            "Precio": 190,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 896,
            "Lote": "Q-1",
            "Area": 105,
            "Precio": 210,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 897,
            "Lote": "Q-2",
            "Area": 105,
            "Precio": 190,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 906,
            "Lote": "Q-11",
            "Area": 110,
            "Precio": 230,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 913,
            "Lote": "Q-18",
            "Area": 110,
            "Precio": 210,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 920,
            "Lote": "R-7",
            "Area": 120,
            "Precio": 220,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 923,
            "Lote": "S-1",
            "Area": 90,
            "Precio": 230,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 924,
            "Lote": "S-2",
            "Area": 90,
            "Precio": 230,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 925,
            "Lote": "S-3",
            "Area": 90,
            "Precio": 230,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 926,
            "Lote": "S-4",
            "Area": 90,
            "Precio": 230,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 927,
            "Lote": "S-5",
            "Area": 90,
            "Precio": 190,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 928,
            "Lote": "S-6",
            "Area": 90,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 929,
            "Lote": "S-7",
            "Area": 90,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 930,
            "Lote": "S-8",
            "Area": 90,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 931,
            "Lote": "S-9",
            "Area": 90,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 932,
            "Lote": "S-10",
            "Area": 90,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 933,
            "Lote": "S-11",
            "Area": 103.59,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 934,
            "Lote": "S-12",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 935,
            "Lote": "S-13",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 937,
            "Lote": "S-15",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 942,
            "Lote": "S-20",
            "Area": 110,
            "Precio": 180,
            "Nombre": "Bloqueado"
        },
        {
            "idLote": 944,
            "Lote": "S-22",
            "Area": 110.1,
            "Precio": 220,
            "Nombre": "Bloqueado"
        }
    ];

    const lotes = await obtenerLotes();
    expect(lotes).toEqual(respuestaEsperada);
  });
});
