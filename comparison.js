// Comparison data for Income Waves vs Normal Investments
export const comparisonData = {
  normalInvestments: {
    title: 'Normal Investments',
    icon: 'fa-solid fa-piggy-bank',
    iconColor: 'text-deep-navy/50',
    bgColor: 'bg-off-white',
    borderColor: 'border-gray-200',
    textColor: 'text-deep-navy/70',
    points: [
      {
        icon: 'fa-solid fa-chart-line',
        title: 'Stocks, Index Funds, REITs, Savings Accounts',
        description: 'Traditional options, hard to access real growth.',
        mobileLabel: 'Type',
        mobileValue: 'Stocks, Funds, REITs',
      },
      {
        icon: 'fa-solid fa-percent',
        title: '4–10% avg. annual returns',
        description: 'Margins often limited by market cycles.',
        mobileLabel: 'Returns',
        mobileValue: '4–10% yearly',
      },
      {
        icon: 'fa-solid fa-lock',
        title: 'Long lock-up periods',
        description: 'Funds tied up for years, limited liquidity.',
        mobileLabel: 'Timeframe',
        mobileValue: 'Years locked up',
      },
      {
        icon: 'fa-solid fa-eye-slash',
        title: 'Limited insight',
        description: 'Rarely see how your money is actually used.',
        mobileLabel: 'Transparency',
        mobileValue: 'Limited insight',
      },
      {
        icon: 'fa-solid fa-globe',
        title: 'Available to everyone',
        description:
          'Anyone can access the same public markets and investment options.',
        mobileLabel: 'Access',
        mobileValue: 'Available to everyone',
      },
      {
        icon: 'fa-solid fa-hand-pointer',
        title: 'Limited control over investments',
        description:
          'Managed funds and portfolios offer little say in where your money goes.',
        mobileLabel: 'Control',
        mobileValue: 'Limited control (managed funds, etc.)',
      },
    ],
  },
  incomeWaves: {
    title: 'Amazon Powered Returns',
    subtitle: 'Smart Choice',
    icon: '/images/logo-navy-rounded.png',
    iconType: 'image',
    bgColor: 'bg-white',
    borderColor: 'border-deep-navy border-2',
    textColor: 'text-deep-navy',
    shadowClass: 'shadow-xl',
    points: [
      {
        icon: 'fa-solid fa-store',
        title: 'Directly back Amazon stores',
        description:
          'Invest in real inventory & real growth, not just numbers on a screen.',
        mobileLabel: 'Type',
        mobileValue: 'Amazon Stores',
      },
      {
        icon: 'fa-solid fa-arrow-trend-up',
        title: '20–35% profit margins',
        description: "Benefit from Amazon's high-performance sellers.",
        mobileLabel: 'Returns',
        mobileValue: '20–35% margins',
      },
      {
        icon: 'fa-solid fa-clock-rotate-left',
        title: 'Short cycles (2–6 months)',
        description: 'Faster access to profits, not multi-year waits.',
        mobileLabel: 'Timeframe',
        mobileValue: '2–6 month cycles',
      },
      {
        icon: 'fa-solid fa-chart-bar',
        title: 'Transparent monthly performance',
        description: 'Track every store, see real results every month.',
        mobileLabel: 'Transparency',
        mobileValue: 'Monthly updates',
      },
      {
        icon: 'fa-solid fa-gem',
        title: 'Exclusive seller access from just $100',
        description:
          "Access carefully vetted Amazon seller opportunities that aren't available to the general public.",
        mobileLabel: 'Access',
        mobileValue: 'Exclusive seller access from just $100',
      },
      {
        icon: 'fa-solid fa-hand-pointer',
        title: 'You choose which sellers to support',
        description:
          'Pick specific Amazon seller plans that match your investment goals and risk appetite.',
        mobileLabel: 'Control',
        mobileValue: 'You choose which Amazon sellers plan to support',
      },
    ],
  },
};

// Mobile table row labels (in order)
export const mobileTableLabels = [
  'Type',
  'Returns',
  'Timeframe',
  'Transparency',
  'Control',
  'Access',
];

// Footer message
export const comparisonFooter = {
  message:
    'Invest in trusted Amazon sellers. Earn as they grow—no store, no hustle',
};
