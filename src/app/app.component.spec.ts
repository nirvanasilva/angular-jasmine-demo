import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let component: AppComponent;

  beforeEach(() => {
    component = new AppComponent();
  });

  it('should initialize the names array', () => {
    expect(component.names).not.toBeDefined();

    component.ngOnInit();

    expect(component.names).toBeDefined();
  });

  it('should add a name to array', () => {
    component.names = [];
    component.onAddNewName('name');

    expect(component.names.length).toEqual(1);
  });

});
