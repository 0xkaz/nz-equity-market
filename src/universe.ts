// Tracked universe for NZ Equity Monitor: S&P/NZX 50 + liquid NZX names.
// code = NZX stock code (Yahoo symbol is `${code}.NZ`). Names are refreshed from Yahoo;
// the comments here are hints for readability only.
export interface UniverseEntry {
  code: string;
  sector: Sector;
  kind?: "equity" | "index";
  name?: string;
}

export type Sector =
  | "Healthcare" | "Utilities" | "Industrial" | "Tech" | "Telecom" | "Consumer" | "Property" | "Materials" | "Staples" | "Financials" | "Energy" | "Index";

export const INDEX_SYMBOL = "^NZ50";
export const INDEX_CODE = "NZ50";
export const EXCHANGE_SUFFIX = ".NZ";

export const UNIVERSE: UniverseEntry[] = [
  { code: "NZ50", sector: "Index", kind: "index", name: "S&P/NZX 50" },
  // Healthcare
  { code: "FPH", sector: "Healthcare" }, // Fisher & Paykel Healthcare Corporation Limited
  { code: "RYM", sector: "Healthcare" }, // Ryman Healthcare Limited
  // Utilities
  { code: "CEN", sector: "Utilities" }, // Contact Energy Limited
  { code: "MEL", sector: "Utilities" }, // Meridian Energy Limited
  { code: "MCY", sector: "Utilities" }, // Mercury NZ Limited
  { code: "GNE", sector: "Utilities" }, // Genesis Energy Limited
  { code: "VCT", sector: "Utilities" }, // Vector Limited
  // Industrial
  { code: "AIA", sector: "Industrial" }, // Auckland International Airport Limited
  { code: "AIR", sector: "Industrial" }, // Air New Zealand Limited
  { code: "FBU", sector: "Industrial" }, // Fletcher Building Limited
  { code: "FCG", sector: "Industrial" }, // Fonterra Co-operative Group Limited
  { code: "SKC", sector: "Industrial" }, // SkyCity Entertainment Group Limited
  { code: "PFI", sector: "Industrial" }, // Property For Industry Limited
  // Tech
  { code: "ATM", sector: "Tech" }, // The a2 Milk Company Limited
  { code: "MFT", sector: "Tech" }, // Mainfreight Limited
  // Telecom
  { code: "SPK", sector: "Telecom" }, // Spark New Zealand Limited
  { code: "CNU", sector: "Telecom" }, // Chorus Limited
  // Consumer
  { code: "SUM", sector: "Consumer" }, // Summerset Group Holdings Limited
  // Property
  { code: "IFT", sector: "Property" }, // Infratil Limited
  { code: "POT", sector: "Property" }, // Port of Tauranga Limited
  { code: "PCT", sector: "Property" }, // Precinct Properties New Zealand Limited, Precinct Properties Investments Limited
  { code: "KPG", sector: "Property" }, // Kiwi Property Group Limited
  { code: "ARG", sector: "Property" }, // Argosy Property Limited
  // Materials
  { code: "EBO", sector: "Materials" }, // EBOS Group Limited
  // Staples
  { code: "SCL", sector: "Staples" }, // Scales Corporation Limited
  // Financials
  { code: "HGH", sector: "Financials" }, // Heartland Group Holdings Limited
];

export function symbolFor(entry: UniverseEntry): string {
  return entry.kind === "index" ? INDEX_SYMBOL : `${entry.code}${EXCHANGE_SUFFIX}`;
}

// Japanese sector labels (same table the UI uses); consumed by sectorLabel() in market.ts
export const SECTOR_JA: Record<string, string> = { Healthcare: "医療機器・ヘルスケア", Utilities: "電力", Industrial: "空港・建設・インフラ", Tech: "ソフトウェア・IT", Telecom: "通信", Consumer: "小売・消費・観光", Property: "不動産（REIT）", Materials: "素材", Staples: "食品", Financials: "金融", Energy: "エネルギー", Index: "指数" };
