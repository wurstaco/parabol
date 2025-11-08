import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import type { MeetingLockedOverlay_meeting$key } from "~/__generated__/MeetingLockedOverlay_meeting.graphql";

interface Props {
  meetingRef: MeetingLockedOverlay_meeting$key;
}

const MeetingLockedOverlay = ({ meetingRef }: Props) => {
  useFragment(
    graphql`
      fragment MeetingLockedOverlay_meeting on NewMeeting {
        id
      }
    `,
    meetingRef
  );
  return null;
};

export default MeetingLockedOverlay;
