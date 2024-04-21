import { it, expect, describe } from 'vitest';
import CatProfile from '../Pages/Cats/CatProfile';
import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/vitest';

describe('whole page', () => {
    it('should load page elements', () => {
        render(<CatProfile/>)

        const header = screen.getByLabelText("header")
        expect(header).toBeVisible();

        const content = screen.getByLabelText("content")
        expect(content).toBeVisible();

        const footer = screen.getByLabelText("footer")
        expect(footer).toBeVisible();
    });
    it('should load cat picture', () => {
        render(<CatProfile/>)

        const pic = screen.getByLabelText('cat-pic')
        expect(pic).toBeVisible();
    })
})