import { it, expect, describe } from 'vitest';
import Filter from '../Components/Filter';
import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/vitest'

describe('Filter', () => {
    it('load dropdown', () => {
        render(<Filter drop="1"/>)

        const drop = screen.getByLabelText("dropdown")
        expect(drop).toBeVisible()
    });
    it('load regular button', () => {
        render(<Filter drop="0"/>)

        const button = screen.getByLabelText("button")
        expect(button).toHaveRole('link')
    })
})