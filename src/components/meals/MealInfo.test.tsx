import { render, screen } from '@testing-library/react';
import { MealInfo } from './MealInfo';
import { MemoryRouter } from 'react-router';
import { useMealById } from '../../hooks/useMealById';

vi.mock('../../hooks/useMealById');

describe("MealInfo", () => {
    const mockMeal = {
        mealThumb: 'https://www.themealdb.com/images/media/meals/stpuws1511191310.jpg',
        meal: 'Pizza',
        category: 'Italian',
        area: 'Italy',
        instructions: 'Haz la masa, agrega los ingredientes y hornea.',
        ingredients: ['Tomato', 'Cheese', 'Dough'],
        measures: ['2 cups', '1 cup', '500g'],
        youtube: 'https://www.youtube.com/watch?v=abc123',
    };

    beforeEach(() => {
        vi.clearAllMocks();
    });

    test("Muestra el esqueleto (SkeletonLoading) cuando está cargando", () => {
        (useMealById as any).mockReturnValue({
            meal: null,
            loading: true,
        });

        render(
            <MemoryRouter>
                <MealInfo />
            </MemoryRouter>
        );
        expect(screen.queryByText('Pizza')).not.toBeInTheDocument();
        expect(screen.queryByText('Italian | Italy')).not.toBeInTheDocument();
    });

    test("Muestra la información de la comida cuando no está cargando", () => {
        (useMealById as any).mockReturnValue({
            meal: mockMeal,
            loading: false,
        });

        render(
            <MemoryRouter>
                <MealInfo />
            </MemoryRouter>
        );

        expect(screen.getByText('Pizza')).toBeInTheDocument();
        expect(screen.getByText('Italian | Italy')).toBeInTheDocument();
        expect(screen.getByText('Haz la masa, agrega los ingredientes y hornea.')).toBeInTheDocument();
        expect(screen.getByText('Tomato - 2 cups')).toBeInTheDocument();
        expect(screen.getByText('Cheese - 1 cup')).toBeInTheDocument();
        expect(screen.getByText('Dough - 500g')).toBeInTheDocument();
    });

    test("Muestra el video de YouTube si está disponible", () => {
        (useMealById as any).mockReturnValue({
            meal: mockMeal,
            loading: false,
        });

        render(
            <MemoryRouter>
                <MealInfo />
            </MemoryRouter>
        );

        const iframe = screen.getByTitle('Pizza');
        expect(iframe).toBeInTheDocument();
        expect(iframe).toHaveAttribute('src', 'https://www.youtube.com/embed/abc123');
    });
});