import { it, expect, describe } from 'vitest';
import CatPage from '../Pages/Cats/CatsPage';
import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/vitest';

describe('whole page', () => {
    it('should load page elements', () => {
        render(<CatPage/>)

        const header = screen.getByLabelText("header")
        expect(header).toBeVisible();

        const footer = screen.getByLabelText("footer")
        expect(footer).toBeVisible();

        const banner = screen.getByLabelText("banner")
        expect(banner).toBeVisible();

        const weeklycats = screen.getByLabelText("weekly-cats")
        expect(weeklycats).toBeVisible();

        const filters = screen.getAllByLabelText("dropdown")
        filters.map((filter)=>{
           expect(filter).toBeVisible(); 
        })

        const gallery = screen.getByLabelText("gallery")
        expect(gallery).toBeVisible();
    });
    it('should have different gallery layout in desktop and mobile screen size', () => {
        render(<CatPage/>)

        const content = screen.getByLabelText("content");
        expect(content).toHaveClass("lg:flex-row sm:flex-col")
    })
})