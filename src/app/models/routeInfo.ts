export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class?: string;
}

export const appRoutes: RouteInfo[] = [
  { path: '/panel/dashboard', title: 'Dashboard', icon: 'view-dashboard' },
  { path: '/panel/roles', title: 'Roles', icon: 'account-supervisor-circle' },
  { path: '/panel/users', title: 'Usuarios', icon: 'account-tie' },
  { path: '/panel/companies', title: 'Compañias', icon: 'account-tie' }
];

