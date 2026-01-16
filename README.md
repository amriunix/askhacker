# AskHacker - Cybersecurity Cheatsheets

[![love](https://badgen.net/badge/make%20with/love/pink)](#)
[![License](https://badgen.net/badge/license/MIT/blue)](https://github.com/amriunix/askhacker/blob/main/LICENSE)
[![Follow us on Twitter](https://img.shields.io/twitter/follow/amriunix?style=social)](https://twitter.com/amriunix)

Welcome to **AskHacker**, a community-driven repository of cybersecurity cheat sheets. Whether you're a seasoned security professional, a penetration tester, a CTF player, or someone stepping into the world of cybersecurity, **AskHacker** is your go-to resource for quick, accessible, and reliable security references.

**Website:** [https://askhacker.com](https://askhacker.com)

## Mission

Our mission is to provide a comprehensive and ever-evolving collection of cheat sheets covering a wide array of cybersecurity topics, including:

- Penetration testing tools and techniques
- Web application security
- Network security and reconnaissance
- Digital forensics and incident response
- Cryptography and encryption
- Malware analysis
- Security tools and utilities
- Linux commands for security professionals

## Features

- **Cybersecurity Focus**: Cheat sheets tailored for security professionals and enthusiasts
- **Community-Driven**: Powered by contributions from security professionals worldwide
- **Open Source**: Built on an open-source framework for transparency and continuous improvement
- **Quick Reference**: Fast access to commands, techniques, and methodologies
- **Dark Mode**: Easy on the eyes during those late-night hacking sessions

## Cheat Sheet Categories

AskHacker organizes cheat sheets into the following categories:

- **Penetration Testing** - Tools, techniques, and methodologies for ethical hacking
- **Web Security** - OWASP vulnerabilities, injection attacks, XSS, CSRF, and more
- **Network Security** - Scanning, enumeration, sniffing, and network attacks
- **Forensics** - Digital forensics tools and investigation techniques
- **Cryptography** - Encryption, hashing, and cryptographic attacks
- **Malware Analysis** - Static and dynamic analysis techniques
- **Linux Command** - Essential command-line tools for security work
- **Toolkit** - Quick references for popular security tools
- **Programming** - Languages commonly used in security (Python, Bash, Go, etc.)

## Directory Structure

```
.
├── source
│   ├── _posts   # Cheat sheet source files (Markdown)
│   │   ├── bash.md
│   │   ├── nc.md      # => https://askhacker.com/nc
│   │   ├── curl.md
│   │   ├── ssh.md     # => https://askhacker.com/ssh
│   │   ├── ...
│   └── widget   # Widget files
│       └── chmod.html
├── public       # Distribution files (generated)
├── _config.yml
├── gulpfile.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── themes
    └── coo      # Theme files
```

## Contributing

We welcome contributions from the cybersecurity community! Whether you want to add a new cheat sheet, improve an existing one, or fix errors, your help is appreciated.

### How to Contribute

1. Fork the repository
2. Clone your fork: `git clone https://github.com/amriunix/askhacker.git`
3. Install dependencies: `pnpm install`
4. Start the dev server: `pnpm run dev`
5. Create or edit cheat sheets in `source/_posts/`
6. Submit a pull request

### Creating a Cheat Sheet

Create a new markdown file in `source/_posts/{filename}.md` with this front matter:

```markdown
---
title: Tool Name
date: 2024-01-01 00:00:00
icon: icon-style
background: bg-emerald-600
tags:
  - security
  - hacking
categories:
  - Penetration Testing
intro: A quick reference cheat sheet for [Tool Name].
plugins:
  - copyCode
---
```

For detailed formatting guidelines, see [https://askhacker.com/quickref](https://askhacker.com/quickref).

## Local Development

```bash
# Install dependencies
pnpm install

# Start development server (http://127.0.0.1:4000)
pnpm run dev

# Build for production
pnpm run build
```

## Acknowledgments

Thanks to all contributors who help make this project better. Special thanks to the open-source community and the original [Fechin/reference](https://github.com/Fechin/reference) project that inspired this cybersecurity-focused fork.

<a href="https://github.com/amriunix/askhacker/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=amriunix/askhacker" />
</a>

## License

This project is licensed under the [MIT License](https://github.com/amriunix/askhacker/blob/main/LICENSE).

---

**Happy Hacking!**
