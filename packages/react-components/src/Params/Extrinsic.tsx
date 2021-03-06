// Copyright 2017-2021 @canvas-ui/app-extrinsics authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useCallback } from 'react';

import { SubmittableExtrinsic, SubmittableExtrinsicFunction } from '@polkadot/api/types';

import BaseExtrinsic from '../Extrinsic';
import { BareProps, RawParamOnChange, RawParamOnEnter, RawParamOnEscape } from '../types';

interface Props extends BareProps {
  defaultValue: SubmittableExtrinsicFunction<'promise'>;
  isDisabled?: boolean;
  isError?: boolean;
  isPrivate: boolean;
  label: React.ReactNode;
  onChange?: RawParamOnChange;
  onEnter?: RawParamOnEnter;
  onEscape?: RawParamOnEscape;
  withLabel?: boolean;
}

function ExtrinsicDisplay({
  className = '',
  defaultValue,
  isDisabled,
  isError,
  isPrivate,
  label,
  onChange,
  onEnter,
  onEscape,
  withLabel
}: Props): React.ReactElement<Props> {
  const _onChange = useCallback(
    (method?: SubmittableExtrinsic<'promise'>): void =>
      onChange &&
      onChange({
        isValid: !!method,
        value: method
      }),
    [onChange]
  );

  return (
    <BaseExtrinsic
      className={className}
      defaultValue={defaultValue}
      isDisabled={isDisabled}
      isError={isError}
      isPrivate={isPrivate}
      label={label}
      onChange={_onChange}
      onEnter={onEnter}
      onEscape={onEscape}
      withLabel={withLabel}
    />
  );
}

export default React.memo(ExtrinsicDisplay);
