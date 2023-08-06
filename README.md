<!-- Title -->
<h1 align="center">
  mock-s3
</h1>

<!-- Description -->
<h4 align="center">
  Mock S3 server for test environments, based on <a href="https://github.com/jamhall/s3rver">s3rver</a>.
</h4>

<!-- Badges -->
<p align="center">
  <a href="https://github.com/devoxa/mock-s3/actions?query=branch%3Amaster+workflow%3A%22Continuous+Integration%22">
    <img
      src="https://img.shields.io/github/actions/workflow/status/devoxa/mock-s3/push.yml?branch=master&style=flat-square"
      alt="Build Status"
    />
  </a>
</p>

<!-- Quicklinks -->
<p align="center">
  <a href="#usage">Usage</a> •
  <a href="#contributors">Contributors</a> •
  <a href="#license">License</a>
</p>

<br>

## Usage

```bash
docker run -d --name mock-s3 -p 8092:8092 devoxa/mock-s3
```

- Endpoint: `http://localhost:8092`
- Region: `local`
- Access key: `S3RVER`
- Secret key: `S3RVER`
- Bucket: `default`
  - _Configurable via a comma-separated list of names in the `BUCKET_NAMES` environment variable._

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://www.david-reess.de"><img src="https://avatars3.githubusercontent.com/u/4615516?v=4?s=75" width="75px;" alt="David Reeß"/><br /><sub><b>David Reeß</b></sub></a><br /><a href="https://github.com/devoxa/mock-s3/commits?author=queicherius" title="Code">💻</a> <a href="https://github.com/devoxa/mock-s3/commits?author=queicherius" title="Documentation">📖</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!

## License

MIT
