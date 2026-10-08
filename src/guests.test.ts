import { describe, it, expect } from "vitest";
import { guests } from "./guest_list";

describe("guests", () => {
  it("should have at least 3 guests", () => {
    expect(guests.length).toBeGreaterThanOrEqual(3);
  });

  it("should include Alex", () => {
    expect(guests).toContain("Alex");
  });
});
