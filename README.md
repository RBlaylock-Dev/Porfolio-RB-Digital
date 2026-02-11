# Portfolio RB Digital

A production-ready Next.js portfolio application.

## Tech Stack

- **Frontend**: Next.js 15 (App Router)
- **React**: React 19
- **Styling**: Tailwind CSS
- **Components**: Radix UI / Shadcn UI
- **Deployment**: Dockerized

## Getting Started

### Prerequisites

- Node.js 20+
- Docker (optional)

### Development

Use the provided `Makefile` for a standardized workflow:

1. **Install Dependencies**:

   ```bash
   make install
   ```

2. **Run Local Development**:

   ```bash
   make dev
   ```

3. **Build for Production**:
   ```bash
   make build
   ```

### Docker

To run the application in a container:

```bash
make docker-dev
```

## Maintenance

- **Security**: Regularly run `npm audit` to check for vulnerabilities.
- **Linting**: Run `make lint` to ensure code quality.
