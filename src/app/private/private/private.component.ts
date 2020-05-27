import { IBreadCrumb } from './private.type';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { filter, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss'],
})
export class PrivateComponent implements OnInit {
  breadcrumbs: IBreadCrumb[];
  constructor(private router: Router, private acRouter: ActivatedRoute) {
    this.breadcrumbs = this.buildBreadCrumb(this.acRouter.root);
  }

  ngOnInit(): void {
    this.triggerBreadcrumb();
  }
  logOut() {
    this.router.navigate(['../']);
    localStorage.clear();
  }

  buildBreadCrumb(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: IBreadCrumb[] = []
  ): IBreadCrumb[] {
    let label =
      route.routeConfig && route.routeConfig.data
        ? route.routeConfig.data.breadcrumb
        : '';
    let path =
      route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';

    const lastRoutePart = path.split('/').pop();
    const isDynamicRoute = lastRoutePart.startsWith(':');
    if (isDynamicRoute && !!route.snapshot) {
      const paramName = lastRoutePart.split(':')[1];
      path = path.replace(lastRoutePart, route.snapshot.params[paramName]);
      label = `Edycja (${route.snapshot.params[paramName]})`;
    }
    const nextUrl = path ? `${url}/${path}` : url;
    const isApp = nextUrl.split('/')[0] !== 'app' ? `/app${nextUrl}` : nextUrl;
    const breadcrumb: IBreadCrumb = {
      label: label,
      url: isApp,
    };
    const newBreadcrumbs = breadcrumb.label
      ? [...breadcrumbs, breadcrumb]
      : [...breadcrumbs];
    if (route.firstChild) {
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }

  triggerBreadcrumb() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        distinctUntilChanged()
      )
      .subscribe(() => {
        this.breadcrumbs = this.buildBreadCrumb(this.acRouter.root);
      });
  }
}
