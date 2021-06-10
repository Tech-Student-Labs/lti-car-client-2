import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleListComponent } from './vehicle-list.component';
import { InventoryService } from '../../services/inventory.service';
import { InventoryServiceAbstract } from '../../services/InventoryAbstract';

describe('VehicleListComponent', () => {
  let component: VehicleListComponent;
  let fixture: ComponentFixture<VehicleListComponent>;
  let inventoryService: InventoryService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehicleListComponent],
      providers: [
        {
          provide: InventoryService,
          useClass: InventoryServiceAbstract,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleListComponent);
    component = fixture.componentInstance;
    inventoryService = TestBed.inject(InventoryService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all vehicle from service', () => {
    expect(component.vehicles.length).toEqual(4);
  });

  it('should create vehicle components for every vehicle in list', () => {
    expect(document.querySelectorAll('app-vehicle').length).toEqual(
      4,
    );
  });
});
