export interface PlanItem {
  id: string;
  name: string;
  price: string;
  priceNum: number;
  period: string;
  traffic: string;
  trafficType: 'monthly' | 'onetime';
  features: string[];
  recommended?: boolean;
  description: string;
  notice?: string;
}

export const COMMERCIAL_AFF_URL = 'https://varnexa.lingdongaff.com/#/?code=HHoxxHGa';

export const DATA_META = {
  sourceUrl: 'https://flyingbird.dev/',
  dateUpdated: '2026-10-09',
  verifyStatus: '参考价格资料已比对，指定外部商业平台购买对应关系需依最终结算界面为准'
};

export const PLANS: PlanItem[] = [
  {
    id: 'monthly-15',
    name: '月付套餐',
    price: '¥15',
    priceNum: 15,
    period: '月付',
    traffic: '300GB / 月',
    trafficType: 'monthly',
    description: '按月计费并重置额度，适合日常稳定出海与常规网络使用。',
    features: [
      '300GB 月度流量（每月按时重置）',
      '1000Mbps 端口峰值带宽',
      '中国大陆方向优化线路',
      '覆盖香港、日本、美国、德国等多地区节点',
      '全平台客户端配置兼容（Clash / Shadowrocket 等）'
    ],
    recommended: true,
    notice: '按月计费，每月首日或账单日重置流量'
  },
  {
    id: 'onetime-25',
    name: '300GB流量包',
    price: '¥25',
    priceNum: 25,
    period: '一次性',
    traffic: '300GB 总量',
    trafficType: 'onetime',
    description: '一次性付费买断，流量不过期，适合低频备用或不定期高强度使用。',
    features: [
      '300GB 总流量（不过期，用完为止）',
      '1000Mbps 端口峰值带宽',
      '共享月付套餐同等优质线路',
      '支持多设备同时配置连接',
      '无月度重置压力，按需消耗'
    ],
    recommended: false,
    notice: '非每月300GB，为一次性购买全部300GB额度'
  },
  {
    id: 'onetime-60',
    name: '1000GB流量包',
    price: '¥60',
    priceNum: 60,
    period: '一次性',
    traffic: '1000GB 总量',
    trafficType: 'onetime',
    description: '超大额度一次性流量包，不过期且性价比极高，满足大文件下载与长期需求。',
    features: [
      '1000GB 总流量（不过期，用完为止）',
      '1000Mbps 端口峰值带宽',
      '优质国际出口与优化节点',
      '适合长期稳定备用或多客户端共享',
      '一次购买，长效安心使用'
    ],
    recommended: false,
    notice: '非每月1000GB，为一次性购买全部1000GB额度'
  }
];
