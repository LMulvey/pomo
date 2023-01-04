import * as React from "react";
import { render } from "@testing-library/react";
import { App } from "../App";
import { expect, test } from "vitest";

test("renders app", () => {
	const { getByText } = render(<App />);
	const headerElement = getByText(/hello/i);
	expect(headerElement).toBeDefined();
});
