# Terminal Portfolio

> A terminal-style portfolio built with React and Next.js.

This is an interactive portfolio designed to feel like a real terminal rather than a traditional personal website.

## About

This app is a way to get to know me better through a command-line interface.

Instead of navigating through traditional pages, you can use commands to explore my:

* Profile
* Experience
* Skills
* Projects
* Education
* Contact information

Try typing:

```bash
help
```

to see the available commands.

## Tech Stack

* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**

## Features

* Interactive terminal interface
* Command history
* Custom terminal commands
* Keyboard navigation
* Internationalization
* Responsive design
* GitHub / LinkedIn / Email links
* Terminal-style UI and animations

## Getting Started

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Project Structure

```text
app/
├── ui/
│   └── terminal/
│       ├── Terminal.tsx
│       ├── TerminalBody.tsx
│       ├── TerminalHeader.tsx
│       └── Prompt.tsx
│
├── commands/
│   └── ...
│
├── i18n/
│   └── ...
│
└── page.tsx
```

## Commands

The terminal supports commands for exploring different parts of the portfolio.

```bash
help       # Show available commands
about      # About me
skills     # Technical skills
projects   # Projects
experience # Professional experience
education  # Education
contact    # Contact information
clear      # Clear the terminal
```

Run `help` inside the terminal to see the current list of available commands.

## Why a Terminal?

Most portfolios use the same structure: a landing page, navigation bar, project cards, and a contact section.

I wanted to build something different.

The terminal interface turns the portfolio itself into a small software project and gives visitors an opportunity to interact with it instead of simply reading a page.

## Development

The project is built with a component-based architecture and TypeScript.

The terminal separates:

* UI rendering
* Command execution
* Terminal state
* Output history
* Internationalization

This makes it possible to add new commands without coupling them directly to the terminal UI.

## License

This project is for personal portfolio purposes.
