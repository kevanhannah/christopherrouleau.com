import React from 'react';
import { Link } from 'gatsby';
import {
  ExternalPrimaryButton,
  ExternalSecondaryButton,
  ExternalTertiaryButton,
  InternalPrimaryButton,
  InternalSecondaryButton,
  InternalTertiaryButton,
} from './Styles';

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

  return <Link to={link}>{children}</Link>;
}
