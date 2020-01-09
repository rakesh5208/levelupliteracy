import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = '/assets'
  constructor(private http:HttpClient) { }
  /**
   * Contact information
   */
  public getContacts(){
    return this.http.get(`${this.baseUrl}/contact.json`);
  }
  /**
   * Course details
   */
  public getCourses(){
    return this.http.get<Course[]>(`${this.baseUrl}/courses.json`);
  }
  /**
   * Get student testinomails
   */
  public getStudentTestinomials(){
    return this.http.get<Student[]>(`${this.baseUrl}/testiniomials.json`);
  }
  /**
   * get marquee notifiaiton
   */
  public getNotifications(){
    return this.http.get<Student[]>(`${this.baseUrl}/notifications.json`);
  }
}
