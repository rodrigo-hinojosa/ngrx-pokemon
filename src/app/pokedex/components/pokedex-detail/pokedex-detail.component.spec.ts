import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexDetailComponent } from './pokedex-detail.component';

describe('PokedexDetailComponent', () => {
    let component: PokedexDetailComponent;
    let fixture: ComponentFixture<PokedexDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PokedexDetailComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PokedexDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
