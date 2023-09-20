import { Directive, Input, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appRouterLinkActiveExact]'
})
export class RouterLinkActiveExactDirective {

  @Input('appRouterLinkActiveExact') link: string | undefined; // Input to specify the link to match exactly

  constructor(private el: ElementRef, private router: Router) {}

  @HostListener('click') onClick() {
    // Check if the current URL matches the specified link exactly
    const currentUrl = this.router.url;
    if (currentUrl === this.link) {
      // Add a custom class when the link is clicked and matches exactly
      this.el.nativeElement.classList.add('active-exact');
    } else {
      // Remove the custom class for other links
      this.el.nativeElement.classList.remove('active-exact');
    }
  }
}
