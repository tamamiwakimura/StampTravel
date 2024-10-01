import {Image  } from 'react-native';
const DATA = [
    {
      key: '1',
      label: 'Songkhla',
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
              mapsub:'NKmZWBTiRVZrHKW68'
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
          score:'3/3',
           subsubprovince: [
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
            
    
          ]
         },
      ],
    },

    {
      key: '2',
      label: 'Satun',
      description: '15 สถานที่ท่องเที่ยว',
      price: '10.00',
      imageUrl: 'https://blog-static.kkday.com/th/blog/wp-content/uploads/Tarutao-National-Marine-Park.jpg',
      ProgressPercent: '0.3',
      Percent: '30%',
      subprovince: [
        { id: '1', name: 'Mueang ',
          score:'0/3',
           subsubprovince: [
            {
              idsub: '1',
              namesub: 'เกาะหลีเป๊ะ',
              imageUrl: 'https://s.isanook.com/tr/0/ud/282/1414021/leepaii.jpg?ip/resize/w850/q80/jpg',

            },
            {
              idsub: '2',
              namesub: 'เขาโต๊ะหยงกง',
              imageUrl: 'https://www.thai-tour.com/include/p_img_m/9/26/tt5a14f7d5163d2.jpg',
            },
            {
              idsub: '3',
              namesub: 'เขาโต๊ะพญาวัง',
              imageUrl: 'https://www.thai-tour.com/thai-tour/south/satun/images/khao-to-phaya-wang-park/khao-to-phaya-wang-park1.JPG',
            },
            
    
          ]  
        },
        { id: '2', name: 'Khuan Don' ,
          score:'0/3',subsubprovince: [
            {
              idsub: '1',
              namesub: 'อุทยานแห่งชาติทะเลบัน',
              imageUrl: 'https://cms.dmpcdn.com/travel/2021/03/03/1586f530-7c0c-11eb-822c-1174bade5fd3_original.jpg',

            },
            {
              idsub: '2',
              namesub: 'จุดชมหมอกเขาบอฆะ',
              imageUrl: 'https://www.khaosod.co.th/wpapp/uploads/2019/08/%E0%B8%AA%E0%B8%95%E0%B8%B9%E0%B8%A53.jpg',
            },
            {
              idsub: '3',
              namesub: 'ตลาดนัดวังประจัน',
              imageUrl: 'https://cms.dmpcdn.com/travel/2013/05/08/d5164022-0599-41d8-87d2-e8079d3bc491.jpg',
            },
            
    
          ] },
        { id: '3', name: 'Khuan Kalong' ,
            score:'0/3',
            subsubprovince: [
              {
                idsub: '1',
                namesub: 'น้ำตกธาราสวรรค์',
                imageUrl: 'https://lh3.googleusercontent.com/proxy/rKkkvQKO3tf8Z0e9Jme6sM7MLlyiu6q6FvqfnR0rzu8CPHTM0TYX9znXtvuS486isv1ZQyxHwdtHiPncyDqAFJAMafC1KuWSRuCcj6sHAzEmqORZmDOpR1y3Fz1Ul0u7syoAJMo',
  
              },
              {
                idsub: '2',
                namesub: 'น้ำตกสายใจ',
                imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgfwTp0U9N0xo1_J-NXUZhyphenhyphen_tvbzg0IeVYs8Uaw0rYlC2bevat0seQ4OM3Sby9EepcHdgYGmCoKj885eyCiNyOr2E5N4ASgNgPSEb_nvUIE__xx_ZQn2Nl4Rxfa20OMy1G3smQ21dSZX1U/s960/16.jpg',
              },
              {
                idsub: '3',
                namesub: 'บ่อน้ำร้อนทุ่งนุ้ย',
                imageUrl: 'https://thungnuihotspring.satunpao.go.th/wp-content/uploads/2024/05/LINE_ALBUM_27567_240610_1.jpg',
              },
              
      
            ] 
          },
        
        { id: '4', name: 'La-ngu' ,
              score:'3/3',subsubprovince: [
                {
                  idsub: '1',
                  namesub: 'เกาะลิดี ',
                  imageUrl: 'https://cms.dmpcdn.com/travel/2023/04/30/1eb72710-e721-11ed-b1c7-73f7d4c75de1_webp_original.jpg',
    
                },
                {
                  idsub: '2',
                  namesub: ' เกาะบุโหลน เล',
                  imageUrl: 'https://cms.dmpcdn.com/travel/2021/04/22/7df63550-a32f-11eb-8330-777af7c810fa_original.jpg',
                },
                {
                  idsub: '3',
                  namesub: 'น้ำตกวังสายทอง',
                  imageUrl: 'https://cms.dmpcdn.com/travel/2021/09/10/5555d1a0-121a-11ec-b41c-25a98c34780e_webp_original.jpg',
                },
                
        
              ] },
        { id: '5', name: 'Thung Wa' ,
              score:'0/3',
              subsubprovince: [
                {
                  idsub: '1',
                  namesub: 'เขาทะนาน',
                  imageUrl: 'https://img.wongnai.com/p/1920x0/2024/02/11/be12167d34454e0a9bc42166a1e0a3a4.jpg',
    
                },
                {
                  idsub: '2',
                  namesub: 'ถ้ำเลสเตโกดอน',
                  imageUrl: 'https://cms.dmpcdn.com/travel/2022/01/27/8c692ce0-7f35-11ec-b5b1-2922205fb859_webp_original.jpg',
                },
                {
                  idsub: '3',
                  namesub: 'น้ำตกธารปลิว',
                  imageUrl: 'https://cms.dmpcdn.com/travel/2023/03/05/b02b74b0-bb27-11ed-8b09-1d3fba467d08_webp_original.jpg',
                },
                
        
              ]
             },
        
      ],

    },
    {
      key: '3',
      label: 'Phuket',
      description: '12 สถานที่ท่องเที่ยว',
      price: '12.75',
      imageUrl: 'https://www.tnnthailand.com/static/details/euNTMi9gzw-384.webp',
      ProgressPercent: '0.6',
      Percent: '60%',
      subprovince: [
        { id: '1', name: 'Mueang ',
          score:'5/6',  subsubprovince: [
            {
              idsub: '1',
              namesub: ' เมืองเก่าภูเก็ต',
              imageUrl: 'https://cms.dmpcdn.com/travel/2023/02/21/09819b50-b1b1-11ed-99ee-47881fc82d10_webp_original.jpg',

            },
            {
              idsub: '2',
              namesub: 'มิวเซียมภูเก็ต',
              imageUrl: 'https://cms.dmpcdn.com/travel/2023/02/21/04479040-b1b1-11ed-b08a-1f80512eb01e_webp_original.jpg',
            },
            {
              idsub: '3',
              namesub: 'ถนนคนเดินหลาดใหญ่',
              imageUrl: 'https://cms.dmpcdn.com/travel/2023/02/21/0b231650-b1b1-11ed-acb7-d12e98a0e518_webp_original.jpg',
            },
            {
              idsub: '4',
              namesub: 'ศาลเจ้าแสงธรรม ',
              imageUrl: 'https://cms.dmpcdn.com/travel/2023/02/21/0c825830-b1b1-11ed-a5ac-adb35951cb5b_webp_original.jpg',
            },
            {
              idsub: '5',
              namesub: 'แหลมพรหมเทพ',
              imageUrl: 'https://cms.dmpcdn.com/travel/2023/02/21/049959c0-b1b1-11ed-b08a-1f80512eb01e_webp_original.jpg',
            },
            {
              idsub: '6',
              namesub: 'จุดชมวิวกังหันลม ',
              imageUrl: 'https://cms.dmpcdn.com/travel/2023/02/21/fea351b0-b1b0-11ed-ab30-773a6b288d6a_webp_original.jpg',
            },
    
          ] 
        },
        { id: '2', name: 'Kathu ' ,
          score:'1/3', 
          subsubprovince: [
            {
              idsub: '1',
              namesub: 'หาดป่าตอง',
              imageUrl: 'https://cms.dmpcdn.com/travel/2021/03/17/b2b4a750-86d2-11eb-a403-33d334b99f04_original.jpg',

            },
            {
              idsub: '2',
              namesub: 'ภูเก็ตแฟนตาซี ',
              imageUrl: 'https://positioningmag.com/wp-content/uploads/2019/10/CM-Model-1-LowRes-e1572157955235.jpg',
            },
            {
              idsub: '3',
              namesub: 'Tiger Kingdom ',
              imageUrl: 'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ifqvtpilehgmedy7qe4g/Tiger%20Kingdom%20Ticket%20in%20Chiang%20Mai%20with%20Transfers.jpg',
            },
            
    
          ]
        },
        { id: '3', name: 'Thalang' ,
            score:'0/3', subsubprovince: [
              {
                idsub: '1',
                namesub: 'สะพานสารสิน',
                imageUrl: 'https://cms.dmpcdn.com/travel/2021/12/30/469e8b10-6923-11ec-8066-ffb72c13e721_webp_original.jpg',
  
              },
              {
                idsub: '2',
                namesub: ' จุดชมวิวเครื่องบิน',
                imageUrl: 'https://cms.dmpcdn.com/travel/2020/08/20/7d6d8740-e2a6-11ea-ab6f-87175d61da00_original.jpg',
              },
              {
                idsub: '3',
                namesub: 'วัดศรีสุนทร',
                imageUrl: 'https://cms.dmpcdn.com/travel/2021/02/23/871d6d20-759d-11eb-aeab-7fbb8f427235_original.jpg',
              },
              
      
            ]},
      ],
    },
    {
        key: '4',
        label: 'Chiang Mai',
        description: '15 สถานที่ท่องเที่ยว',
        price: '12.75',
        imageUrl: 'https://cms.dmpcdn.com/travel/2021/06/23/ca2e7e30-d432-11eb-87d9-41de76b7f7b8_original.jpg',
        ProgressPercent: '0.1',
      Percent: '10%',
      subprovince: [
        { id: '1', name: 'Mueang ',
          score:'1/3',subsubprovince: [
            {
              idsub: '1',
              namesub: 'ประตูท่าแพ',
              imageUrl: 'https://cms.dmpcdn.com/travel/2020/09/03/bc2d02d0-edc8-11ea-bbdd-775d9efe2958_original.JPG',

            },
            {
              idsub: '2',
              namesub: 'ถนนคนเดินท่าแพ ',
              imageUrl: 'https://cms.dmpcdn.com/travel/2020/09/03/e1328cd0-edc8-11ea-96c7-dde64918cfa0_original.JPG',
            },
            {
              idsub: '3',
              namesub: ' วัดอุโมงค์',
              imageUrl: 'https://cms.dmpcdn.com/travel/2020/09/03/066f2c60-edc9-11ea-bbdd-775d9efe2958_original.JPG',
            },
            
    
          ]  },
        { id: '2', name: 'Chiang Dao' ,
              score:'3/3',subsubprovince: [
                {
                  idsub: '1',
                  namesub: ' ดอยหลวงเชียงดาว',
                  imageUrl: 'https://cms.dmpcdn.com/travel/2021/12/07/f5749360-572f-11ec-84c7-83d34b61dbc7_webp_original.jpg',
    
                },
                {
                  idsub: '2',
                  namesub: 'ถ้ำเชียงดาว ',
                  imageUrl: 'https://cms.dmpcdn.com/travel/2021/12/07/f4124440-572f-11ec-84c7-83d34b61dbc7_webp_original.jpg',
                },
                {
                  idsub: '3',
                  namesub: 'ศูนย์ฝึกช้างเชียงดาว ',
                  imageUrl: 'https://cms.dmpcdn.com/travel/2021/12/07/f49752c0-572f-11ec-84c7-83d34b61dbc7_webp_original.jpg',
                },
                
        
              ]},
        { id: '3', name: 'Doi Saket' ,
              score:'0/3',subsubprovince: [
                {
                  idsub: '1',
                  namesub: 'วัดพระธาตุดอยสะเก็ด',
                  imageUrl: 'https://cms.dmpcdn.com/travel/2022/11/15/352b5eb0-6505-11ed-9c82-6d61ce48bf9a_webp_original.jpg',
    
                },
                {
                  idsub: '2',
                  namesub: 'เขื่อนแม่กวงอุดมธารา ',
                  imageUrl: 'https://cms.dmpcdn.com/travel/2022/11/15/335b80b0-6505-11ed-98c9-e1babc41bedd_webp_original.jpg',
                },
                {
                  idsub: '3',
                  namesub: ' วัดตาดเหมยวณาราม ',
                  imageUrl: 'https://cms.dmpcdn.com/travel/2022/11/16/ed34c570-6549-11ed-9c82-6d61ce48bf9a_webp_original.jpg',
                },
                
        
              ]},
        { id: '4', name: 'Fang' ,
               score:'0/3',subsubprovince: [
                {
                  idsub: '1',
                  namesub: 'น้ำผุร้อนฝาง',
                  imageUrl: 'https://img-prod.api-onscene.com/cdn-cgi/image/format=auto%2Cwidth=1600%2Cheight=900/https://sls-prod.api-onscene.com/partner_files/trueidintrend/37302/1578716527361.jpg',
    
                },
                {
                  idsub: '2',
                  namesub: 'ดอยผ้าห่มปก ',
                  imageUrl: 'https://img-prod.api-onscene.com/cdn-cgi/image/format=auto%2Cwidth=1600%2Cheight=900/https://sls-prod.api-onscene.com/partner_files/trueidintrend/37302/1578716458156.jpg',
                },
                {
                  idsub: '3',
                  namesub: 'วัดพระบาทอุดม  ',
                  imageUrl: 'https://img-prod.api-onscene.com/cdn-cgi/image/format=auto%2Cwidth=1600%2Cheight=900/https://sls-prod.api-onscene.com/partner_files/trueidintrend/37302/1578716730626.jpg',
                },
                
        
              ]},
        { id: '5', name: ' Doi Tao' ,
                score:'0/3',
                subsubprovince: [
                  {
                    idsub: '1',
                    namesub: 'ทะเลสาบดอยเต่า',
                    imageUrl: 'https://cms.dmpcdn.com/travel/2020/07/13/07ac18c0-c4c2-11ea-9b8f-5f762eac9cb7_original.jpg',
      
                  },
                  {
                    idsub: '2',
                    namesub: 'วัดบรมธาตุ  ',
                    imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipMKiG0yb0M99dgqLjgqZTPObLU81CMU70XzZvaJ=s1360-w1360-h1020',
                  },
                  {
                    idsub: '3',
                    namesub: ' วัดพระบาทตะเมาะ ',
                    imageUrl: 'https://temple-thai.com/wp-content/uploads/2019/02/wat-phra-phutthabhat-tamo-15.jpg',
                  },
                  
          
                ]
              },
      ],
      },
    {
        key: '5',
        label: 'Phangnga',
        description: '15 สถานที่ท่องเที่ยว',
        price: '12.75',
        imageUrl: 'https://s.isanook.com/tr/0/ui/285/1429021/241278454_4470878749631654_8274955658385130066_n.jpg',
        ProgressPercent: '0.2',
      Percent: '20%',
      subprovince: [
        { id: '1', name: 'Thai Mueang ',
          score:'0/3', subsubprovince: [
            {
              idsub: '1',
              namesub: 'หมู่เกาะสิมิลัน',
              imageUrl: 'https://www.ktc.co.th/pub/media/Travel-Story/Thailand/Phang-nga-attraction-travel/new-similan.webp',

            },
            {
              idsub: '2',
              namesub: 'สะพานเทียบเรือทับละมุ  ',
              imageUrl: 'https://img.wongnai.com/p/1920x0/2019/05/10/5cd7df6347f84aad9c20e970e56f1234.jpg',
            },
            {
              idsub: '3',
              namesub: ' หาดท้ายเหมือง ',
              imageUrl: 'https://cms.dmpcdn.com/travel/2022/05/01/4a840290-c91e-11ec-b833-9f1d83395f88_webp_original.jpg',
            },
            
    
          ] },
        { id: '2', name: 'Ko Yao' ,
            score:'2/3',subsubprovince: [
              {
                idsub: '1',
                namesub: 'เกาะยาวน้อย',
                imageUrl: 'https://cms.dmpcdn.com/travel/2022/02/15/56cb1780-8e24-11ec-9269-d7673db6c352_webp_original.jpg',
  
              },
              {
                idsub: '2',
                namesub: 'เกาะยาวใหญ่',
                imageUrl: 'https://cms.dmpcdn.com/travel/2022/02/15/9d83a520-8e24-11ec-9269-d7673db6c352_webp_original.jpg',
              },
              {
                idsub: '3',
                namesub: ' เกาะไข่ ',
                imageUrl: 'https://cms.dmpcdn.com/travel/2022/02/15/de1a5fc0-8e24-11ec-a539-bd4773dc7da9_webp_original.jpg',
              },
              
      
            ]},
        { id: '3', name: 'Kapong' ,
            score:'0/3',subsubprovince: [
              {
                idsub: '1',
                namesub: 'น้ำพุร้อนปลายพู่',
                imageUrl: 'https://cms.dmpcdn.com/travel/2022/03/28/697fa960-ae7a-11ec-80bb-192707a2eb26_webp_original.jpg',
  
              },
              {
                idsub: '2',
                namesub: 'ภูตาจอ  ',
                imageUrl: 'https://cms.dmpcdn.com/travel/2021/07/29/06afce90-f035-11eb-8793-61b2b4d8b27c_webp_original.jpg',
              },
              {
                idsub: '3',
                namesub: ' วัดปากถัก ',
                imageUrl: 'https://s.isanook.com/tr/0/ud/283/1419529/86286622_2746638238750782_906.jpg?ip/resize/w728/q80/jpg',
              },
              
      
            ]},
        { id: '4', name: 'Takua Pa' ,
               score:'0/3',subsubprovince: [
                {
                  idsub: '1',
                  namesub: 'คลองสังเน่ห์',
                  imageUrl: 'https://cms.dmpcdn.com/travel/2022/02/15/610ae1c0-8e25-11ec-9269-d7673db6c352_webp_original.jpg',
    
                },
                {
                  idsub: '2',
                  namesub: 'หาดนางทอง  ',
                  imageUrl: 'https://cms.dmpcdn.com/travel/2022/02/15/dde0bcb0-8e25-11ec-a635-9d6a3fe125ee_webp_original.jpg',
                },
                {
                  idsub: '3',
                  namesub: ' ประภาคารเขาหลัก ',
                  imageUrl: 'https://cms.dmpcdn.com/travel/2022/02/15/0c0cffd0-8e27-11ec-9269-d7673db6c352_webp_original.jpg',
                },
                
        
              ]},
        { id: '5', name: 'Takua Thung' ,
               score:'0/3',subsubprovince: [
                {
                  idsub: '1',
                  namesub: 'บ้านหินร่ม',
                  imageUrl: 'https://cms.dmpcdn.com/travel/2022/02/15/05059250-8e28-11ec-a635-9d6a3fe125ee_webp_original.jpg',
    
                },
                {
                  idsub: '2',
                  namesub: 'เขาตะปู  ',
                  imageUrl: 'https://cms.dmpcdn.com/travel/2022/02/15/5c489760-8e28-11ec-8cc1-4316c0a32057_webp_original.jpg',
                },
                {
                  idsub: '3',
                  namesub: ' วัดสุวรรณคูหา ',
                  imageUrl: 'https://cms.dmpcdn.com/travel/2023/05/02/d79fbb00-e8a9-11ed-ab7a-1b7416115f4e_webp_original.jpg',
                },
                
        
              ]},
      ],


      },
      {
        key: '6',
        label: 'Trang',
        description: '15 สถานที่ท่องเที่ยว',
        price: '12.75',
        imageUrl: 'https://www.eatchillwander.com/wp-content/uploads/2021/04/trang-travel-guide.jpg',
        ProgressPercent: '0.6',
        Percent: '60%',
        subprovince: [
          { id: '1', name: 'Mueang ',
            score:'3/3',  subsubprovince: [
              {
                idsub: '1',
                namesub: ' ถนนคนเดินตรัง',
                imageUrl: 'https://files.thailandtourismdirectory.go.th/assets/upload/2020/09/23/20200923a88d04756b7371f5a8a37d59bf0c97f8121546.jpg',
  
              },
              {
                idsub: '2',
                namesub: 'หาดหัวหิน',
                imageUrl: 'https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_931,h_693/https://beachlover.net/wp-content/uploads/2022/01/6-2.jpg',
              },
              {
                idsub: '3',
                namesub: 'สวนพฤกษศาสตร์',
                imageUrl: 'https://cms.dmpcdn.com/travel/2020/10/15/c5a2f140-0ee2-11eb-b697-a3863fa641e3_original.jpg',
              },
             
      
            ] 
          },
          { id: '2', name: 'Yan Ta Khao ' ,
            score:'1/3', 
            subsubprovince: [
              {
                idsub: '1',
                namesub: 'น้ำตกสายรุ้ง',
                imageUrl: 'https://cms.dmpcdn.com/travel/2022/06/30/c6de4c90-f88c-11ec-9dbb-71ace61f23e9_webp_original.jpg',
  
              },
              {
                idsub: '2',
                namesub: 'น้ำตกไพรสวรรค์ ',
                imageUrl: 'https://s.isanook.com/tr/0/ui/283/1418099/291162_191129_0032_1575016466.jpg',
              },
              {
                idsub: '3',
                namesub: 'น้ำตกลำปลอก ',
                imageUrl: 'https://img.wongnai.com/p/1920x0/2019/04/26/30457700fc89492596177b1ec4ac52e8.jpg',
              },
            ]
          },
          { id: '3', name: 'Kantang' ,
              score:'0/3', subsubprovince: [
                {
                  idsub: '1',
                  namesub: 'หาดสิวาลัย',
                  imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/4f/3f/37/photo1jpg.jpg?w=1200&h=-1&s=1',
    
                },
                {
                  idsub: '2',
                  namesub: ' บ่อน้ำร้อนกันตัง',
                  imageUrl: 'https://cms.dmpcdn.com/travel/2022/02/09/c7d68530-8970-11ec-9c1e-79ff00939610_webp_original.jpg',
                },
                {
                  idsub: '3',
                  namesub: 'สถานีรถไฟกันตัง',
                  imageUrl: 'https://cms.dmpcdn.com/travel/2021/03/04/32083cd0-7ca9-11eb-a6ae-e39c3763a395_original.jpg',
                },
                
        
              ]
            },
            { id: '4', name: 'Huai Yot' ,
              score:'0/3',subsubprovince: [
               {
                 idsub: '1',
                 namesub: 'เหมืองมรกต',
                 imageUrl: 'https://trangcity.co/uploads/galleries/gallery_5a30fce46d63b.jpg',
   
               },
               {
                 idsub: '2',
                 namesub: 'วัดภูเขาทอง  ',
                 imageUrl: 'https://media.oknation.net/uploads/201202/20/41426f42f.jpg',
               },
               {
                 idsub: '3',
                 namesub: ' น้ำตกโตนคลาน ',
                 imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipN4ou4ZZlbzkhP3InUc4xPNMFDyC8bWJMbAilBV=w600-k',
               },
               
       
             ]},
             { id: '5', name: 'Ratsada' ,
              score:'0/3',subsubprovince: [
               {
                 idsub: '1',
                 namesub: 'จุดชมลิงเกาะสิเหร่',
                 imageUrl: 'https://img.wongnai.com/p/1920x0/2021/05/24/28802aa181de47a19ec586775137d155.jpg',
   
               },
               {
                 idsub: '2',
                 namesub: ' น้ำตกหนานในโสม  ',
                 imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuhhLSzeLHA8kuXCvtcRUuaz3fydxHaPtaXA&s',
               },
               {
                 idsub: '3',
                 namesub: ' ถ้ำนาคราช ',
                 imageUrl: 'https://t1.blockdit.com/photos/2019/05/5ce3fabc1058243d70e8647a_800x0xcover_4WgrH4Nm.jpg',
               },
               
       
             ]},
        ],
      },
      {
        key: '7',
        label: 'Krabi',
        description: '15 สถานที่ท่องเที่ยว',
        price: '12.75',
        imageUrl: 'https://jeeor.com/wp-content/uploads/2020/03/%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%B0%E0%B8%9E%E0%B8%B5%E0%B8%9E%E0%B8%B5.jpg',
        ProgressPercent: '0.6',
        Percent: '40%',
        subprovince: [
          { id: '1', name: 'Mueang ',
            score:'3/3',  subsubprovince: [
              {
                idsub: '1',
                namesub: ' อ่าวนาง',
                imageUrl: 'https://cms.dmpcdn.com/travel/2020/08/19/80608760-e1c8-11ea-a0b4-232d08119930_original.jpg',
  
              },
              {
                idsub: '2',
                namesub: 'ทะเลแหวก',
                imageUrl: 'https://cms.dmpcdn.com/travel/2022/03/07/042ffb80-9dce-11ec-aa5a-b561cdef9acb_webp_original.jpg',
              },
              {
                idsub: '3',
                namesub: 'เกาะพีพี',
                imageUrl: 'https://cms.dmpcdn.com/travel/2020/09/09/7af158a0-f289-11ea-b369-edee981b0720_original.JPG',
              },
              {
                idsub: '4',
                namesub: 'หมู่เกาะปอดะ',
                imageUrl: 'https://cms.dmpcdn.com/travel/2022/03/07/3db21420-9dcd-11ec-b7b5-f55dc08c53fa_webp_original.jpg',
              },
              {
                idsub: '5',
                namesub: 'เกาะห้อง',
                imageUrl: 'https://cms.dmpcdn.com/travel/2022/03/07/53671b60-9dcf-11ec-9b64-95a9f8100bbc_webp_original.jpg',
              },
              {
                idsub: '6',
                namesub: 'หาดไร่เลย์',
                imageUrl: 'https://cms.dmpcdn.com/travel/2022/03/07/2d7804a0-9de3-11ec-9b64-95a9f8100bbc_webp_original.jpg',
              },
      
            ] 
          },
          { id: '2', name: 'Ko Lanta ' ,
            score:'1/3', 
            subsubprovince: [
              {
                idsub: '1',
                namesub: 'หมู่เกาะลันตา',
                imageUrl: 'https://cms.dmpcdn.com/travel/2022/03/07/277d6350-9dd0-11ec-a263-69af8fec36e4_webp_original.jpg',
  
              },
              {
                idsub: '2',
                namesub: 'สะพานสิริลันตา ',
                imageUrl: 'https://cms.dmpcdn.com/travel/2023/07/19/d4f9b060-25f6-11ee-8cb3-29f6634035e1_webp_original.webp',
              },
              {
                idsub: '3',
                namesub: 'หาดคอกวาง ',
                imageUrl: 'https://pix10.agoda.net/hotelImages/230/230311/230311_16121415050049669191.jpg?ca=6&ce=1&s=414x232',
              },
            ]
          },
          { id: '3', name: ' Ao Luek' ,
              score:'0/3', subsubprovince: [
                {
                  idsub: '1',
                  namesub: 'เขากาโรส',
                  imageUrl: 'https://cms.dmpcdn.com/travel/2022/03/07/9cf6cdc0-9de3-11ec-b7b5-f55dc08c53fa_webp_original.jpg',
    
                },
                {
                  idsub: '2',
                  namesub: ' วัดบางโทง',
                  imageUrl: 'https://cms.dmpcdn.com/travel/2022/03/07/ea761230-9de9-11ec-85b3-dd53b2eb1c67_webp_original.jpg',
                },
                {
                  idsub: '3',
                  namesub: 'ถ้ำผีหัวโต',
                  imageUrl: 'https://cms.dmpcdn.com/travel/2021/01/12/457ad860-548e-11eb-8d28-4b8e3f30b51b_original.jpg',
                },
                
        
              ]
            },
            { id: '4', name: 'Khlong Thom' ,
              score:'0/3',subsubprovince: [
               {
                 idsub: '1',
                 namesub: 'น้ำตกร้อนคลองท่อม',
                 imageUrl: 'https://cms.dmpcdn.com/travel/2022/03/07/e87653f0-9dd0-11ec-9b64-95a9f8100bbc_webp_original.jpg',
   
               },
               {
                 idsub: '2',
                 namesub: 'สระมรกต  ',
                 imageUrl: 'https://cms.dmpcdn.com/travel/2022/03/07/4c1987b0-9dd1-11ec-9b64-95a9f8100bbc_webp_original.jpg',
               },
               {
                 idsub: '3',
                 namesub: ' สระน้ำผุด ',
                 imageUrl: 'https://img.wongnai.com/p/1920x0/2019/11/29/b96a2e11fbd84e2d90a510663e55c5bf.jpg',
               },
               
       
             ]},
          
        ],
      },
  ];
export default DATA