import type { NavigationGuardNext, RouteLocation } from 'vue-router'

export function isAuthenticated(to: RouteLocation, from: RouteLocation, next: NavigationGuardNext) {
  if (!localStorage.userName) {
    return next()
  }

  return next({
    name: 'home'
  })
}

export function isNotAuthenticated(
  to: RouteLocation,
  from: RouteLocation,
  next: NavigationGuardNext
) {
  if (localStorage.userName) {
    return next()
  }

  return next({
    name: 'connection'
  })
}
