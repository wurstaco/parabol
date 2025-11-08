import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLString } from "graphql";
import type { GQLContext } from "../graphql";
import type { ReasonToDowngradeEnum as TReasonToDowngradeEnum } from "../public/resolverTypes";
import DowngradeToStarterPayload from "../types/DowngradeToStarterPayload";
import ReasonToDowngradeEnum from "../types/ReasonToDowngrade";

export default {
  type: DowngradeToStarterPayload,
  description: "Downgrade a paid account to the starter service",
  args: {
    orgId: {
      type: new GraphQLNonNull(GraphQLID),
      description: "the org requesting the upgrade",
    },
    reasonsForLeaving: {
      type: new GraphQLList(ReasonToDowngradeEnum),
      description: "the reasons the user is leaving",
    },
    otherTool: {
      type: GraphQLString,
      description:
        "the name of the tool they are moving to. only required if anotherTool is selected as a reason to downgrade",
    },
  },
  async resolve(
    _source: unknown,
    {
      orgId,
      reasonsForLeaving,
      otherTool,
    }: {
      orgId: string;
      reasonsForLeaving?: TReasonToDowngradeEnum[];
      otherTool?: string;
    },
    _context: GQLContext
  ) {
    if (otherTool && otherTool.length > 100) {
      return {
        error: {
          message: "Other tool name is too long",
        },
      };
    }

    return {
      orgId,
      teamIds: [],
    };
  },
};
