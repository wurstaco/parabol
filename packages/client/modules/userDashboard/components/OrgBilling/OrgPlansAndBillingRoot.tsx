import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import type { OrgPlansAndBillingRoot_organization$key } from "../../../../__generated__/OrgPlansAndBillingRoot_organization.graphql";
import OrgPlansAndBilling from "./OrgPlansAndBilling";

interface Props {
  organizationRef: OrgPlansAndBillingRoot_organization$key;
}

const OrgPlansAndBillingRoot = (props: Props) => {
  const { organizationRef } = props;
  const organization = useFragment(
    graphql`
      fragment OrgPlansAndBillingRoot_organization on Organization {
        ...OrgPlansAndBilling_organization
        id
      }
    `,
    organizationRef
  );

  return <OrgPlansAndBilling organizationRef={organization} />;
};

export default OrgPlansAndBillingRoot;
