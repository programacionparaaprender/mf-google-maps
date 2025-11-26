import { Component } from '@angular/core';
import {GoogleMap, MapMarker, MapPolygon} from '@angular/google-maps';

@Component({
  selector: 'app-geocerca-google',
  standalone: true,
  imports: [GoogleMap, MapMarker, MapPolygon],
  templateUrl: './geocerca-google.component.html',
  styleUrls: ['./geocerca-google.component.css']
})
export class GeocercaGoogleComponent {
  paths:any[] = []
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];
  poligonos: google.maps.LatLngLiteral[] = [];

  addMarker(event: google.maps.MapMouseEvent) {
    if (event?.latLng) {
      this.paths.push({
        lat:event.latLng.lat(),
        lng:event.latLng.lng()
      }); 
      this.markerPositions.push(event.latLng.toJSON());
      this.paths = Object.values(this.markerPositions);
    }
    
  }
  limpiar(){
    this.markerPositions = [];
    this.paths = [];
  }
}
