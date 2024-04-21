import { it, expect, describe } from 'vitest';
import Header from '../Components/Header.jsx';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';


    describe('Header', () => {
        it('render logo', () => {
            render(<Header/>)
            const logo = screen.getByRole("img");
            expect(logo).toBeVisible();
        });
        it('render header with clickable navigation', () => {
            render(<Header/>)
            const home = screen.getByText("Home");
            expect(home).toHaveRole('link');

            const cat_page = screen.getByText("Cats");
            expect(cat_page).toHaveRole('link');

            const login = screen.getByText("Login");
            expect(login).toHaveRole('button');
        })
    })

