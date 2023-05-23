import React, { useState } from "react";
import { Form } from "react-bootstrap";
import CenteredOverlayForm from "@components/common/CenteredOverlayForm";
import { useRecoilState } from "recoil";
import { groupNameState } from "@state/group-name";
import { ROUTE_UTILS } from "@routes/routeUtils";
import { useNavigate } from "react-router-dom";

const CreateGroup: React.FC = () => {
  const [validated, setValidated] = useState(false);
  const [validGroupName, setValidGroupName] = useState(false);
  const [groupName, setGroupName] = useRecoilState(groupNameState);
  const navigate = useNavigate();

  const saveGroupName = () => {
    // TODO: DB에 groupName 저장 후, add members로 redirect
    console.log("Save Group name");
    navigate(ROUTE_UTILS.ADD_MEMBERS("test-guid"));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity()) {
      setValidGroupName(true);
      saveGroupName();
    } else {
      event.stopPropagation();
      setValidGroupName(false);
    }
    setValidated(true);
  };

  return (
    <CenteredOverlayForm
      title="먼저, 더치 페이 할 그룹의 이름을 정해볼까요?"
      validated={validated}
      handleSubmit={handleSubmit}
    >
      <Form.Group>
        <Form.Control
          type="text"
          required
          placeholder="2023 제주도 여행"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setGroupName(e.target.value)
          }
        />
        <Form.Control.Feedback type="invalid" data-valid={validGroupName}>
          그룹 이름을 입력해 주세요.
        </Form.Control.Feedback>
      </Form.Group>
    </CenteredOverlayForm>
  );
};

export default CreateGroup;
