/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export default function GlassContainer({ children, className = '' }: Props) {
  return (
    <div className={`glass-card p-6 md:p-8 ${className}`}>
      {children}
    </div>
  );
}
