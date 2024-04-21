import { it, expect, describe } from 'vitest';
import Profile from '../Pages/Account/AccountProfile'
import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/vitest';

describe('Profile Page', () => {
    it('should load elements', () => {
        render(<Profile/>)

        const header = screen.getByLabelText("header")
        expect(header).toBeVisible();

        const sidebar = screen.getByLabelText("sidebar")
        expect(sidebar).toBeVisible();

        const content = screen.getByLabelText("details")
        expect(content).toBeVisible();

        const footer = screen.getByLabelText("footer")
        expect(footer).toBeVisible();
    });
    it('should change layout in desktop and mobile screens',()=>{
        render(<Profile/>)

        const content = screen.getByLabelText("content")
        expect(content).toHaveClass("lg:flex-row sm:flex-col-reverse")
    })
})