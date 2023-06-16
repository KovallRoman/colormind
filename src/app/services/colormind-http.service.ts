import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ColormindModel } from '../models/colormind.model';
import { PaletteModel } from '../models/palette.model';

@Injectable({providedIn: 'root'})
export class ColorHttpService {

  constructor(
    private http: HttpClient,
  ) {
  }

  postColormind(): Observable<PaletteModel> {
    const model = {model: 'ui'};
    return this.http.post<ColormindModel>('http://colormind.io/api/', model, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).pipe(
      // map((res: ColormindModel): PaletteModel => {
      //   const hexArr = res.result.map(([r, g, b]): string => {
      //     return "#" + r.toString(16).toUpperCase() + g.toString(16).toUpperCase() + b.toString(16).toUpperCase();
      //   });
      //   return {
      //     lightShades: hexArr[0],
      //     lightAccent: hexArr[1],
      //     mainColor: hexArr[2],
      //     darkAccent: hexArr[3],
      //     darkShades: hexArr[4],
      //   };
      // })
      map((res: ColormindModel): PaletteModel => {
        const hexArr = res.result.map((rgb): string => this.rgbToHex(rgb));
        return this.hexToPalette(hexArr);
      })
    );
  }

  private hexToPalette(hexArr: string[]): PaletteModel {
    return {
      lightShades: hexArr[0],
      lightAccent: hexArr[1],
      mainColor: hexArr[2],
      darkAccent: hexArr[3],
      darkShades: hexArr[4],
    }
  }

  private rgbToHex([r, g, b]: [number, number, number]): string {
    return '#' + this.numberToHex(r) + this.numberToHex(g) + this.numberToHex(b);
  }

  private numberToHex(value: number): string {
    return value.toString(16).toUpperCase();
  }
}


