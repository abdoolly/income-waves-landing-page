// Comparison data for Income Waves vs Alternatives (Investor and Seller views)
export const comparisonData = {
  investor: {
    sectionTitle: 'The Smarter Way to Invest',
    alternative: {
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
    footer: {
      message:
        'Invest in trusted Amazon sellers. Earn as they grow—no store, no hustle',
    },
  },
  seller: {
    sectionTitle: 'The Smarter Way to Fund Your Business',
    alternative: {
      title: 'Traditional Funding',
      icon: 'fa-solid fa-university',
      iconColor: 'text-deep-navy/50',
      bgColor: 'bg-off-white',
      borderColor: 'border-gray-200',
      textColor: 'text-deep-navy/70',
      points: [
        // TODO: Add seller alternative funding points
        {
          icon: 'fa-solid fa-file-contract',
          title: 'Bank Loans & Credit Lines',
          description: 'Traditional lending with strict requirements.',
          mobileLabel: 'Type',
          mobileValue: 'Bank Loans, Credit',
        },
        {
          icon: 'fa-solid fa-percent',
          title: 'High interest rates (8-25%)',
          description: 'Expensive borrowing costs eat into profits.',
          mobileLabel: 'Cost',
          mobileValue: '8-25% interest',
        },
        {
          icon: 'fa-solid fa-clock',
          title: 'Slow approval process',
          description: 'Weeks or months to get funding approved.',
          mobileLabel: 'Speed',
          mobileValue: 'Weeks to months',
        },
        {
          icon: 'fa-solid fa-shield-halved',
          title: 'Personal guarantees required',
          description: 'Your personal assets are at risk.',
          mobileLabel: 'Risk',
          mobileValue: 'Personal liability',
        },
        {
          icon: 'fa-solid fa-chart-line-down',
          title: 'Credit score requirements',
          description: 'Need excellent credit history to qualify.',
          mobileLabel: 'Requirements',
          mobileValue: 'High credit scores',
        },
        {
          icon: 'fa-solid fa-handshake-slash',
          title: 'No partnership benefits',
          description: "Lenders don't share in your success.",
          mobileLabel: 'Partnership',
          mobileValue: 'No shared success',
        },
      ],
    },
    incomeWaves: {
      title: 'Income Waves Funding',
      subtitle: 'Smart Choice',
      icon: '/images/logo-navy-rounded.png',
      iconType: 'image',
      bgColor: 'bg-white',
      borderColor: 'border-deep-navy border-2',
      textColor: 'text-deep-navy',
      shadowClass: 'shadow-xl',
      points: [
        // TODO: Add Income Waves seller benefits
        {
          icon: 'fa-solid fa-handshake',
          title: 'Investor partnerships',
          description: 'Partner with investors who believe in your success.',
          mobileLabel: 'Type',
          mobileValue: 'Investor Partnerships',
        },
        {
          icon: 'fa-solid fa-gift',
          title: 'Zero fees for sellers',
          description: 'No upfront costs, no monthly fees, no success charges.',
          mobileLabel: 'Cost',
          mobileValue: 'Zero fees',
        },
        {
          icon: 'fa-solid fa-bolt',
          title: 'Fast funding release',
          description: 'Funds released as soon as Amazon receives inventory.',
          mobileLabel: 'Speed',
          mobileValue: 'Same day release',
        },
        {
          icon: 'fa-solid fa-shield-check',
          title: 'No personal guarantees',
          description: 'Your personal assets stay protected.',
          mobileLabel: 'Risk',
          mobileValue: 'No personal risk',
        },
        {
          icon: 'fa-solid fa-user-check',
          title: 'Performance-based approval',
          description: 'Based on your Amazon store performance, not credit.',
          mobileLabel: 'Requirements',
          mobileValue: 'Store performance',
        },
        {
          icon: 'fa-solid fa-trophy',
          title: 'Shared success model',
          description: 'Investors succeed when you succeed.',
          mobileLabel: 'Partnership',
          mobileValue: 'Aligned incentives',
        },
      ],
    },
    footer: {
      message:
        'Scale your Amazon business faster with investor partnerships—no debt, no personal risk',
    },
  },
};

// Mobile table row labels (in order) for each view
export const mobileTableLabels = {
  investor: [
    'Type',
    'Returns',
    'Timeframe',
    'Transparency',
    'Control',
    'Access',
  ],
  seller: ['Type', 'Cost', 'Speed', 'Risk', 'Requirements', 'Partnership'],
};
