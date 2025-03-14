import { render, screen, fireEvent } from '@testing-library/react';
import { Search } from './Search';
import { useMealStore } from '../../hooks/useMeal';
import { describe, test, expect, vi, beforeEach } from 'vitest';


vi.mock('../../hooks/useMeal', () => ({
    useMealStore: vi.fn(() => ({
        getMeal: vi.fn(),
        getMealByName: vi.fn(() => Promise.resolve()),
        getMealByPIngredient: vi.fn(() => Promise.resolve()),
    })),
}));

vi.mock('../../services/translaText', () => ({
    translateText: vi.fn(() => Promise.resolve('Pizza')),
}));

describe("Search", () => {
    const mockGetMeal = vi.fn();
    const mockGetMealByName = vi.fn(() => Promise.resolve());
    const mockGetMealByPIngredient = vi.fn(() => Promise.resolve());

    beforeEach(() => {
        vi.clearAllMocks();

        (useMealStore as any).mockReturnValue({
            getMeal: mockGetMeal,
            getMealByName: mockGetMealByName,
            getMealByPIngredient: mockGetMealByPIngredient,
        });
    });

    test("Actualiza el estado search cuando el usuario escribe en el input", () => {
        render(<Search />);
        const input = screen.getByPlaceholderText('Buscar...');
        fireEvent.change(input, { target: { value: 'Pizza' } });
        expect(input).toHaveValue('Pizza');
    });

    test("Llama a getMeal cuando el input está vacío", () => {
        render(<Search />);

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(mockGetMeal).toHaveBeenCalled();
    });
    
});