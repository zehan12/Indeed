import { render, screen } from "@testing-library/react";
import Layout from "../components/Layout";

describe('Layout', () => {
    it('should have healine h1 Tailwind install', () => {
        render(<Layout />);
        expect(screen.getByText(/Layout/i)).toBeInTheDocument();
    })
})