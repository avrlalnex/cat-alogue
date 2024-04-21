import { it, expect, describe } from 'vitest';
import SignUp from '../Pages/SignUp/SignUpForm'
import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/vitest';

describe('Sign up', () => {
    it('should load form inputs', () => {
        render(<SignUp/>)

        const inputs = screen.getAllByRole("input");
        inputs.map((form)=>{
            expect(form).toBeVisible();
        });

        screen.debug();
    });
    it('should require input text', () => {
        render(<SignUp/>);

        const forms = screen.getAllByRole("input");
        forms.pop()
        forms.map((form)=>{
            expect(form).toBeRequired();
        });
    });
})