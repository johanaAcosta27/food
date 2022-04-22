import { render, screen } from '@testing-library/react';
import App from './App';
import RecipeCreate from '../../client/src/components/RecipeCreate/RecipeCreate';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
  
  describe('<Form /> RecipeCreate', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = RecipeCreate(<RecipeCreate />);
    });
    it('El form debe tener un label que diga: "Nombre:"', () => {
        const { container } = render(<RecipeCreate />)
        const element = container.querySelectorAll('label')[0]
        expect(element.innerHTML).toBe('title:');
    });
  
    it('El form debe tener un label que diga: "Comentario"', () => {
      const { container } = render(<RecipeCreate />)
      const element = container.querySelectorAll('label')[1]
      expect(element.innerHTML).toBe('summary:');
    });
  
    it('El form debe tener un input con name "Nombre" y type "text"', () => {
      const { container } = render(<RecipeCreate />)
      const element = container.querySelectorAll('input')[0]
      expect(element.type).toBe('text');
      expect(element.name).toBe('title');
    });
  
    it('El form debe tener un input con name "Comentario" y type "text"', () => {
      const { container } = render(<RecipeCreate />)
      const element = container.querySelectorAll('input')[1]
      expect(element.type).toBe('text');
      expect(element.name).toBe('summary');
    });
  
  
   it('El form debe tener un label que diga: "Puntuacion:"', () => {
      const { container } = render(<RecipeCreate />)
      const element = container.querySelectorAll('label')[0]
      expect(element.innerHTML).toBe('spoonacularScore:');
  });
  
  it('El form debe tener un label que diga: "Puntuacion Saludable"', () => {
    const { container } = render(<RecipeCreate />)
    const element = container.querySelectorAll('label')[1]
    expect(element.innerHTML).toBe('healthScore:');
  });
  
  it('El form debe tener un input con name "Puntuacion" y type "text"', () => {
    const { container } = render(<RecipeCreate />)
    const element = container.querySelectorAll('input')[0]
    expect(element.type).toBe('text');
    expect(element.name).toBe('spoonacularScore');
  });
  
  it('El form debe tener un input con name "Puntuacion Saludable" y type "text"', () => {
    const { container } = render(<RecipeCreate />)
    const element = container.querySelectorAll('input')[1]
    expect(element.type).toBe('text');
    expect(element.name).toBe('healthScore');
  })  
  });
