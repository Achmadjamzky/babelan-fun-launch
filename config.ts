import { DBCConfig } from "@meteora-ag/dynamic-bonding-curve-sdk"

export const babelanConfig: DBCConfig = {
  curveType: "FLAT",
  basePrice: 0.001,
  graduationThreshold: 100,
  feeConfig: {
    baseFee: 100,
    communityFeeShare: 1000,
  },
  migration: {
    target: "DAMM_V2",
    dlmmPool: {
      type: "Conviction Pool",
      binStep: 25,
    }
  },
  quoteToken: "USDC",
  rwa: {
    type: "ISP_BANDWIDTH",
    location: "Babelan, Bekasi, Indonesia",
    users: 1000,
    monthlyRevenue: "$10000"
  }
}
