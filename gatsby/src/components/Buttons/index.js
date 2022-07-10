import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
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

const InternalPrimaryButton = styled(GatsbyLink)`
  ${PrimaryButtonStyles}
`;

const ExternalPrimaryButton = styled.a`
  ${PrimaryButtonStyles}
`;

const InternalSecondaryButton = styled(GatsbyLink)`
  ${SecondaryButtonStyles}
`;

const ExternalSecondaryButton = styled.a`
  ${SecondaryButtonStyles}
`;

const InternalTertiaryButton = styled(GatsbyLink)`
  ${TertiaryButtonStyles}
`;

const ExternalTertiaryButton = styled.a`
  ${TertiaryButtonStyles}
`;

export function PrimaryButton({ internal, link, text }) {
  if (!internal) {
    return <ExternalPrimaryButton href={link}>{text}</ExternalPrimaryButton>;
  }

  return <InternalPrimaryButton to={link}>{text}</InternalPrimaryButton>;
}

export function SecondaryButton({ internal, link, text }) {
  if (!internal) {
    return (
      <ExternalSecondaryButton href={link}>{text}</ExternalSecondaryButton>
    );
  }

  return <InternalSecondaryButton to={link}>{text}</InternalSecondaryButton>;
}

export function TertiaryButton({ internal, link, text }) {
  if (!internal) {
    return <ExternalTertiaryButton href={link}>{text}</ExternalTertiaryButton>;
  }

  return <InternalTertiaryButton to={link}>{text}</InternalTertiaryButton>;
}

export function TextLink({ children, internal, link, rel }) {
  if (!internal) {
    return (
      <a href={link} rel={rel}>
        {children}
      </a>
    );
  }

  return <GatsbyLink to={link}>{children}</GatsbyLink>;
}
