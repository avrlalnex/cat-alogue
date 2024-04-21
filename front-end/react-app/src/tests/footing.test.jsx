import { it, expect, describe } from 'vitest';
import Footing from '../Components/Footing';
import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/vitest'

describe('Footer', () => {
    it('render logo', () => {
        render(<Footing/>)
        const logo = screen.getByLabelText('logo');
        expect(logo).toBeVisible();
    });
    it('clickable text navigation', () => {
        render(<Footing/>)
        const about = screen.getByText('About');
        expect(about).toBeVisible();
        const facebook = screen.getByText('Facebook');
        expect(facebook).toBeVisible();
        const instagram = screen.getByText('Instagram');
        expect(instagram).toBeVisible();
    });
})