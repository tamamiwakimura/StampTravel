import {Image  } from 'react-native';
const DATA = [
    {
      key: '1',
      label: 'Sonkhla',
      description: '30 สถานที่ท่องเที่ยว', //เพิ่มอำเภอ
      imageUrl: 'https://news.gimyong.com/static/uploads/pictures/201812/1688853877-51043.webp',
      ProgressPercent: '0.2',
      Percent: '20%',
      subprovince: [
        { id: '1',
          name: 'Hatyai', 
          score:'4/6',
          subsubprovince: [
            {
              idsub: '1',
              namesub: 'ตลาดกิมหยง',
              imageUrl: 'https://roijang.com/wp-content/uploads/2024/01/%E0%B8%95%E0%B8%A5%E0%B8%B2%E0%B8%94%E0%B8%81%E0%B8%B4%E0%B8%A1%E0%B8%AB%E0%B8%A2%E0%B8%87-1-768x461.jpg',

            },
            {
              idsub: '2',
              namesub: 'วัดฉื่อฉาง',
              imageUrl: 'https://cms.dmpcdn.com/travel/2024/03/27/8564abb0-ebfb-11ee-ad92-1be9a1054ad6_webp_original.webp',
            },
            {
              idsub: '3',
              namesub: 'น้ำตกโตนงาช้าง',
              imageUrl: 'https://cms.dmpcdn.com/travel/2021/07/19/b13ee6c0-e7f7-11eb-817b-17e2ded05283_webp_original.jpg',
            },
            {
              idsub: '4',
              namesub: 'ตลาดกรีนเวย์',
              imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/f5/f9/3a/getlstd-property-photo.jpg?w=1200&h=-1&s=1',
            },
            {
              idsub: '5',
              namesub: 'หอนาฬิกา',
              imageUrl: 'https://kpscarrent.com/wp-content/uploads/2023/02/clock-tower-hat-yai-1024x538.jpg',
            },
            {
              idsub: '6',
              namesub: 'ตลาดน้ำคลองแห',
              imageUrl: 'https://img.wongnai.com/p/1920x0/2019/05/13/54d3a8e1805a4705b4c9389404f02777.jpg',
            }
    
          ]
        },
        { id: '2',
           name: 'Sadao' ,
           score:'4/4',
           subsubprovince: [
            {
              idsub: '1',
              namesub: 'วัดถ้ำเขารูปช้าง',
              imageUrl: 'https://cms.dmpcdn.com/travel/2021/01/10/214947e0-5328-11eb-89e4-35f1a97d3869_original.jpg',

            },
            {
              idsub: '2',
              namesub: 'เขาน้ำค้าง',
              imageUrl: 'https://www.songkhla.go.th/tmp/55cf520a5931ad75d748f29fbe0991a1.jpg',
            },
            {
              idsub: '3',
              namesub: 'เขาเล่',
              imageUrl: 'https://f.ptcdn.info/475/060/000/ph5gn1gdfp3Nf0fUcH2-o.jpg',
            },
            {
              idsub: '4',
              namesub: 'วัดหัวถนน',
              imageUrl: 'https://img.wongnai.com/p/1920x0/2020/03/16/d05a15de596a4b568bb7977ac335a581.jpg',
            },
    
          ]
        
          },
        { id: '3', name: 'Meang',
          score:'5/5',subsubprovince: [
            {
              idsub: '1',
              namesub: 'หาดสมิหลา',
              imageUrl: 'https://cms.dmpcdn.com/travel/2020/12/29/88aaa460-49cd-11eb-89e4-35f1a97d3869_original.jpg',

            },
            {
              idsub: '2',
              namesub: 'เมืองเก่า',
              imageUrl: 'https://www.dasta.or.th/uploads/article/202309/1695630600_cff78dd8dc2a782b7208.jpg',
            },
            {
              idsub: '3',
              namesub: 'เขาตังกวน',
              imageUrl: 'https://f.ptcdn.info/702/076/000/r8xe63689oDk63NAZSN-o.jpg',
            },
            {
              idsub: '4',
              namesub: 'สวนสัตว์สงขลา',
              imageUrl: 'https://www.krc.go.th/files/com_travel/2021-11_471331abae41466.jpg',
            },
            {
              idsub: '5',
              namesub: 'ถนนคนเดิน',
              imageUrl: 'https://www.songkhla.go.th/tmp/d6cc20a1e5e2f6246398640ab288ff27.png',
            }

            
          ]
         },
          
        { id: '4', name: 'Chana',
          score:'3/3',
          subsubprovince: [
            {
              idsub: '1',
              namesub: 'ลิวงค์',
              imageUrl: 'https://cms.dmpcdn.com/travel/2020/05/26/fde06f20-9f47-11ea-8b02-cdf01bd388b1_original.jpg',

            },
            {
              idsub: '2',
              namesub: 'วัดโคกทราย',
              imageUrl: 'https://img.wongnai.com/p/256x256/2022/12/13/13dab03efff44010b040290a888a3b2b.jpg?v=2',
            },
            {
              idsub: '3',
              namesub: 'สถานีรถไฟจะนะ',
              imageUrl: 'https://news.thaipbs.or.th/media/GBdo1QteGib8k5frLhDfbmmENPvQ9OQkix68bu4dqTLaISLIF1.png',
            },
            
    
          ] 
        },
        { id: '5', name: 'Ranot',
          score:'3/3', 
          subsubprovince: [
            {
              idsub: '1',
              namesub: 'ปากบาง',
              imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUc87IAxrR0QpTYa5Ah3ACSbiQLkSPJSOV7A&s',

            },
            {
              idsub: '2',
              namesub: 'ตลาดคลองแดน',
              imageUrl: 'https://www.ramkaew.go.th/files/com_travel/2018-10_555063886c6dad1.jpg',
            },
            {
              idsub: '3',
              namesub: 'สวนบุรพาจารย์',
              imageUrl: 'https://img.wongnai.com/p/1920x0/2019/04/25/dc7f667f0f8c4b8e843d32f7742fc59a.jpg',
            },
            
    
          ]
         },
        { id: '6', name: 'Na Mom',
          score:'3/3',
          subsubprovince: [
            {
              idsub: '1',
              namesub: 'น้ำตกโตนลาด',
              imageUrl: 'https://www.songkhla.go.th/tmp/905943eea2fcb392d487e2248904ee0b.jpg',

            },
            {
              idsub: '2',
              namesub: 'ควนคานหลาว',
              imageUrl: 'https://img.wongnai.com/p/400x0/2021/11/10/fd0900a81fd84c0ba0498ff1cc06ea26.jpg',
            },
            {
              idsub: '3',
              namesub: 'อ่างเก็บน้ำนาทองสุก',
              imageUrl: 'https://www.hatyaifocus.com/ckeditor/upload/forums/8/%E0%B9%80%E0%B8%88%E0%B8%94%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%A7%E0%B8%A2%E0%B9%86/%E0%B8%99%E0%B8%B2%E0%B8%97%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%B8%E0%B8%81/IMG_3276.jpg',
            },
            
    
          ] 
        },
        { id: '7', name: 'Rattaphum',
          score:'3/3', 
          subsubprovince: [
            {
              idsub: '1',
              namesub: 'เขาคูหา',
              imageUrl: 'https://cms.dmpcdn.com/travel/2020/12/24/84f133e0-45b1-11eb-9b6d-3fdf37c2e48e_original.jpg',

            },
            {
              idsub: '2',
              namesub: 'ถ้ำเขาจังโหลน',
              imageUrl: 'https://www.taxihadyai.com/wp-content/uploads/2020/07/IMG20200727120315-800x440.jpg',
            },
            {
              idsub: '3',
              namesub: 'น้ำตกบริพัตร',
              imageUrl: 'https://cms.dmpcdn.com/travel/2022/06/26/49ae9d40-f528-11ec-b875-6f964199faf1_webp_original.jpg',
            },
            
    
          ] 
        },
        { id: '8', name: 'Thepha' ,
          score:'3/3', subsubprovince: [
            {
              idsub: '1',
              namesub: 'ควนเจดีย์',
              imageUrl: 'https://www.hatyaifocus.com/ckeditor/upload/userfilesfile/1A%20Tew/1/%E0%B8%9E_%E0%B8%84_/17/32440420_204139243530078_4152031578958069760_o.jpg',

            },
            {
              idsub: '2',
              namesub: 'เจดีย์เขาล้อน',
              imageUrl: 'https://siamrath.co.th/sites/default/files/styles/1140/public/img/20200825/0a039d74182ae3cda719d682d900f4c4971fa81cd4a77bf9914ac04a88b7def4.jpg?itok=2Me9TyC0',
            },
            {
              idsub: '3',
              namesub: 'หาดสะกอม',
              imageUrl: 'https://songkhla.prd.go.th/th/file/get/file/202303232fd20f4f835cfaea8d5c2b336b97b506142855.jpeg',
            },
            
    
          ] },
      ],
    },

    {
      key: '2',
      label: 'Satun',
      description: '159 สถานที่ท่องเที่ยว',
      price: '10.00',
      imageUrl: 'https://blog-static.kkday.com/th/blog/wp-content/uploads/Tarutao-National-Marine-Park.jpg',
      ProgressPercent: '0.3',
      Percent: '30%',
      subprovince: [
        { id: '1', name: 'Mueang ',
          score:'0/3', description: '30 สถานที่ท่องเที่ยว' },
        { id: '2', name: 'Khuan Don' ,
          score:'0/3',},
        { id: '3', name: 'Khuan Kalong' ,
            score:'0/3',},
        { id: '3', name: 'Tha Phae' ,
            score:'0/3',},
        { id: '3', name: 'La-ngu' ,
              score:'3/3',},
        { id: '3', name: 'Thung Wa' ,
              score:'0/3',},
        { id: '3', name: 'Manang' ,
               score:'0/3',},
      ],

    },
    {
      key: '3',
      label: 'Phuket',
      description: '289 สถานที่ท่องเที่ยว',
      price: '12.75',
      imageUrl: 'https://www.tnnthailand.com/static/details/euNTMi9gzw-384.webp',
      ProgressPercent: '0.6',
      Percent: '60%',
      subprovince: [
        { id: '1', name: 'Mueang ',
          score:'5/6', description: '30 สถานที่ท่องเที่ยว' },
        { id: '2', name: 'Kathu ' ,
          score:'3/3',},
        { id: '3', name: 'Thalang' ,
            score:'3/4',},
      ],
    },
    {
        key: '4',
        label: 'Chiang Mai',
        description: '173 สถานที่ท่องเที่ยว',
        price: '12.75',
        imageUrl: 'https://cms.dmpcdn.com/travel/2021/06/23/ca2e7e30-d432-11eb-87d9-41de76b7f7b8_original.jpg',
        ProgressPercent: '0.1',
      Percent: '10%',
      subprovince: [
        { id: '1', name: 'Mueang ',
          score:'1/4', description: '30 สถานที่ท่องเที่ยว' },
        { id: '2', name: 'Chom Thong' ,
          score:'0/3',},
        { id: '3', name: 'Khuan Kalong' ,
            score:'0/3',},
        { id: '3', name: 'Mae Chaem' ,
            score:'0/3',},
        { id: '3', name: 'Chiang Dao' ,
              score:'3/3',},
        { id: '3', name: 'Doi Saket' ,
              score:'0/3',},
        { id: '3', name: 'Mae Taeng' ,
               score:'0/3',},
        { id: '3', name: 'Fang' ,
               score:'0/3',},
        { id: '3', name: ' Doi Tao' ,
                score:'0/3',},
      ],
      },
    {
        key: '5',
        label: 'Phangnga',
        description: '168 สถานที่ท่องเที่ยว',
        price: '12.75',
        imageUrl: 'https://s.isanook.com/tr/0/ui/285/1429021/241278454_4470878749631654_8274955658385130066_n.jpg',
        ProgressPercent: '0.2',
      Percent: '20%',
      subprovince: [
        { id: '1', name: 'Mueang ',
          score:'0/3', description: '30 สถานที่ท่องเที่ยว' },
        { id: '2', name: 'Khura Buri' ,
          score:'0/3',},
        { id: '3', name: 'Ko Yao' ,
            score:'2/3',},
        { id: '3', name: 'Kapong' ,
            score:'0/3',},
        { id: '3', name: 'Thai Mueang' ,
              score:'3/3',},
        { id: '3', name: 'Thap Put' ,
              score:'0/3',},
        { id: '3', name: 'Takua Pa' ,
               score:'0/3',},
        { id: '3', name: 'Takua Thung' ,
               score:'0/4',},
      ],


      },
    {
        key: '6',
        label: 'Trang',
        description: '135 สถานที่ท่องเที่ยว ',
        price: '12.75',
        imageUrl: 'https://mpics.mgronline.com/pics/Images/560000003291901.JPEG',
        ProgressPercent: '0.5',
      Percent: '50%',
      subprovince: [
        { id: '1', name: 'Mueang ',
          score:'3/3', description: '30 สถานที่ท่องเที่ยว' },
        { id: '2', name: 'Kantang' ,
          score:'3/3',},
        { id: '3', name: 'Yan Ta Khao' ,
            score:'3/3',},
        { id: '3', name: 'Palian' ,
            score:'3/3',},
        { id: '3', name: 'Sikao' ,
              score:'2/3',},
        { id: '3', name: 'Huai Yot' ,
              score:'0/3',},
        { id: '3', name: 'Wang Wiset' ,
               score:'0/3',},
        { id: '3', name: 'Na Yong' ,
               score:'0/4',},
         { id: '3', name: ' Ratsada' ,
                score:'0/3',},
         { id: '3', name: 'Hat Samran' ,
                score:'0/4',},
      ],
      },
      {
        key: '7',
        label: 'Krabi',
        description: '156 สถานที่ท่องเที่ยว',
        price: '12.75',
        imageUrl: 'https://jeeor.com/wp-content/uploads/2020/03/%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%B0%E0%B8%9E%E0%B8%B5%E0%B8%9E%E0%B8%B5.jpg',
        ProgressPercent: '0.6',
      Percent: '60%',
      subprovince: [
        { id: '1', name: 'Mueang ',
          score:'3/3', description: '30 สถานที่ท่องเที่ยว' },
        { id: '2', name: 'Khao Phanom' ,
          score:'0/3',},
        { id: '3', name: 'Ko Lanta' ,
            score:'3/3',},
        { id: '3', name: 'Kapong' ,
            score:'3/3',},
        { id: '3', name: 'Khlong Thom' ,
              score:'3/3',},
        { id: '3', name: ' Ao Luek' ,
              score:'0/3',},
        { id: '3', name: 'Plai Phraya' ,
               score:'0/3',},
        { id: '3', name: 'Lam Thap' ,
               score:'3/4',},
        { id: '3', name: 'Nuea Khlong' ,
                score:'0/4',},
      ],
      },
  ];
export default DATA