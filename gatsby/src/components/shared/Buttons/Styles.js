import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

const PrimaryButtonStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75em 1.5em;
  font-weight: 400;
  background-color: var(--primary-blue);
  color: #ffffff;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  border-radius: 0.25em;
  user-select: none;

  &:hover {
    color: #ffffff;
    background-color: var(--primary-blue-lighter);
    cursor: pointer;
  }

  @media (max-width: 400px) {
    font-size: 0.75em;
  }
`;

const SecondaryButtonStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75em 1.5em;
  font-weight: 400;
  background-color: var(--primary-blue);
  border: 1px solid #ffffff;
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 0.25em;
  user-select: none;

  &:hover {
    color: #ffffff;
    background-color: var(--primary-blue-lighter);
    cursor: pointer;
  }

  @media (max-width: 400px) {
    font-size: 0.75em;
  }
`;

const TertiaryButtonStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75em 1.5em;
  font-weight: 400;
  background-color: var(--black);
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 0.25em;
  user-select: none;

  &:hover {
    color: #ffffff;
    background-color: var(--black-lighter);
    cursor: pointer;
  }

  @media (max-width: 400px) {
    font-size: 0.75em;
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
