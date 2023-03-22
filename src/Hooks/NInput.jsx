import React from "react";
import styled from "styled-components";

const NInput = ({ type, placeholder, name, value, onChange }) => {
  return (
    <SignupInput
      type={type}
      value={value}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default NInput;
const SignupInput = styled.input`
  width: 100%;
  height: 50px;
  margin-top: 10px;

  border: 2px solid black;
`;
