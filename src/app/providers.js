'use client';

import CarbonHeader from '@/components/CarbonHeader/CarbonHeader';
import { Content } from '@carbon/react';

export function Providers({ children }) {
  return (
    <div>
      <CarbonHeader />
      <Content>{children}</Content>
    </div>
  );
}
