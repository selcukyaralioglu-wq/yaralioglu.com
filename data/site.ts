import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Building2,
  Dumbbell,
  Globe2,
  LineChart,
  Network,
  Package,
  Sparkles,
} from "lucide-react";

export const navRoutes = [
  { href: "/", key: "home" },
  { href: "/corporate", key: "corporate" },
  { href: "/activities", key: "activities" },
  { href: "/group", key: "group" },
  { href: "/investments", key: "investments" },
  { href: "/references", key: "references" },
  { href: "/media", key: "media" },
  { href: "/contact", key: "contact" },
] as const;

export type NavRouteKey = (typeof navRoutes)[number]["key"];

export const homeActivityOrder = [
  "fitness",
  "facility",
  "trade",
  "investment",
] as const;

export type HomeActivityId = (typeof homeActivityOrder)[number];

export const homeActivityIcons: Record<HomeActivityId, LucideIcon> = {
  fitness: Dumbbell,
  facility: Building2,
  trade: Package,
  investment: LineChart,
};

export const groupUnitOrder = [
  { id: "flagship" as const, flagship: true },
  { id: "tradeDiv" as const, flagship: false },
  { id: "growth" as const, flagship: false },
  { id: "facilities" as const, flagship: false },
];

export type GroupUnitId = (typeof groupUnitOrder)[number]["id"];

export const referenceLogos = [
  "Northline Industrial Partners",
  "Atlas Supply Collective",
  "Meridian Facility Group",
  "Helix Performance Labs",
  "Vertex Distribution Co.",
  "Criterion Capital Advisory",
  "Silverline Wellness Holdings",
  "Pacific Lane Trading",
];

export const statsDefs = [
  { key: "sectors" as const, value: 4, suffix: "+" },
  { key: "initiatives" as const, value: 12, suffix: "+" },
  { key: "partners" as const, value: 35, suffix: "+" },
  { key: "years" as const, value: 15, suffix: "+" },
];

export const mediaCategories = [
  { id: "facilities" as const, count: 6 },
  { id: "operations" as const, count: 6 },
  { id: "corporate" as const, count: 4 },
  { id: "projects" as const, count: 5 },
] as const;

export const contactDetails = {
  phone: "+90 (000) 000 00 00",
  email: "info@yaralioglu.com",
};

export const strengthOrder = [
  "strategic",
  "discipline",
  "service",
  "longterm",
] as const;

export type StrengthId = (typeof strengthOrder)[number];

export const strengthIcons: Record<StrengthId, LucideIcon> = {
  strategic: Sparkles,
  discipline: Activity,
  service: Globe2,
  longterm: Network,
};

export const activitiesBlockOrder = [
  "fitness",
  "facility",
  "trade",
  "investment",
] as const;

export type ActivitiesBlockId = (typeof activitiesBlockOrder)[number];
