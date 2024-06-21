import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";
import { User } from "../../src/entities";

describe("UserAccount", () => {
  it("it should render userName", () => {
    const user: User = { id: 1, name: "Bablu" };
    render(<UserAccount user={user} />);

    expect(screen.getByText(user.name)).toBeInTheDocument();
  });

  it("it should render edit button if user is Admin.", () => {
    const user: User = { id: 1, name: "Bablu", isAdmin: true };
    render(<UserAccount user={user} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
  });

  it("it should not render edit button if user is not Admin.", () => {
    const user: User = { id: 1, name: "Bablu", isAdmin: false };
    render(<UserAccount user={user} />);
    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
  });
});
