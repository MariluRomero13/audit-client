export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class?: string;
}

export const appRoutes: RouteInfo[] = [
  { path: '/panel/dashboard', title: 'Dashboard', icon: 'dashboard' },
  { path: '/panel/roles', title: 'Roles', icon: 'supervised_user_circle' },
  { path: '/panel/users', title: 'Usuarios', icon: 'group' },
  { path: '/panel/companies', title: 'Compañias', icon: 'domain' }
];

