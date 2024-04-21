import { it, expect, describe } from 'vitest';
import CatGallery from '../Components/CatGallery';
import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/vitest'

describe('Cat Gallery', () => {
    it('load catboxes', () => {
        render(<CatGallery profile="0"/>)
        
        const boxes = screen.getAllByLabelText("catbox")
        boxes.map((box)=>{
            expect(box).toBeVisible();
        })
    })
    it('load grid gallery', () => {
        render(<CatGallery profile="0"/>)
        
        const gallery = screen.getByLabelText("gallery")
        expect(gallery).toHaveClass("grid")
        
    })
})