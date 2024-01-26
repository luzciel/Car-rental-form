import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const FormGroup = styled.div`
  margin-bottom: 15px;
  position: relative;
`;

const Input = styled.input`
  height: 52px;
  width: 100%;
  outline: none;
  border: 1px solid #dadce0;
  padding-left: 0.5em;
  padding-right: 0.5em;
  border-radius: 8px;
  font-size: inherit;
  color: var(--secondary-color);
  transition: all 0.3s ease-in-out;

  &:focus {
    border: 2px solid var(--primary-color);
  }
`;

const LabelText = styled.label`
  position: absolute;
  padding: 0px 5px;
  left: 5px;
  top: 50%;
  pointer-events: none;
  transform: translateY(-50%);
  background: #fff;
  transition: all 0.3s ease-in-out;

  &::after {
    content: " *";
    color: red;
    margin-right: 5px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  ${Input}:focus + &::after,
  ${Input}:valid + &::after {
    opacity: 1;
  }

  ${Input}:focus + &,
  ${Input}:valid + & {
    top: 0px;
    font-size: 13px;
    font-weight: 500;
    color: var(--primary-color);
  }
`;

const StyledSelect = styled.select`
  height: 52px;
  width: 100%;
  outline: none;
  border: 1px solid #dadce0;
  background: none;
  position: relative;
  padding-left: 0.5em;
  border-radius: 8px;
  font-size: inherit;
  color: var(--secondary-color);
  transition: all 0.3s ease-in-out;

  &:focus {
    border: 2px solid var(--primary-color);
  }
`;

const Label = styled.label`
  position: absolute;
  padding: 0px 5px;
  left: 5px;
  top: 50%;
  pointer-events: none;
  transform: translateY(-50%);
  background: #fff;
  transition: all 0.3s ease-in-out;

  &::after {
    content: " *";
    color: red;
    margin-right: 5px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  ${StyledSelect}:focus + &::after,
  ${StyledSelect}:valid + &::after {
    opacity: 1;
  }

  ${StyledSelect}:focus + &,
  ${StyledSelect}:valid + & {
    top: 0px;
    font-size: 13px;
    font-weight: 500;
    color: var(--primary-color);
  }
`;
const ErrorInput = styled.span`
  color: red;
  font-size: 0.9em;
  margin-top: 0.5em;

  @media (max-width: 768px) {
    font-size: 0.7em;
  }
`;

const InputForm = ({
  name,
  handleInputChange,
  FormDataValue,
  title,
  type = "text",
  isSelect = false,
  options = [],
  error = "",
}) => {

  return (
    <FormGroup>
      {isSelect ? (
        <div>
          <StyledSelect
            id={name}
            name={name}
            value={FormDataValue}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Selecciona
            </option>
            {options &&
              options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
          </StyledSelect>
          <Label htmlFor={name}>{title}</Label>
        </div>
      ) : (
        <div>
          <Input
            type={type}
            id={name}
            name={name}
            value={FormDataValue}
            onChange={handleInputChange}
            required
          />
          <LabelText htmlFor={name}>{title}</LabelText>
          {error.length > 0 && <ErrorInput>{error}</ErrorInput>}
        </div>
      )}
    </FormGroup>
  );
};

InputForm.propTypes = {
  name: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  FormDataValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  title: PropTypes.string.isRequired,
  isSelect: PropTypes.bool,
  options: PropTypes.array,
  error: PropTypes.string,
};

export default InputForm;
