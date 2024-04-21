import { it, expect, describe } from 'vitest';
import Catbox from '../Components/CatBox';
import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/vitest'


describe('CatBox', () => {
    
    it('should render cat box with the name and picture', () => {
        render(<Catbox name="Mocha" featured="0"/>);
        const cat_name = screen.getByRole("head");
        expect(cat_name).toBeVisible();

        const image = screen.getByRole("img",{name:"cat_pic"});
        expect(image).toBeVisible();

        screen.debug();
    });
    it('button routing to profile', () => {
        render(<Catbox name="Mocha" featured="0"/>);
        const learn = screen.getByLabelText("view_profile");
        expect(learn).toHaveAttribute('href','/cat/view');
        screen.debug();
    })
})