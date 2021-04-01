import bag2 from '../../assets/img/bags/image_2.png';
import bag4 from '../../assets/img/bags/image_4.jpg';
import bag5 from '../../assets/img/bags/image_5.png';
import bag6 from '../../assets/img/bags/image_6.jpg';
import bag7 from '../../assets/img/bags/image_7.png';
import bag8 from '../../assets/img/bags/image_8.png';
import bag3 from '../../assets/img/bags/img_3.jpg';
import bag9 from '../../assets/img/bags/img_9.jpg';
import bag1 from '../../assets/img/bags/img_1.jpg';
import bag10 from '../../assets/img/bags/image_10.jpg';
import bag14 from '../../assets/img/bags/image_14.png';
import bag11 from '../../assets/img/bags/img_11.jpg';

import setting1 from '../../assets/img/texture/setting_1.png';
import setting2 from '../../assets/img/texture/setting_2.png';
import setting3 from '../../assets/img/texture/setting_3.png';
import setting4 from '../../assets/img/texture/setting_4.png';
import setting5 from '../../assets/img/texture/setting_5.png';
import setting6 from '../../assets/img/texture/setting_6.png';

import bodyPink from '../../assets/textures/BodyPink_diffuse-min.jpg';
import bodyWhite from '../../assets/textures/BodyWhite_diffuse-min.jpg';
import bodyYellow from '../../assets/textures/BodyYellow_diffuse-min.jpg';
import bodyLeather from '../../assets/textures/leather_body_NORM-min.png';

import flatPink from '../../assets/textures/FlapPink_diffuse-min.jpg';
import flatWhite from '../../assets/textures/FlapWhite_diffuse-min.jpg';
import flatYellow from '../../assets/textures/FlapYellow_diffuse-min.jpg';
import flatLeather from '../../assets/textures/leather_flap_NORM-min.png';

import accessory from '../../assets/textures/accessory_diffuse-min.jpg';

import handleAndTrapPink from '../../assets/textures/handleAndStrapPink_diffuse-min.jpg';
import handleAndTrapWhite from '../../assets/textures/handleAndStrapWhite_diffuse-min.jpg';
import handleAndTrapYellow from '../../assets/textures/handleAndStrapYellow_diffuse-min.jpg';
import handleAndTrapLeather from '../../assets/textures/leather_handleAndStrap_NORM-min.png';

import sidePink from '../../assets/textures/sidePink_diffuse-min.jpg';
import sideWhite from '../../assets/textures/sideWhite_diffuse-min.jpg';
import sideYellow from '../../assets/textures/sideYellow_diffuse-min.jpg';
import sideLeather from '../../assets/textures/leather_side_NORM-min.png';

