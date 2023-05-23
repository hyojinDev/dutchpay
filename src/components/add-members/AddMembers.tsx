import { InputTags } from "react-bootstrap-tagsinput";
import { useRecoilState } from "recoil";
import CenteredOverlayForm from "@components/common/CenteredOverlayForm";
import { groupMembersState } from "@state/group-members";
import { useState } from "react";
import styled from "styled-components";
import { groupNameState } from "@state/group-name";
import { useNavigate } from "react-router-dom";
import { ROUTE_UTILS } from "@routes/routeUtils";

interface InputTagsOnTagsProps {
  values: string[];
  name?: string;
}

const AddMembers = () => {
  const [groupMembers, setGroupMembers] = useRecoilState(groupMembersState);
  const groupName = useRecoilState(groupNameState);
  const [validated, setValidated] = useState(false);
  const header = `${groupName} 그룹에 속한 사람들의 이름을 모두 적어 주세요.`;
  const navigate = useNavigate();

  const saveGroupMembers = () => {
    // TODO: DB에 groupMembers 저장 후, expense main으로 redirect
    console.log("Save Group members");
    navigate(ROUTE_UTILS.EXPENSE_MAIN("test-groupId"));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValidated(true);
    if (groupMembers && groupMembers.length > 0) {
      saveGroupMembers();
    }
  };

  return (
    <CenteredOverlayForm
      title={header}
      validated={validated}
      handleSubmit={handleSubmit}
    >
      <InputTags
        values={groupMembers}
        data-testid="input-member-names"
        placeholder="이름 간 띄어 쓰기"
        onTags={(value: InputTagsOnTagsProps) => setGroupMembers(value.values)}
      />
      {validated && groupMembers.length === 0 && (
        <StyledErrorMessage>
          그룹 멤버들의 이름을 입력해 주세요.
        </StyledErrorMessage>
      )}
    </CenteredOverlayForm>
  );
};

const StyledErrorMessage = styled.span`
  color: red;
`;

export default AddMembers;
