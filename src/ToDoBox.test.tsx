import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ToDoBox from "./components/ToDoBox";

describe("ToDoBox", () => {
  test("allows users to add items to the list", () => {
    render(<ToDoBox />);

    fireEvent.change(screen.getByPlaceholderText("Что вы хотите сделать?"), {
      target: { value: "Learn testing" },
    });

    fireEvent.click(screen.getByText("Добавить"));

    expect(screen.getByText("Learn testing")).toBeInTheDocument();
  });

  test("allows users to toggle the status of a todo item", async () => {
    render(<ToDoBox />);

    fireEvent.change(screen.getByPlaceholderText("Что вы хотите сделать?"), {
      target: { value: "Learn testing" },
    });

    fireEvent.click(screen.getByText("Добавить"));

    fireEvent.click(screen.getByText("Learn testing"));
  });
});
