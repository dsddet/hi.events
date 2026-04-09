import React, { ReactNode } from 'react';
import { IconProps } from '@tabler/icons-react';

export interface NavItem {
    link?: string;
    label: string;
    icon?: React.ComponentType<IconProps>;
    comingSoon?: boolean;
    isActive?: (isActive: boolean) => boolean;
    badge?: string | number | null | undefined;
    onClick?: () => void;
    showWhen?: () => boolean | undefined;
    loading?: boolean;
}

export interface BreadcrumbItem {
    link?: string;
    content: ReactNode;
}

export interface StatusToggleConfig {
    status: 'DRAFT' | 'LIVE';
    onToggle: () => void;
    statusMessages?: {
        draft?: string;
        live?: string;
    };
}
