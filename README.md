# Medium Clone with NEXT.JS, TypeScript, Sanity CMS, React, Tailwind CSS, and ISR

![image](https://github.com/CodeKaito/Nextjs-Medium/assets/57111980/aef07075-be3a-48aa-84ce-7a5e3a638566)

This repository contains the code and instructions for creating a Medium clone using modern web technologies. We'll be using NEXT.JS, TypeScript, Sanity CMS, React, Tailwind CSS, and Incremental Static Regeneration (ISR) to build a feature-rich blogging platform.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Development](#development)
- [Production](#production)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you get started, make sure you have the following tools and software installed on your computer:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Sanity CLI](https://www.sanity.io/docs/getting-started-with-sanity-cli)
- [Git](https://git-scm.com/)

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/codekaito/nextjs-medium.git
   cd medium-clone
   ```

2. Install project dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and configure your environment variables:

   ```env
   SANITY_PROJECT_ID=your-sanity-project-id
   SANITY_DATASET=your-sanity-dataset-name
   ```

4. Set up your Sanity CMS project by running:

   ```bash
   sanity init
   ```

   Follow the prompts to create a new Sanity project or connect to an existing one.

5. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open your browser and go to `http://localhost:3000` to see your Medium clone in action.

## Project Structure

The project structure is organized as follows:

- `components/`: React components used throughout the application.
- `pages/`: Next.js pages for routing.
- `public/`: Static assets like images, fonts, and icons.
- `styles/`: CSS and SCSS stylesheets.
- `lib/`: Helper functions and utilities.
- `sanity/`: Configuration for Sanity CMS.
- `schema/`: Sanity schema definitions.
- `studio/`: Sanity Studio configuration.

## Configuration

You can customize the project by modifying the configuration files:

- `sanity/sanity.json`: Sanity CMS configuration.
- `schema/`: Define your content schema in Sanity.
- `tailwind.config.js`: Tailwind CSS configuration.
- `next.config.js`: Next.js configuration, including ISR settings.

## Development

During development, you can run the application with hot-reloading using:

```bash
npm run dev
# or
yarn dev
```

This will start the development server, and you can view your changes in real-time.

## Production

To build the production version of your Medium clone, run:

```bash
npm run build
# or
yarn build
```

This command will generate a production-ready build of your application.

## Deployment

You can deploy your Medium clone to your preferred hosting platform. Here are some common options:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)

Follow the deployment instructions for your chosen platform to get your Medium clone live on the internet.

## Contributing

Contributions to this project are welcome! If you find issues or have ideas for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Happy coding! Enjoy building your Medium clone with NEXT.JS, TypeScript, Sanity CMS, React, Tailwind CSS, and ISR. If you have any questions or need further assistance, feel free to reach out.
