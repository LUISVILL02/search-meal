import { fireEvent, render, screen } from '@testing-library/react';
import { Mealcard } from './MealCard';
import { MemoryRouter, Route, Routes } from 'react-router';


describe("meal", () => {
    const mockMeal = {
        idMeal: '123',
        meal: 'Pizza',
        mealThumb: 'https://www.themealdb.com/images/media/meals/stpuws1511191310.jpg',
    };
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<Mealcard meal={mockMeal} />} />
                    <Route path="/meal/:idMeal" element={<div>Página de la comida</div>} />
                </Routes>
            </MemoryRouter>
        );
    })
    test("Comprobar que la terjeta se creó", () =>{
        expect(screen.getByText('Pizza')).toBeInTheDocument();
    })

    test("Comprobar que la tarjeta se cree bien", () => {
        // Verifica que la imagen esté en el documento y tenga los atributos correctos
        const image = screen.getByRole('img');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', mockMeal.mealThumb);
        expect(image).toHaveAttribute('alt', mockMeal.meal);

    })

    test("Renderiza el enlace con la URL correcta", () => {
        const link = screen.getByRole('link');
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', `/meal/${mockMeal.idMeal}`); 
    });

    test("Navega a la URL correcta al hacer clic en el enlace", () => {
        const link = screen.getByRole('link');
        fireEvent.click(link);
        expect(screen.getByText('Página de la comida')).toBeInTheDocument();
    })
})