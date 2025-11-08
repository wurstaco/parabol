import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import type { TimelineHistoryLockedCard_organization$key } from "../__generated__/TimelineHistoryLockedCard_organization.graphql";

interface Props {
  organizationRef: TimelineHistoryLockedCard_organization$key | null;
}

const TimelineHistoryLockedCard = ({ organizationRef }: Props) => {
  useFragment(
    graphql`
      fragment TimelineHistoryLockedCard_organization on Organization {
        id
      }
    `,
    organizationRef
  );

  return null;
};

export default TimelineHistoryLockedCard;
