import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

const PrimaryButtonStyles = css`
  display: inline-block;
  padding: 12px 24px;
  font-weight: 400;
  text-transform: uppercase;
  background-color: var(--primary-blue);
  color: #ffffff;
  text-decoration: none;
  border-radius: 4px;
  user-select: none;

  &:hover {
    background-color: var(--primary-blue-lighter);
    cursor: pointer;
  }
`;

const SecondaryButtonStyles = css`
  display: inline-block;
  padding: 12px 24px;
  font-weight: 400;
  text-transform: uppercase;
  background-color: var(--primary-blue);
  border: 1px solid #ffffff;
  color: #ffffff;
  text-decoration: none;
  border-radius: 4px;
  user-select: none;

  &:hover {
    background-color: var(--primary-blue-lighter);
    cursor: pointer;
  }
`;

const TertiaryButtonStyles = css`
  display: inline-block;
  padding: 16px 40px;
  font-weight: 400;
  text-transform: uppercase;
  background-color: var(--black);
  color: #ffffff;
  text-decoration: none;
  border-radius: 4px;
  user-select: none;

  &:hover {
    background-color: var(--black-lighter);
    cursor: pointer;
  }
`;

export const InternalPrimaryButton = styled(Link)`
  ${PrimaryButtonStyles}
`;

export const ExternalPrimaryButton = styled.a`
  ${PrimaryButtonStyles}
`;

export const InternalSecondaryButton = styled(Link)`
  ${SecondaryButtonStyles}
`;

export const ExternalSecondaryButton = styled.a`
  ${SecondaryButtonStyles}
`;

export const InternalTertiaryButton = styled(Link)`
  ${TertiaryButtonStyles}
`;

export const ExternalTertiaryButton = styled.a`
  ${TertiaryButtonStyles}
`;
