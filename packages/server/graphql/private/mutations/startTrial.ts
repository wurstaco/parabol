import type { MutationResolvers } from "../resolverTypes";

const startTrial: MutationResolvers["startTrial"] = async (
  _source,
  { orgId }
) => {
  return { orgId };
};

export default startTrial;
