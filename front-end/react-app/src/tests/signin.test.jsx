import { it, expect, describe } from 'vitest';
import LoginForm from '../Pages/Login/LoginForm';
import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/vitest';

describe('Login', () => {
    it('should load input forms', () => {
        render(<LoginForm/>)

        const inputs = screen.getAllByRole("input");
        inputs.map((form)=>{
            expect(form).toBeVisible();
        });

        screen.debug();

    });
    it('should require input text', () => {
        render(<LoginForm/>);

        const forms = screen.getAllByRole("input");
        forms.pop()
        forms.map((form)=>{
            expect(form).toBeRequired();
        });
    });
})