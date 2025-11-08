import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import type { OrgPlansAndBilling_organization$key } from "../../../../__generated__/OrgPlansAndBilling_organization.graphql";
import OrgPlans from "./OrgPlans";

type Props = {
  organizationRef: OrgPlansAndBilling_organization$key;
};

const OrgPlansAndBilling = (props: Props) => {
  const { organizationRef } = props;
  const organization = useFragment(
    graphql`
      fragment OrgPlansAndBilling_organization on Organization {
        ...OrgPlans_organization
        name
      }
    `,
    organizationRef
  );
  return (
    <div className="pb-20 space-y-6">
      <div>
        <h1 className="text-xl font-semibold">Plans &amp; Billing</h1>
        <p className="mt-2 text-base leading-6 text-slate-700">
          {organization.name} has access to the full Parabol feature set. There
          are no billing settings to manage.
        </p>
      </div>
      <OrgPlans organizationRef={organization} />
    </div>
  );
};

export default OrgPlansAndBilling;
