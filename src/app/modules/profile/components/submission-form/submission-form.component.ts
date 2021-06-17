import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Vehicle from '../../../../models/vehicle';
import { VehicleService } from '../../services/vehicle-service';
import VehicleImage from '../../../../models/vehicle-image';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submission-form',
  templateUrl: './submission-form.component.html',
  styleUrls: ['./submission-form.component.css'],
})
export class SubmissionFormComponent implements OnInit {
  submissionForm: FormGroup;
  vehicle: Vehicle;
  loading: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private submissionService: VehicleService,
    private router: Router,
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
    this.loading = false;
  }

  public onSubmit(form: any): boolean {
    if (form.valid === false) {
      alert('Please fill out all vehicle information.');
      return false;
    }
    this.loading = true;
    const formData = form.value;
    this.vehicle.make = formData.make;
    this.vehicle.model = formData.model;
    this.vehicle.year = +formData.year;
    this.vehicle.vin = formData.vin;
    this.vehicle.miles = +formData.miles;
    this.vehicle.color = formData.color;
    this.vehicle.sellingPrice = +formData.price;
    const redirectUri = this.submissionService.addSubmission(
      this.vehicle,
    );
    this.router.navigate([redirectUri]).then((redirect) => {
      if (redirect === true) {
        // pass
      } else {
        this.loading = false;
        form.reset();
      }
    });
    return true;
  }

  processImages = (imagesInput: FileList) => {
    this.vehicle.vehicleImages = [];
    Array.from(imagesInput).forEach((file) => {
      const vehicleImage = new VehicleImage();
      this.submissionService
        .imageToBase64(file)
        .then((data: string) => {
          vehicleImage.imageData = data;
          this.vehicle.vehicleImages.push(vehicleImage);
        });
    });
  };
}
