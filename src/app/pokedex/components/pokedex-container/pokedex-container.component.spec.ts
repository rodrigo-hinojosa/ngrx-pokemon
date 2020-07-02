import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexContainerComponent } from './pokedex-container.component';

describe('PokedexContainerComponent', () => {
    let component: PokedexContainerComponent;
    let fixture: ComponentFixture<PokedexContainerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PokedexContainerComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PokedexContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
