// Copyright 2017-2021 @canvas-ui/react-query authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { useApi } from '@canvas-ui/react-api';
import { BareProps } from '@canvas-ui/react-api/types';
import FormatBalance from '@canvas-ui/react-components/FormatBalance';
import { useCall } from '@canvas-ui/react-hooks';
import React from 'react';

import { DeriveBalancesAll } from '@polkadot/api-derive/types';
import { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';

interface Props extends BareProps {
  children?: React.ReactNode;
  label?: React.ReactNode;
  params?: AccountId | AccountIndex | Address | string | Uint8Array | null;
}

function BalanceVoting({ children, className = '', label, params }: Props): React.ReactElement<Props> {
  const { api } = useApi();
  const allBalances = useCall<DeriveBalancesAll>(api.derive.balances.all, [params]);

  return (
    <FormatBalance className={className} label={label} value={allBalances?.votingBalance}>
      {children}
    </FormatBalance>
  );
}

export default React.memo(BalanceVoting);
