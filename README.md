# 🌟 Dockerized VueJS + ExpressJS 🐋🌟

[![License](https://img.shields.io/badge/license-GNU-blue.svg)](https://github.com/Azshurith/Dockerized-Laravel-Environment-Artisan/blob/main/LICENSE)

This repository contains a Docker environment for Vue.js applications utilizing Express.js for streamlined development and deployment.

## 🛠️ Makefile Commands

```makefile
project_start        Starts the Project
project_stop         Stops the Project
```

## 📝 Environment Variables (.env)

Ensure to set up your environment variables in the .env file.

```dotenv
# Docker Project
PROJECT_NAME=vueexpress
PROJECT_VERSION=1.0

# MariaDB Configurations
MARIADB_CONNECTION=mysql
MARIADB_HOST=host.docker.internal
MARIADB_PORT=3306
MARIADB_DATABASE=maria
MARIADB_USERNAME=maria
MARIADB_PASSWORD=maria
MARIADB_DOCKERFILE=.docker/MariaDB

# PhpMyAdmin Configurations
PHPMYADMIN_DOCKERFILE=.docker/PhpMyAdmin
PHPMYADMIN_PORT=9090
PHPMYADMIN_PORT_MAP=80
PHPMYADMIN_PMA_HOST=MariaDB

# Node Configurations
NODE_DOCKERFILE=.docker/Node
NODE_PORT=9091
NODE_DIRECTORY=./Node
NODE_WORK_DIRECTORY=/var/node
```
## 🚀 Getting Started

### Prerequisites 🛠️

- Docker: Install Docker on your system if you haven't already. You can download it [here](https://www.docker.com/get-started).

### Installation 📦

  **Setting up Laravel from your Git Repository**
  1. Set up your environment variables in the .env file.
  2. Run `make project_start` to start the Docker environment.
  3. Access your PhpMyAdmin at http://localhost:9090/.
  4. Access your VueJS Application at http://localhost:9091/.

## Contributing 🤝

Contributions are welcome! If you'd like to contribute to this project, please follow the [Contributing Guidelines](CONTRIBUTING.md).

## License 📝

This project is licensed under the GNU GENERAL PUBLIC LICENSE - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏

Special thanks to the open-source community for their valuable contributions and inspiration.

## Contact 📧

For questions or feedback, please feel free to reach out:

- GitHub: [Devitrax](https://github.com/Azshurith)

<p align="center">
  Made with ❤️ by Devitrax
</p>