export const listBag = [
    {
        id: '1',
        img: bag1,
        title: 'Convertible Mini Merinal',
        cost: '$1,450.00',
        originalCost: '$2,000.00',
        des:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.',
        colors: ['#9BB4C0', '#000000', '#DA6666'],
        haveCustomize: true,
        details: {
            des:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
            measurements: 'Model is 178cm/ 5\'10" and is wearing a US 2',
            composition: '92% POLYESTER 8% POLYURETHANE',
            washing_instructions: 'Dry clean only',
            made_in: 'Italy',
        },
        img_reviews: [bag1, bag8, bag6],
        reviews: [
            {
                name: 'John Bidenn',
                evaluate: 4,
                date: 'Oct 15, 2020',
                content:
                    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            },
            {
                name: 'Grant Marshall',
                evaluate: 3,
                date: 'Oct 15, 2020',
                content:
                    'When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            },
            {
                name: 'Pena Valdez',
                evaluate: 5,
                date: 'Oct 24, 2020',
                content:
                    'When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
            },
        ],
        settings: {
            sandy_flap: [
                {
                    title: 'Select Leather Type',
                    des: 'TUMBLED LEATHER  $110',
                    texture: [
                        { name: 'PINK', img: flatPink },
                        { name: 'YELLOW', img: flatYellow },
                        { name: 'WHITE', img: flatWhite },
                        { name: 'LEATHER', img: flatLeather },
                    ],
                },
                {
                    title: 'Select Leather Color',
                    des: '',
                    isColor: true,
                    texture: [
                        { name: 'MERINAL', color: '#9D4D34' },
                        { name: 'MERINAL', color: '#907455' },
                        { name: 'MERINAL', color: '#9BB4C0' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#594D2F' },
                        { name: 'MERINAL', color: '#AF854B' },
                        { name: 'MERINAL', color: '#792614' },
                        { name: 'MERINAL', color: '#2E0506' },
                        { name: 'MERINAL', color: '#752210' },
                        { name: 'MERINAL', color: '#383010' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#000000' },
                    ],
                },
                {
                    title: 'Select Pattern Type',
                    des: 'HUMBLE $30',
                    texture: [
                        { name: 'TUMBLED', img: setting1 },
                        { name: 'HELLO', img: setting2 },
                        { name: 'NAME', img: setting3 },
                        { name: 'I’M PHUOC', img: setting4 },
                        { name: 'FANTASTIC', img: setting5 },
                        { name: 'STAGNATE', img: setting6 },
                    ],
                },
            ],
            sandy_body: [
                {
                    title: 'Select Leather Type',
                    des: 'TUMBLED LEATHER  $100',
                    texture: [
                        { name: 'PINK', img: bodyPink },
                        { name: 'YELLOW', img: bodyYellow },
                        { name: 'WHITE', img: bodyWhite },
                        { name: 'LEATHER', img: bodyLeather },
                    ],
                },
                {
                    title: 'Select Leather Color',
                    des: '',
                    isColor: true,
                    texture: [
                        { name: 'MERINAL', color: '#9D4D34' },
                        { name: 'MERINAL', color: '#907455' },
                        { name: 'MERINAL', color: '#9BB4C0' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#594D2F' },
                        { name: 'MERINAL', color: '#AF854B' },
                        { name: 'MERINAL', color: '#792614' },
                        { name: 'MERINAL', color: '#2E0506' },
                        { name: 'MERINAL', color: '#752210' },
                        { name: 'MERINAL', color: '#383010' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#000000' },
                    ],
                },
                {
                    title: 'Select Pattern Type',
                    des: 'HUMBLE $30',
                    texture: [
                        { name: 'TUMBLED', img: setting1 },
                        { name: 'HELLO', img: setting2 },
                        { name: 'NAME', img: setting3 },
                        { name: 'I’M PHUOC', img: setting4 },
                        { name: 'FANTASTIC', img: setting5 },
                        { name: 'STAGNATE', img: setting6 },
                    ],
                },
            ],
            sandy_handleAndStrap: [
                {
                    title: 'Select Leather Type',
                    des: 'TUMBLED LEATHER  $100',
                    texture: [
                        { name: 'PINK', img: handleAndTrapPink },
                        { name: 'YELLOW', img: handleAndTrapYellow },
                        { name: 'WHITE', img: handleAndTrapWhite },
                        { name: 'LEATHER', img: handleAndTrapLeather },
                    ],
                },
                {
                    title: 'Select Leather Color',
                    des: '',
                    isColor: true,
                    texture: [
                        { name: 'MERINAL', color: '#9D4D34' },
                        { name: 'MERINAL', color: '#907455' },
                        { name: 'MERINAL', color: '#9BB4C0' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#594D2F' },
                        { name: 'MERINAL', color: '#AF854B' },
                        { name: 'MERINAL', color: '#792614' },
                        { name: 'MERINAL', color: '#2E0506' },
                        { name: 'MERINAL', color: '#752210' },
                        { name: 'MERINAL', color: '#383010' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#000000' },
                    ],
                },
                {
                    title: 'Select Pattern Type',
                    des: 'HUMBLE $30',
                    texture: [
                        { name: 'TUMBLED', img: setting1 },
                        { name: 'HELLO', img: setting2 },
                        { name: 'NAME', img: setting3 },
                        { name: 'GREAT', img: setting4 },
                        { name: 'FANTASTIC', img: setting5 },
                        { name: 'STAGNATE', img: setting6 },
                    ],
                },
            ],
            sandy_side: [
                {
                    title: 'Select Leather Type',
                    des: 'TUMBLED LEATHER  $100',
                    texture: [
                        { name: 'PINK', img: sidePink },
                        { name: 'YELLOW', img: sideYellow },
                        { name: 'WHITE', img: sideWhite },
                        { name: 'LEATHER', img: sideLeather },
                    ],
                },
                {
                    title: 'Select Leather Color',
                    des: '',
                    isColor: true,
                    texture: [
                        { name: 'MERINAL', color: '#9D4D34' },
                        { name: 'MERINAL', color: '#907455' },
                        { name: 'MERINAL', color: '#9BB4C0' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#594D2F' },
                        { name: 'MERINAL', color: '#AF854B' },
                        { name: 'MERINAL', color: '#792614' },
                        { name: 'MERINAL', color: '#2E0506' },
                        { name: 'MERINAL', color: '#752210' },
                        { name: 'MERINAL', color: '#383010' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#000000' },
                    ],
                },
                {
                    title: 'Select Pattern Type',
                    des: 'HUMBLE $30',
                    texture: [
                        { name: 'TUMBLED', img: setting1 },
                        { name: 'HELLO', img: setting2 },
                        { name: 'NAME', img: setting3 },
                        { name: 'I’M PHUOC', img: setting4 },
                        { name: 'FANTASTIC', img: setting5 },
                        { name: 'STAGNATE', img: setting6 },
                    ],
                },
            ],
            sandy_accessory: [
                {
                    title: 'Select Leather Type',
                    des: 'TUMBLED LEATHER  $100',
                    texture: [
                        { name: 'YELLOW', img: accessory },
                    ],
                },
                {
                    title: 'Select Leather Color',
                    des: '',
                    isColor: true,
                    texture: [
                        { name: 'MERINAL', color: '#9D4D34' },
                        { name: 'MERINAL', color: '#907455' },
                        { name: 'MERINAL', color: '#9BB4C0' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#594D2F' },
                        { name: 'MERINAL', color: '#AF854B' },
                        { name: 'MERINAL', color: '#792614' },
                        { name: 'MERINAL', color: '#2E0506' },
                        { name: 'MERINAL', color: '#752210' },
                        { name: 'MERINAL', color: '#383010' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#000000' },
                    ],
                },
                {
                    title: 'Select Pattern Type',
                    des: 'HUMBLE $30',
                    texture: [
                        { name: 'TUMBLED', img: setting1 },
                        { name: 'HELLO', img: setting2 },
                        { name: 'NAME', img: setting3 },
                        { name: 'I’M PHUOC', img: setting4 },
                        { name: 'FANTASTIC', img: setting5 },
                        { name: 'STAGNATE', img: setting6 },
                    ],
                },
            ],
        },
    },
    {
        id: '2',
        img: bag2,
        title: 'Letraset sheets containing Lorem Ipsum passages',
        cost: '$1,450.00',
        originalCost: '$2,000.00',
        des:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.',
        colors: ['#9BB4C0', '#000000', '#DA6666'],
        haveCustomize: true,
        details: {
            des:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
            measurements: 'Model is 178cm/ 5\'10" and is wearing a US 2',
            composition: '92% POLYESTER 8% POLYURETHANE',
            washing_instructions: 'Dry clean only',
            made_in: 'Italy',
        },
        img_reviews: [bag4, bag5, bag2],
        reviews: [
            {
                name: 'John Bidenn',
                evaluate: 4,
                date: 'Oct 15, 2020',
                content:
                    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            },
            {
                name: 'Grant Marshall',
                evaluate: 3,
                date: 'Oct 15, 2020',
                content:
                    'When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            },
            {
                name: 'Pena Valdez',
                evaluate: 5,
                date: 'Oct 24, 2020',
                content:
                    'When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
            },
        ],
        settings: {
            sandy_flap: [
                {
                    title: 'Select Leather Type',
                    des: 'TUMBLED LEATHER  $110',
                    texture: [
                        { name: 'PINK', img: flatPink },
                        { name: 'YELLOW', img: flatYellow },
                        { name: 'WHITE', img: flatWhite },
                        { name: 'LEATHER', img: flatLeather },
                    ],
                },
                {
                    title: 'Select Leather Color',
                    des: '',
                    isColor: true,
                    texture: [
                        { name: 'MERINAL', color: '#9D4D34' },
                        { name: 'MERINAL', color: '#907455' },
                        { name: 'MERINAL', color: '#9BB4C0' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#594D2F' },
                        { name: 'MERINAL', color: '#AF854B' },
                        { name: 'MERINAL', color: '#792614' },
                        { name: 'MERINAL', color: '#2E0506' },
                        { name: 'MERINAL', color: '#752210' },
                        { name: 'MERINAL', color: '#383010' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#000000' },
                    ],
                },
                {
                    title: 'Select Pattern Type',
                    des: 'HUMBLE $30',
                    texture: [
                        { name: 'TUMBLED', img: setting1 },
                        { name: 'HELLO', img: setting2 },
                        { name: 'NAME', img: setting3 },
                        { name: 'I’M PHUOC', img: setting4 },
                        { name: 'FANTASTIC', img: setting5 },
                        { name: 'STAGNATE', img: setting6 },
                    ],
                },
            ],
            sandy_body: [
                {
                    title: 'Select Leather Type',
                    des: 'TUMBLED LEATHER  $100',
                    texture: [
                        { name: 'PINK', img: bodyPink },
                        { name: 'YELLOW', img: bodyYellow },
                        { name: 'WHITE', img: bodyWhite },
                        { name: 'LEATHER', img: bodyLeather },
                    ],
                },
                {
                    title: 'Select Leather Color',
                    des: '',
                    isColor: true,
                    texture: [
                        { name: 'MERINAL', color: '#9D4D34' },
                        { name: 'MERINAL', color: '#907455' },
                        { name: 'MERINAL', color: '#9BB4C0' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#594D2F' },
                        { name: 'MERINAL', color: '#AF854B' },
                        { name: 'MERINAL', color: '#792614' },
                        { name: 'MERINAL', color: '#2E0506' },
                        { name: 'MERINAL', color: '#752210' },
                        { name: 'MERINAL', color: '#383010' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#000000' },
                    ],
                },
                {
                    title: 'Select Pattern Type',
                    des: 'HUMBLE $30',
                    texture: [
                        { name: 'TUMBLED', img: setting1 },
                        { name: 'HELLO', img: setting2 },
                        { name: 'NAME', img: setting3 },
                        { name: 'I’M PHUOC', img: setting4 },
                        { name: 'FANTASTIC', img: setting5 },
                        { name: 'STAGNATE', img: setting6 },
                    ],
                },
            ],
            sandy_handleAndStrap: [
                {
                    title: 'Select Leather Type',
                    des: 'TUMBLED LEATHER  $100',
                    texture: [
                        { name: 'PINK', img: handleAndTrapPink },
                        { name: 'YELLOW', img: handleAndTrapYellow },
                        { name: 'WHITE', img: handleAndTrapWhite },
                        { name: 'LEATHER', img: handleAndTrapLeather },
                    ],
                },
                {
                    title: 'Select Leather Color',
                    des: '',
                    isColor: true,
                    texture: [
                        { name: 'MERINAL', color: '#9D4D34' },
                        { name: 'MERINAL', color: '#907455' },
                        { name: 'MERINAL', color: '#9BB4C0' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#594D2F' },
                        { name: 'MERINAL', color: '#AF854B' },
                        { name: 'MERINAL', color: '#792614' },
                        { name: 'MERINAL', color: '#2E0506' },
                        { name: 'MERINAL', color: '#752210' },
                        { name: 'MERINAL', color: '#383010' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#000000' },
                    ],
                },
                {
                    title: 'Select Pattern Type',
                    des: 'HUMBLE $30',
                    texture: [
                        { name: 'TUMBLED', img: setting1 },
                        { name: 'HELLO', img: setting2 },
                        { name: 'NAME', img: setting3 },
                        { name: 'GREAT', img: setting4 },
                        { name: 'FANTASTIC', img: setting5 },
                        { name: 'STAGNATE', img: setting6 },
                    ],
                },
            ],
            sandy_side: [
                {
                    title: 'Select Leather Type',
                    des: 'TUMBLED LEATHER  $100',
                    texture: [
                        { name: 'PINK', img: sidePink },
                        { name: 'YELLOW', img: sideYellow },
                        { name: 'WHITE', img: sideWhite },
                        { name: 'LEATHER', img: sideLeather },
                    ],
                },
                {
                    title: 'Select Leather Color',
                    des: '',
                    isColor: true,
                    texture: [
                        { name: 'MERINAL', color: '#9D4D34' },
                        { name: 'MERINAL', color: '#907455' },
                        { name: 'MERINAL', color: '#9BB4C0' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#594D2F' },
                        { name: 'MERINAL', color: '#AF854B' },
                        { name: 'MERINAL', color: '#792614' },
                        { name: 'MERINAL', color: '#2E0506' },
                        { name: 'MERINAL', color: '#752210' },
                        { name: 'MERINAL', color: '#383010' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#000000' },
                    ],
                },
                {
                    title: 'Select Pattern Type',
                    des: 'HUMBLE $30',
                    texture: [
                        { name: 'TUMBLED', img: setting1 },
                        { name: 'HELLO', img: setting2 },
                        { name: 'NAME', img: setting3 },
                        { name: 'I’M PHUOC', img: setting4 },
                        { name: 'FANTASTIC', img: setting5 },
                        { name: 'STAGNATE', img: setting6 },
                    ],
                },
            ],
            sandy_accessory: [
                {
                    title: 'Select Leather Type',
                    des: 'TUMBLED LEATHER  $100',
                    texture: [
                        { name: 'YELLOW', img: accessory },
                    ],
                },
                {
                    title: 'Select Leather Color',
                    des: '',
                    isColor: true,
                    texture: [
                        { name: 'MERINAL', color: '#9D4D34' },
                        { name: 'MERINAL', color: '#907455' },
                        { name: 'MERINAL', color: '#9BB4C0' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#594D2F' },
                        { name: 'MERINAL', color: '#AF854B' },
                        { name: 'MERINAL', color: '#792614' },
                        { name: 'MERINAL', color: '#2E0506' },
                        { name: 'MERINAL', color: '#752210' },
                        { name: 'MERINAL', color: '#383010' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#000000' },
                    ],
                },
                {
                    title: 'Select Pattern Type',
                    des: 'HUMBLE $30',
                    texture: [
                        { name: 'TUMBLED', img: setting1 },
                        { name: 'HELLO', img: setting2 },
                        { name: 'NAME', img: setting3 },
                        { name: 'I’M PHUOC', img: setting4 },
                        { name: 'FANTASTIC', img: setting5 },
                        { name: 'STAGNATE', img: setting6 },
                    ],
                },
            ],
        },
    },
    {
        id: '3',
        img: bag3,
        title: 'Hampden-Sydney College',
        cost: '$1,050.00',
        originalCost: '$2,000.00',
        des:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.',
        colors: ['#9BB4C0', '#000000', '#DA6666'],
        haveCustomize: true,
        details: {
            des:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
            measurements: 'Model is 178cm/ 5\'10" and is wearing a US 2',
            composition: '92% POLYESTER 8% POLYURETHANE',
            washing_instructions: 'Dry clean only',
            made_in: 'Italy',
        },
        img_reviews: [bag3, bag8, bag7],
        reviews: [
            {
                name: 'John Bidenn',
                evaluate: 4,
                date: 'Oct 15, 2020',
                content:
                    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            },
            {
                name: 'Grant Marshall',
                evaluate: 3,
                date: 'Oct 15, 2020',
                content:
                    'When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            },
            {
                name: 'Pena Valdez',
                evaluate: 5,
                date: 'Oct 24, 2020',
                content:
                    'When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
            },
        ],
        settings: {
            sandy_flap: [
                {
                    title: 'Select Leather Type',
                    des: 'TUMBLED LEATHER  $110',
                    texture: [
                        { name: 'PINK', img: flatPink },
                        { name: 'YELLOW', img: flatYellow },
                        { name: 'WHITE', img: flatWhite },
                        { name: 'LEATHER', img: flatLeather },
                    ],
                },
                {
                    title: 'Select Leather Color',
                    des: '',
                    isColor: true,
                    texture: [
                        { name: 'MERINAL', color: '#9D4D34' },
                        { name: 'MERINAL', color: '#907455' },
                        { name: 'MERINAL', color: '#9BB4C0' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#594D2F' },
                        { name: 'MERINAL', color: '#AF854B' },
                        { name: 'MERINAL', color: '#792614' },
                        { name: 'MERINAL', color: '#2E0506' },
                        { name: 'MERINAL', color: '#752210' },
                        { name: 'MERINAL', color: '#383010' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#000000' },
                    ],
                },
                {
                    title: 'Select Pattern Type',
                    des: 'HUMBLE $30',
                    texture: [
                        { name: 'TUMBLED', img: setting1 },
                        { name: 'HELLO', img: setting2 },
                        { name: 'NAME', img: setting3 },
                        { name: 'I’M PHUOC', img: setting4 },
                        { name: 'FANTASTIC', img: setting5 },
                        { name: 'STAGNATE', img: setting6 },
                    ],
                },
            ],
            sandy_body: [
                {
                    title: 'Select Leather Type',
                    des: 'TUMBLED LEATHER  $100',
                    texture: [
                        { name: 'PINK', img: bodyPink },
                        { name: 'YELLOW', img: bodyYellow },
                        { name: 'WHITE', img: bodyWhite },
                        { name: 'LEATHER', img: bodyLeather },
                    ],
                },
                {
                    title: 'Select Leather Color',
                    des: '',
                    isColor: true,
                    texture: [
                        { name: 'MERINAL', color: '#9D4D34' },
                        { name: 'MERINAL', color: '#907455' },
                        { name: 'MERINAL', color: '#9BB4C0' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#594D2F' },
                        { name: 'MERINAL', color: '#AF854B' },
                        { name: 'MERINAL', color: '#792614' },
                        { name: 'MERINAL', color: '#2E0506' },
                        { name: 'MERINAL', color: '#752210' },
                        { name: 'MERINAL', color: '#383010' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#000000' },
                    ],
                },
                {
                    title: 'Select Pattern Type',
                    des: 'HUMBLE $30',
                    texture: [
                        { name: 'TUMBLED', img: setting1 },
                        { name: 'HELLO', img: setting2 },
                        { name: 'NAME', img: setting3 },
                        { name: 'I’M PHUOC', img: setting4 },
                        { name: 'FANTASTIC', img: setting5 },
                        { name: 'STAGNATE', img: setting6 },
                    ],
                },
            ],
            sandy_handleAndStrap: [
                {
                    title: 'Select Leather Type',
                    des: 'TUMBLED LEATHER  $100',
                    texture: [
                        { name: 'PINK', img: handleAndTrapPink },
                        { name: 'YELLOW', img: handleAndTrapYellow },
                        { name: 'WHITE', img: handleAndTrapWhite },
                        { name: 'LEATHER', img: handleAndTrapLeather },
                    ],
                },
                {
                    title: 'Select Leather Color',
                    des: '',
                    isColor: true,
                    texture: [
                        { name: 'MERINAL', color: '#9D4D34' },
                        { name: 'MERINAL', color: '#907455' },
                        { name: 'MERINAL', color: '#9BB4C0' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#594D2F' },
                        { name: 'MERINAL', color: '#AF854B' },
                        { name: 'MERINAL', color: '#792614' },
                        { name: 'MERINAL', color: '#2E0506' },
                        { name: 'MERINAL', color: '#752210' },
                        { name: 'MERINAL', color: '#383010' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#000000' },
                    ],
                },
                {
                    title: 'Select Pattern Type',
                    des: 'HUMBLE $30',
                    texture: [
                        { name: 'TUMBLED', img: setting1 },
                        { name: 'HELLO', img: setting2 },
                        { name: 'NAME', img: setting3 },
                        { name: 'GREAT', img: setting4 },
                        { name: 'FANTASTIC', img: setting5 },
                        { name: 'STAGNATE', img: setting6 },
                    ],
                },
            ],
            sandy_side: [
                {
                    title: 'Select Leather Type',
                    des: 'TUMBLED LEATHER  $100',
                    texture: [
                        { name: 'PINK', img: sidePink },
                        { name: 'YELLOW', img: sideYellow },
                        { name: 'WHITE', img: sideWhite },
                        { name: 'LEATHER', img: sideLeather },
                    ],
                },
                {
                    title: 'Select Leather Color',
                    des: '',
                    isColor: true,
                    texture: [
                        { name: 'MERINAL', color: '#9D4D34' },
                        { name: 'MERINAL', color: '#907455' },
                        { name: 'MERINAL', color: '#9BB4C0' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#594D2F' },
                        { name: 'MERINAL', color: '#AF854B' },
                        { name: 'MERINAL', color: '#792614' },
                        { name: 'MERINAL', color: '#2E0506' },
                        { name: 'MERINAL', color: '#752210' },
                        { name: 'MERINAL', color: '#383010' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#000000' },
                    ],
                },
                {
                    title: 'Select Pattern Type',
                    des: 'HUMBLE $30',
                    texture: [
                        { name: 'TUMBLED', img: setting1 },
                        { name: 'HELLO', img: setting2 },
                        { name: 'NAME', img: setting3 },
                        { name: 'I’M PHUOC', img: setting4 },
                        { name: 'FANTASTIC', img: setting5 },
                        { name: 'STAGNATE', img: setting6 },
                    ],
                },
            ],
            sandy_accessory: [
                {
                    title: 'Select Leather Type',
                    des: 'TUMBLED LEATHER  $100',
                    texture: [
                        { name: 'YELLOW', img: accessory },
                    ],
                },
                {
                    title: 'Select Leather Color',
                    des: '',
                    isColor: true,
                    texture: [
                        { name: 'MERINAL', color: '#9D4D34' },
                        { name: 'MERINAL', color: '#907455' },
                        { name: 'MERINAL', color: '#9BB4C0' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#594D2F' },
                        { name: 'MERINAL', color: '#AF854B' },
                        { name: 'MERINAL', color: '#792614' },
                        { name: 'MERINAL', color: '#2E0506' },
                        { name: 'MERINAL', color: '#752210' },
                        { name: 'MERINAL', color: '#383010' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#000000' },
                    ],
                },
                {
                    title: 'Select Pattern Type',
                    des: 'HUMBLE $30',
                    texture: [
                        { name: 'TUMBLED', img: setting1 },
                        { name: 'HELLO', img: setting2 },
                        { name: 'NAME', img: setting3 },
                        { name: 'GREAT', img: setting4 },
                        { name: 'FANTASTIC', img: setting5 },
                        { name: 'STAGNATE', img: setting6 },
                    ],
                },
            ],
        },
    },
    {
        id: '4',
        img: bag4,
        title: 'Convertible Mini Merinal',
        cost: '$950.00',
        originalCost: '$2,000.00',
        des:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.',
        colors: ['#9BB4C0', '#000000', '#DA6666'],
        haveCustomize: true,
        details: {
            des:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
            measurements: 'Model is 178cm/ 5\'10" and is wearing a US 2',
            composition: '92% POLYESTER 8% POLYURETHANE',
            washing_instructions: 'Dry clean only',
            made_in: 'Italy',
        },
        img_reviews: [bag2, bag8, bag2],
        reviews: [],
        settings: {},
    },
    {
        id: '5',
        img: bag5,
        title: 'Letraset sheets containing Lorem Ipsum passages',
        cost: '$1.450.00',
        originalCost: '$2,000.00',
        des:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.',
        colors: ['#9BB4C0', '#000000', '#DA6666'],
        haveCustomize: true,
        details: {
            des:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
            measurements: 'Model is 178cm/ 5\'10" and is wearing a US 2',
            composition: '92% POLYESTER 8% POLYURETHANE',
            washing_instructions: 'Dry clean only',
            made_in: 'Italy',
        },
        img_reviews: [bag4, bag10, bag11],
        reviews: [],
    },
    {
        id: '6',
        img: bag6,
        title: 'Letraset sheets containing Lorem Ipsum passages',
        cost: '$1,450.00',
        originalCost: '$2,000.00',
        des:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.',
        colors: ['#9BB4C0', '#000000', '#DA6666'],
        haveCustomize: true,
        details: {
            des:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
            measurements: 'Model is 178cm/ 5\'10" and is wearing a US 2',
            composition: '92% POLYESTER 8% POLYURETHANE',
            washing_instructions: 'Dry clean only',
            made_in: 'Italy',
        },
        img_reviews: [bag6, bag1, bag2],
        reviews: [
            {
                name: 'John Bidenn',
                evaluate: 4,
                date: 'Oct 15, 2020',
                content:
                    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            },
            {
                name: 'Grant Marshall',
                evaluate: 3,
                date: 'Oct 15, 2020',
                content:
                    'When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            },
            {
                name: 'Pena Valdez',
                evaluate: 5,
                date: 'Oct 24, 2020',
                content:
                    'When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
            },
        ],
        settings: {
            sandy_flap: [
                {
                    title: 'Select Leather Type',
                    des: 'TUMBLED LEATHER  $110',
                    texture: [
                        { name: 'PINK', img: flatPink },
                        { name: 'YELLOW', img: flatYellow },
                        { name: 'WHITE', img: flatWhite },
                        { name: 'LEATHER', img: flatLeather },
                    ],
                },
                {
                    title: 'Select Leather Color',
                    des: '',
                    isColor: true,
                    texture: [
                        { name: 'MERINAL', color: '#9D4D34' },
                        { name: 'MERINAL', color: '#907455' },
                        { name: 'MERINAL', color: '#9BB4C0' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#594D2F' },
                        { name: 'MERINAL', color: '#AF854B' },
                        { name: 'MERINAL', color: '#792614' },
                        { name: 'MERINAL', color: '#2E0506' },
                        { name: 'MERINAL', color: '#752210' },
                        { name: 'MERINAL', color: '#383010' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#000000' },
                    ],
                },
                {
                    title: 'Select Pattern Type',
                    des: 'HUMBLE $30',
                    texture: [
                        { name: 'TUMBLED', img: setting1 },
                        { name: 'HELLO', img: setting2 },
                        { name: 'NAME', img: setting3 },
                        { name: 'I’M PHUOC', img: setting4 },
                        { name: 'FANTASTIC', img: setting5 },
                        { name: 'STAGNATE', img: setting6 },
                    ],
                },
            ],
            sandy_body: [
                {
                    title: 'Select Leather Type',
                    des: 'TUMBLED LEATHER  $100',
                    texture: [
                        { name: 'PINK', img: bodyPink },
                        { name: 'YELLOW', img: bodyYellow },
                        { name: 'WHITE', img: bodyWhite },
                        { name: 'LEATHER', img: bodyLeather },
                    ],
                },
                {
                    title: 'Select Leather Color',
                    des: '',
                    isColor: true,
                    texture: [
                        { name: 'MERINAL', color: '#9D4D34' },
                        { name: 'MERINAL', color: '#907455' },
                        { name: 'MERINAL', color: '#9BB4C0' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#594D2F' },
                        { name: 'MERINAL', color: '#AF854B' },
                        { name: 'MERINAL', color: '#792614' },
                        { name: 'MERINAL', color: '#2E0506' },
                        { name: 'MERINAL', color: '#752210' },
                        { name: 'MERINAL', color: '#383010' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#000000' },
                    ],
                },
                {
                    title: 'Select Pattern Type',
                    des: 'HUMBLE $30',
                    texture: [
                        { name: 'TUMBLED', img: setting1 },
                        { name: 'HELLO', img: setting2 },
                        { name: 'NAME', img: setting3 },
                        { name: 'I’M PHUOC', img: setting4 },
                        { name: 'FANTASTIC', img: setting5 },
                        { name: 'STAGNATE', img: setting6 },
                    ],
                },
            ],
            sandy_handleAndStrap: [
                {
                    title: 'Select Leather Type',
                    des: 'TUMBLED LEATHER  $100',
                    texture: [
                        { name: 'PINK', img: handleAndTrapPink },
                        { name: 'YELLOW', img: handleAndTrapYellow },
                        { name: 'WHITE', img: handleAndTrapWhite },
                        { name: 'LEATHER', img: handleAndTrapLeather },
                    ],
                },
                {
                    title: 'Select Leather Color',
                    des: '',
                    isColor: true,
                    texture: [
                        { name: 'MERINAL', color: '#9D4D34' },
                        { name: 'MERINAL', color: '#907455' },
                        { name: 'MERINAL', color: '#9BB4C0' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#594D2F' },
                        { name: 'MERINAL', color: '#AF854B' },
                        { name: 'MERINAL', color: '#792614' },
                        { name: 'MERINAL', color: '#2E0506' },
                        { name: 'MERINAL', color: '#752210' },
                        { name: 'MERINAL', color: '#383010' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#000000' },
                    ],
                },
                {
                    title: 'Select Pattern Type',
                    des: 'HUMBLE $30',
                    texture: [
                        { name: 'TUMBLED', img: setting1 },
                        { name: 'HELLO', img: setting2 },
                        { name: 'NAME', img: setting3 },
                        { name: 'GREAT', img: setting4 },
                        { name: 'FANTASTIC', img: setting5 },
                        { name: 'STAGNATE', img: setting6 },
                    ],
                },
            ],
            sandy_side: [
                {
                    title: 'Select Leather Type',
                    des: 'TUMBLED LEATHER  $100',
                    texture: [
                        { name: 'PINK', img: sidePink },
                        { name: 'YELLOW', img: sideYellow },
                        { name: 'WHITE', img: sideWhite },
                        { name: 'LEATHER', img: sideLeather },
                    ],
                },
                {
                    title: 'Select Leather Color',
                    des: '',
                    isColor: true,
                    texture: [
                        { name: 'MERINAL', color: '#9D4D34' },
                        { name: 'MERINAL', color: '#907455' },
                        { name: 'MERINAL', color: '#9BB4C0' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#594D2F' },
                        { name: 'MERINAL', color: '#AF854B' },
                        { name: 'MERINAL', color: '#792614' },
                        { name: 'MERINAL', color: '#2E0506' },
                        { name: 'MERINAL', color: '#752210' },
                        { name: 'MERINAL', color: '#383010' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#000000' },
                    ],
                },
                {
                    title: 'Select Pattern Type',
                    des: 'HUMBLE $30',
                    texture: [
                        { name: 'TUMBLED', img: setting1 },
                        { name: 'HELLO', img: setting2 },
                        { name: 'NAME', img: setting3 },
                        { name: 'I’M PHUOC', img: setting4 },
                        { name: 'FANTASTIC', img: setting5 },
                        { name: 'STAGNATE', img: setting6 },
                    ],
                },
            ],
            sandy_accessory: [
                {
                    title: 'Select Leather Type',
                    des: 'TUMBLED LEATHER  $100',
                    texture: [
                        { name: 'YELLOW', img: accessory },
                    ],
                },
                {
                    title: 'Select Leather Color',
                    des: '',
                    isColor: true,
                    texture: [
                        { name: 'MERINAL', color: '#9D4D34' },
                        { name: 'MERINAL', color: '#907455' },
                        { name: 'MERINAL', color: '#9BB4C0' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#594D2F' },
                        { name: 'MERINAL', color: '#AF854B' },
                    ],
                },
                {
                    title: 'Select Pattern Type',
                    des: 'HUMBLE $30',
                    texture: [
                        { name: 'TUMBLED', img: setting1 },
                        { name: 'HELLO', img: setting2 },
                        { name: 'NAME', img: setting3 },
                        { name: 'FANTASTIC', img: setting5 },
                        { name: 'STAGNATE', img: setting6 },
                    ],
                },
            ],
        },
    },
    {
        id: '7',
        img: bag7,
        title: 'Convertible Mini Merinal',
        cost: '$950.00',
        originalCost: '$2,000.00',
        des:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.',
        colors: ['#9BB4C0', '#000000', '#DA6666'],
        haveCustomize: true,
        details: {
            des:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
            measurements: 'Model is 178cm/ 5\'10" and is wearing a US 2',
            composition: '92% POLYESTER 8% POLYURETHANE',
            washing_instructions: 'Dry clean only',
            made_in: 'Italy',
        },
        img_reviews: [bag2, bag8, bag2],
        reviews: [],
    },
    {
        id: '8',
        img: bag8,
        title: 'Convertible Mini Merinal',
        cost: '$1,450.00',
        originalCost: '$2,000.00',
        des:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.',
        colors: ['#9BB4C0', '#000000', '#DA6666'],
        haveCustomize: true,
        details: {
            des:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
            measurements: 'Model is 178cm/ 5\'10" and is wearing a US 2',
            composition: '92% POLYESTER 8% POLYURETHANE',
            washing_instructions: 'Dry clean only',
            made_in: 'Italy',
        },
        img_reviews: [bag2, bag8, bag2],
        reviews: [],
    },
    {
        id: '9',
        img: bag9,
        title: 'Letraset sheets containing Lorem Ipsum passages',
        cost: '$1,450.00',
        originalCost: '$2,000.00',
        des:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.',
        colors: ['#9BB4C0', '#000000', '#DA6666'],
        haveCustomize: true,
        details: {
            des:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
            measurements: 'Model is 178cm/ 5\'10" and is wearing a US 2',
            composition: '92% POLYESTER 8% POLYURETHANE',
            washing_instructions: 'Dry clean only',
            made_in: 'Italy',
        },
        img_reviews: [bag2, bag8, bag2],
        reviews: [],
    },
    {
        id: '10',
        img: bag10,
        title: 'Hampden-Sydney College',
        cost: '$1,050.00',
        originalCost: '$2,000.00',
        des:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.',
        colors: ['#9BB4C0', '#000000', '#DA6666'],
        haveCustomize: true,
        details: {
            des:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
            measurements: 'Model is 178cm/ 5\'10" and is wearing a US 2',
            composition: '92% POLYESTER 8% POLYURETHANE',
            washing_instructions: 'Dry clean only',
            made_in: 'Italy',
        },
        img_reviews: [bag2, bag8, bag2],
        reviews: [],
    },
    {
        id: '11',
        img: bag11,
        title: 'Convertible Mini Merinal',
        cost: '$950.00',
        originalCost: '$2,000.00',
        des:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.',
        colors: ['#9BB4C0', '#000000', '#DA6666'],
        haveCustomize: true,
        details: {
            des:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
            measurements: 'Model is 178cm/ 5\'10" and is wearing a US 2',
            composition: '92% POLYESTER 8% POLYURETHANE',
            washing_instructions: 'Dry clean only',
            made_in: 'Italy',
        },
        img_reviews: [bag2, bag8, bag2],
        reviews: [],
    },
    {
        id: '12',
        img: bag14,
        title: 'Convertible Mini Merinal',
        cost: '$950.00',
        originalCost: '$2,000.00',
        des:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.',
        colors: ['#9BB4C0', '#000000', '#DA6666'],
        haveCustomize: true,
        details: {
            des:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
            measurements: 'Model is 178cm/ 5\'10" and is wearing a US 2',
            composition: '92% POLYESTER 8% POLYURETHANE',
            washing_instructions: 'Dry clean only',
            made_in: 'Italy',
        },
        img_reviews: [bag2, bag8, bag2],
        reviews: [],
    },
   
];
