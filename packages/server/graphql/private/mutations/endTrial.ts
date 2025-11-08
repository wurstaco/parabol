import type { MutationResolvers } from "../resolverTypes";

const endTrial: MutationResolvers["endTrial"] = async (_source, { orgId }) => {
  return { orgId, trialStartDate: new Date(0) };
};

export default endTrial;
