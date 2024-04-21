import { it, expect, describe } from 'vitest';
import Sidebar from '../Components/AccountSidebar'
import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/vitest';

describe('Sidebar', () => {
    it('should load menu items', () => {
        render(<Sidebar/>);
        
        const content = screen.getAllByLabelText("button")
        content.map((button)=>{
            expect(button).toBeVisible();
        })
    });
    it('should have clickable navigation',()=>{
        render(<Sidebar/>);
        
        const content = screen.getAllByLabelText("button")
        content.map((button)=>{
            expect(button).toHaveRole('link');
        })
    })
})