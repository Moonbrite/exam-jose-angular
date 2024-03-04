import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environement} from "../environement/environement";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Voyage} from "../models/voyage";

@Injectable({
  providedIn: 'root'
})
export class VoyageService {

  constructor(
    private httpClient:HttpClient
  ) {

  }

  apiUrl: string = environement.apiUrl + "voyages"

  getAll():Observable<Voyage[]>{
    return this.httpClient.get<Voyage[]>(this.apiUrl)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  getOne(id: number):Observable<Voyage>{
    return this.httpClient.get<Voyage>(this.apiUrl + "/" + id)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      )
  }

  errorHandler(error: any){
    let errorMessage = "";
    if(error.error instanceof ErrorEvent){
      errorMessage =error.error.message;
    }else {
      errorMessage = `Error Code ${error.status}\nMessage : ${error.message}`
    }
    window.alert(errorMessage)
    return throwError(errorMessage)
  }

  delete(id: number):Observable<Voyage>{
    return this.httpClient.delete(this.apiUrl + "/"+ id).pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  edit(voyage?: Voyage, id?: number ):Observable<Voyage>{
    return this.httpClient.put(this.apiUrl + "/" + id,voyage).pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  add(voyage:Voyage):Observable<Voyage>{
    return  this.httpClient.post<Voyage>(this.apiUrl,voyage).pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }



}
