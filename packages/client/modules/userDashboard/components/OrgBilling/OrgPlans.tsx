import styled from "@emotion/styled";
import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import type { OrgPlans_organization$key } from "../../../../__generated__/OrgPlans_organization.graphql";
import Panel from "../../../../components/Panel/Panel";
import { ElementWidth } from "../../../../types/constEnums";

const StyledPanel = styled(Panel)({
  maxWidth: ElementWidth.PANEL_WIDTH,
  padding: "24px 16px",
});

const Message = styled("p")({
  margin: 0,
  fontSize: 16,
  lineHeight: "24px",
});

type Props = {
  organizationRef: OrgPlans_organization$key;
};

const OrgPlans = ({ organizationRef }: Props) => {
  useFragment(
    graphql`
      fragment OrgPlans_organization on Organization {
        id
      }
    `,
    organizationRef
  );

  return (
    <StyledPanel label="Plans">
      <Message>
        All Parabol features are unlocked. No billing or upgrades required.
      </Message>
    </StyledPanel>
  );
};

export default OrgPlans;
