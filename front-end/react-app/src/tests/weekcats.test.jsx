import { it, expect, describe } from 'vitest';
import WeeklyCats from '../Components/WeeklyCats';
import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/vitest';

describe('Cats of the Week', () => {
    it('load catboxes', () => {
        render(<WeeklyCats/>)
        
        const boxes = screen.getAllByLabelText("catbox")
        boxes.map((box)=>{
            expect(box).toBeVisible();
        })

        screen.debug()
    })
    it('load feature styles', () => {
        render(<WeeklyCats/>)
        
        const boxes = screen.getAllByLabelText("catbox")
        boxes.map((box)=>{
            expect(box).toHaveClass('bg-cat-secondary');
        })

        screen.debug()
        
    })
})