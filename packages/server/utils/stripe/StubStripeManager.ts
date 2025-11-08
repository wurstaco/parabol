import type Stripe from "stripe";
import StripeManager from "./StripeManager";

type AsyncStripeFn = (...args: unknown[]) => Promise<unknown>;

const createList = <T>(data: T[] = []) => ({
  data,
});

const createInvoice = (invoiceId: string): Stripe.Invoice =>
  ({
    id: invoiceId,
    customer: null,
    subscription: null,
    metadata: {},
    lines: createList(),
    paid: true,
  } as Stripe.Invoice);

const createCustomer = (): Stripe.Customer =>
  ({
    id: "stub-customer-id",
    deleted: false,
    metadata: {},
    invoice_settings: {},
  } as unknown as Stripe.Customer);

const createSubscription = (): Stripe.Subscription =>
  ({
    id: "stub-subscription-id",
    customer: "stub-customer-id",
    status: "active",
  } as Stripe.Subscription);

const createPaymentMethodCard = (): Stripe.PaymentMethod.Card =>
  ({
    brand: "visa",
    last4: "4242",
    exp_month: 1,
    exp_year: 2099,
  } as Stripe.PaymentMethod.Card);

const disabledError = new Error("Billing has been disabled");

export default function StubStripeManager() {
  const asyncError: AsyncStripeFn = async () => disabledError;
  const asyncEmptyObject: AsyncStripeFn = async () => ({});

  return new Proxy<StripeManager>({} as StripeManager, {
    get: (_target, propKey: keyof StripeManager) => {
      switch (propKey) {
        case "constructEvent":
          return () => null;
        case "createCustomer":
          return async () => createCustomer();
        case "createEnterpriseSubscription":
        case "createTeamSubscription":
        case "retrieveSubscription":
          return async () => createSubscription();
        case "retrieveCustomer":
          return async () => createCustomer();
        case "retrieveInvoice":
          return async (invoiceId: string) => createInvoice(invoiceId);
        case "listInvoices":
        case "listLineItems":
        case "listSources":
        case "listActiveSubscriptions":
        case "getCustomersByEmail":
        case "listSubscriptionOpenInvoices":
          return async () => createList();
        case "retrieveInvoiceItem":
        case "retrieveCharge":
        case "retrieveSource":
        case "updateAccountBalance":
        case "updateInvoice":
        case "updateInvoiceItem":
        case "updatePayment":
        case "updateDefaultPaymentMethod":
        case "updateSubscriptionItemQuantity":
        case "deleteSubscription":
          return asyncEmptyObject;
        case "attachPaymentToCustomer":
        case "updateSubscription":
        case "retrieveCardDetails":
        case "retrieveDefaultCardDetails":
        case "payInvoice":
          return asyncError;
        case "retrieveUpcomingInvoice":
          return async () => createInvoice("stub-upcoming-invoice");
        default:
          return asyncEmptyObject;
      }
    },
  });
}
