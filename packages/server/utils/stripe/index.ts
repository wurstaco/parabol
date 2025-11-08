import type StripeManager from "./StripeManager";
import StubStripeManager from "./StubStripeManager";

export function getStripeManager(): StripeManager {
  return StubStripeManager();
}
