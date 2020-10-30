export interface View {
  id: number;
  tab_id: number;
  name: string;
  level: number;
  icon: string;
  href: string;
  is_active: boolean;
  created_at?: Date;
  updated_at?: Date;
  tab?: Tab;
  pivot?: Pivot;
}

export interface Tab {
  id: number;
  name: string;
  icon: string;
  level: number;
  created_at: Date;
  updated_at: Date;
  views?: View[];
}

export interface RoleView {
  id: number;
  name: string;
  code: string;
  created_at: Date;
  updated_at: Date;
  views: View[];
}

export interface Pivot {
  view_id: number;
  role_id: number;
  id: number;
  is_active: boolean;
}
