import type { OrganizationUserResolvers } from "../resolverTypes";

const OrganizationUser: OrganizationUserResolvers = {
  tier: async () => "team",
  billingTier: async () => "team",
};

export default OrganizationUser;
