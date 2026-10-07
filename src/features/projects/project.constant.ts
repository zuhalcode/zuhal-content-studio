import { ProjectTab } from "./project.types";

export const PROJECT_TABS: readonly ProjectTab[] = [
  "Overview",
  "Audience",
  "Topics",
  "Keywords",
  "Content",
  "Experiments",
  "Patterns",
  "Settings",
];

export const PROJECT_IDENTITY: Record<string, string> = {
  coding:
    "Make complex technical decisions easier to understand through concrete examples.",
  books: "A focused system for collecting and testing useful ideas.",
  "coffee-brewing":
    "A focused system for experimenting with coffee and improving brewing decisions.",
};
