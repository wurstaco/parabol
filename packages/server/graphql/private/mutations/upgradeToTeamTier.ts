import standardError from "../../../utils/standardError";
import type { MutationResolvers } from "../resolverTypes";

export type UpgradeToTeamTierSuccessSource = {
  orgId: string;
  teamIds: string[];
};

const upgradeToTeamTier: MutationResolvers["upgradeToTeamTier"] = async (
  _source,
  { invoiceId, userId },
  _context
) => {
  return standardError(new Error("Billing has been disabled"), {
    userId,
    invoiceId,
  });
};

export default upgradeToTeamTier;
