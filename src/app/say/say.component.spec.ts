import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayComponent } from './say.component';

describe('SayComponent', () => {
  let component: SayComponent;

  beforeEach(() => {
    component = new SayComponent();
  });

  it('should save input name', () => {
    component.inputValue = 'test name';
    spyOn(component.nameUpdated, 'emit');
    spyOn(component, 'onClearName');

    component.onSaveName();

    expect(component.nameValue).toBe('test name');
    expect(component.nameUpdated.emit).toHaveBeenCalledTimes(1);
    expect(component.onClearName).toHaveBeenCalledTimes(1);
  });

  it('should clear input name', () => {
    component.inputValue = 'test name';

    component.onClearName();

    expect(component.inputValue).toBe('');
  });
});
