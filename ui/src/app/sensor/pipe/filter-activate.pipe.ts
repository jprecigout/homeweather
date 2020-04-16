import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "activateFilter",
  pure: false
})
export class ActivateFilter implements PipeTransform {
  transform(items: any[]): any {
    if (!items) {
      return items;
    }
    return items.filter(item => item.activate === true);
  }
}
