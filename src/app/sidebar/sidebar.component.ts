import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Personas',          icon:'nc-single-02',       class: '' },
    { path: '/icons',         title: 'Seccionales',       icon:'nc-pin-3',    class: '' },
    { path: '/maps',          title: 'Asistencia',        icon:'nc-paper',      class: '' },
    { path: '/user',          title: 'Usuarios',          icon:'nc-badge',  class: '' },
    { path: '/table',         title: 'Votación',        icon:'nc-tile-56',    class: '' },
    { path: '/typography',    title: 'Resultados',        icon:'nc-chart-pie-36', class: 'active-pro' },
  
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
