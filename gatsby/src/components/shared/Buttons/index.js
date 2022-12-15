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

export function PrimaryButton({ ariaLabel, internal, link, text }) {
  if (!internal) {
    return (
      <ExternalPrimaryButton
        aria-label={ariaLabel}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </ExternalPrimaryButton>
    );
  }

  return (
    <InternalPrimaryButton aria-label={ariaLabel} to={link}>
      {text}
    </InternalPrimaryButton>
  );
}

export function SecondaryButton({ ariaLabel, internal, link, text }) {
  if (!internal) {
    return (
      <ExternalSecondaryButton
        aria-label={ariaLabel}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </ExternalSecondaryButton>
    );
  }

  return (
    <InternalSecondaryButton aria-label={ariaLabel} to={link}>
      {text}
    </InternalSecondaryButton>
  );
}

export function TertiaryButton({ ariaLabel, internal, link, text }) {
  if (!internal) {
    return (
      <ExternalTertiaryButton
        aria-label={ariaLabel}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </ExternalTertiaryButton>
    );
  }

  return (
    <InternalTertiaryButton aria-label={ariaLabel} to={link}>
      {text}
    </InternalTertiaryButton>
  );
}

export function TextLink({ ariaLabel, children, internal, link, rel }) {
  if (!internal) {
    return (
      // eslint-disable-next-line react/jsx-no-target-blank
      <a
        aria-label={ariaLabel}
        href={link}
        rel={rel || 'noreferrer noopener'}
        target="_blank"
      >
        {children}
      </a>
    );
  }

  return (
    <Link aria-label={ariaLabel} to={link}>
      {children}
    </Link>
  );
}
