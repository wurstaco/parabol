import type { TierEnum } from "../../public/resolverTypes";

export const getFeatureTier = ({
  tier,
  trialStartDate,
}: {
  tier: TierEnum;
  trialStartDate?: Date | null;
}) => {
  return "team";
};
