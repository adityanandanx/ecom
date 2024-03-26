## Contributing to E-Commerce Nextjs + Express + Clerk

Thank you for considering contributing to our project! Whether you're reporting bugs, proposing new features, or submitting pull requests, we appreciate your efforts to help improve this project. To ensure a smooth collaboration process, please take a moment to review the following guidelines.

## Code of Conduct

Please note that this project adheres to the [Contributor Covenant Code of Conduct](../CODE_OF_CONDUCT.md). By participating in this project, you are expected to uphold this code. Please report unacceptable behavior to project maintainers.

## Branching and Commits

- **Branch Names:** Use descriptive and lowercase branch names. Separate words with hyphens (e.g., feat/add-authentication, fix/fix-cart-bug).

- **Commits:** Write clear, concise, and meaningful commit messages. Start the message with a capitalized verb in the imperative mood (e.g., "fix: issue with authentication").

## Development Setup

To set up your development environment, follow these steps:

- Clone the repository: `git clone https://github.com/imadi-arch/ecom.git`
- Install dependencies: `pnpm install`
- Add environment variables

  - for server:

    - copy the [`server/.env.example`](../server/.env.example) file to `server/.env`
    - fill in the appropriate variables
    - for `TEST_USER_TOKEN` and `TEST_ADMIN_TOKEN`, first add a custom session token-
      ```json
      {
        "role": "{{user.public_metadata.role}}"
      }
      ```
    - then create 2 users like `admin@ecom.com` and `test.user@ecom.com` and add public metadata `{ "role": "admin" }` to `admin@ecom.com` user.
    - then follow [this blog post](https://dev.to/mad/api-testing-with-clerk-and-express-2i56) while making sure to paste in the same custom session token in the claims field while creating a testing jwt template
    - paste the tokens in the appropriate variables

- Start the development servers:
  Next.js server: `pnpm dev:client`
  Express server: `pnpm dev:server`

## Testing

We use Jest for writing unit tests. To run the tests, execute the following commands:

Next.js client tests: `pnpm test:client`
Express server tests: `pnpm test:server`
Run all tests: `pnpm test`

## Reporting Issues

If you encounter any issues or have suggestions for improvements, please create a new issue on GitHub. When reporting issues, provide detailed information, including steps to reproduce, expected behavior, and actual behavior.

## Pull Requests

We welcome contributions via pull requests! Before submitting a pull request, please ensure the following:

- Your code adheres to the project's coding standards and conventions.
  Write tests to cover your changes whenever applicable.
  Update documentation, including README.md, if necessary.
  Once your pull request is submitted, our team will review it. Please be patient, as it may take some time to provide feedback.

- Thank you for contributing to E-Commerce Nextjs + Express + Clerk! Your involvement helps make this project better for everyone. If you have any questions, feel free to reach out to project maintainers.
