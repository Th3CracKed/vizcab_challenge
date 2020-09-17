import { Component, OnInit, OnDestroy } from '@angular/core';
import { BatimentHttpService } from '../services';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Batiment } from '../model';

@Component({
  selector: 'app-batiment',
  templateUrl: './batiment.component.html',
  styleUrls: ['./batiment.component.scss']
})
export class BatimentComponent implements OnInit, OnDestroy {

  private onDestroy$ = new Subject<void>();
  batiments: Batiment[];
  constructor(private batimentHttpService: BatimentHttpService) { }

  ngOnInit(): void {
    this.batimentHttpService.getBatiments()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(batiments => {
        this.batiments = batiments;
      }, console.error);
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
