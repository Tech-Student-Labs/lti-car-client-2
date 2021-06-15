import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Vehicle from '../../../../models/vehicle';
import { VehicleSubmissionService } from '../../services/vehicle-submission.service';
import { resolve } from '@angular/compiler-cli/src/ngtsc/file_system';
import { errors } from 'puppeteer';
import VehicleImage from '../../../../models/vehicle-image';

@Component({
  selector: 'app-submission-form',
  templateUrl: './submission-form.component.html',
  styleUrls: ['./submission-form.component.css'],
})
export class SubmissionFormComponent implements OnInit {
  submissionForm: FormGroup;
  vehicle: Vehicle;

  constructor(
    private formBuilder: FormBuilder,
    private submissionService: VehicleSubmissionService,
  ) {}

  ngOnInit(): void {
    this.submissionForm = this.formBuilder.group({
      make: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required],
      vin: ['', Validators.required],
      miles: ['', Validators.required],
      color: ['', Validators.required],
      images: ['', Validators.required],
      price: ['', Validators.required],
    });
    this.vehicle = new Vehicle();
  }

  public onSubmit(form: any): void {
    if (form.valid === false) {
      alert('Please fill out all vehicle information.');
    }
    const formData = form.value;
    this.vehicle.make = formData.make;
    this.vehicle.model = formData.model;
    this.vehicle.year = +formData.year;
    this.vehicle.vin = formData.vin;
    this.vehicle.miles = formData.miles;
    this.vehicle.color = formData.color;
    this.vehicle.sellingPrice = formData.price;
  }

  processImages = (imagesInput: FileList) => {
    Array.from(imagesInput).forEach((file) => {
      const vehicleImage = new VehicleImage();
      this.imageToBase64(file).then((data: string) => {
        vehicleImage.imageData = data;
        this.vehicle.vehicleImages.push(vehicleImage);
        console.log(vehicleImage.imageData);
      });
    });
  };

  imageToBase64 = (file: File) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
}
