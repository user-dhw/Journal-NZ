import type { JournalEntry } from '../../types/journal'
import { createGoogleMapsLocationUrl } from '../../utils/maps'

const roadImage =
  'https://images.unsplash.com/photo-1704540762553-2e72b0fe9245?auto=format&fit=crop&w=1800&q=85'
const coastImage =
  'https://www.doc.govt.nz/thumbs/hero/contentassets/a157da0498b2463ea0118777e85bda5f/orokawa-bay-1920.jpg'
const geothermalImage =
  'https://images.unsplash.com/photo-1571504042565-386eacceb5d8?auto=format&fit=crop&w=1800&q=85'
const hotPoolsImage =
  'https://dfekkasblsw1n.cloudfront.net/accounts/412/files/1W8WJJ85Z98M8AY40DY961G66K/676471-preview.webp?v=63893064384'
const lugeImage =
  'https://rotorua.skyline.co.nz/cdn-cgi/image/width%3D2048%2Cquality%3D90%2Cformat%3Dauto/https%3A/media.skyline.co.nz/rotorua/media/uploads/2023/11/28091250/skyline-rotorua_luge_aerial-luge-image.jpg'

export const homungaRotorua2026: JournalEntry = {
  id: 'homunga-rotorua-2026',
  slug: 'homunga-rotorua-2026',
  title: {
    en: 'Homunga Bay + Rotorua',
    zh: 'Homunga Bay + Rotorua 周末行程',
  },
  subtitle: {
    en: 'A coast-to-geothermal weekend from Hamilton',
    zh: '从 Hamilton 出发，从海岸走到地热温泉的周末',
  },
  summary: {
    en: 'Two days shaped by tide, track and steam: a coastal hike to Homunga Bay, then geothermal landscapes, hot pools and an evening on the luge in Rotorua.',
    zh: '两天跟着潮汐、山路和蒸汽前行：徒步前往 Homunga Bay，第二天探索 Rotorua 的地热景观、温泉与 Skyline 滑板车。',
  },
  excerpt: {
    en: 'Coastal hiking, hot pools and a geothermal day in Rotorua.',
    zh: '海岸徒步、温泉，以及 Rotorua 的地热一日。',
  },
  startDate: '2026-09-26',
  endDate: '2026-09-27',
  type: 'plan',
  coverImage: roadImage,
  locations: [
    'Hamilton',
    'Homunga Bay',
    'Waihi',
    'Rotorua',
    'Wai-O-Tapu',
    'Waikite Valley',
  ],
  featuredRoute: ['Hamilton', 'Homunga Bay', 'Rotorua'],
  featuredTags: ['Coast', 'Hiking', 'Geothermal'],
  tags: ['Weekend', 'Hiking', 'Coast', 'Beach', 'Geothermal', 'Hot Pools', 'Nature'],
  days: [
    {
      date: '2026-09-26',
      title: { en: 'Homunga Bay Coastal Day', zh: 'Homunga Bay 海岸徒步赶海' },
      subtitle: { en: 'Tide, track and the quiet coast', zh: '潮汐、徒步与安静的海岸' },
      route: [
        'Hamilton',
        'Homunga Bay Track Carpark',
        'Homunga Bay',
        'Homunga Bay Track Carpark',
        'Hamilton',
      ],
      timeline: [
        {
          id: 'leave-hamilton-day-1',
          time: '08:15',
          title: { en: 'Leave Hamilton', zh: '从 Hamilton 出发' },
          description: {
            en: 'Drive toward Waihi and Homunga Bay.',
            zh: '从 Hamilton 出发，前往 Waihi / Homunga Bay。',
          },
          tags: ['Road Trip'],
        },
        {
          id: 'arrive-homunga-carpark',
          time: '09:45–10:00',
          title: { en: 'Arrive at the track carpark', zh: '到达 Homunga Bay 徒步停车区' },
          location: 'Ngatitangata Road',
          description: {
            en: 'Prepare hiking gear and coastal equipment.',
            zh: '整理徒步和赶海装备。',
          },
          warning: {
            en: 'The parking area is small. Do not block access roads or farm gates.',
            zh: '停车区域较小，请勿堵塞通道或农场大门。',
          },
          links: [
            {
              label: { en: 'DOC Homunga Bay Track', zh: 'DOC Homunga Bay 徒步路线' },
              url: 'https://www.doc.govt.nz/parks-and-recreation/places-to-go/bay-of-plenty/places/orokawa-scenic-reserve/things-to-do/homunga-bay-track/',
              type: 'official',
            },
            {
              label: { en: 'Open carpark in Maps', zh: '在地图中打开停车区' },
              url: createGoogleMapsLocationUrl('Homunga Bay Track Carpark Ngatitangata Road'),
              type: 'maps',
            },
          ],
        },
        {
          id: 'start-hike',
          time: '10:00',
          title: { en: 'Start hike', zh: '开始徒步' },
          location: 'Homunga Bay Track',
          description: {
            en: 'A steep descent toward the bay. Stay on the marked track.',
            zh: '沿陡峭路线下行前往海湾，请始终走在标记路线内。',
          },
          duration: '45–60 min',
          tags: ['Hiking', 'Coast', 'Nature'],
          warning: {
            en: 'Steep terrain and high drop-offs may exist. Stay on the track.',
            zh: '部分路段陡峭且可能临近高落差区域，请勿离开步道。',
          },
        },
        {
          id: 'arrive-homunga-bay',
          time: '10:50–11:00',
          title: { en: 'Arrive at Homunga Bay', zh: '到达 Homunga Bay' },
          location: 'Homunga Bay',
          image: coastImage,
          tags: ['Beach', 'Rock Pools', 'Photography', 'Coast'],
        },
        {
          id: 'low-tide-exploring',
          time: '11:00–13:00',
          title: { en: 'Low-tide coastal exploring', zh: '低潮时段海岸探索' },
          location: 'Homunga Bay',
          description: {
            en: 'Main activity window. Low tide was previously estimated around 12:15 PM—check live conditions before leaving.',
            zh: '当天的主要活动时段。此前预计低潮约为中午 12:15；出发前必须查看实时情况。',
          },
          tags: ['Main Activity', 'Beach', 'Photography'],
          warning: {
            en: 'Do not walk onto exposed rocks during large swell. Watch incoming waves and leave enough time before the rising tide.',
            zh: '大浪时不要走上外露岩石。时刻观察来浪，并在涨潮前预留足够撤离时间。',
          },
          featured: true,
          links: [
            {
              label: { en: 'MetService weather', zh: 'MetService 天气' },
              url: 'https://www.metservice.com/',
              type: 'weather',
            },
            {
              label: { en: 'Waihi Beach marine forecast', zh: 'Waihi Beach 海况预报' },
              url: 'https://www.metservice.com/marine/regions/bay-of-plenty/surf/locations/waihi-beach',
              type: 'marine',
            },
            {
              label: { en: 'MPI recreational fishing', zh: 'MPI 休闲捕捞信息' },
              url: 'https://www.mpi.govt.nz/fishing-aquaculture/recreational-fishing/',
              type: 'reference',
            },
          ],
        },
        {
          id: 'leave-homunga',
          time: '13:00',
          title: { en: 'Leave Homunga Bay', zh: '离开 Homunga Bay' },
          description: { en: 'Return uphill to the carpark.', zh: '沿上坡路线返回停车区。' },
          duration: '60–75 min',
        },
        {
          id: 'back-at-car',
          time: '14:15',
          title: { en: 'Back at the car', zh: '返回车边' },
          description: {
            en: 'Change shoes, put on dry socks, refill water, have a snack and pack wet gear separately.',
            zh: '更换鞋袜、补充饮水和零食，并将湿装备放入防水袋。',
          },
        },
        {
          id: 'return-hamilton-day-1',
          time: '14:30+',
          title: { en: 'Return to Hamilton', zh: '返回 Hamilton' },
          description: {
            en: 'Keep the departure flexible around track and coastal conditions.',
            zh: '根据徒步与海况灵活调整离开时间。',
          },
          flexible: true,
        },
      ],
    },
    {
      date: '2026-09-27',
      title: { en: 'Rotorua Geothermal Day', zh: 'Rotorua 地热温泉一日游' },
      subtitle: { en: 'Steam, hot pools and an evening on the luge', zh: '地热蒸汽、温泉与傍晚滑板车' },
      route: [
        'Hamilton',
        'Wai-O-Tapu',
        'Waikite Valley Hot Pools',
        'Pig & Whistle',
        'Skyline Rotorua',
        'Hamilton',
      ],
      timeline: [
        {
          id: 'leave-hamilton-day-2',
          time: '07:20–07:30',
          title: { en: 'Leave Hamilton', zh: '从 Hamilton 出发' },
          tags: ['Road Trip'],
        },
        {
          id: 'waiotapu-visitor-centre',
          time: '09:15–09:30',
          title: { en: 'Wai-O-Tapu Visitor Centre', zh: 'Wai-O-Tapu 游客中心' },
          location: 'Wai-O-Tapu',
          description: {
            en: 'Check tickets, use the bathroom and collect a park map. The main park and Lady Knox viewing area are separate.',
            zh: '确认门票、使用洗手间并领取园区地图。主园区与 Lady Knox 喷泉观景区不在同一处。',
          },
          links: [
            {
              label: { en: 'Plan your visit', zh: '查看游览须知' },
              url: 'https://www.waiotapu.co.nz/plan-your-visit/',
              type: 'official',
            },
          ],
        },
        {
          id: 'lady-knox-arrival',
          time: '09:35–09:45',
          title: { en: 'Go to Lady Knox Geyser', zh: '前往 Lady Knox 喷泉' },
          description: {
            en: 'The presentation begins at 10:15 AM. Aim to arrive before 09:45.',
            zh: '演示于上午 10:15 开始，建议在 09:45 前到达。',
          },
          featured: true,
          tags: ['Time Critical'],
          warning: {
            en: 'The viewing area is separate from the main thermal park.',
            zh: '喷泉观景区与主地热公园分开。',
          },
        },
        {
          id: 'lady-knox-geyser',
          time: '10:15–10:35',
          title: { en: 'Lady Knox Geyser', zh: 'Lady Knox 间歇泉' },
          location: 'Lady Knox Geyser',
          tags: ['Geothermal'],
        },
        {
          id: 'waiotapu-thermal-wonderland',
          time: '10:40–12:20',
          title: { en: 'Wai-O-Tapu Thermal Wonderland', zh: 'Wai-O-Tapu 地热仙境' },
          location: 'Wai-O-Tapu',
          description: {
            en: 'Walk past Champagne Pool, Artist’s Palette and Devil’s Bath.',
            zh: '游览 Champagne Pool、Artist’s Palette 与 Devil’s Bath。',
          },
          image: geothermalImage,
          tags: ['Geothermal', 'Photography', 'Nature'],
          links: [
            {
              label: { en: 'Wai-O-Tapu official site', zh: 'Wai-O-Tapu 官方网站' },
              url: 'https://www.waiotapu.co.nz/',
              type: 'official',
            },
          ],
        },
        {
          id: 'drive-waikite',
          time: '12:20–12:35',
          title: { en: 'Drive to Waikite Valley', zh: '驾车前往 Waikite Valley' },
          duration: '8–15 min',
        },
        {
          id: 'waikite-hot-pools',
          time: '12:35–14:00',
          title: { en: 'Waikite Valley Hot Pools', zh: 'Waikite Valley 温泉' },
          location: 'Waikite Valley Hot Pools',
          description: {
            en: 'Eco Trail, hot pools and time to relax. The Geothermal Valley Combo was previously checked at NZ$67 per adult; verify the latest price before booking.',
            zh: '体验 Eco Trail、温泉与放松时光。Geothermal Valley Combo 此前查询为每位成人 NZ$67，预订前请确认最新价格。',
          },
          tags: ['Hot Pools', 'Relax'],
          links: [
            {
              label: { en: 'Geothermal Valley Combo', zh: 'Geothermal Valley Combo 预订' },
              url: 'https://www.hotpools.co.nz/soak/geothermal-valley-combo/',
              type: 'booking',
            },
          ],
        },
        {
          id: 'change-and-drive',
          time: '14:00–14:40',
          title: { en: 'Change and drive to Rotorua', zh: '更衣后前往 Rotorua' },
          description: {
            en: 'Dry hair, put on a warm jacket and refill water before leaving.',
            zh: '擦干头发、穿上保暖外套并补充饮水后出发。',
          },
        },
        {
          id: 'pig-and-whistle',
          time: '14:45–16:00',
          title: { en: 'Late lunch at Pig & Whistle', zh: 'Pig & Whistle 午餐' },
          location: '1182 Tutanekai Street, Rotorua',
          description: {
            en: 'Shared order: 2 toasted garlic breads, slow-cooked brisket, 2 smashed beef burgers and chicken tacos. Estimated share: NZ$50.47 per person. Menu and prices may change.',
            zh: '分享餐：2 份蒜香面包、慢炖牛胸肉、2 份牛肉汉堡和鸡肉塔可。单人预计分摊 NZ$50.47，菜单和价格可能变动。',
          },
          tags: ['Food'],
          links: [
            {
              label: { en: 'Current menu', zh: '查看最新菜单' },
              url: 'https://www.pigandwhistle.co.nz/menu',
              type: 'official',
            },
          ],
        },
        {
          id: 'drive-skyline',
          time: '16:00–16:15',
          title: { en: 'Drive to Skyline Rotorua', zh: '驾车前往 Skyline Rotorua' },
        },
        {
          id: 'skyline-rotorua',
          time: '16:15–18:00',
          title: { en: 'Skyline Rotorua', zh: 'Skyline Rotorua' },
          location: 'Skyline Rotorua',
          description: {
            en: 'Gondola and three luge rides. Previously checked at NZ$88 per adult. Verify current pricing and opening hours.',
            zh: '搭乘缆车并体验 3 次滑板车。此前查询为每位成人 NZ$88，请确认最新价格与营业时间。',
          },
          tags: ['Luge', 'Views'],
          links: [
            {
              label: { en: 'Luge pricing', zh: '滑板车价格' },
              url: 'https://rotorua.skyline.co.nz/pricing-and-packages/luge-pricing/',
              type: 'booking',
            },
            {
              label: { en: 'Opening hours', zh: '营业时间' },
              url: 'https://rotorua.skyline.co.nz/opening-hours/',
              type: 'official',
            },
          ],
        },
        {
          id: 'return-hamilton-day-2',
          time: '18:00+',
          title: { en: 'Return to Hamilton', zh: '返回 Hamilton' },
          description: {
            en: 'Estimated arrival 19:30–20:00, depending on traffic and weather.',
            zh: '预计 19:30–20:00 到达，具体取决于交通和天气。',
          },
          flexible: true,
        },
      ],
    },
  ],
  photos: [
    {
      src: coastImage,
      alt: { en: 'A quiet cove on the Homunga Bay Track', zh: 'Homunga Bay 徒步路线旁的安静海湾' },
      caption: {
        en: 'Coast first—the weekend begins on foot.',
        zh: '先去海边——这个周末从徒步开始。',
      },
      date: '2026-09-26',
      location: 'Orokawa Scenic Reserve',
      orientation: 'wide',
    },
    {
      src: geothermalImage,
      alt: { en: 'Blue geothermal water and orange mineral terraces at Wai-O-Tapu', zh: 'Wai-O-Tapu 蓝色地热水与橙色矿物台地' },
      caption: {
        en: 'A different landscape the next morning.',
        zh: '第二天清晨，进入完全不同的地貌。',
      },
      date: '2026-09-27',
      location: 'Wai-O-Tapu',
      orientation: 'portrait',
    },
    {
      src: hotPoolsImage,
      alt: { en: 'Visitors relaxing in the geothermal pools at Waikite Valley', zh: '游客在 Waikite Valley 地热温泉中放松' },
      caption: { en: 'An afternoon soak in the geothermal valley.', zh: '在地热山谷里泡一个下午的温泉。' },
      date: '2026-09-27',
      location: 'Waikite Valley Hot Pools',
      orientation: 'landscape',
    },
    {
      src: lugeImage,
      alt: { en: 'Riders navigating the forest luge track at Skyline Rotorua', zh: '游客在 Skyline Rotorua 森林滑板车赛道上行驶' },
      caption: { en: 'Three runs through the forest to finish the day.', zh: '用三次穿过森林的滑板车体验结束一天。' },
      date: '2026-09-27',
      location: 'Skyline Rotorua',
      orientation: 'wide',
    },
  ],
  costs: [
    {
      id: 'waikite-combo',
      name: { en: 'Geothermal Valley Combo', zh: 'Geothermal Valley Combo' },
      date: '2026-09-27',
      planned: 67,
      currency: 'NZD',
      note: { en: 'Adult admission', zh: '成人票' },
      url: 'https://www.hotpools.co.nz/soak/geothermal-valley-combo/',
    },
    {
      id: 'skyline-combo',
      name: { en: 'Skyline Gondola + 3 Luge', zh: 'Skyline 缆车 + 3 次滑板车' },
      date: '2026-09-27',
      planned: 88,
      currency: 'NZD',
      note: { en: 'Adult package', zh: '成人套票' },
      url: 'https://rotorua.skyline.co.nz/pricing-and-packages/luge-pricing/',
    },
    {
      id: 'pig-whistle-meal',
      name: { en: 'Pig & Whistle meal', zh: 'Pig & Whistle 用餐' },
      date: '2026-09-27',
      planned: 50.47,
      currency: 'NZD',
      note: { en: 'Estimated one-third share', zh: '按三人平均分摊估算' },
      url: 'https://www.pigandwhistle.co.nz/menu',
    },
  ],
}
