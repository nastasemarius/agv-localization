import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { debounceTime, switchMap, map } from "rxjs/operators";
import { Observable } from "rxjs";
import { SearchService } from "../search.service";

@Component({
  selector: "agv-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.less"]
})
export class SearchComponent implements OnInit {
  public searchControl: FormControl;
  private searchResults: Observable<any>;

  constructor(private searchService: SearchService) {
    this.searchControl = new FormControl("");
  }

  ngOnInit() {
    this.searchResults = this.searchControl.valueChanges.pipe(
      debounceTime(0),
      switchMap((searchTerm: string) =>
        this.searchService.getSearchResults(searchTerm)
      ),
      map((result: any) => result.suggestions)
    );

    this.searchResults.subscribe(results => {
      console.log(JSON.stringify(results, null, 0));
    });
  }
}
