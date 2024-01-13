import React from "react";
import PageHeader from "~~/components/page/PageHeader";
import PageTitle from "~~/components/page/PageTitle";
import { Button } from "~~/components/ui/button";
import BlacklistUser, { BlacklistBtn } from "./userActionButtons/BlacklistUser";
import ActivateUser, {
  ActivateUserBtn,
} from "./userActionButtons/ActivateUser";
import { TUserDetails } from "../_types";

// TODO: Pick only props needed by the child comps
const UserDetailPageHeader: React.FC<{ data?: TUserDetails }> = ({ data }) => {
  return (
    <PageHeader
      title={{ text: "User Details" }}
      actions={[<BlacklistBtn user={data} />, <ActivateUserBtn user={data} />]}
    />
  );
};

export default UserDetailPageHeader;
