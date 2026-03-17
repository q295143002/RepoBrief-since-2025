import { createNavigation } from 'next-intl/navigation';

export const locales = ['en', 'zh'];

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales: ['en', 'zh']
});
